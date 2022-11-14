package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

type resourceTree struct {
	Kind     string                    `json:"kind"`
	Name     string                    `json:"name"`
	Status   string                    `json:"status"`
	Children map[string][]resourceTree `json:"children"`
}

type clusterOverview struct {
	Name     string `json:"name"`
	Provider string `json:"provider"`
}

func main() {
	router := gin.Default()
	router.GET("/tree", getTree)
	router.GET("/resource", getResourceByName)
	router.GET("/managementclusters", getManagementClusters)

	address := goDotEnvVariable("BACKEND_ADDRESS")
	port := goDotEnvVariable("BACKEND_PORT")
	log.Printf("Starting backend on %s:%s", address, port)
	router.Run(address + ":" + port)
}

// use godot package to load/read the .env file and
// return the value of the key
func goDotEnvVariable(key string) string {

	// load .env file
	err := godotenv.Load("../.env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	return os.Getenv(key)
}

func getTree(c *gin.Context) {
	fmt.Println("Calling getTree()")

	treeFile, err := os.Open("data/tree.json")
	if err != nil {
		fmt.Println(err)
	}

	defer treeFile.Close()

	byteValue, err := ioutil.ReadAll(treeFile)
	if err != nil {
		fmt.Println(err)
	}
	c.Data(http.StatusOK, "application/json", byteValue)

	// c.IndentedJSON(http.StatusOK, tree)

}

func getManagementClusters(c *gin.Context) {
	fmt.Println("Calling getManagementClusters()")
	c.IndentedJSON(http.StatusOK, overview)
}

func getResourceByName(c *gin.Context) {
	fmt.Println("Calling getResourceByName()")
	name := c.Query("name")
	kind := c.Query("kind")

	fmt.Printf("Values are: name: %s, kind: %s\n", name, kind)

	crdFile, err := os.Open(fmt.Sprintf("data/%s_%s.json", kind, name))
	if err != nil {
		fmt.Println(err)
	}

	defer crdFile.Close()

	byteValue, err := ioutil.ReadAll(crdFile)
	if err != nil {
		fmt.Println(err)
	}
	c.Data(http.StatusOK, "application/json", byteValue)

	// c.String(http.StatusOK, string(byteValue))

	// // Loop over the list of albums, looking for
	// // an album whose ID value matches the parameter.
	// for _, r := range resources {
	// 	if r.Name == name {
	// 		c.IndentedJSON(http.StatusOK, r)
	// 		return
	// 	}
	// }
	// c.IndentedJSON(http.StatusNotFound, gin.H{"message": "album not found"})
}

var overview = map[string][]clusterOverview{
	"default": {
		clusterOverview{
			Name:     "default-20797",
			Provider: "azure",
		},
	},
	"my-namespace": {
		clusterOverview{
			Name:     "my-cluster",
			Provider: "azure",
		},
		clusterOverview{
			Name:     "my-second-cluster",
			Provider: "azure",
		},
	},
	"my-other-namespace": {
		clusterOverview{
			Name:     "my-other-cluster",
			Provider: "azure",
		},
	},
}

var tree = resourceTree{
	Kind:   "Cluster",
	Name:   "my-cluster",
	Status: "success",
	Children: map[string][]resourceTree{
		"Cluster Infrastructure": {clusterInfra},
		"Control Plane":          {kubeadmControlPlane},
		"Workers":                {machineDeployment, machinePool},
	},
}

var clusterInfra = resourceTree{
	Kind:     "AzureCluster",
	Name:     "my-azurecluster",
	Status:   "success",
	Children: map[string][]resourceTree{},
}

var kubeadmControlPlane = resourceTree{
	Kind:   "KubeadmControlPlane",
	Name:   "my-kcp",
	Status: "warning",
	Children: map[string][]resourceTree{
		"Machines": {machine1, machine2},
	},
}

var machineDeployment = resourceTree{
	Kind:   "MachineDeployment",
	Name:   "my-machinedeployment",
	Status: "success",
	Children: map[string][]resourceTree{
		"Machines": {machine1, machine2},
	},
}

var machinePool = resourceTree{
	Kind:   "MachinePool",
	Name:   "my-mp",
	Status: "error",
	Children: map[string][]resourceTree{
		"Machine Infrastructure": {azureMachinePool},
	},
}

var machine1 = resourceTree{
	Kind:     "Machine",
	Name:     "my-machine1",
	Status:   "success",
	Children: map[string][]resourceTree{},
}

var machine2 = resourceTree{
	Kind:     "Machine",
	Name:     "my-machine2",
	Status:   "success",
	Children: map[string][]resourceTree{},
}

var azureMachinePool = resourceTree{
	Kind:     "AzureMachinePool",
	Name:     "my-amp-0",
	Status:   "error",
	Children: map[string][]resourceTree{},
}

var resources = []resourceTree{tree, clusterInfra, kubeadmControlPlane, machineDeployment, machinePool, machine1, machine2, azureMachinePool}
