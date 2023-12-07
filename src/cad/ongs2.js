import {
  StyleSheet,
  Text,
  Image,
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
  };

  return (
    <>
      <View style={styles.conteiner}>
        <Text style={styles.text}>Por último</Text>
        <Image
            style={{position:"absolute", width:120, height:120, left:250, bottom:600}}
            source={require("@assets/image.png")}
          ></Image>
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
            secureTextEntry={true}
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
          <TouchableOpacity
            style={styles.proximo}
            onPress={() => {
              navigation.navigate("CadOngs", route.params);
            }}
          >
            <Image
              style={{ width: 50, height: 50, top: 100, right: 150 }}
              source={require("@assets/img14.png")}
            ></Image>
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
    width: 395,
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
  proximo: {
    position: "absolute",
    width: 295,
    height: 77,
    left: 180,
    top: 450,
  },
});
