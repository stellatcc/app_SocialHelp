import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { RadioButton } from "react-native-paper";

export function CadNecessitados({ navigation }) {
  const [checked, setChecked] = useState("first");
  const [check, setCheck] = useState("fourth");
  async function bla() {
    setChecked("");
    const res = await axios.post(url);
  }
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [qtdIntegrantes, setQtdIntegrantes] = useState("");
  const [contato, setContato] = useState("");

  return (
    <>
      <View style={styles.conteiner}>
        <Text style={styles.text}>Cadastro Necessita{"\n"}dos</Text>
        <SafeAreaView>
          <ScrollView contentContainerStyle={styles.boxWhite}>
            <Text style={styles.nome}>Nome:</Text>
            <TextInput
              onChangeText={(text) => setNome(text)}
              style={styles.InputNome}
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
            <Text style={styles.ajuda}>Possui familia?</Text>
            <View style={{ flexDirection: "row", marginTop: 400 }}>
              <RadioButton
                style={styles.radio}
                value='first'
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked("first")}
              />
              <Text style={styles.label}>Sim</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <RadioButton
                style={styles.radio}
                value='second'
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
              />
              <Text style={styles.label}>Não</Text>
            </View>
            <Text style={styles.qtd}>Se sim, quantos inte-{"\n"}grantes?</Text>

            <TextInput
              onChangeText={(text) => setQtdIntegrantes(text)}
              style={styles.InputQtd}
            ></TextInput>
            <Text style={styles.precisa}>Do que você precisa?</Text>
            <View style={{ flexDirection: "row", marginTop: 220 }}>
              <RadioButton
                style={styles.radio}
                value='third'
                status={check === "third" ? "checked" : "unchecked"}
                onPress={() => setCheck("third")}
              />
              <Image
                style={{ width: 50, height: 50 }}
                source={require("@assets/img16.png")}
              />
              <RadioButton
                style={styles.radio}
                value='fourth'
                status={check === "fourth" ? "checked" : "unchecked"}
                onPress={() => setCheck("fourth")}
              />
              <Image
                style={{ width: 50, height: 50 }}
                source={require("@assets/img17.png")}
              />
            </View>

            <TouchableOpacity
              style={styles.proximo}
              onPress={() => {
                navigation.navigate("CadNecessitados2", {
                  nome,
                  email,
                  qtdIntegrantes,
                  contato,
                });
              }}
            >
              <Image
                style={{ width: 50, height: 50, bottom: 5, left: 280 }}
                source={require("@assets/img12.png")}
              ></Image>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#5BC0EB",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    position: "relative",
    marginBottom: 10,
    left: 30,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: "#000",
  },
  radio: {
    width: 30,
  },
  text: {
    position: "absolute",
    left: 19,
    top: 15,
    fontWeight: 400,
    fontSize: 40,
    lineHeight: 45,
  },

  boxWhite: {
    position: "relative",
    width: 415,
    height: 1000,
    top: 100,
    backgroundColor: "#FFFFD8",
    borderRadius: 29,
  },
  nome: {
    position: "absolute",
    width: 221,
    height: 36,
    left: 46,
    top: 50,
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
    top: 100,
    backgroundColor: "#5BC0EB",
    borderRadius: 20,
  },

  email: {
    position: "absolute",
    width: 244.18,
    height: 36,
    left: 46,
    top: 150,
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
    top: 200,
    backgroundColor: "#5BC0EB",
    borderRadius: 20,
  },
  numero: {
    position: "absolute",
    width: 295,
    height: 36,
    left: 46,
    top: 250,
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
    top: 300,
    backgroundColor: "#5BC0EB",
    borderRadius: 20,
  },

  qtd: {
    position: "absolute",
    left: 46,
    marginTop: 520,
    fontStyle: "normal",
    fontSize: 32,
    lineHeight: 32,
    color: "#000",
  },
  InputQtd: {
    position: "absolute",
    width: 295,
    height: 37,
    left: 46,
    marginTop: 600,
    backgroundColor: "#5BC0EB",
    borderRadius: 20,
  },
  ajuda: {
    position: "absolute",
    width: 295,
    height: 36,
    left: 46,
    top: 350,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: "#000",
  },
  precisa: {
    position: "absolute",
    left: 46,
    top: 650,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: "#000",
  },
  proximo: {
    position: "absolute",
    width: 295,
    height: 77,
    left: 46,
    marginTop: 800,
  },
});
