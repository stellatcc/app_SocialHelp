import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export function TelaOng({ navigation }) {
    return (
        <>
            <View style={styles.conteiner}>
                <Text style={styles.text}>Cadastro Ong's</Text>
                <ScrollView contentContainerStyle={styles.boxWhite}>
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
                    <TouchableOpacity style={styles.proximo}
                        onPress={() => { navigation.navigate("TelaOng2"); }}
                    >
                        <Image style={{ width: 50, height: 50, top: 10, left: 280 }} source={require('@assets/img12.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.textConta}>Você é voluntário?</Text>
                    <Text onPress={() => { navigation.navigate("TelaPessoas"); }} style={styles.textConta2}>clique aqui</Text>
                </ScrollView>
            </View>
        </>
    )
}



const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#FDE74C',
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
        width: 221,
        height: 36,
        left: 46,
        top: 10,
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
        top: 50,
        backgroundColor: '#FDE74C',
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
        color: '#000'
    },
    InputOng: {
        position: 'absolute',
        width: 295,
        height: 37,
        left: 46,
        top: 140,
        backgroundColor: '#FDE74C',
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
        color: '#000'
    },
    InputEmail: {
        position: 'absolute',
        width: 295,
        height: 37,
        left: 46,
        top: 235,
        backgroundColor: '#FDE74C',
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
        color: '#000',
    },
    InputContato: {
        position: 'absolute',
        width: 295,
        height: 37,
        left: 46,
        top: 330,
        backgroundColor: '#FDE74C',
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
        color: '#000'
    },
    textConta:{
        position: 'relative',
        width: 221,
        height: 36,
        left: 61,
        top: 600,
        fontFamily: 'normal',
        fontStyle: 'normal',
        fontSize: 20,
        color: '#000000'
      },
    
    textConta2:{
        position: 'relative',
        width: 221,
        height: 36,
        left: 230,
        top: 564,
        fontFamily: 'normal',
        fontStyle: 'normal',
        fontSize: 20,
        color: '#9BC53D'
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