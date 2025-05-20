const {conectar} = require('./pool')

async function teste() {
    let db = await conectar()
    console.log(db)
}

teste()

