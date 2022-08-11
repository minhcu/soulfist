const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            "vue-loader",
            {
              loader: "markdown-to-vue-loader",
              options: {
                markdownItOptions: {
                  html: true,
                },
              },
            },
          ],
        },
      ],
    },
  },
});
