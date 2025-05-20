const sqlite3 = require('sqlite3')
const { open } = require('sqlite')


async function conectar() {
    const db = await open({
        filename: './teste.db',
        driver: sqlite3.Database
    })

    return db
}

module.exports = { conectar }






    // await db.exec(`CREATE TABLE IF NOT EXISTS usuarios (
    //     id INTEGER PRIMARY KEY AUTOINCREMENT,
    //     nome TEXT NOT NULL,
    //     email TEXT UNIQUE NOT NULL,
    //     data_nascimento TEXT
    //     )`)

    // await db.exec(`CREATE TABLE IF NOT EXISTS tarefas(
    //     id INTEGER PRIMARY KEY AUTOINCREMENT,
    //     titulo TEXT NOT NULL,
    //     descricao TEXT NOT NULL,
    //     data_criacao TEXT NOT NULL,
    //     validade TEXT NOT NULL,
    //     id_user INTEGER NOT NULL,
    //     FOREIGN KEY (id_user) REFERENCES usuarios(id)
    //     )`)

    // await db.run(`INSERT INTO usuarios (nome, email, data_nascimento) 
    //         VALUES(?,?,?)`, ['Alex4', 'Alex4@gmail.com', '15/08/2007'], (err, data) => {
    //     console.log(data)
    //     console.log(err)
    // })


    // await db.all('SELECT * from usuarios', (err, data) => {
    //     console.log(data)
    //     console.log(err)
    // })

    // await db.exec(`DROP TABLE tarefas`)
