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
import { CheckBox } from "react-native-elements";
import axios from "axios";
import { url } from "@banco/url.js";

export function HelpOngs({ navigation, route }) {
  const [Checked, setChecked] = useState("first");
  const [isChecked, setIsChecked] = useState();
  const [Checar, setChecar] = useState(false);

  async function enviarBanco() {
    let familia;
    if (isChecked === "checked") {
      familia = true;
    } else {
      familia = false;
    }
    const response = await axios.get(url + "/SocialHelp/selectOng.php");
    setChecked(response.result.formaAjuda)
    setIsChecked(response.result.formaAjuda)
    setChecar(response.result.familia)

    
  }

  function toogleCheck() {
    isChecked === "unchecked"
      ? setIsChecked("checked")
      : setIsChecked("unchecked");
  }

  return (
    <SafeAreaView style={styles.fundo}>
      <ScrollView>
        <Text style={styles.text}>
          Entre em contato com {"\n"}a pessoa  pelo número {"\n"}fornecido!
        </Text>
        <Image
            style={{position:"absolute", width:120, height:120, left:240, bottom:690}}
            source={require("@assets/image.png")}
        ></Image>

        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>{route.params.nome}</Text>
        <Text style={styles.label}>Número de contato:</Text>
        <Text style={styles.value}>{route.params.contato}</Text>
        <Text style={styles.label}>Possui familia?</Text>
        <View style={{ flexDirection: "row", marginTop: 375 }}>
              <RadioButton
                style={styles.radio}
                value='sim'
                status={Checar === "sim" ? "checked" : "unchecked"}
                onPress={() => setChecar("sim")}
              />
              <Text>Sim</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 25 }}>
              <RadioButton
                style={styles.radio}
                value='não'
                status={Checar === "não" ? "checked" : "unchecked"}
                onPress={() => setChecar("não")}
              />
              <Text>Não</Text>
            </View>
        <Text style={styles.label}>Quantidade de inte-{"\n"}grantes:</Text>
        <Text style={styles.value}>{route.params.qtdIntegrantes}</Text>
        <Text style={styles.ajuda}>Forma de Ajuda:</Text>
          <View>
            <CheckBox containerStyle={{ backgroundColor: '#FFFFD8', borderColor: '#FFFFD8', top: 460, width: 80, height: 80 }} checked={isChecked} onPress={() => setIsChecked(!isChecked)}
            />
            <Image
              style={{ width: 50, height: 50, top: 390, left: 50 }}
              source={require("@assets/img16.png")}
            ></Image>
          </View>
          <View>
            <CheckBox containerStyle={{ backgroundColor: '#FFFFD8', borderColor: '#FFFFD8', top: 400, }} checked={Checked} onPress={() => setChecked(!Checked)}
            />
            <Image
              style={{ width: 50, height: 50, top: 360, left: 50 }}
              source={require("@assets/img17.png")}
            ></Image>
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
    fontSize: 25,
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
    fontSize: 25,
    lineHeight: 39,
    color: "#000",
  },
  label: {
    position: "relative",
    marginBottom: 10,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 25,
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
    fontSize: 25,
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
