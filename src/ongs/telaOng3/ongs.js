import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { useState } from 'react';
import { url } from '@banco/url.js';


export function TelaOng3({ navigation }) {
    const [data, setData] = useState([]);
    const mostrarDados = async () => {
        const response = await axios.get(url + "/SocialHelp/select.php");
        setData(response.data.result);
    }
    mostrarDados();

    function cards(value, index, array) {
        return (
            <TouchableOpacity key={index} style={styles.cards} onPress={() => { navigation.navigate("TelaOng4", value); }}>
                <Image style={{ width: 80, height: 80, top: 30, left: 30 }} source={require('@assets/img4.png')} />
                <Text style={styles.nome}>{value.nome}</Text>
            </TouchableOpacity>

        );
    }
    return (
        <View style={styles.fundo}>
            <>
                <View style={{ flexDirection: 'row', height: 0 }}>
                    <Text style={styles.text}>Ajude quem precisa!</Text>

                </View>

                <ScrollView contentContainerStyle={styles.boxWhite}>
                    {data.map(cards)}
                    <TouchableOpacity onPress={() => { navigation.navigate("TelaOng4");}}>
                        <Image style={{ width: 35, height: 35, bottom:2.5, left:100}} source={require('@assets/img7.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("TelaOng6");}}>
                        <Image style={{ width: 35, height: 35, left:250, bottom:35}} source={require('@assets/img8.png')} />
                    </TouchableOpacity>
                </ScrollView>

            </>
        </View>
    )

}

const styles = StyleSheet.create({
    text: {
        position: 'absolute',
        width: 322,
        height: 96,
        left: 47,
        top: 8,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 37,
        lineHeight: 48,
        color: '#000'
    },

    fundo: {
        backgroundColor: '#FDE74C',
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

    cards: {
        position: 'relative',
        width: 283,
        height: 176,
        left: 47,
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: '#FDE74C',
        borderRadius: 20
    },

    nome: {
        position: 'relative',
        width: 136,
        height: 78,
        left: 120,
        bottom:20,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#000'
    }

})
