import { Text, View } from 'react-native'
import React from 'react'
import AddTaskSvg from '../components/AddTask/AddTaskSvg'

export default function AddTaskScreen() {
    return (
        <View className='flex-1 m-[10px] p-[10px] rounded-[6px] bg-white items-center'>
            <AddTaskSvg />
        </View>
    )
}
