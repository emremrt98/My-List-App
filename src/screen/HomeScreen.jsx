import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/home/Header';
import List from '../components/home/List';
import PremiumBanner from '../components/shared/PremiumBanner';
export default function HomeScreen() {
    return (
        <SafeAreaView className='flex-1'>
            <Header />
            <List />
            <PremiumBanner />
        </SafeAreaView>
    )
}

