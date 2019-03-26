// Node.js 處理文件路徑的小工具，透過以下方式可以引入該模組
const path = require('path');
module.exports = {
    //指定一開始的路徑
    //__dirname在nodejs裡面代表當前執行文件所在目錄的完整位置
    //從src底下開始找
    context: path.resolve(__dirname, 'src'),
    //進入點，指定路徑爲 index.js
    entry: './index.js',
    //打包後輸出的檔案(預設爲 dist 資料夾)
    output: {
        filename: 'index.bundle.js',
    },
    //需要設定 loader 的話我們需要在webpack.config.js裡面加上module屬性
    //babel 有使用 loader 所以需要設置
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
