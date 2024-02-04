import { Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
export default function CompletedItem() {
    return (
        <View className='bg-red-400 p-[10px] rounded-[6px] mr-3 w-[124px] h-[130px] justify-between'>
            <View className='flex-row justify-between items-center'>
                <View className='w-[36px] h-[36px] bg-white justify-center items-center rounded-[6px]'>
                    <MaterialCommunityIcons name="run-fast" size={20} color="black" />
                </View>
                <Feather name="arrow-right" size={24} color="white" />
            </View>

            <View className=''>
                <Text className='text-white font-medium text-[16px]'>Spor Günüm</Text>
                <Text className='text-white  text-[11px]'>12.10.2023, Sal</Text>
            </View>
        </View>
    )
}
