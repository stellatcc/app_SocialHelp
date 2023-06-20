import { StyleSheet, Text, View, TextInput, Image, Modal, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link, animateScroll as scroll } from "react-scroll";




SplashScreen.preventAutoHideAsync();


export function TelaOng2({ navigation }) {
    return (
        <View style={styles.fundo}>
            <>
                <View style={{ flexDirection: 'row', height: 0 }}>
                <Text style={styles.text2}>Ajude quem precisa!</Text>
                    <Image style={{ width: 150, height: 150, left: 270, bottom: 20 }} source={require("@assets/img10.png")}></Image>
                </View>
             
                <ScrollView contentContainerStyle={styles.boxWhite}>
                    <TouchableOpacity style={styles.boxPeople} onPress={() => { navigation.navigate("TelaOng3"); }}>
                        <Image style={{ width: 80, height: 80, top: 30, left: 30 }} source={require('@assets/img4.png')} />
                        <Text style={styles.nomePeople}>Nome da Pessoa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxPeople2} onPress={() => { navigation.navigate("TelaOng3"); }}>
                        <Image style={{ width: 80, height: 80, top: 30, left: 30 }} source={require('@assets/img5.png')} />
                        <Text style={styles.nomePeople2}>Nome da Pessoa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxPeople3} onPress={() => { navigation.navigate("TelaOng3"); }}>
                        <Image style={{ width: 80, height: 80, top: 30, left: 30 }} source={require('@assets/img6.png')} />
                        <Text style={styles.nomePeople3}>Nome da Pessoa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ width: 40, height: 40, top: 610, left: 100 }} source={require('@assets/img7.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ width: 40, height: 40, top: 575, left: 250 }} source={require('@assets/img8.png')} />
                    </TouchableOpacity>
                </ScrollView>
            </>
        </View>
    )

}

const styles = StyleSheet.create({
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
})
