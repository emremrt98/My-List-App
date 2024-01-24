import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/home/Header';
export default function HomeScreen() {
    return (
        <SafeAreaView className='flex-1'>
            <Header />
        </SafeAreaView>
    )
}

