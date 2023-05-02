import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View} from 'react-native';

export default function Settings(){
    return(
        <View style={style.container}>
            <Text>Setup time!</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
