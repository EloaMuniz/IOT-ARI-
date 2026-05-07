const express = require('express');
const cors = require('cors');
const app = express(); //Essa linha é similar ao app = Flask 

app.use(cors());
app.use(express.json());

let historicoSensores = [
    {id:1, temperatura:20, umidade:60, hora:"10:00"},
    {id:2, temperatura:25, umidade:50, hora:"11:00"},
    {id:3, temperatura:30, umidade:40, hora:"12:00"},
]

app.get('/api/dados', (req,res) => { 
        res.json(historicoSensores);
});


app.post('/api/dados', (req,res) => {
    const{temperatura, umidade, hora} = req.body;


        let novoDados = {
            id: historicoSensores.length + 1,
            temperatura,
            umidade,
            hora
        }

        historicoSensores.push(novosDados);

        res.status(201).json({dados:novosDados, mensagem:"Dados enviados com sucesso!"});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   
    console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});