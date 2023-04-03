// Repositories: Gerenciará o acesso ao banco de
//  dados, como inserção, consulta e atualização de dados.
import  connectionDB  from "../config/database.js";

async function findByEmail(email){
    return await connectionDB.query(`
        SELECT * FROM users WHERE email=$1
    `,
    [email]
    );
}

async function create(name, email, password){
    await connectionDB.query(`
        INSERT INTO users (name, email, password)
        VALUES ($1, $2, $3) 
    `, [name, email, password]);
}



export default{
    findByEmail,
    create
}