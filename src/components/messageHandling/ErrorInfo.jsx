import { Text, View } from 'react-native'
import React from 'react'

export default function ErrorInfo({ message }) {
    return (
        <View className='absolute bottom-0 bg-red-500 w-full p-[10px] rounded-tl-[6px] rounded-tr-[6px]'>
            <Text className='text-white font-medium'>{message}</Text>
        </View>
    )
}
