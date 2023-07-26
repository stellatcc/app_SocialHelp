import { StyleSheet, Text, View, TextInput, ScrollView, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { TouchableOpacity } from 'react-native';

SplashScreen.preventAutoHideAsync();

export function TelaPessoas5({ navigation }) {
    return (
        <SafeAreaView style={styles.fundo}>
            <ScrollView>
                <Text style={styles.text}>Entre em contato pelo número ou E-mail {'\n'}fornecido!</Text>
                <Text style={styles.nomeOng}>Nome da ONG:</Text>
                <TextInput style={styles.InputNome}></TextInput>
                <Text style={styles.numero}>Número de contato:</Text>
                <TextInput style={styles.InputContato}></TextInput>
                <Text style={styles.email}>E-mail:</Text>
                <TextInput style={styles.InputEmail}></TextInput>
                <TouchableOpacity style={styles.botaoAjuda}
                        onPress={() => { navigation.navigate("TelaPessoas6"); }}
                    >
                        <Text style={styles.textAjuda}>Ajudei!</Text>
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
nomeOng: {
    position:'relative',
    left: 45,
    marginTop: 25,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: '#000'
},

InputNome: {
    position:'relative',
    width: 295,
    height: 34.86,
    left: 45,
    marginTop: 10,
    backgroundColor: '#FFFFE0',
    borderRadius: 20,
},

numero: {
    position:'relative',
    left: 45,
    marginTop: 20,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: '#000'
},

InputContato: {
    position:'relative',
    width: 295,
    height: 38.73,
    left: 45,
    marginTop: 12,
    backgroundColor: '#FFFFE0',
    borderRadius: 20
},

email: {
    position:'relative',
    left: 45,
    marginTop: 20,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: '#000'
},

InputEmail: {
    position:'relative',
    width: 295,
    left:45,
    height: 38.73,
    marginTop: 12,
    backgroundColor: '#FFFFE0',
    borderRadius: 20
},

ajuda: {
    position:'relative',
    left: 45,
    marginTop: 12,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: '#000'
},

botaoAjuda: {
    position: 'relative',
    width: 295,
    height: 77,
    left: 46,
    marginTop: 30,
    backgroundColor: '#FFFFE0',
    borderRadius: 30
},

textAjuda:{
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




    fundo: {
        backgroundColor: '#9BC53D',
        flex: 1
    }
});