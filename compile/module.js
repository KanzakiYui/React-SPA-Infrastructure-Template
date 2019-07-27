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

const scriptLoader = nolint => {
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

module.exports = nolint => ({
    rules: [
        styleLoader,
        fileLoader,
        scriptLoader(nolint)
    ]
})