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

export function CadNecessitados({ navigation }) {
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
            <View
              style={{
                position: "absolute",
                left: 20,
                bottom: 210,
                flexDirection: "row",
                width: 500,
                height: 100,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={styles.branco}
                  onPress={() => {
                    trocaEstilo();
                  }}
                ></TouchableOpacity>
                <Image></Image>
              </View>
              <View style={{ flexDirection: "row", left: 100 }}>
                <TouchableOpacity
                  style={styles.branco}
                  onPress={() => {
                    trocaEstilo();
                  }}
                ></TouchableOpacity>
                <Image></Image>
              </View>
            </View>
            <Text style={styles.qtd}>Se sim, quantos integrantes?</Text>
            <TextInput
              onChangeText={(text) => setQtdIntegrantes(text)}
              style={styles.InputQtd}
            ></TextInput>
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
    width: 295,
    height: 36,
    left: 46,
    marginTop: 530,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
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
  proximo: {
    position: "absolute",
    width: 295,
    height: 77,
    left: 46,
    marginTop: 780,
  },
});
