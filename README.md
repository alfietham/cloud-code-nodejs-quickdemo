# Demo App for Cloud Code and Kubernetes

## Pre-requisites

- Install [Skaffold](https://skaffold.dev/docs/getting-started/#installing-skaffold)
- Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
- Install the [Cloud Code](https://cloud.google.com/code/docs/vscode/install) VSCode extension by Google Cloud
- Install `kubectl` tool
  - You might already have it: `kubectl version`
  - Also comes with the [GCP Cloud SDK](https://cloud.google.com/sdk/install)
  - Or you can install from [kubernetes.io](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

## Steps to go through

Context: We're taking an existing app and setting it up for development on k8s

- Go through the existing app
- Create k8s manifest YAML files
- Run Cloud Code Deploy
  - Create Deployment Profile(s)
  - Ensure the Dockerfiles are written
- Fix any bugs (could use the debugger + Continuous Deploy)
- Add additional Profiles for other environments

## Further Docs

- [Cloud Code for VS Code How-to Guides](https://cloud.google.com/code/docs/vscode/how-to)
