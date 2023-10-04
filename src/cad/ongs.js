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
import { Checkbox } from "react-native-paper";

export function CadOngs({ navigation }) {
  const [checked, setChecked] = useState(false);
  const [ischecked, setIsChecked] = useState(false);
  const [nome, setNome] = useState("");
  const [nomeOng, setNomeOng] = useState("");
  const [email, setEmail] = useState("");
  const [contato, setContato] = useState("");

  async function enviarBanco() {
    let formaAjuda;
    if (checked === "checked") {
      formaAjuda = true;
    } else {
      formaAjuda = false;
    }
    const response = await axios.post(
      url + "/SocialHelp/selectNecessitados2.php",
      {
        formaAjuda,
      }
    );
  }

  function toogleCheck() {
    checked === "unchecked" ? setChecked("checked") : setChecked("unchecked");
  }

  function toogleCheck2() {
    ischecked === "unchecked"
      ? setIsChecked("checked")
      : setIsChecked("unchecked");
  }

  return (
    <>
      <View style={styles.conteiner}>
        <Text style={styles.text}>Cadastro Ong's</Text>
        <ScrollView contentContainerStyle={styles.boxWhite}>
          <Text style={styles.nomeOng}>Nome da Ong:</Text>
          <TextInput
            onChangeText={(text) => setNome(text)}
            style={styles.InputOng}
          ></TextInput>
          <Text style={styles.nome}>Representante:</Text>
          <TextInput
            onChangeText={(text) => setNomeOng(text)}
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
          <Text style={styles.ajuda}>Forma de Ajuda:</Text>
          <View style={{ flexDirection: "row", marginTop: 480 }}>
            <Checkbox.Item status={checked} onPress={() => toogleCheck()} />
            <Image
              style={{ width: 50, height: 50, right: 20, top: 5 }}
              source={require("@assets/img16.png")}
            ></Image>
            <Text style={styles.label}>alimentação</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 78 }}>
            <Checkbox.Item status={ischecked} onPress={() => toogleCheck2()} />
            <Image
              style={{ width: 50, height: 50, right: 20, top: 2 }}
              source={require("@assets/img17.png")}
            ></Image>
            <Text style={styles.label}>pousadia</Text>
          </View>
          <TouchableOpacity
            style={styles.proximo}
            onPress={() => {
              enviarBanco();
              navigation.navigate("CadOngs2", {
                nome,
                nomeOng,
                email,
                contato,
                formaAjuda: checked,
                formaAjuda: ischecked,
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
  nomeOng: {
    position: "absolute",
    width: 244.18,
    height: 33.33,
    left: 46,
    top: 50,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 25,
    color: "#000",
  },
  InputOng: {
    position: "absolute",
    width: 295,
    height: 37,
    left: 46,
    top: 100,
    backgroundColor: "#FDE74C",
    borderRadius: 20,
  },
  nome: {
    position: "absolute",
    width: 221,
    height: 36,
    left: 46,
    top: 145,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 25,
    lineHeight: 39,
    color: "#000",
  },
  InputNome: {
    position: "absolute",
    width: 295,
    height: 37,
    left: 46,
    top: 200,
    backgroundColor: "#FDE74C",
    borderRadius: 20,
  },
  email: {
    position: "absolute",
    width: 244.18,
    height: 36,
    left: 46,
    top: 240,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 25,
    lineHeight: 39,
    color: "#000",
  },
  InputEmail: {
    position: "absolute",
    width: 295,
    height: 37,
    left: 46,
    top: 290,
    backgroundColor: "#FDE74C",
    borderRadius: 20,
  },
  numero: {
    position: "absolute",
    width: 295,
    height: 36,
    left: 46,
    top: 340,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 25,
    lineHeight: 39,
    color: "#000",
  },
  InputContato: {
    position: "absolute",
    width: 295,
    height: 37,
    left: 46,
    top: 385,
    backgroundColor: "#FDE74C",
    borderRadius: 20,
  },
  ajuda: {
    position: "absolute",
    width: 295,
    height: 36,
    left: 46,
    top: 430,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 25,
    lineHeight: 39,
    color: "#000",
  },
  proximo: {
    position: "absolute",
    width: 295,
    height: 77,
    left: 46,
    top: 660,
  },
  label: {
    top: 60,
    right: 70,
  },
});
