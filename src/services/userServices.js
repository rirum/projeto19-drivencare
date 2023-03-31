// Services: Lidará com a lógica de negócios.


import bcrypt from 'bcrypt'
import userRepositories from '../repositories/userRepositories.js';


async function create(name, email, password){
    //só pode existir um email (unique)
    //aqui apenas regra de negocios, joi fica no middleware

    const {rowCount} = await userRepositories.findByEmail(email)
    if (rowCount) return "There's already an email registered"

    const hashPassword = await bcrypt.hash(password,10);
    await userRepositories.create({name, email, password:hashPassword});




}

export default {
    create,
}