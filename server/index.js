import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webPackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config'
const port= 8080

let app = express()
app.use(webPackMiddleware(webpack()))

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(port,()=>{
    console.log(`Server started port: ${port}`)
})