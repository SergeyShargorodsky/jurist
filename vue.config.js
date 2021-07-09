module.exports = {
    transpileDependencies: [
        'vuetify',
    ],

    runtimeCompiler: true,
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : './',
    outputDir: 'docs',
    //rules: [
    //    {
    //        test: /\.(png|jpg|gif)$/i,
    //        use: [
    //            {
    //                loader: 'url-loader',
    //                options: {
    //                    limit: 8192,
    //                },
    //            },
    //        ],
    //    },
    //],
    chainWebpack: (config) => {
      config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => {
        options.fallback.options.name = "img/[name].[ext]"
        return options
      })
    }
}
