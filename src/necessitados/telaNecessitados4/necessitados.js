import { StyleSheet, Text, View, TextInput, ScrollView, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { TouchableOpacity } from 'react-native';

SplashScreen.preventAutoHideAsync();

export function TelaNecessitados4({ navigation }) {
    return (
        <SafeAreaView style={styles.fundo}>
            <View>
                <Text style={styles.text}>Entre em contato com a pessoa pelo número fornecido!</Text>
                <Text style={styles.nome}>Nome:</Text>
                <TextInput style={styles.InputNome}></TextInput>
                <Text style={styles.numero}>Número de contato:</Text>
                <TextInput style={styles.InputContato}></TextInput>
                <Text style={styles.email}>E-mail:</Text>
                <TextInput style={styles.InputEmail}></TextInput>
                <TouchableOpacity style={styles.botaoAjuda}
                        onPress={() => { navigation.navigate("TelaPessoas5"); }}
                    >
                        <Text style={styles.textAjuda}>Ajudei!</Text>
                </TouchableOpacity>


            </View>
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
        marginTop: 25,
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
        backgroundColor: '#FFFFE0',
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
        backgroundColor: '#FFFFE0',
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

    email: {
        position: 'relative',
        left: 45,
        marginTop: 20,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#000'
    },
    InputEmail: {
        position: 'relative',
        width: 295,
        left: 45,
        height: 38.73,
        marginTop: 12,
        backgroundColor: '#FFFFE0',
        borderRadius: 20
    },
    proximo: {
        position: 'absolute',
        width: 295,
        height: 77,
        left: 340,
        top: 550,
    },

    fundo: {
        backgroundColor: '#5BC0EB',
        flex: 1
    }
});