import { Router } from 'express'
import { somar,dobro,media,temperatura } from './services.js'

const server = Router();

server.get('/ping', (req, resp) => {
    resp.send('pong');
})

server.get('/dobro/:numero', (req,resp) => {
    const numero = Number (req.params.numero);

    const d = dobro(numero);

    resp.send({
        dobro: dobro
    });
})

server.get('/somar', (req, resp) => {
    const a = Number (req.query.a);
    const b = Number (req.query.b);

    const x = somar(a, b);
    resp.send ({
        soma:x
    })
})

server.post('/somar', (req, resp) => {
    try{
    const { valores: {a, b } } = req.body;
    
    const x = somar(a, b);

    
    resp.send ({
        soma: x
    })
}catch(err){
    resp.status(404).send ({
        erro: err.message
    })
}

})

server.get('/temperatura', (req, resp) => {
    try{
       
        
        const febre = temperatura(temp);
    
        
        resp.send ({
            temperatura: temperatura
        })
    }catch(err){
        resp.send ({
            erro: err.message
        })
    }
})

export default server;