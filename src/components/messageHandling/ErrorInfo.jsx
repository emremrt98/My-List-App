import { Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setErrorMessage } from '../../redux/generalSlice';

export default function ErrorInfo({ errorMessage: { statusCode, message } }) {

    const reduxDispatch = useDispatch();

    useEffect(() => {
        if (statusCode) {
            setTimeout(() => {
                reduxDispatch(setErrorMessage({ statusCode: false, message: '' }));
            }, 5000);
        }
    }, [statusCode])



    return (
        <View className='absolute bottom-0 bg-red-500 w-full p-[10px] rounded-tl-[6px] rounded-tr-[6px]'>
            <Text className='text-white font-medium'>{message}</Text>
        </View>
    )
}
