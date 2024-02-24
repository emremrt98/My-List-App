import React from 'react'
import UserStack from './UserStack';
import AuthStack from './AuthStack';
import Loader from '../components/shared/Loader';
import { useSelector } from 'react-redux'
import { StatusBar } from 'react-native';



export default function NavigationStack() {
    const { loader } = useSelector((state) => state.general);
    const isLogin = false;

    return (
        <>
            {
                isLogin ? <UserStack /> : <AuthStack />
            }
            {
                loader && <Loader loader={loader} />
            }
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
        </>
    )
}

