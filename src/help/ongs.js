import {
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useState } from "react";
import { RadioButton } from "react-native-paper";
import axios from "axios";
import { url } from "@banco/url.js";

export function HelpOngs({ navigation, route }) {
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
          Entre em contato com a pessoa pelo número fornecido! {"\n"}
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
        <Text style={styles.label}>Quantidade de inte-{"\n"}grantes:</Text>
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
            navigation.navigate("HelpOngs2", route.params);
          }}
        >
          <Text style={styles.label}>Ajudei!</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 32,
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
    fontSize: 32,
    lineHeight: 39,
    color: "#000",
  },
  label: {
    position: "relative",
    marginBottom: 10,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: "#000",
  },
  value: {
    position: "relative",
    marginBottom: 25,
    width: 300,
    backgroundColor: "white",
    fontStyle: "normal",
    borderRadius: 25,
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: "#000",
  },
  botaoAjuda: {
    position: "relative",
    width: 280,
    height: 77,
    marginTop: 40,
    marginLeft: 30,
    backgroundColor: "#FFFFE0",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  fundo: {
    backgroundColor: "#FDE74C",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 40,
  },
});
