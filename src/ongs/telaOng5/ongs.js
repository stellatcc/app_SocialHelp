import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function TelaOng5({ navigation }) {
    return (
        <>
            <View style={styles.conteiner}>
                <Text style={styles.text}>Obrigada! Você {'\n'}ajudou Nome do {'\n'}fulano.</Text>
                <Image style={{ width: 250, height: 250, top: 30 }} source={require('@assets/img13.png')} ></Image>
                <TouchableOpacity style={styles.proximo}
                    onPress={() => { navigation.navigate("TelaOng4"); }}
                >
                    <Image style={{ width: 50, height: 50, top: 55, right: 150 }} source={require('@assets/img14.png')}></Image>
                </TouchableOpacity>

            </View>

        </>
    );
}


const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#FAEDCD',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        position: 'absolute',
        left: 19,
        top: 20,
        fontStyle: 'normal',
        fontSize: 40,
        lineHeight: 48
    }
})