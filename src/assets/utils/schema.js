import * as Yup from 'yup';

const requiredField = 'Este campo deve ser preenchido.'

export default Yup.object().shape({
    email: Yup.string()
        .email('Email deve ser válido')
        .required(requiredField),
    password: Yup.string()
        .required(requiredField) 
        .min(8, 'A senha deve conter 8 dígitos, no mínimo')
        .matches(/[a-zA-Z]/, 'A senha só pode ter letras e números'),
}); 