// Services: Lidará com a lógica de negócios e a validará.


import bcrypt from "bcrypt";
import {v4 as uuidV4} from "uuid";
import userRepositories from '../repositories/userRepositories.js';


async function create({name, email, password}){
    //só pode existir um email (unique)
    //aqui apenas regra de negocios, joi fica no middleware

 
    const {rowCount} = await userRepositories.findByEmail(email)
    
    if (rowCount) return "There's already an email registered"

    const hashPassword = await bcrypt.hash( password, 10 );
   console.log(password)
   console.log(hashPassword)
    await userRepositories.create({name, email, password:hashPassword});

}

// async function login(email, password){
//     const{rowCount} = await userRepositories.findByEmail(email)
//     if (!rowCount) return ("Incorrect email or password");

//     // const comparePassword = await bcrypt.compareSync(password, rowCount.rows[0].password);

// }

export default {
    create,
}