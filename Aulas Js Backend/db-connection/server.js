const express = require('express')
const app = express()
const porta = 3001
const { conectar } = require('./pool')
app.use(express.json())
let db



app.listen(porta, async () => {
    console.log(`Servidor iniciado na porta ${porta}`)
    db = await conectar()
})

app.get('/tarefas', async (req, res) => {
    try {
        const lista_de_tarefas = await db.all('SELECT * from tarefas')
        res.status(200).json(lista_de_tarefas)
    } catch (err) {
        console.log(err)
        res.status(500).json({ erro: "Falha ao buscar tarefas" });
    }
})

app.get('/usuarios', async (req, res) => {
    try {
        const lista_de_usuarios = await db.all('SELECT * from usuarios')
        res.status(200).json(lista_de_usuarios)
    } catch (err) {
        console.log(err)
        res.status(500).json({ erro: "Falha ao buscar tarefas" });
    }
})

app.post('/tarefas', (req, res) => {
    const { titulo, descricao, validade, id_user } = req.body
    const dataHora = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    db.run(`INSERT INTO tarefas (titulo, descricao, validade, id_user, data_criacao) 
        VALUES (?,?,?,?,?)`, [titulo, descricao, validade, id_user, dataHora])


    res.status(201).send(`Tarefa criada`)

})

app.post('/usuarios', (req, res) => {
    const { nome, email, data_nasc } = req.body

    db.run(`INSERT INTO usuarios (nome, email, data_nascimento) 
        VALUES(?,?,?)`, [nome, email, data_nasc])

    const usuario = {
        nome: nome,
        email: email,
        data_nasc: data_nasc
    }

    res.status(201).send(`Usuario criado`)

})

app.patch('/tarefas', async (req, res) => {
    const { id, nova_desc, novo_titulo, nova_validade, id_user } = req.body
    db.run(`UPDATE tarefas 
        SET titulo = ?, descricao = ?, validade = ?, id_user = ? 
        WHERE id = ?`,
        [novo_titulo, nova_desc, nova_validade, id_user, id],)
    res.status(200).send('tudo certo')
})