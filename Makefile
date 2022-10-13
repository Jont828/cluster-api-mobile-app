## --------------------------------------
## Variables
## --------------------------------------

# GO_DIR := api
NODE_MODULES := ./node_modules
# GO_BIN_OUT_PATH := $(GO_DIR)/main

TAG ?= latest
REGISTRY ?= docker.io/jont828
IMAGE_NAME ?= cluster-api-mobile-app
DOCKER_IMAGE ?= $(REGISTRY)/$(IMAGE_NAME)

## --------------------------------------
## All
## --------------------------------------

# Default target is to build and run the app
# .PHONY: all
# all: npm-install build run

# .PHONY: build
# build: build-web build-go

.PHONY: clean
clean:
	rm -rf $(NODE_MODULES) $(GO_BIN_OUT_PATH) tmp

## --------------------------------------
## React Native and Node
## --------------------------------------

.PHONY: npm-install
npm-install: package.json
	npm install

.PHONY:
start: package.json $(NODE_MODULES)
	expo start

.PHONY:
start-tunnel: package.json $(NODE_MODULES)
	expo start --tunnel

## --------------------------------------
## Go
## --------------------------------------

# .PHONY: build-go
# build-go:
# 	go build $(GO_DIR) -o $(GO_BIN_OUT_PATH)

# .PHONY: run
# run: $(GO_BIN_OUT_PATH)
# 	./$(GO_BIN_OUT_PATH)

# .PHONY: go-run
# go-run:
# 	go run $(GO_DIR)/main.go

# .PHONY: air
# air: .air.toml
# 	air

## --------------------------------------
## Docker
## --------------------------------------

.PHONY: docker-build
docker-build: 
	docker build --no-cache -t $(DOCKER_IMAGE):$(TAG) .

.PHONY: docker-push
docker-push: 
	docker push $(DOCKER_IMAGE):$(TAG)