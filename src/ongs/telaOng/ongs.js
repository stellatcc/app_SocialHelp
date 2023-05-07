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
<<<<<<< HEAD:src/ongs/telaOng/ongs.js
        <>  
            <View style={{ flexDirection: 'row', height: 0}}>
                <Text style={styles.text}>Cadastro Ong's</Text>
                <Image style={{width:150, height:150, left:270, bottom:20}}source={require("@assets/img11.png")}></Image>
            </View>
=======
        <>
            <Text style={styles.text}>Cadastro Ong's</Text>
>>>>>>> 3237f20 (vaersão 2.0):src/ongs/App.js
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

<<<<<<< HEAD:src/ongs/telaOng/ongs.js
=======
    )
}
export function TelaOng2({ navigation }) {
    return (
        <View style={styles.fundo}>
            <>

                <Text style={styles.text2} >Ajude quem precisa!</Text>

                <ScrollView contentContainerStyle={styles.boxWhite}>
                    <View style={styles.boxPeople}>
                        <Image style={{ width: 80, height: 80, top: 30, left: 30 }} source={require('../../assets/img4.png')} />
                        <Text style={styles.nomePeople}>Nome da Pessoa</Text>
                    </View>
                    <View style={styles.boxPeople2}>
                        <Image style={{ width: 80, height: 80, top: 30, left: 30 }} source={require('../../assets/img5.png')} />
                        <Text style={styles.nomePeople2}>Nome da Pessoa</Text>
                    </View>
                    <View style={styles.boxPeople3}>
                        <Image style={{ width: 80, height: 80, top: 30, left: 30 }} source={require('../../assets/img6.png')} />
                        <Text style={styles.nomePeople3}>Nome da Pessoa</Text>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate("TelaOng3"); }}>
                        <Image style={{ width: 40, height: 40, top: 610, left: 100 }} source={require('../../assets/img7.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate(""); }}>
                        <Image style={{ width: 40, height: 40, top: 575, left: 250 }} source={require('../../assets/img8.png')} />
                    </TouchableOpacity>
                </ScrollView>
            </>
        </View>
    )

}

export function TelaOng3({ navigation }) {
    return (
        <View style={styles.fundo2}>
            <>
                <View>
                    <Text style={styles.text3} >Entre em contato com a pessoa pelo número fornecido!</Text>
                    <Text style={styles.nome2}>Nome:</Text>
                    <TextInput style={styles.InputNome2}></TextInput>
                    <Text style={styles.numero2}>Número de contato:</Text>
                    <TextInput style={styles.InputContato2}></TextInput>
                    <Text style={styles.familia}>Possui familia?</Text>
                    <Text style={styles.Qtd}>Quantidade de integrantes:</Text>
                    <TextInput style={styles.InputQtd}></TextInput>

                </View>

            </>
        </View>

>>>>>>> 3237f20 (vaersão 2.0):src/ongs/App.js
    )
}



const styles = StyleSheet.create({
    text: {
        position: 'absolute',
        width: 322,
        height: 49,
        left: 19,
<<<<<<< HEAD:src/ongs/telaOng/ongs.js
        top: 20,
=======
        top: 5,
>>>>>>> 3237f20 (vaersão 2.0):src/ongs/App.js
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
<<<<<<< HEAD:src/ongs/telaOng/ongs.js
        top: 85,
=======
        top: 55,
>>>>>>> 3237f20 (vaersão 2.0):src/ongs/App.js
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
<<<<<<< HEAD:src/ongs/telaOng/ongs.js
=======

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

    text2: {
        position: 'absolute',
        width: 322,
        height: 96,
        left: 47,
        top: 8,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 37,
        lineHeight: 48,
        color: '#FFFFFF'
    },

    fundo: {
        backgroundColor: '#F48C06',
        flex: 1
    },

    boxWhite: {
        position: 'absolute',
        width: 411,
        height: 780,
        left: 0,
        top: 100,
        backgroundColor: '#FFFFD8',
        borderRadius: 29
    },

    boxPeople: {
        position: 'absolute',
        width: 283,
        height: 176,
        left: 47,
        top: 20,
        backgroundColor: '#F48C06',
        borderRadius: 20
    },

    nomePeople: {
        position: 'absolute',
        width: 136,
        height: 78,
        left: 120,
        top: 40,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#FFFFFF'

    },

    boxPeople2: {
        position: 'absolute',
        width: 283,
        height: 176,
        left: 47,
        top: 220,
        backgroundColor: '#F48C06',
        borderRadius: 20,
    },

    nomePeople2: {
        position: 'absolute',
        width: 136,
        height: 78,
        left: 120,
        top: 50,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#FFFFFF'

    },

    boxPeople3: {
        position: 'absolute',
        width: 289,
        height: 168,
        left: 47,
        top: 420,
        backgroundColor: '#F48C06',
        borderRadius: 20
    },

    nomePeople3: {
        position: 'absolute',
        width: 136,
        height: 78,
        left: 120,
        top: 40,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#FFFFFF'
    },

    fundo2: {
        backgroundColor: '#F48C06',
        flex: 1
    },

    text3: {
        position: 'absolute',
        width: 320,
        height: 132,
        left: 42,
        top: 25,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        color: '#FFFFFF'
    },

    nome2: {
        position: 'absolute',
        width: 221,
        height: 33.92,
        left: 45,
        top: 150,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#FFFFFF'
    },

    InputNome2: {
        position: 'absolute',
        width: 295,
        height: 34.86,
        left: 45,
        top: 200,
        backgroundColor: '#FFFFE0',
        borderRadius: 20,
    },

    numero2: {
        position: 'absolute',
        width: 295,
        height: 37.69,
        left: 45,
        top: 240,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#FFFFFF'
    },

    InputContato2: {
        position: 'absolute',
        width: 295,
        height: 38.73,
        left: 45,
        top: 295,
        backgroundColor: '#FFFFE0',
        borderRadius: 20
    },

    familia: {
        position: 'absolute',
        width: 295,
        height: 33.92,
        left: 45,
        top: 340,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#FFFFFF'
    },

    Qtd: {
        position: 'absolute',
        width: 295,
        height: 75.37,
        left: 50,
        top: 430,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#FFFFFF'
    },

    InputQtd: {
        position: 'absolute',
        width: 295,
        height: 38.73,
        left: 45,
        top: 520,
        backgroundColor: '#FFFFE0',
        borderRadius: 20
    }
>>>>>>> 3237f20 (vaersão 2.0):src/ongs/App.js

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