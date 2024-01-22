import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { loginForm } from '../../utils/const/authForm';
import { setLoader } from '../../redux/generalSlice';
import { useDispatch } from 'react-redux';

export default function Login({ navigation }) {
    const dispatch = useDispatch();

    const changePage = () => {
        dispatch(setLoader());
        navigation.navigate('Register');
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
                    data={loginForm}
                    renderItem={({ item }) => (
                        <View className='mt-5 w-full'>
                            <Input item={item} />
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>

            <TouchableOpacity onPress={changePage} className='w-full mt-5'>
                <Button title={'Giriş Yap'} />
            </TouchableOpacity>

            <View className='w-full mt-5 flex-row'>
                <Text className='text-primary'>Hala bir hesabınız yok mu?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text className='font-[600] ml-[7px] text-primary underline'>Kayıt Olun</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
