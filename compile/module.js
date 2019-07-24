module.exports = {
    rules: [
        {
            test: /\.(css|scss)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.(svg|png|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/, 
            use: [
                {
                    loader: "babel-loader",
                    options: {
                        "presets": ["@babel/preset-env", "@babel/preset-react"]
                    }
                },
                "eslint-loader"
            ]
        }
    ]
}