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
import { RadioButton, Checkbox } from "react-native-paper";
import axios from "axios";
import { url } from "@banco/url.js";

export function HelpOngs({ navigation, route }) {
  const [checked, setChecked] = useState("first");
  const [isChecked, setIschecked] = useState();

  async function enviarBanco() {
    let familia;
    if (isChecked === "checked") {
      familia = true;
    } else {
      familia = false;
    }
    const response = await axios.post(url + "/SocialHelp/selectOng.php", {
      familia,
      formaAjuda,
    });
  }

  function toogleCheck() {
    isChecked === "unchecked"
      ? setIschecked("checked")
      : setIschecked("unchecked");
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
          <Checkbox.Item status={isChecked} onPress={() => toogleCheck()} />
          <Text style={styles.sim}>Sim</Text>
        </View>
        <Text style={styles.label}>Quantidade de inte-{"\n"}grantes:</Text>
        <Text style={styles.value}>{route.params.qtdIntegrantes}</Text>
        <Text style={styles.label}>Forma de ajuda:</Text>
        <View style={{ flexDirection: "row" }}>
          <RadioButton
            style={styles.radio}
            value='comida'
            status={checked === "comida" ? "checked" : "unchecked"}
            onPress={() => setChecked("comida")}
          />
          <Image
            style={{ width: 50, height: 50 }}
            source={require("@assets/img16.png")}
          />
          <RadioButton
            style={styles.radio}
            value='casa'
            status={checked === "casa" ? "checked" : "unchecked"}
            onPress={() => setChecked("casa")}
          />
          <Image
            style={{ width: 50, height: 50 }}
            source={require("@assets/img17.png")}
          />
        </View>
        <TouchableOpacity
          style={styles.botaoAjuda}
          onPress={() => {
            enviarBanco();
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
    marginTop: 5,
    right: 10,
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
