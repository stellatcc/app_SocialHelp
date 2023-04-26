import { useCallback, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Modal, SafeAreaView, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


SplashScreen.preventAutoHideAsync();

const data = [
    { cor: 'branco' },
    { cor: 'branco' },
  ];


export function Tela3({ navigation }) {
    return (
        <>
            <Text style={styles.text}>Cadastro Ong's</Text>
            <View style={styles.boxYellow}>
                <Text style={styles.nome}>Nome:</Text>
                <TextInput style={styles.InputNome}></TextInput>
                <Text style={styles.nomeOng}>Nome da ONG:</Text>
                <TextInput style={styles.InputOng}></TextInput>
                <Text style={styles.email}>E-mail:</Text>
                <TextInput style={styles.InputEmail}></TextInput>
                <Text style={styles.numero}>Número de contato:</Text>
                <TextInput style={styles.InputContato}></TextInput>
                <Text style={styles.ajuda}>Forma de Ajuda:</Text>
                <View style={{position: 'absolute', left: 20, bottom: 250, flexDirection:'row', width:500, height: 100}}>
                <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={styles.branco} onPress={()=>{trocaEstilo()}}></TouchableOpacity>
                    <Image></Image>
                    </View>
                    <View style={{flexDirection:'row', left:100}}>
                        <TouchableOpacity style={styles.branco} onPress={()=>{trocaEstilo()}}></TouchableOpacity>
                    <Image></Image>
                    </View>
                </View>
                <TouchableOpacity style={styles.botaoCadastro}
                    onPress={() => { navigation.navigate("TelaOng2"); }}
                >
                    <Text style={styles.textCadastro}>Cadastre-se!</Text>
                </TouchableOpacity>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    text: {
        position: 'absolute',
        width: 322,
        height: 49,
        left: 19,
        top: 10,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 40,
        lineHeight: 48
    },
    boxYellow: {
        position: 'absolute',
        width: 420,
        height: 772,
        left: 0,
        top: 60,
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
        top: 130,
        backgroundColor: '#FFFFE0',
        borderRadius: 20
    },
    email: {
        position: 'absolute',
        width: 244.18,
        height: 36,
        left: 46,
        top: 170,
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
        top: 210,
        backgroundColor: '#FFFFE0',
        borderRadius: 20
    },
    numero: {
        position: 'absolute',
        width: 295,
        height: 36,
        left: 46,
        top: 260,
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
        top: 300,
        backgroundColor: '#FFFFE0',
        borderRadius: 20
    },
    ajuda: {
        position: 'absolute',
        width: 295,
        height: 36,
        left: 46,
        top: 340,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#FFFFFF'
    },
    preto: {
        backgroundColor: 'black',
        width:40, 
        height: 40,
        borderRadius:60
    },
    branco: {
        backgroundColor: 'white',
        width:40, 
        height: 40,
        borderRadius:60
    }













})