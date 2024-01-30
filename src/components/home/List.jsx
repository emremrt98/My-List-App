import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Section from '../shared/Section';
import { Feather } from '@expo/vector-icons';
import ListItem from '../shared/ListItem';

export default function List() {
    return (
        <Section>

            <View className='flex-row justify-between'>
                <Text className='text-[16px] text-primary font-medium'>Yapılacaklar Listesi</Text>
                <TouchableOpacity className='flex-row gap-[7px] items-center'>
                    <Feather name="plus-circle" size={16} color="#3B5BDB" />
                    <Text className='text-main text-[13px]'>Task Ekle</Text>
                </TouchableOpacity>
            </View>

            <View className='mt-[10px]'>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </View>
            <TouchableOpacity className='mt-[10px]'>
                <Text className='text-center text-secondary text-[11px] underline'>Hedefini Gör</Text>
            </TouchableOpacity>
        </Section>
    )
}

const styles = StyleSheet.create({})