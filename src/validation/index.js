import { object, string } from 'yup';

let validationSchema = object({
    email: string().email('E-mail doğruluğunu kontrol ediniz.').required('E-mail girilmesi zorunlu'),
    password: string().min(6, 'Şifre minimum 6 karakterden oluşmalıdır.').max(16, 'Şifre maksimum 16 karakterden oluşmalıdır.')

});

export const validation = async (userInfo) => {
    try {
        await validationSchema.validate(userInfo);
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