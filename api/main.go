package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
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
	router.GET("/managementclusters", getManagementClusters)

	router.Run("localhost:5000")
}

func getTree(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, tree)
}

func getManagementClusters(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, overview)
}

var overview = map[string][]clusterOverview{
	"my-namespace": {
		clusterOverview{
			Name:     "my-test-cluster",
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
