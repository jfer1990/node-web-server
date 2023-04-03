import http from 'node:http';

http.createServer((req,res)=>{
    console.log('req', req); 
    res.write('Hola Mundo'); 
    res.end(); 
})
.listen(8080); 

console.log('escuchando en el puerto', 8080); 