import { Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
export default function PremiumProperty() {
    return (
        <View className='mt-5'>
            <Text className='text-primary font-medium text-[16px]'>Premium Özellikleri</Text>
            <View className='mt-[10px]'>
                <View className='flex-row gap-[7px] item-center'>
                    <Entypo name="chevron-right" size={16} color="#343A40" />
                    <Text className='text-primary text-[13px]'>Liste sayını sınırsız yap.</Text>
                </View>
                <View className='flex-row gap-[7px] item-center mt-[10px]'>
                    <Entypo name="chevron-right" size={16} color="#343A40" />
                    <Text className='text-primary text-[13px]'>Grafik üzerinde yaptıklarını gör.</Text>
                </View>
                <View className='flex-row gap-[7px] item-center mt-[10px]'>
                    <Entypo name="chevron-right" size={16} color="#343A40" />
                    <Text className='text-primary text-[13px]'>Yapacakların için hatırlatıcı oluştur.</Text>
                </View>
                <View className='flex-row gap-[7px] item-center mt-[10px]'>
                    <Entypo name="chevron-right" size={16} color="#343A40" />
                    <Text className='text-primary text-[13px]'>Reklamları kaldır.</Text>
                </View>

            </View>
        </View>
    )
}
