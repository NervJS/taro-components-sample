const path = require('path')
const { projectPath } = require('../harmony.json')

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
  projectName: 'TaroHarmony',
  designWidth: 750,
  sourceRoot: 'src',
  outputRoot: 'dist',
  framework: 'react',
  sass: {
    importer: sassImporter
  },
  defineConstants: {
    WWW: JSON.stringify('www')
  },
  plugins: [
    '@tarojs/plugin-platform-harmony'
  ],
  mini: {
    debugReact: true,
    enableSourceMap: false
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        }
      }
    }
  },
  harmony: {
    projectPath
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
