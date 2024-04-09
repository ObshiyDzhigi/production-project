import type webpack from "webpack"
import { type BuildOptions } from "./types/config"

export function buildResolvers (options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true, // Булевое значение, указывающее, предпочитать ли абсолютные пути при разрешении модулей.
    modules: [options.paths.src, 'node_modules'], //  Массив путей, где следует искать модули. В данном случае, это путь к исходным файлам проекта (options.paths.src) и путь к папке node_modules.
    mainFiles: ['index'], // : Массив имен файлов, которые следует искать при разрешении папок. Например, если указан файл index, Webpack будет искать файл index внутри каждой папки.
    alias: {} // Объект с псевдонимами модулей, позволяющими указывать альтернативные пути к модулям.
  }
}

//  webpack.ResolveOptions указывает на то, что функция buildResolvers возвращает объект с настройками разрешения модулей, который Webpack будет использовать во время сборки проекта. Это необходимо для того, чтобы явно указать, что эти настройки предназначены именно для механизма разрешения модулей в Webpack.
