import { Text, View, TextInput } from 'react-native'
import React from 'react'

export default function TextArea() {
    return (
        <View className='w-full rounded-[6px] border-[1px] border-border bg-white relative' >
            <TextInput className='px-[15px] text-[13px] py-[15px]'
                multiline={true}
                selectionColor={'#343A40'}
                numberOfLines={12}
                placeholder='Açıklama'
                onChangeText={(value) => { console.log('Selam') }}
                style={{ textAlignVertical: 'top' }}
            // value={state[type]}
            />

        </View>
    )
}
