import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";

export function HelpPessoas({ navigation, route }) {
  const [checked, setChecked] = useState("first");
  const [third, setThird] = useState("third");
  async function bla() {
    setChecked("");
    const res = await axios.post(url);
  }
  return (
    <SafeAreaView style={styles.fundo}>
      <ScrollView>
        <Text style={styles.text}>
          Entre em contato com a pessoa pelo número fornecido!
        </Text>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>{route.params.nome}</Text>
        <Text style={styles.label}>Número de contato:</Text>
        <Text style={styles.value}>{route.params.contato}</Text>
        <Text style={styles.label}>Possui familia?</Text>
        <View style={{ flexDirection: "row" }}>
          <RadioButton
            style={styles.radio}
            value='third'
            status={third === "third" ? "checked" : "unchecked"}
            onPress={() => setThird("third")}
          />
          <Text style={styles.sim}>Sim</Text>
        </View>
        <Text style={styles.label}>Quantidade de{"\n"} integrantes:</Text>
        <Text style={styles.value}>{route.params.qtdIntegrantes}</Text>
        <Text style={styles.label}>Forma de ajuda:</Text>
        <View style={{ flexDirection: "row" }}>
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
          style={styles.botaoAjuda}
          onPress={() => {
            navigation.navigate("HelpPessoas3", route.params);
          }}
        >
          <Text style={styles.textAjuda}>Ajudei!</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    left: 42,
    marginTop: 20,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 25,
    color: "#000",
  },
  radio: {
    width: 30,
  },
  sim: {
    position: "relative",
    marginBottom: 10,
    left: 30,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 25,
    lineHeight: 39,
    color: "#000",
  },
  label: {
    position: "relative",
    marginBottom: 5,
    marginLeft: 45,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 25,
    lineHeight: 60,
    color: "#000",
  },
  value: {
    position: "relative",
    marginBottom: 25,
    marginLeft: 45,
    width: 300,
    backgroundColor: "white",
    fontStyle: "normal",
    borderRadius: 25,
    fontWeight: 400,
    fontSize: 25,
    lineHeight: 39,
    color: "#000",
  },
  botaoAjuda: {
    position: "relative",
    width: 295,
    height: 77,
    left: 46,
    marginTop: 30,
    backgroundColor: "#FFFFE0",
    borderRadius: 30,
  },

  textAjuda: {
    position: "relative",
    width: 235,
    height: 49,
    left: 70,
    top: 10,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 30,
    lineHeight: 48,
  },

  fundo: {
    backgroundColor: "#9BC53D",
    flex: 1,
  },
});
