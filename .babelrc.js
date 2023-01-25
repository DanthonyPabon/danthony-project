const plugins = [
  [
    require.resolve("babel-plugin-module-resolver"),
    {
      root: ["./src/"],
      alias: {
        assets: "./src/assets/*",
        components: "./src/components/*",
        hook: "./src/hook/*",
        providers: "./src/providers/*",
        routes: "./src/routes/*",
        screens: "./src/screens/*",
        services: "./src/services/*",
        styles: "./src/styles/*",
        utils: "./src/utils/*",
      },
    },
  ],
];
