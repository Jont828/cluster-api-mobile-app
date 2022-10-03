package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// album represents data about a record album.
type album struct {
	ID     string  `json:"id"`
	Title  string  `json:"title"`
	Artist string  `json:"artist"`
	Price  float64 `json:"price"`
}

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
	router.GET("/albums", getAlbums)
	router.GET("/albums/:id", getAlbumByID)
	router.GET("/tree", getTree)
	router.GET("/managementclusters", getManagementClusters)
	router.POST("/albums", postAlbums)

	router.Run("localhost:5000")
}

func getTree(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, tree)
}

func getManagementClusters(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, overview)
}

// getAlbums responds with the list of all albums as JSON.
func getAlbums(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, albums)
}

// postAlbums adds an album from JSON received in the request body.
func postAlbums(c *gin.Context) {
	var newAlbum album

	// Call BindJSON to bind the received JSON to
	// newAlbum.
	if err := c.BindJSON(&newAlbum); err != nil {
		return
	}

	// Add the new album to the slice.
	albums = append(albums, newAlbum)
	c.IndentedJSON(http.StatusCreated, newAlbum)
}

// getAlbumByID locates the album whose ID value matches the id
// parameter sent by the client, then returns that album as a response.
func getAlbumByID(c *gin.Context) {
	id := c.Param("id")

	// Loop through the list of albums, looking for
	// an album whose ID value matches the parameter.
	for _, a := range albums {
		if a.ID == id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "album not found"})
}

// albums slice to seed record album data.
var albums = []album{
	{ID: "1", Title: "Blue Train", Artist: "John Coltrane", Price: 56.99},
	{ID: "2", Title: "Jeru", Artist: "Gerry Mulligan", Price: 17.99},
	{ID: "3", Title: "Sarah Vaughan and Clifford Brown", Artist: "Sarah Vaughan", Price: 39.99},
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
