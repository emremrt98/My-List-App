import { Text, View, FlatList } from 'react-native'
import React from 'react'
import PriceItem from './PriceItem'
import { premiumPackages } from '../../utils/const/premiumPrice'

export default function Price() {
    return (

        <View>
            <FlatList
                data={premiumPackages}
                renderItem={({ item }) => <PriceItem item={item} />}
                keyExtractor={item => item.id}
            />
        </View>

    )
}
