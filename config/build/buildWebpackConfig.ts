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
      clean: true // clean: Это булевое значение, указывающее, нужно ли очищать каталог вывода перед каждой новой сборкой. Когда значение true, каталог вывода будет очищен перед каждой сборкой, что может быть полезно для предотвращения накопления старых файлов.
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined, // Если isDev равно true, что указывает на режим разработки, то включается источник карты исходного кода типа 'inline-source-map'. Это означает, что исходный код будет встроен в сгенерированный JavaScript файл в виде комментариев. Такая карта исходного кода облегчает отладку, так как браузер будет показывать исходный код в DevTools, что помогает локализовать и исправить ошибки.
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
