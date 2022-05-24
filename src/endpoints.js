import { Router } from 'express'
import { somar,dobro,media,temperatura, corprimaria } from './services.js'

const server = Router();

server.get('/ping', (req, resp) => {
    resp.send('pong');
})

server.get('/dobro/:numero', (req,resp) => {
    try{

    const numero = Number (req.params.numero);

    let d = dobro(numero);

    resp.send({
        dobro: d
    });

}catch(err){
    resp.send({
        erro:err.message
    })
}

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

server.get('/temperatura/', (req, resp) => {
    try{  
        const x = Number(req.query.x);
        
        let febre = temperatura(x);
    
        
        resp.send ({
            temperatura: febre
        })
    }
    catch(err){
        resp.send ({
            erro: err.message
        })
    }
})

server.post('/media', (req, resp) => {
    try{
    const { valores: {a,b,c } } = req.body;
    
    const x = media(a, b, c);

    
    resp.send ({
        media: x
    })
}catch(err){
    resp.status(404).send ({
        erro: err.message
    })
}

})
server.get('/corprimaria', (req, resp) => {
    try{  
        const x = (req.query.x);
        
        let a = corprimaria(x);
    
        
        resp.send ({
            corprimaria: a
        })
    }
    catch(err){
        resp.send ({
            erro: err.message
        })
    }
})
server.post('/ingressocinemas', (req, resp) => {
    try{
    const { valores: {a,b,c,d } } = req.body;
    
    const x = ingressocinemas(a, b, c,d);

    
    resp.send ({
        ingressocinemas: x
    })
}catch(err){
    resp.status(404).send ({
        erro: err.message
    })
}

})





export default server;