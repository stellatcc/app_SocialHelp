import { StyleSheet, Text, View, TextInput, ScrollView, SafeAreaView} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export function TelaOng3({ navigation }) {
    return (
        <SafeAreaView style={styles.fundo2}>
            <ScrollView>
                <Text style={styles.text3}>Entre em contato com a pessoa pelo número fornecido!</Text>
                <Text style={styles.nome2}>Nome:</Text>
                <TextInput style={styles.InputNome2}></TextInput>
                <Text style={styles.numero2}>Número de contato:</Text>
                <TextInput style={styles.InputContato2}></TextInput>
                <Text style={styles.familia}>Possui familia?</Text>
                <Text style={styles.Qtd}>Quantidade de integrantes:</Text>
                <TextInput style={styles.InputQtd}></TextInput>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
text3: {
    left: 42,
    marginTop: 20,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 32,
    color: '#FFFFFF'
},

nome2: {
    position:'relative',
    left: 45,
    marginTop: 25,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: '#FFFFFF'
},

InputNome2: {
    position:'relative',
    width: 295,
    height: 34.86,
    left: 45,
    marginTop: 10,
    backgroundColor: '#FFFFE0',
    borderRadius: 20,
},

numero2: {
    position:'relative',
    left: 45,
    marginTop: 40,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: '#FFFFFF'
},

InputContato2: {
    position:'relative',
    width: 295,
    height: 38.73,
    left: 45,
    marginTop: 12,
    backgroundColor: '#FFFFE0',
    borderRadius: 20
},

familia: {
    position:'relative',
    left: 45,
    marginTop: 35,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: '#FFFFFF'
},

Qtd: {
    position:'relative',
    left: 45,
    marginTop: 60,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: '#FFFFFF'
},

InputQtd: {
    position:'relative',
    width: 295,
    left:45,
    height: 38.73,
    marginTop: 60,
    backgroundColor: '#FFFFE0',
    borderRadius: 20
},

    fundo2: {
        backgroundColor: '#F48C06',
        flex: 1
    }
});