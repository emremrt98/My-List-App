import { Image, Text, View } from 'react-native'
import React from 'react'
import PremiumBannerSvg from '../shared/PremiumBannerSvg'

export default function Header() {
    return (
        <View className='bg-main h-[260px] flex justify-center px-5'>
            <View className='justify-center items-center -rotate-12 bg-primary  w-1/2 rounded-t-[6px] rounded-br-[6px] rounded-bl-[24px] px-5 py-[15px]'>
                <Text className='text-white text-[16px]'>TodoTrack</Text>
            </View>
            <View className='mt-8 w-4/5'>
                <Text className='text-white text-[20px] font-bold tracking-[2px]'>Premium Avantajlarını Doyasıya Yaşa</Text>
            </View>
            <View className='absolute right-0 -z-10'>
                <PremiumBannerSvg />
            </View>
        </View>
    )
}
