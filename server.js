//chamando bibliotecas
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const Post = require('./models/Posta');

//Configurando body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Chamando template engine
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/sobre', (req, res) => {
    res.render('sobre');
})


app.post('/inscrito', (req, res) => {
    const titu = req.body.titulo
    const cont = req.body.conteudo
    
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then((response) => {
        res.render("inscritos", {
            titu: titu,
            cont: cont,

        })
    }).catch((err) => {
        res.send("Erro no programa, tente de novo!"+err.message)
    });
})

app.listen(8081);
console.log('listening on http://localhost/8081');
