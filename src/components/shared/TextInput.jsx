import { Text, View, TextInput } from 'react-native'
import React from 'react'

export default function CustomTextInput() {
    return (
        <View className='w-full h-12 rounded-[6px] border-[1px] border-border bg-white relative' >
            <TextInput className='h-full px-[15px] text-[13px]'
                selectionColor={'#343A40'}
                placeholder="Başlık"
                onChangeText={(value) => { console.log('Selam') }}
            // value={state[type]}
            />

        </View>
    )
}
