import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export function TelaPessoas({ navigation }) {
    return (
        <>
            <View style={styles.conteiner}>
                <Text style={styles.text}>Cadastro Pessoas</Text>
                <ScrollView contentContainerStyle={styles.boxWhite}>
                    <Text style={styles.nome}>Nome:</Text>
                    <TextInput style={styles.InputNome}></TextInput>
                    <Text style={styles.email}>E-mail:</Text>
                    <TextInput style={styles.InputEmail}></TextInput>
                    <Text style={styles.numero}>Número de contato:</Text>
                    <TextInput style={styles.InputContato}></TextInput>
                    <Text style={styles.ajuda}>Forma de Ajuda:</Text>
                    <View style={{ position: 'absolute', left: 20, bottom: 210, flexDirection: 'row', width: 500, height: 100 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.branco} onPress={() => { trocaEstilo() }}></TouchableOpacity>
                            <Image></Image>
                        </View>
                        <View style={{ flexDirection: 'row', left: 100 }}>
                            <TouchableOpacity style={styles.branco} onPress={() => { trocaEstilo() }}></TouchableOpacity>
                            <Image></Image>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.proximo}
                        onPress={() => { navigation.navigate("TelaPessoas2"); }}
                    >
                        <Image style={{ width: 50, height: 50, bottom: 5, left: 280 }} source={require('@assets/img12.png')}></Image>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
    )
}



const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#9BC53D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        position: 'absolute',
        left: 19,
        top:-50,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 40,
        lineHeight: 150
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
        width: 221,
        height: 36,
        left: 46,
        top: 50,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#000'
    },
    InputNome: {
        position: 'absolute',
        width: 295,
        height: 37,
        left: 46,
        top: 100,
        backgroundColor: '#9BC53D',
        borderRadius: 20,
    },
    
    email: {
        position: 'absolute',
        width: 244.18,
        height: 36,
        left: 46,
        top: 150,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#000'
    },
    InputEmail: {
        position: 'absolute',
        width: 295,
        height: 37,
        left: 46,
        top: 200,
        backgroundColor: '#9BC53D',
        borderRadius: 20
    },
    numero: {
        position: 'absolute',
        width: 295,
        height: 36,
        left: 46,
        top: 250,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#000',
    },
    InputContato: {
        position: 'absolute',
        width: 295,
        height: 37,
        left: 46,
        top: 300,
        backgroundColor: '#9BC53D',
        borderRadius: 20
    },
    ajuda: {
        position: 'absolute',
        width: 295,
        height: 36,
        left: 46,
        top: 350,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#000'
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
    proximo: {
        position: 'absolute',
        width: 295,
        height: 77,
        left: 46,
        top: 520,
    }
})