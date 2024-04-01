import { type BuildOptions } from "./types/config"
import type webpack from "webpack"
import { buildPlugins } from "./buildPlugins"
import { buildLoaders } from "./buildLoaders"
import { buildResolvers } from "./buildResolvers"
import { buildDevServer } from "./buildDevServer"

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options
  return {
    mode,
    entry: paths.entry, // СТАРТОВАЯ ТОЧКА НАШЕГО ПРИЛОЖЕНИЯ
    // НАСТРОЙКА ТОГО КУДА И КАК МЫ БУДЕМ ДЕЛАТЬ СБОРКУ НАШЕГО ПРИЛОЖЕНИЯ
    output: {
      filename: "[name].[contenthash].js", // ГЛАВНЫЙ ФАЙЛ В СБОРКЕ НАШЕГО ПРИЛОЖЕНИЯ
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
