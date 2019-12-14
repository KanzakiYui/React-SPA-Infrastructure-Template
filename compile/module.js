const styleLoader = {
    test: /\.(css|scss)$/,
    use: [
        'style-loader',
        'css-loader',
        'sass-loader'
    ]
}

const fileLoader = {
    test: /\.(svg|png|jpg|gif)$/,
    use: [
        'file-loader'
    ]
}

const javascriptLoader = nolint => {
    const use = [
        {
            loader: "babel-loader",
            options: {
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react"
                ],
            }
        },
    ]
    if(!nolint)
        use.push("eslint-loader")
    return {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, 
        use
    }
}

// This may not complete, refer to:
// https://www.typescriptlang.org/docs/handbook/react-&-webpack.html#create-a-webpack-configuration-file
// Question: How to deal with typescript lint?

const typescriptLoader = {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: [
        { loader: "ts-loader" }
    ]
}

module.exports = nolint => ({
    rules: [
        styleLoader,
        fileLoader,
        javascriptLoader(nolint),
        typescriptLoader
    ]
})

