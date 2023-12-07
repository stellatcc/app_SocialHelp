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
import { CheckBox } from "react-native-elements";

export function HelpPessoas({ navigation, route }) {
  const [Checked, setChecked] = useState("first");
  const [Checar, setChecar] = useState(false);
  const [isChecked, setIsChecked] = useState();

  async function banco() {
    setChecked("");
    const res = await axios.post(url);
    const response = await axios.get(url + "/SocialHelp/Pessoas.php");
    setChecked(response.result.formaAjuda)
    setIsChecked(response.result.formaAjuda)
    setChecar(response.result.familia)

  }
  return (
    <SafeAreaView style={styles.fundo}>
      <ScrollView>
        <Text style={styles.text}>
          Entre em contato {"\n"}com a pessoa pelo {"\n"}número fornecido!
        </Text>
        <Image
            style={{position:"absolute", width:120, height:120, left:260, top:5}}
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
        <Text style={styles.label}>Quantidade de{"\n"} integrantes:</Text>
        <Text style={styles.value}>{route.params.qtdIntegrantes}</Text>
        <Text style={styles.label}>Forma de ajuda:</Text>
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
    marginBottom: 2,
    marginLeft: 45,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 25,
    lineHeight: 60,
    color: "#000",
  },
  value: {
    position: "relative",
    marginBottom: 3,
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
    left: 100,
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
