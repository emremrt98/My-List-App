import { Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import Modal from '../shared/Modal';
import Notification from './Notification';


export default function Header() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View className='bg-white flex-row justify-between p-[10px] items-center'>
            <View className='flex-row gap-[7px] items-center'>
                <View>
                    <Image
                        className=''
                        source={require('../../../assets/images/user.jpg')}
                    />
                </View>
                <View>
                    <Text className='text-primary font-medium mb-[3px]'>Hoşgeldin Emre</Text>
                    <Text className='text-secondary'>Üye</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View className='relative w-[36px] h-[36px] bg-[#F8F9FA] justify-center items-center rounded-full'>
                    <Feather name="bell" size={20} color="#343A40" />
                    <View className='absolute right-1 top-1 bg-[#ff3200] justify-center items-center rounded-full w-[13px] h-[13px] '>
                        <Text className='text-[10px] text-white' >1</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <Modal setModalVisible={setModalVisible} modalVisible={modalVisible} >
                <Notification setModalVisible={setModalVisible} />
                
            </Modal>
        </View>
    )
}
