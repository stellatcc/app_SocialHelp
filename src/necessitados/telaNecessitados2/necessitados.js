import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export function TelaNecessitados2({ navigation }) {
    return (
        <>
            <View style={styles.conteiner}>
                <Text style={styles.text}>Por último</Text>
                <ScrollView contentContainerStyle={styles.boxWhite}>
                    <Text style={styles.nome}>Digite um nome de {'\n'} usuario:</Text>
                    <TextInput style={styles.InputNome}></TextInput>
                    <Text style={styles.senha}>Digite uma {'\n'}senha:</Text>
                    <TextInput style={styles.InputSenha}></TextInput>
                    <TouchableOpacity style={styles.botaoCadastro}
                        onPress={() => { navigation.navigate("TelaNecessitados3"); }}
                    >
                        <Text style={styles.textCadastro}>Cadastre-se!</Text>
                    </TouchableOpacity>
                   
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#5BC0EB',
        alignItems: 'center',
        justifyContent: 'center',
    },

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

    boxWhite: {
        position: 'relative',
        width: 415,
        height: 772,
        left: 0,
        top: 85,
        backgroundColor: '#FFFFD8',
        borderRadius: 29
    },

    nome: {
        position: 'absolute',
        left: 46,
        top: 100,
        fontStyle: 'normal',
        fontSize:32,
        color: '#000'
    },
    InputNome: {
        position: 'absolute',
        width: 295,
        height: 37,
        left: 46,
        top: 200,
        backgroundColor: '#5BC0EB',
        borderRadius: 20,
    },

    senha: {
        position: 'absolute',
        left: 46,
        top: 250,
        fontStyle: 'normal',
        fontSize:32,
        color: '#000'
    },
    InputSenha: {
        position: 'absolute',
        width: 295,
        height: 37,
        left: 46,
        top: 350,
        backgroundColor: '#5BC0EB',
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
    
    botaoCadastro: {
        position: 'absolute',
        width: 295,
        height: 77,
        left: 46,
        top: 450,
        backgroundColor:'#5BC0EB',
        borderRadius:30
    },
})