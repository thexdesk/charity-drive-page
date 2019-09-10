module.exports = {
  presets: [
    ["@vue/app", {}],
    [
      "@babel/preset-env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1"
        },
        useBuiltIns: "entry"
      }
    ]
  ],
  plugins: []
};
