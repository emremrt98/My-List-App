import React from 'react'
import UserStack from './UserStack';
import AuthStack from './AuthStack';
import Loader from '../components/shared/Loader';
import { useSelector } from 'react-redux'



export default function NavigationStack() {
    const { loader } = useSelector((state) => state.general);
    const isLogin = true;

    return (
        <>
            {
                isLogin ? <UserStack /> : <AuthStack />
            }
            {
                loader && <Loader loader={loader} />
            }
        </>
    )
}

