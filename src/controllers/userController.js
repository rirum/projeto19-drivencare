// Controllers: Controlará o comportamento da API, incluindo a validação de entrada e a
//  criação de respostas a serem enviadas de volta aos clientes.
import userServices from "../services/userServices.js";

async function create(req, res){
    const { name, email, password} = req.body; 

    try{
    
        await userServices.create({name, email, password})

        return res.sendStatus(201);

    }catch(error){
       return res.status(500).send(error.message)
    }

}

async function login(req, res){
const {email, password} = req.body;
try{
    await userServices.login({email, password})
    return res.sendStatus(200);
}catch (error){
    return res.status(500).send(error.message)
}
}

//boa pratica! 
export default {
    create,
}