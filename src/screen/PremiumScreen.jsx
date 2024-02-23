import { Text, View } from 'react-native'
import React from 'react'
import Header from '../components/premium/Header'
import PremiumContent from '../components/premium/PremiumContent'

export default function PremiumScreen() {
    return (
        <View className='flex-1'>
            <Header />
            <PremiumContent />
        </View>
    )
}
