import { Button, Text, View } from 'react-native'
import React from 'react'

export default function LoginScreen({navigation}) {
    return (
        <View>
            <Text>LoginScreen</Text>
            <Button
                onPress={()=>navigation.navigate('Register')}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}
