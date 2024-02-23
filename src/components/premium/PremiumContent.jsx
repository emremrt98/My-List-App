import { View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import PriceList from './PriceList'
import PremiumProperty from './PremiumProperty'
import Button from '../shared/Button'

export default function PremiumContent() {
    const width = Dimensions.get('window').width - 90;
    return (
        <View className='flex-1 mx-[10px] p-[10px] -mt-5 rounded-[12px] bg-white mb-5' >
            <PriceList />
            <PremiumProperty />
            <View className='items-center'>
                <TouchableOpacity style={{ width: width }} className='mt-5'>
                    <Button title={'Devam Et'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
