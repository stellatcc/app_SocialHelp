module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ".",
          extentions: [".js"],
          alias: {
            "@assets": "./assets",
            "@fonts": "./assets/fonts",
            "@banco": "./BancoDados",
            "@login": "./login",
            "@home": "./home",
            "@profile": "./profile",
            "@selecionar": "./selecionar",
            "@help": "./help",
            "@cadastro": "./cad",
          },
        },
      ],
    ],
  };
};
