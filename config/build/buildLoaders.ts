import type webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { type BuildOptions } from "./types/config"

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          ["i18next-extract", {
            locales: ['ru', 'en'],
            keyAsDefaultValue: true
          }]
        ]
      }
    }
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')), // Это свойство определяет, будут ли CSS модули автоматически применяться к файлам.
            localIdentName: isDev 
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          } // Это свойство определяет формат имен классов для CSS модулей.
        }
      },
      // Compiles Sass to CSS
      "sass-loader"
    ]
  }

  const typescriptLoader = {
    test: /\.tsx?$/, /* ФАЙЛЫ КОТОРЫЕ НЕОБХОДИМО ПРОПУСТИТЬ ЧЕРЕЗ LOADER,регулярное выражение  */
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  return [
    /* Здесь мы конфигурируем loader'ы,они предназнаены для того,чтобы обрабатывать файлы которые выходят за рамки javascript */
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader
  ]
}
