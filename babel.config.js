module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        cwd: "babelrc",
        extensions: [".ts", ".tsx", ".js", ".ios.js", ".android.js"],
        root: ["./src"],
        alias: {
          "@components": "./src/components",
          "@styles": "./src/styles",
          "@hook": "./src/hook",
          "@providers": "./src/providers",
          "@routes": "./src/routes",
          "@screens": "./src/screens",
          "@services": "./src/services",
          "@utils": "./src/utils",
        },
      },
    ],
    "jest-hoist",
  ],
};
