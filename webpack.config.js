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
                test:/(js|jsx)$/,
                exclude:/node_modules/,
                use: [
                    'babel-loader'                    
                ] 

            },

         {
            test:/\.sccs$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
         },{
             test: /\.(png|svg|jpg|gif)$/,
             use: [
                    'file-loader'                       
                ]
            }
        ]  
    },
    resolve: {
        extensions: ['.js', '.jsx'],
      },
    mode:  'development'

}