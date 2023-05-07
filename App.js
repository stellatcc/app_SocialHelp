import { StyleSheet, Text, View, TextInput, Image, Modal, SafeAreaView, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

<<<<<<< HEAD
{/*importar telas */ }
import { TelaOng } from '@telasOngs/telaOng/ongs.js';
import { TelaOng2 } from '@telasOngs/telaOng2/ongs.js';
import { TelaOng3 } from '@telasOngs/telaOng3/ongs.js';
=======
{/*importar telas */}
import {TelaOng} from './src/ongs/App.js';
import { TelaOng2 } from './src/ongs/App.js';
import { TelaOng3 } from './src/ongs/App.js';
>>>>>>> 3237f20 (vaersão 2.0)

SplashScreen.preventAutoHideAsync();

{/*Tela de login (Text:cria texto, View:cria as telas ou caixinhas que podem ter texto ou imagem,
TextInput:cria uma caixinha de texto, TouchbleOpacity:cria um botão, onPress:deixa o botão clicavél,
style:cria um estilo para cada coisa ex:um estilo de texto, com esse estilo vc muda o nome, tamanho, cor etc)*/}
function Tela1({ navigation }) {
  return (
    <>
      <Text style={styles.text}>Bem vindo!</Text>
      <Image style={{ width: 150, height: 150, left:250, bottom: 15}} source={require('@assets/img9.png')} />
      <View style={styles.boxRed}>
        <Text style={styles.usuario}>Usuario:</Text>
        <TextInput style={styles.InputUsuario}></TextInput>
        <Text style={styles.senha}>Senha:</Text>
        <TextInput style={styles.InputSenha}></TextInput>
        <TouchableOpacity style={styles.botaoLogin}
          onPress={() => { navigation.navigate("Tela2"); }}
        >
          <Text style={styles.textLogin}>Entre!</Text>
        </TouchableOpacity>
      </View>

    </>
  )
}

function Tela2({ navigation }) {
  return (
    <>
      <View style={styles.container} >
        <View style={styles.identificar}>
          <Text style={styles.textIdentificar}>Quem é você?</Text>
<<<<<<< HEAD
          <View style={{ position: 'absolute', width: 500, height: 120, top: 380, paddingLeft: 110, paddingTop: 10, flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => { navigation.navigate("TelaOng"); }}>
              <Image style={{ width: 75, height: 75, right:20}} source={require('@assets/img1.png')} />
              <Text style={styles.textButton1}>Ong</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("TelaVoluntario"); }}>
              <Image style={{ width: 75, height: 75 }} source={require('@assets/img2.png')} />
              <Text style={styles.textButton2}>Voluntário</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("TelaNecessitado"); }}>
              <Image style={{ width: 75, height: 75, left:20 }} source={require('@assets/img3.png')} />
              <Text style={styles.textButton3}>Necessitado</Text>
            </TouchableOpacity>
=======
          <View style={{ position: 'absolute', width: 500, height: 120, top: 380, paddingLeft: 110, paddingTop:10,  flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => {navigation.navigate("TelaOng");}}>
            <Image style={{ width: 75, height: 75}} source={require('./assets/img1.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate("TelaVoluntario");}}>
            <Image style={{ width: 75, height: 75}} source={require('./assets/img2.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate("TelaNecessitado");}}>
            <Image style={{ width: 75, height: 75}} source={require('./assets/img3.png')}/>
          </TouchableOpacity>
>>>>>>> 3237f20 (vaersão 2.0)
          </View>



        </View>
      </View>

    </>
  )
}

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  /* const [fontsLoaded] = useFonts({
     'Fredoka-One': require('./assets/fonts/FredokaOne-Regular.ttf'),
   });
 
   const onLayoutRootView = useCallback(async () => {
     if (fontsLoaded) {
       await SplashScreen.hideAsync();
     }
   }, [fontsLoaded]);
 
   if (!fontsLoaded) {
     return null;
   }
 
   onLayoutRootView();*/

  SplashScreen.hideAsync();

<<<<<<< HEAD
  {/*funções para criar as telas*/ }
=======
  {/*funções para criar as telas*/}
>>>>>>> 3237f20 (vaersão 2.0)
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitle: ''}} initialRouteName="Tela">
        <Stack.Screen name="Tela" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
        <Stack.Screen name="TelaOng" component={TelaOng} />
        <Stack.Screen name="TelaOng2" component={TelaOng2} />
        <Stack.Screen name="TelaOng3" component={TelaOng3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


{/*CSS(estilização das telas e dos componentes das telas
mudar cor,formato, tipo de letra etc) */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color:'#000',
    fontStyle: 'normal',
    fontFamily: 'normal',
    fontWeight: 400,
    fontSize: 40,
    lineHeight: 48,
    position: 'absolute',
    width: 227,
    height: 49,
    left: 27,
    top: 31
  },

  boxRed: {
    position: 'absolute',
    width: 415,
    height: 772,
    left: 0,
    top: 100,
    backgroundColor: '#DC2F02',
    borderRadius: 29
  },
  usuario: {
    position: 'absolute',
    width: 221,
    height: 36,
    left: 61,
    top: 100,
    fontFamily: 'normal',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: '#000000',
  },
  InputUsuario: {
    position: 'absolute',
    width: 267,
    height: 37,
    left: 61,
    top: 150,
    backgroundColor: '#FFFFE0',
    borderRadius: 20,
  },
  senha: {
    position: 'absolute',
    width: 221,
    height: 36,
    left: 61,
    top: 200,
    fontFamily: 'normal',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: '#000000',
  },
  InputSenha: {
    position: 'absolute',
    width: 267,
    height: 37,
    left: 61,
    top: 260,
    backgroundColor: '#FFFFE0',
    borderRadius: 20,
  },
  botaoLogin: {
    position: 'absolute',
    width: 295,
    height: 77,
    left: 46,
    top: 400,
    backgroundColor: '#FFFFE0',
    borderRadius: 20,
  },
  textLogin: {
    position: 'absolute',
    textAlign: 'center',
    width: 235,
    height: 49,
    left: 25,
    top: 10,
    fontFamily: 'normal',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 40,
    lineHeight: 50,
    color: '#000000',
  },
  identificar: {
    position: 'relative',
    width: 450,
    height: 850,
    backgroundColor: '#6A040F',

  },
  textIdentificar: {
    position: 'absolute',
    width: 350,
    height: 51,
    left: 90,
    top: 312,
    fontFamily: 'normal',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 40,
    lineHeight: 48,
    color: '#FFFFFF',
  },

  textButton1:{
    color:'#FFFFFF'
  },

  textButton2:{
    color:'#FFFFFF'
  },

  textButton3:{
    color:'#FFFFFF',
    left:20
  }

});
