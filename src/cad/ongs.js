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
import { CheckBox } from "react-native-elements";

export function CadOngs({ navigation }) {
  const [checked, setChecked] = useState(false);
  const [ischecked, setIsChecked] = useState(false);
  const [nome, setNome] = useState("");
  const [nomeOng, setNomeOng] = useState("");
  const [email, setEmail] = useState("");
  const [contato, setContato] = useState("");


  return (
    <>
      <View style={styles.conteiner}>
        <Image
          style={{ position: "absolute", width: 120, height: 120, left: 250, bottom: 600 }}
          source={require("@assets/image.png")}
        ></Image>
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
          <View>
            <CheckBox containerStyle={{ backgroundColor: '#FFFFD8', borderColor: '#FFFFD8', top: 460, width: 80, height: 80 }} checked={ischecked} onPress={() => setIsChecked(!ischecked)}
            />
            <Image
              style={{ width: 50, height: 50, top: 390, left: 50 }}
              source={require("@assets/img16.png")}
            ></Image>
          </View>
          <View>
            <CheckBox containerStyle={{ backgroundColor: '#FFFFD8', borderColor: '#FFFFD8', top: 400, }} checked={checked} onPress={() => setChecked(!checked)}
            />
            <Image
              style={{ width: 50, height: 50, top: 360, left: 50 }}
              source={require("@assets/img17.png")}
            ></Image>
          </View>

          <TouchableOpacity
            style={styles.proximo}
            onPress={() => {
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

  text: {
    position: "relative",
    width: 322,
    height: 49,
    right: 5,
    top: 1,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 30,
    lineHeight: 48,
  },

  boxWhite: {
    position: "relative",
    width: 395,
    height: 772,
    marginTop: 40,
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
    top: 600,
  },
  label: {
    top: 60,
    right: 70,
  },
});
