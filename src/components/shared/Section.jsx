import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Section({children}) {
    return (
        <View className='mt-5 mx-[10px]'>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({})