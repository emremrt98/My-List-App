import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
export default function ListItem() {
    const [isChecked, setChecked] = useState(false);
    const handleCheckbox = () => setChecked(!isChecked)
    return (
        <TouchableOpacity onPress={handleCheckbox} className={`border-[2px] border-white ${isChecked && 'border-main'}  bg-white rounded-[6px] px-[10px] py-[10px] flex-row justify-between items-center mt-[10px]`}>
            <View className='flex-row gap-5 items-center'>
                <View>
                    <MaterialIcons name="directions-run" size={24} color="#3B5BDB" />
                </View>
                <View>
                    <Text className='text-primary text-[13px]'>Sabah sporu</Text>
                    <Text className={`mt-[3px] text-secondary text-[11px] ${isChecked && 'line-through'}`}>Sabah 08:00’da yürüyüş yapılacak</Text>
                </View>
            </View>
            <View>
                <Checkbox
                    style={{ borderColor: '#cfcfcf' }}
                    className='rounded-[3px]'
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked && '#3B5BDB'}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})