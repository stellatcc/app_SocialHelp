import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

{/*importar telas */ }
import { TelaOng } from '@telasOngs/telaOng/ongs.js';
import { TelaOng2 } from '@telasOngs/telaOng2/ongs.js';
import { TelaOng3 } from '@telasOngs/telaOng3/ongs.js';
import { TelaOng4} from '@telasOngs/telaOng4/ongs.js';
import { TelaOng5} from '@telasOngs/telaOng5/ongs.js';
import { TelaOng6} from '@telasOngs/telaOng6/ongs.js';
import { TelaPessoas } from '@telasPessoas/telaPessoas/pessoas.js';
import { TelaPessoas2} from '@telasPessoas/telaPessoas2/pessoas.js';
import { TelaPessoas3} from '@telasPessoas/telaPessoas3/pessoas.js';
import { TelaPessoas4} from '@telasPessoas/telaPessoas4/pessoas.js';
import { TelaPessoas5} from '@telasPessoas/telaPessoas5/pessoas.js';
import { TelaPessoas6} from '@telasPessoas/telaPessoas6/pessoas.js';
import { TelaPessoas7} from '@telasPessoas/telaPessoas7/pessoas.js';
import { TelaNecessitados } from '@telasNecessitados/telaNecessitados/necessitados.js';
import { TelaNecessitados2 } from '@telasNecessitados/telaNecessitados2/necessitados.js';
import { TelaNecessitados3 } from '@telasNecessitados/telaNecessitados3/necessitados.js';
import { TelaNecessitados4 } from '@telasNecessitados/telaNecessitados4/necessitados.js';
import { TelaNecessitados5 } from '@telasNecessitados/telaNecessitados5/necessitados.js';
import { TelaNecessitados6 } from '@telasNecessitados/telaNecessitados6/necessitados.js';




SplashScreen.preventAutoHideAsync();

{/*Tela de login (Text:cria texto, View:cria as telas ou caixinhas que podem ter texto ou imagem,
TextInput:cria uma caixinha de texto, TouchbleOpacity:cria um botão, onPress:deixa o botão clicavél,
style:cria um estilo para cada coisa ex:um estilo de texto, com esse estilo vc muda o nome, tamanho, cor etc)*/}
function Tela1({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>login</Text>
        <View style={styles.boxWhite}>
          <Text style={styles.usuario}>Usuario:</Text>
          <TextInput style={styles.InputUsuario}></TextInput>
          <Text style={styles.senha}>Senha:</Text>
          <TextInput style={styles.InputSenha}></TextInput>
          <TouchableOpacity style={styles.botaoLogin}
            onPress={() => { navigation.navigate("Tela2"); }}
          >
            <Text style={styles.textLogin}>Entre!</Text>
          </TouchableOpacity>
          <Text style={styles.textConta}>Não possui conta?</Text>
          <Text onPress={() => { navigation.navigate("TelaOng"); }} style={styles.textConta2}>Cadastre-se</Text>
        </View>
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
          <View style={{ position: 'absolute', width: 500, height: 120, top: 380, paddingLeft: 110, paddingTop: 10, flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => { navigation.navigate("TelaOng"); }}>
              <Image style={{ width: 75, height: 75, right: 20 }} source={require('@assets/img1.png')} />
              <Text style={styles.textButton1}>Ong</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("TelaPessoas"); }}>
              <Image style={{ width: 75, height: 75 }} source={require('@assets/img2.png')} />
              <Text style={styles.textButton2}>Voluntário</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("TelaNecessitados"); }}>
              <Image style={{ width: 75, height: 75, left: 20 }} source={require('@assets/img3.png')} />
              <Text style={styles.textButton3}>Necessitado</Text>
            </TouchableOpacity>
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

  {/*funções para criar as telas*/ }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: '' }} initialRouteName="Tela">
        <Stack.Screen name="Tela" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
        <Stack.Screen name="TelaOng" component={TelaOng} />
        <Stack.Screen name="TelaOng2" component={TelaOng2} />
        <Stack.Screen name="TelaOng3" component={TelaOng3} />
        <Stack.Screen name="TelaOng4" component={TelaOng4} />
        <Stack.Screen name="TelaOng5" component={TelaOng5} />
        <Stack.Screen name="TelaOng6" component={TelaOng6} />
        <Stack.Screen name="TelaPessoas" component={TelaPessoas} />
        <Stack.Screen name="TelaPessoas2" component={TelaPessoas2} />
        <Stack.Screen name="TelaPessoas3" component={TelaPessoas3} />
        <Stack.Screen name="TelaPessoas4" component={TelaPessoas4} />
        <Stack.Screen name="TelaPessoas5" component={TelaPessoas5} />
        <Stack.Screen name="TelaPessoas6" component={TelaPessoas6} />
        <Stack.Screen name="TelaPessoas7" component={TelaPessoas7} />
        <Stack.Screen name="TelaNecessitados" component={TelaNecessitados} />
        <Stack.Screen name="TelaNecessitados2" component={TelaNecessitados2} />
        <Stack.Screen name="TelaNecessitados3" component={TelaNecessitados3} />
        <Stack.Screen name="TelaNecessitados4" component={TelaNecessitados4} />
        <Stack.Screen name="TelaNecessitados5" component={TelaNecessitados5} />
        <Stack.Screen name="TelaNecessitados6" component={TelaNecessitados6} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


{/*CSS(estilização das telas e dos componentes das telas
mudar cor,formato, tipo de letra etc) */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E55934',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#FAEDCD',
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

  boxWhite: {
    position: 'absolute',
    width: 415,
    height: 772,
    left: 0,
    top: 100,
    backgroundColor: '#FAEDCD',
    borderRadius: 29
  },

  usuario: {
    position: 'absolute',
    width: 221,
    height: 36,
    left: 61,
    top: 80,
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
    top: 130,
    backgroundColor: '#E55934',
    borderRadius: 20,
  },

  senha: {
    position: 'absolute',
    width: 221,
    height: 36,
    left: 61,
    top: 180,
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
    top: 220,
    backgroundColor: '#E55934',
    borderRadius: 20,
  },

  botaoLogin: {
    position: 'absolute',
    width: 295,
    height: 77,
    left: 46,
    top: 280,
    backgroundColor: '#E55934',
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
    color: '#FAEDCD',
  },

  textConta:{
    position: 'relative',
    width: 221,
    height: 36,
    left: 61,
    top: 360,
    fontFamily: 'normal',
    fontStyle: 'normal',
    fontSize: 20,
    color: '#000000'
  },

  textConta2:{
    position: 'relative',
    width: 221,
    height: 36,
    left: 61,
    top: 360,
    fontFamily: 'normal',
    fontStyle: 'normal',
    fontSize: 20,
    color: '#FA7921'
  },

  identificar: {
    position: 'relative',
    width: 450,
    height: 850,
    backgroundColor: '#FA7921',

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
    color: '#FAEDCD',
  },

  textButton1: {
    color: '#FAEDCD'
  },

  textButton2: {
    color: '#FAEDCD'
  },

  textButton3: {
    color: '#FAEDCD',
    left: 20
  },

});
