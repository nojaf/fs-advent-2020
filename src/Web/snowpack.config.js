const pwd = process.cwd();

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-react-refresh', 
    ['@snowpack/plugin-run-script', {
      "cmd": `docker exec -w \"${pwd}\" dotnet-container dotnet fable ../App/App.fsproj --outDir ./src/bin`,
      "watch": `docker exec -w \"${pwd}\" dotnet-container dotnet fable watch ../App/App.fsproj --outDir ./src/bin`,
      "output": "stream"
    }]
  
  ],
  devOptions: {
    output: "stream"
  }
};
