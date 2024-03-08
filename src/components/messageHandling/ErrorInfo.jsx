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
            }, 7000);
        }
    }, [statusCode])



    return (
        <View className='absolute bottom-[20px] bg-[#fff5f5] border-[1px] border-[#ff3200] w-full p-[10px] rounded-[6px] rounded-tr-[6px]'>
            <Text className='text-[#ff3200] font-medium'>{message}</Text>
        </View>
    )
}
