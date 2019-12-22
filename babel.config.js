module.exports = api => {
  api.cache(true);

  const presets = ["next/babel"];
  const plugins = [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          components: "./components",
          containers: "./containers",
          libs: "./libs",
          types: "./types",
          store: "./store"
        }
      }
    ]
  ];

  return {
    presets,
    plugins
  };
};
