import joi from "joi";

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