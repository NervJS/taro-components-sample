const path = require('path')

// NOTE 在 sass 中通过别名（@ 或 ~）引用需要指定路径
const sassImporter = function(url) {
  if (url[0] === '~' && url[1] !== '/') {
    return {
      file: path.resolve(__dirname, '..', 'node_modules', url.substr(1))
    }
  }

  const reg = /^@styles\/(.*)/
  return {
    file: reg.test(url) ? path.resolve(__dirname, '..', 'src/styles', url.match(reg)[1]) : url
  }
}

const config = {
  projectName: 'taro-components-sample',
  designWidth: 750,
  sourceRoot: 'src',
  outputRoot: 'dist',
  babel: {
    sourceMap: true,
    presets: [
      'env'
    ],
    plugins: [
      'transform-class-properties',
      'transform-decorators-legacy',
      'transform-object-rest-spread'
    ]
  },
  defineConstants: {
    WWW: JSON.stringify('www')
  },
  mini: {
    sassLoaderOption: {
      importer: sassImporter
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    sassLoaderOption: {
      importer: sassImporter
    },
    postcss: {
      autoprefixer: {
        enable: true
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
