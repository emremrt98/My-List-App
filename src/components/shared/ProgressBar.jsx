import { Text, View } from 'react-native'
import React from 'react'

export default function ProgressBar() {
    return (
        <View className='my-5'>
            <View className='w-full h-[12px] bg-[#EDF2FF] rounded-[6px]'></View>
            <View className='absolute w-1/2 h-[12px] bg-[#3B5BDB] rounded-[6px]'>
                <Text className='text-[9px] absolute z-30 right-[10px] text-white'>50%</Text>
            </View>
        </View>
    )
}
