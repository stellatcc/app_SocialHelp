import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import axios from 'axios';
import * as SplashScreen from 'expo-splash-screen';
import { url } from '@banco/url.js';
import { useState } from 'react';

SplashScreen.preventAutoHideAsync();

export function Tela1({ navigation, route }) {
  const { tipo } = route.params;
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const setTela = () => {
    if (tipo == 'ong') {
      return 'TelaOng3';
    } else if (tipo == 'voluntario') {
      return 'TelaPessoas3';
    } else if (tipo == 'necessitado') {
      return 'TelaNecessitados3';
    }
  };

  const verificaDados = async () => {
    const response = await axios.post(url + '/SocialHelp/login.php', {
      nomeUsuario,
      senha,
      tipo,
    });
    response.data.success === true
      ? navigation.navigate(setTela())
      : alert(response.data.success);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>login</Text>
        <View style={styles.boxWhite}>
          <Text style={styles.usuario}>Usuario:</Text>
          <TextInput
            onChangeText={(text) => setNomeUsuario(text)}
            style={styles.InputUsuario}
          ></TextInput>
          <Text style={styles.senha}>Senha:</Text>
          <TextInput
            onChangeText={(text) => setSenha(text)}
            style={styles.InputSenha}
          ></TextInput>
          <TouchableOpacity
            style={styles.botaoLogin}
            onPress={() => {
              verificaDados();
            }}
          >
            <Text style={styles.textLogin}>Entre!</Text>
          </TouchableOpacity>
          <Text style={styles.textConta}>Não possui conta?</Text>
          <Text
            onPress={() => {
              navigation.navigate(setTela());
            }}
            style={styles.textConta2}
          >
            Cadastre-se
          </Text>
        </View>
      </View>
    </>
  );
}

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
    top: 31,
  },

  boxWhite: {
    position: 'absolute',
    width: 415,
    height: 772,
    left: 0,
    top: 100,
    backgroundColor: '#FAEDCD',
    borderRadius: 29,
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
  textConta: {
    position: 'relative',
    width: 221,
    height: 36,
    left: 61,
    top: 360,
    fontFamily: 'normal',
    fontStyle: 'normal',
    fontSize: 20,
    color: '#000000',
  },

  textConta2: {
    position: 'relative',
    width: 221,
    height: 36,
    left: 61,
    top: 360,
    fontFamily: 'normal',
    fontStyle: 'normal',
    fontSize: 20,
    color: '#FA7921',
  },
});
