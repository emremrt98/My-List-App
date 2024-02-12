import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
export default function Notification({ setModalVisible }) {
    return (
        <View className='bg-[#343a4080] w-full h-full'>
            <View className='w-80 h-full bg-white absolute right-0'>
                <View className='p-[10px]'>
                    <Text className='text-primary text-[16px] font-medium'>Duyurular</Text>
                    <TouchableOpacity onPress={() => setModalVisible(false)} className='w-[32px] h-[32px] rounded-full absolute right-[10px] top-[10px]
                            justify-center items-center bg-[#F8F9FA]'>
                        <Ionicons name="close" size={20} color="#343A40" />
                    </TouchableOpacity>

                    <View className='mt-5'>
                        <TouchableOpacity className=' bg-[#F8F9FA] flex-row justify-between items-center p-[10px]'>
                            <View className='flex-row gap-[7px] items-center'>
                                <MaterialIcons name="local-post-office" size={20} color="#343A40" />
                                <View>
                                    <Text className='text-primary text-[13px]'>Yeni güncelleme geldi</Text>
                                    <Text className='text-secondary text-[10px] mt-[3px]'>V1.4.3</Text>
                                </View>
                            </View>
                            <MaterialIcons name="chevron-right" size={24} color="#343A40" />
                        </TouchableOpacity>
                        <TouchableOpacity className='mt-[10px]  flex-row justify-between items-center p-[10px]'>
                            <View className='flex-row gap-[7px] items-center'>
                                <MaterialIcons name="local-post-office" size={20} color="#343A40" />
                                <View>
                                    <Text className='text-primary text-[13px]'>Yeni güncelleme geldi</Text>
                                    <Text className='text-secondary text-[10px] mt-[3px]'>V1.4.3</Text>
                                </View>
                            </View>
                            <MaterialIcons name="chevron-right" size={24} color="#343A40" />
                        </TouchableOpacity>
                        <TouchableOpacity className='mt-[10px] bg-[#F8F9FA] flex-row justify-between items-center p-[10px]'>
                            <View className='flex-row gap-[7px] items-center'>
                                <MaterialIcons name="local-post-office" size={20} color="#343A40" />
                                <View>
                                    <Text className='text-primary text-[13px]'>Yeni güncelleme geldi</Text>
                                    <Text className='text-secondary text-[10px] mt-[3px]'>V1.4.3</Text>
                                </View>
                            </View>
                            <MaterialIcons name="chevron-right" size={24} color="#343A40" />
                        </TouchableOpacity>
                        <TouchableOpacity className='mt-[10px]  flex-row justify-between items-center p-[10px]'>
                            <View className='flex-row gap-[7px] items-center'>
                                <MaterialIcons name="local-post-office" size={20} color="#343A40" />
                                <View>
                                    <Text className='text-primary text-[13px]'>Yeni güncelleme geldi</Text>
                                    <Text className='text-secondary text-[10px] mt-[3px]'>V1.4.3</Text>
                                </View>
                            </View>
                            <MaterialIcons name="chevron-right" size={24} color="#343A40" />
                        </TouchableOpacity>
                        <TouchableOpacity className='mt-[10px] bg-[#F8F9FA] flex-row justify-between items-center p-[10px]'>
                            <View className='flex-row gap-[7px] items-center'>
                                <MaterialIcons name="local-post-office" size={20} color="#343A40" />
                                <View>
                                    <Text className='text-primary text-[13px]'>Yeni güncelleme geldi</Text>
                                    <Text className='text-secondary text-[10px] mt-[3px]'>V1.4.3</Text>
                                </View>
                            </View>
                            <MaterialIcons name="chevron-right" size={24} color="#343A40" />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}
