import HTMLWebpackPlugin from "html-webpack-plugin"
import path from "path"
import webpack from "webpack"
import { type BuildOptions } from "./types/config"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
export function buildPlugins ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html // index html будет использоваться как шаблон чтобы в него встраивались скрипты
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({ //  определения глобальных констант
      __IS_DEV__: JSON.stringify(isDev) // Это преобразует значение переменной isDev в строку JSON. Это необходимо, так как плагин DefinePlugin ожидает, чтобы значения были строками кода JavaScript.
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
