import { StyleSheet, Text, View, TextInput, Image, Modal, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link, animateScroll as scroll } from "react-scroll";




SplashScreen.preventAutoHideAsync();



export function TelaOng({ navigation }) {
    return (
        <>  
            <View style={{ flexDirection: 'row', height: 0}}>
                <Text style={styles.text}>Cadastro Ong's</Text>
                <Image style={{width:150, height:150, left:270, bottom:20}}source={require("@assets/img11.png")}></Image>
            </View>
            <ScrollView contentContainerStyle={styles.boxYellow}>
                <Text style={styles.nome}>Nome:</Text>
                <TextInput style={styles.InputNome}></TextInput>
                <Text style={styles.nomeOng}>Nome da ONG:</Text>
                <TextInput style={styles.InputOng}></TextInput>
                <Text style={styles.email}>E-mail:</Text>
                <TextInput style={styles.InputEmail}></TextInput>
                <Text style={styles.numero}>Número de contato:</Text>
                <TextInput style={styles.InputContato}></TextInput>
                <Text style={styles.ajuda}>Forma de Ajuda:</Text>
                <View style={{ position: 'absolute', left: 20, bottom: 220, flexDirection: 'row', width: 500, height: 100 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.branco} onPress={() => { trocaEstilo() }}></TouchableOpacity>
                        <Image></Image>
                    </View>
                    <View style={{ flexDirection: 'row', left: 100 }}>
                        <TouchableOpacity style={styles.branco} onPress={() => { trocaEstilo() }}></TouchableOpacity>
                        <Image></Image>
                    </View>
                </View>
                <TouchableOpacity style={styles.botaoCadastro}
                    onPress={() => { navigation.navigate("TelaOng2"); }}
                >
                    <Text style={styles.textCadastro}>Cadastre-se!</Text>
                </TouchableOpacity>
            </ScrollView>
        </>

    )
}




const styles = StyleSheet.create({
    text: {
        position: 'absolute',
        width: 322,
        height: 49,
        left: 19,
        top: 20,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 40,
        lineHeight: 48
    },
    
    boxYellow: {
        position: 'absolute',
        width: 415,
        height: 772,
        left: 0,
        top: 85,
        backgroundColor: '#F48C06',
        borderRadius: 29
    },
    nome: {
        position: 'absolute',
        width: 221,
        height: 36,
        left: 46,
        top: 10,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#FFFFFF'
    },
    InputNome: {
        position: 'absolute',
        width: 295,
        height: 37,
        left: 46,
        top: 50,
        backgroundColor: '#FFFFE0',
        borderRadius: 20,
    },
    nomeOng: {
        position: 'absolute',
        width: 244.18,
        height: 33.33,
        left: 46,
        top: 90,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#FFFFFF'
    },
    InputOng: {
        position: 'absolute',
        width: 295,
        height: 37,
        left: 46,
        top: 140,
        backgroundColor: '#FFFFE0',
        borderRadius: 20
    },
    email: {
        position: 'absolute',
        width: 244.18,
        height: 36,
        left: 46,
        top: 190,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#FFFFFF'
    },
    InputEmail: {
        position: 'absolute',
        width: 295,
        height: 37,
        left: 46,
        top: 235,
        backgroundColor: '#FFFFE0',
        borderRadius: 20
    },
    numero: {
        position: 'absolute',
        width: 295,
        height: 36,
        left: 46,
        top: 280,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#FFFFFF',
    },
    InputContato: {
        position: 'absolute',
        width: 295,
        height: 37,
        left: 46,
        top: 330,
        backgroundColor: '#FFFFE0',
        borderRadius: 20
    },
    ajuda: {
        position: 'absolute',
        width: 295,
        height: 36,
        left: 46,
        top: 380,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#FFFFFF'
    },

    preto: {
        backgroundColor: 'black',
        width: 20,
        height: 20,
        borderRadius: 60
    },

    branco: {
        backgroundColor: 'white',
        width: 20,
        height: 20,
        borderRadius: 60
    },

    botaoCadastro: {
        position: 'absolute',
        width: 295,
        height: 77,
        left: 46,
        top: 520,
        backgroundColor: '#FFFFE0',
        borderRadius: 20,
    },

    textCadastro: {
        position: 'absolute',
        width: 235,
        height: 49,
        left: 30,
        top: 10,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 40,
        lineHeight: 48
    },

    

})