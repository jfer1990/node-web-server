import express  from "express";
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import hbs from 'hbs'; 
import dotenv from 'dotenv'; 
dotenv.config(); 



const app = express(); 
const port = process.env.PORT; 

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + 'views/partials'); 

app.use( express.static('public'))
  

app.get('/', (req, res) => {
    res.render('home',{
        nombre:'Fernando Rodríguez', 
        titulo:'curso de node'
    }); 
  })    


  app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre:'Fernando Rodríguez', 
        titulo:'curso de node'
    })
  })

  app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre:'Fernando Rodríguez', 
        titulo:'curso de node'
    })
  })

  app.get('*', (req, res) => {
    res.sendFile( __dirname + 'public/404.html'); 
  })
  
  
app.listen(port)