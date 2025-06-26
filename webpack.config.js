const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // archivo principal JS
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // limpia la carpeta dist antes de cada build
  },
  devtool: "eval-source-map", // para debug con sourcemaps
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // carpeta a servir
    },
    watchFiles: ["./src/template.html"], // para recargar al modificar HTML
    port: 8080, // podés cambiarlo si está ocupado
    open: true, // abre el navegador automáticamente
    hot: false, // desactiva HMR para evitar errores WebSocket
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // tu HTML base
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // procesa e inyecta CSS
      },
      {
        test: /\.html$/i,
        loader: "html-loader", // permite importar HTML si hiciera falta
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
