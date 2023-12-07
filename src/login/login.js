import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import axios from "axios";
import { url } from "@banco/url.js";
import { useState } from "react";

export function Login({ navigation, route }) {

  const { tipo } = route.params;
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const setTela = () => {
    if (tipo == "ong") {
      return { tela: "HomeOngs", telaCadastro: "CadOngs" };
    } else if (tipo == "voluntario") {
      return { tela: "HomePessoas", telaCadastro: "CadPessoas" };
    } else if (tipo == "necessitado") {
      return { tela: "HomeNecessitados", telaCadastro: "CadNecessitados" };
    }
  };

  const verificaDados = async () => {
    const response = await axios.post(url + "/SocialHelp/login.php", {
      nomeUsuario,
      senha,
      tipo,
    });
    response.data.success === true
      ? navigation.navigate(setTela().tela, response.data.result)
      : alert(response.data.success);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>login</Text>
        <View style={styles.boxWhite}>
          <Image
            style={{ width: 150, height: 150, left:35, bottom:25 }}
            source={require("@assets/image.png")}
          ></Image>
          <Text style={styles.usuario}>Usuario:</Text>
          <TextInput
            onChangeText={(text) => setNomeUsuario(text)}
            style={styles.InputUsuario}
          ></TextInput>
          <Text style={styles.senha}>Senha:</Text>
          <TextInput
            onChangeText={(text) => setSenha(text)}
            style={styles.InputSenha}
            secureTextEntry={true}
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
              navigation.navigate(setTela().telaCadastro);
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
    backgroundColor: "#E55934",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#FAEDCD",
    fontStyle: "normal",
    fontFamily: "normal",
    fontWeight: 400,
    fontSize: 30,
    lineHeight: 48,
    position: "absolute",
    width: 227,
    height: 49,
    left: 27,
    top: 31,
  },

  boxWhite: {
    position: "absolute",
    width: 395,
    height: 772,
    left: 0,
    top: 100,
    backgroundColor: "#FAEDCD",
    borderRadius: 29,
  },

  usuario: {
    position: "absolute",
    width: 221,
    height: 36,
    left: 61,
    top: 150,
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 25,
    lineHeight: 39,
    color: "#000000",
  },

  InputUsuario: {
    position: "absolute",
    width: 267,
    height: 37,
    left: 61,
    top: 200,
    backgroundColor: "#E55934",
    borderRadius: 20,
  },

  senha: {
    position: "absolute",
    width: 221,
    height: 36,
    left: 61,
    top: 250,
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 25,
    lineHeight: 39,
    color: "#000000",
  },

  InputSenha: {
    position: "absolute",
    width: 267,
    height: 37,
    left: 61,
    top: 300,
    backgroundColor: "#E55934",
    borderRadius: 20,
  },

  botaoLogin: {
    position: "absolute",
    width: 295,
    height: 77,
    left: 46,
    top: 400,
    backgroundColor: "#E55934",
    borderRadius: 20,
  },

  textLogin: {
    position: "absolute",
    textAlign: "center",
    width: 235,
    height: 49,
    left: 25,
    top: 10,
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 30,
    lineHeight: 50,
    color: "#FAEDCD",
  },
  textConta: {
    position: "relative",
    width: 221,
    height: 36,
    left: 61,
    top: 330,
    fontFamily: "",
    fontStyle: "normal",
    fontSize: 15,
    color: "#000000",
  },

  textConta2: {
    position: "relative",
    width: 221,
    height: 36,
    left: 61,
    top: 310,
    fontFamily: "normal",
    fontStyle: "normal",
    fontSize: 15,
    color: "#FA7921",
  },
});
