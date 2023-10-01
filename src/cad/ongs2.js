import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import axios from "axios";
import { url } from "@banco/url.js";
import { useState } from "react";

export function CadOngs2({ route, navigation }) {
  const [nomeUsuario, setNomeUsuario] = useState();
  const [senha, setSenha] = useState();

  const cadastrarOngs = async () => {
    const response = await axios.post(url + "/SocialHelp/cadastroOng.php", {
      ...route.params,
      nomeUsuario,
      senha,
    });
    alert(response.status);
  };

  return (
    <>
      <View style={styles.conteiner}>
        <Text style={styles.text}>Por último</Text>
        <ScrollView contentContainerStyle={styles.boxWhite}>
          <Text style={styles.nome}>Digite um nome de {"\n"} usuario:</Text>
          <TextInput
            onChangeText={(text) => setNomeUsuario(text)}
            style={styles.InputNome}
          ></TextInput>
          <Text style={styles.senha}>Digite uma {"\n"}senha:</Text>
          <TextInput
            onChangeText={(text) => setSenha(text)}
            style={styles.InputSenha}
          ></TextInput>
          <TouchableOpacity
            style={styles.botaoCadastro}
            onPress={() => {
              cadastrarOngs();
              navigation.navigate("HomeOngs");
            }}
          >
            <Text style={styles.textCadastro}>Cadastre-se!</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#FDE74C",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    position: "absolute",
    width: 322,
    height: 49,
    left: 19,
    top: 20,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 30,
    lineHeight: 48,
  },

  boxWhite: {
    position: "relative",
    width: 415,
    height: 772,
    left: 0,
    top: 85,
    backgroundColor: "#FFFFD8",
    borderRadius: 29,
  },

  nome: {
    position: "absolute",
    left: 46,
    top: 100,
    fontStyle: "normal",
    fontSize: 25,
    color: "#000",
  },
  InputNome: {
    position: "absolute",
    width: 295,
    height: 37,
    left: 46,
    top: 180,
    backgroundColor: "#FDE74C",
    borderRadius: 20,
  },

  senha: {
    position: "absolute",
    left: 46,
    top: 230,
    fontStyle: "normal",
    fontSize: 25,
    color: "#000",
  },
  InputSenha: {
    position: "absolute",
    width: 295,
    height: 37,
    left: 46,
    top: 300,
    backgroundColor: "#FDE74C",
    borderRadius: 20,
  },

  textCadastro: {
    position: "absolute",
    width: 235,
    height: 49,
    left: 50,
    top: 10,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 30,
    lineHeight: 48,
  },

  botaoCadastro: {
    position: "absolute",
    width: 295,
    height: 77,
    left: 46,
    top: 380,
    backgroundColor: "#FDE74C",
    borderRadius: 30,
  },
});
