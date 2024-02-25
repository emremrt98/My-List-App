import { Text, View } from 'react-native'
import React from 'react'
import AddTaskSvg from '../components/AddTask/AddTaskSvg'
import CustomTextInput from '../components/shared/TextInput'
import Button from '../components/shared/Button'
import TextArea from '../components/shared/TextArea'
import Dropdown from '../components/shared/Dropdown'

export default function AddTaskScreen() {
    return (
        <View className='flex-1 m-[10px] p-[10px] rounded-[6px] bg-white '>
            <View className='w-full items-center'>
                <AddTaskSvg />
            </View>
            <View className='mt-5 w-full'>
                <CustomTextInput />
            </View>
            <View className='mt-5 w-full'>
                <Dropdown />
            </View>
            <View className='mt-5 w-full'>
                <TextArea />
            </View>

            <View className='w-1/2 mt-5 '>
                <Button title={"Ekle"} />
            </View>

        </View>
    )
}
