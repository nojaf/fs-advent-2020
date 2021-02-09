# GitPod & Snowpack

Source code for F# Advent entry of @nojaf.

https://blog.nojaf.com/2020/12/15/fs-advent-2020-gitpod-snowpack/

## 02/2021 Revision

Gitpod announced that you can now run [docker containers inside your workspace](https://www.gitpod.io/blog/root-docker-and-vscode/#docker).
This allows us to use the base image of Gitpod and run .NET inside a container.

### Steps

1. Start Docker agent

> sudo docker-up

2. Start docker-compose

> docker-compose up