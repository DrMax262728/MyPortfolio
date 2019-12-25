module.exports = api => {
  api.cache(true);

  const presets = ["next/babel"];
  const plugins = [
    [
      "import",
      {
        libraryName: "antd",
        style: false
      }
    ],
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          components: "./components",
          containers: "./containers",
          constants: "./constants",
          enums: "./enums",
          libs: "./libs",
          types: "./types",
          store: "./store",
          styles: "./styles"
        }
      }
    ],
    [
      "inline-import",
      {
        extensions: [".css"]
      }
    ]
  ];

  return {
    presets,
    plugins
  };
};
