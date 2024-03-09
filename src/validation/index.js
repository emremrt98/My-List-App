import { object, string, ref } from 'yup';

let validationLoginSchema = object({
    password: string().min(6, 'Şifre minimum 6 karakterden oluşmalıdır.').max(16, 'Şifre maksimum 16 karakterden oluşmalıdır.'),
    email: string().email('E-mail doğruluğunu kontrol ediniz.').required('E-mail girilmesi zorunlu'),

});

let validationRegisterSchema = object({
    rpassword: string().oneOf([ref('password'), null], 'Şifreler eşleşmiyor').required('Şifre tekrarı girilmesi zorunlu'),
    password: string().min(6, 'Şifre minimum 6 karakterden oluşmalıdır.').max(16, 'Şifre maksimum 16 karakterden oluşmalıdır.'),
    email: string().email('E-mail doğruluğunu kontrol ediniz.').required('E-mail girilmesi zorunlu'),
});

export const validationLogin = async (userInfo) => {
    try {
        await validationLoginSchema.validate(userInfo);
        return validationResponse = {
            statusCode: true
        };
    } catch (error) {
        return {
            statusCode: false,
            message: error.message
        };
    }
}

export const validationRegister = async (userInfo) => {
    try {
        await validationRegisterSchema.validate(userInfo);
        return validationResponse = {
            statusCode: true
        };
    } catch (error) {
        return {
            statusCode: false,
            message: error.message
        };
    }
}