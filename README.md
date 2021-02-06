# GitPod & Snowpack

Source code for F# Advent entry of @nojaf.

## 02/2021 Revision

Gitpod announced that you can now run [docker containers inside your workspace](https://www.gitpod.io/blog/root-docker-and-vscode/#docker).
This allows us to use the base image of Gitpod and run .NET inside a container.

### Steps

1. Run a .NET container and keep it spinning

> docker run -t -d --rm -v $(pwd):/workspace/fs-advent-2020 -w /workspace/fs-advent-2020 --name dotnet-container mcr.microsoft.com/dotnet/sdk:5.0-focal

Notice that the working directory inside the container is exactly the same as our workspace.

2. Create an bash function for dotnet

```bash
function dotnet() { 
    docker exec -w "$(pwd)" dotnet-container dotnet "$@" 
}
```

So we can execute the .NET CLI as if it were installed.

3. Run commands in the container

> dotnet tool restore

This will execute the restore command inside the container.