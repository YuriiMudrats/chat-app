import path from 'path'
export default {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'        
    },
    modules:{
        rules:[
         {
            test:/\.ccs$/,
            use:[
                'style-loader',
                'css-loader'
            ]
         }
        ]  

    },
    mode:  'development'

}