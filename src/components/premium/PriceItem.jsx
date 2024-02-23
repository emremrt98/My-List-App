import { Pressable, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function PriceItem({ item: { price, title, icon } }) {

    const [selected, setSelected] = useState(false);

    return (
        <Pressable className={`border mt-[10px] border-border rounded-[6px] px-[10px] py-[15px] ${selected && 'border-main'}`} onPress={() => setSelected(!selected)}>
            <View className='flex-row justify-between items-center'>
                <View className='flex-row gap-[7px] items-center'>
                    {icon}
                    <Text className={`text-primary text-[16px] font-medium ${selected && "text-main"}`}>{title}</Text>
                </View>
                <View>
                    <Text className={`text-primary text-[16px] font-bold ${selected && "text-main"}`}>{price} </Text>
                </View>
            </View>
        </Pressable>
    )
}
