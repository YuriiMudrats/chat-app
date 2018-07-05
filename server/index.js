import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webPackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config.dev'
import {config} from './config'
 const {port}= config

let app = express()
app.use(webPackMiddleware(webpack(webpackConfig)))

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(port,()=>{
    console.log(`Server started port: ${port}`)
})