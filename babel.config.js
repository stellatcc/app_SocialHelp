module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ".",
          extentions: [
            ".js"
          ],
          alias:{
            "@telasNecessitados": "./src/necessitados",
            "@telasVoluntarios": "./src/voluntarios",
            "@telasOngs": "./src/ongs",
            "@assets": "./assets",
            "@fonts": "./assets/fonts"
          }
        }
      ]
    ]
  };
};
