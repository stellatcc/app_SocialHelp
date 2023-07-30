import { StyleSheet, Text, View, TextInput, ScrollView, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { TouchableOpacity } from 'react-native';

SplashScreen.preventAutoHideAsync();

export function TelaNecessitados6({ navigation }) {
    return (
        <SafeAreaView style={styles.fundo}>
            <ScrollView>
                <Text style={styles.text}>Entre em contato pelo {'\n'}número ou E-mail forne{'\n'}cido!</Text>
                <Text style={styles.nome}>Nome:</Text>
                <TextInput style={styles.InputNome}></TextInput>
                <Text style={styles.numero}>Número de contato:</Text>
                <TextInput style={styles.InputContato}></TextInput>
                <Text style={styles.descricao}>O que você precisa?</Text>
                <TextInput style={styles.InputDescricao}></TextInput>
                <Text style={styles.qtd}>Quantidade de pessoas {'\n'}na familia:</Text>
                <TextInput style={styles.InputQtd}></TextInput>
                <TouchableOpacity style={styles.proximo}
                    onPress={() => { navigation.navigate("TelaNecessitados3"); }}
                >
                    <Image style={{ width: 50, height: 50, top: 55, right: 150 }} source={require('@assets/img14.png')}></Image>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text: {
        left: 42,
        marginTop: 20,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        color: '#000'
    },
    nome: {
        position: 'relative',
        left: 45,
        marginTop: 20,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#000'
    },

    InputNome: {
        position: 'relative',
        width: 295,
        height: 34.86,
        left: 45,
        marginTop: 10,
        backgroundColor: '#5BC0EB',
        borderRadius: 20,
    },

    numero: {
        position: 'relative',
        left: 45,
        marginTop: 20,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#000'
    },

    InputContato: {
        position: 'relative',
        width: 295,
        height: 38.73,
        left: 45,
        marginTop: 12,
        backgroundColor: '#5BC0EB',
        borderRadius: 20
    },

    textAjuda: {
        position: 'relative',
        width: 235,
        height: 49,
        left: 70,
        top: 10,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 40,
        lineHeight: 48
    },

    descricao: {
        position: 'relative',
        left: 45,
        marginTop: 20,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#000'
    },
    InputDescricao: {
        position: 'relative',
        width: 295,
        left: 45,
        height: 100,
        marginTop: 12,
        backgroundColor: '#5BC0EB',
        borderRadius: 20
    },
    qtd: {
        position: 'relative',
        left: 45,
        marginTop: 20,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#000'
    },
    InputQtd: {
        position: 'relative',
        width: 295,
        left: 45,
        height: 38.73,
        marginTop: 12,
        backgroundColor: '#5BC0EB',
        borderRadius: 20
    },
    proximo: {
        position: 'absolute',
        width: 295,
        height: 77,
        left: 180,
        top: 650,
    },

    fundo: {
        backgroundColor: '#FFFFD8',
        flex: 1
    }
});