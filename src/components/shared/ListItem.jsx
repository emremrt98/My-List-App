import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function ListItem({ detail = false }) {

    const [isChecked, setChecked] = useState(false);
    const handleCheckbox = () => setChecked(!isChecked);

    return (
        <View className={`border-[2px] border-white ${isChecked && 'border-main'}  bg-white rounded-[6px] mt-[10px] px-[10px] py-[10px]`}>
            <TouchableOpacity onPress={handleCheckbox} className='flex-row justify-between items-center'>
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
            {
                detail &&
                <View className='mt-[10px] border-t-[1px] border-border pt-[10px] flex-row justify-between'>
                    <Pressable className='flex-row items-center gap-[5px]' onPress={() => { console.log('selam') }}>
                        <Ionicons name="information-circle" size={16} color="#343A40" />
                        <Text className='text-primary text-[13px]'>Detay</Text>
                    </Pressable>
                    <Pressable className='flex-row items-center gap-[5px]' onPress={() => { console.log('selam2') }}>
                        <MaterialCommunityIcons name="delete-empty" size={16} color="#868E96" />
                        <Text className='text-secondary text-[13px]'>Sil</Text>
                    </Pressable>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({})