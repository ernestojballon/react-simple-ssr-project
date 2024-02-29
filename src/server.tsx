import React from 'react'
import express,{Request,Response} from 'express'
import {renderToString} from 'react-dom/server'
import path from 'path'
import App from './app'
import template from './template'
import fetch from 'isomorphic-fetch'


const app = express();


app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/',  async(req:Request, res:Response) => {
  console.log('requesting page')
   
    const gists = [{
      id:'1',
      description:'test'
    }]
    const body = renderToString(<App gists={gists} />)
    const html = template(body, gists)
    res.send(html)
    
} )

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})