import { Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useReducer } from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { registerForm } from '../../utils/const/authForm';
import { inputReducer } from '../../reducer/inputReducer';
import { registerWithEmailAndPassword } from '../../auth';
import { setLoader, setErrorMessage, setAuth } from '../../redux/generalSlice';
import { validationRegister } from '../../validation';
import { useDispatch, useSelector } from 'react-redux';
import { errorMessages } from '../../utils/const/errorHandling';
import ErrorInfo from '../messageHandling/ErrorInfo';

export default function Register({ navigation }) {
    const reduxDispatch = useDispatch();
    const { errorMessage } = useSelector((state) => state.general);
    const initialState = {
        email: '',
        password: '',
        rpassword: ''
    }

    const [state, dispatch] = useReducer(inputReducer, initialState);

    const registerApp = async () => {
        try {
            const validationResponse = await validationRegister(state);

            if (validationResponse.statusCode) {
                reduxDispatch(setLoader());
                await registerWithEmailAndPassword(state.email, state.password);
                navigation.navigate('Login');
            } else {
                reduxDispatch(setErrorMessage({ statusCode: true, message: validationResponse.message }));
            }
        } catch (error) {
            reduxDispatch(setErrorMessage(errorMessages(error.code)));
        }
    }

    return (
        <View className='bg-white flex-1 items-center justify-center px-5'>
            <View>
                <Image
                    source={require('../../../assets/images/auth-logo.png')}
                />
            </View>

            <View className='w-full'>
                <FlatList
                    data={registerForm}
                    renderItem={({ item }) => (
                        <View className='mt-5 w-full'>
                            <Input item={item} dispatch={dispatch} state={state} />
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>

            <TouchableOpacity onPress={registerApp} className='w-full mt-5'>
                <Button title={'Kayıt Ol'} />
            </TouchableOpacity>

            <View className='w-full mt-5 flex-row'>
                <Text className='text-primary'>Yoksa bir hesabınız mı var? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text className='font-[600] ml-[7px] text-primary underline'>Giriş Yap</Text>
                </TouchableOpacity>
            </View>

            {
                errorMessage.statusCode && <ErrorInfo errorMessage={errorMessage} />
            }
        </View>
    )
}
