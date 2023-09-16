import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { RadioButton } from "react-native-paper";

export function CadOngs({ navigation }) {
  const [checked, setChecked] = useState("first");
  async function bla() {
    setChecked("");
    const res = await axios.post(url);
  }
  const [nome, setNome] = useState("");
  const [nomeOng, setNomeOng] = useState("");
  const [email, setEmail] = useState("");
  const [contato, setContato] = useState("");
  return (
    <>
      <View style={styles.conteiner}>
        <Text style={styles.text}>Cadastro Ong's</Text>
        <ScrollView contentContainerStyle={styles.boxWhite}>
          <Text style={styles.nome}>Nome:</Text>
          <TextInput
            onChangeText={(text) => setNome(text)}
            style={styles.InputNome}
          ></TextInput>
          <Text style={styles.nomeOng}>Nome da ONG:</Text>
          <TextInput
            onChangeText={(text) => setNomeOng(text)}
            style={styles.InputOng}
          ></TextInput>
          <Text style={styles.email}>E-mail:</Text>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            style={styles.InputEmail}
          ></TextInput>
          <Text style={styles.numero}>Número de contato:</Text>
          <TextInput
            onChangeText={(text) => setContato(text)}
            style={styles.InputContato}
          ></TextInput>
          <Text style={styles.ajuda}>Forma de Ajuda:</Text>
          <View style={{ flexDirection: "row", marginTop: 450, left: 20 }}>
            <RadioButton
              style={styles.radio}
              value='first'
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <Image
              style={{ width: 50, height: 50 }}
              source={require("@assets/img16.png")}
            />
            <RadioButton
              style={styles.radio}
              value='second'
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
            />
            <Image
              style={{ width: 50, height: 50 }}
              source={require("@assets/img17.png")}
            />
          </View>

          <TouchableOpacity
            style={styles.proximo}
            onPress={() => {
              navigation.navigate("CadOngs2", {
                nome,
                nomeOng,
                email,
                contato,
              });
            }}
          >
            <Image
              style={{ width: 50, height: 50, top: 10, left: 280 }}
              source={require("@assets/img12.png")}
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
  radio: {
    width: 30,
  },
  text: {
    position: "absolute",
    width: 322,
    height: 49,
    left: 19,
    top: 20,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 40,
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
    width: 221,
    height: 36,
    left: 46,
    top: 10,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: "#000",
  },
  InputNome: {
    position: "absolute",
    width: 295,
    height: 37,
    left: 46,
    top: 50,
    backgroundColor: "#FDE74C",
    borderRadius: 20,
  },
  nomeOng: {
    position: "absolute",
    width: 244.18,
    height: 33.33,
    left: 46,
    top: 90,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: "#000",
  },
  InputOng: {
    position: "absolute",
    width: 295,
    height: 37,
    left: 46,
    top: 140,
    backgroundColor: "#FDE74C",
    borderRadius: 20,
  },
  email: {
    position: "absolute",
    width: 244.18,
    height: 36,
    left: 46,
    top: 190,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: "#000",
  },
  InputEmail: {
    position: "absolute",
    width: 295,
    height: 37,
    left: 46,
    top: 235,
    backgroundColor: "#FDE74C",
    borderRadius: 20,
  },
  numero: {
    position: "absolute",
    width: 295,
    height: 36,
    left: 46,
    top: 280,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: "#000",
  },
  InputContato: {
    position: "absolute",
    width: 295,
    height: 37,
    left: 46,
    top: 330,
    backgroundColor: "#FDE74C",
    borderRadius: 20,
  },
  ajuda: {
    position: "absolute",
    width: 295,
    height: 36,
    left: 46,
    top: 380,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: "#000",
  },
  preto: {
    backgroundColor: "black",
    width: 20,
    height: 20,
    borderRadius: 60,
  },

  branco: {
    backgroundColor: "white",
    width: 20,
    height: 20,
    borderRadius: 60,
  },
  proximo: {
    position: "absolute",
    width: 295,
    height: 77,
    left: 46,
    top: 520,
  },
});
