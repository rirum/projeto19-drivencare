// Schemas com Joi: Validará as entradas do usuário para 
// garantir que os dados estejam no formato correto.

import joi from "joi";

export const patientSignupSchema = joi.object({
    name: joi.string().min(2).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
});

export const patientLoginSchema = joi.object({
   
    email: joi.string().email().required(),
    password: joi.string().required()
})

export const doctorSignupSchema = joi.object({
    name: joi.string().min(2).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    specialty: joi.string().required(),
    location: joi.string().required(),
});

export const doctorLoginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    
})