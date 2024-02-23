import { Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import ListItem from '../shared/ListItem';
import ProgressBar from '../shared/ProgressBar';


export default function Goal({ setModalVisible }) {
    // const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height / 2 + 30;
    return (
        <View className='bg-[#343a4080] w-full h-full justify-center items-center'>
            <View style={{ maxHeight: height }} className="w-11/12 h-auto bg-white rounded-[6px]">
                <ScrollView className='p-[10px]'>
                    <Text className='text-primary text-[16px] font-medium'>Hedefine Ulaş</Text>
                    <TouchableOpacity onPress={() => setModalVisible(false)} className='w-[32px] h-[32px] rounded-full absolute right-[5px] top-[0px]
                            justify-center items-center bg-[#F8F9FA]'>
                        <Ionicons name="close" size={20} color="#343A40" />
                    </TouchableOpacity>

                    <View className='mt-5'>
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                    </View>

                    <ProgressBar />

                    <View className='mb-5 items-center'>
                        <Text className='text-[13px] text-main font-medium'>Hedefine ulaşmana az kaldı</Text>
                    </View>
                </ScrollView>

            </View>
        </View>
    )
}


