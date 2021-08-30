const path = require('path')

module.exports = {
    entry: './src/index.js',
    // entry: './src/main.css',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            } 
        ]
    }
}