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

export function CadPessoas({ navigation }) {
  const [checked, setChecked] = useState(false);
  const [ischecked, setIsChecked] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [contato, setContato] = useState("");



  return (
    <>
      <View style={styles.conteiner}>
        <Text style={styles.text}>Cadastro Pessoas</Text>
        <Image
          style={{ position: "absolute", width: 120, height: 120, left: 250, bottom: 600 }}
          source={require("@assets/image.png")}
        ></Image>
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
          <Text style={styles.ajuda}>Forma de Ajuda:</Text>
          <View>
            <CheckBox containerStyle={{ backgroundColor: '#FFFFD8', borderColor: '#FFFFD8', top: 400, width: 80, height: 80 }} checked={ischecked} onPress={() => setIsChecked(!ischecked)}
            />
            <Image
              style={{ width: 50, height: 50, top: 330, left: 50 }}
              source={require("@assets/img16.png")}
            ></Image>
          </View>
          <View>
            <CheckBox containerStyle={{ backgroundColor: '#FFFFD8', borderColor: '#FFFFD8', top: 360, }} checked={checked} onPress={() => setChecked(!checked)}
            />
            <Image
              style={{ width: 50, height: 50, top: 320, left: 50 }}
              source={require("@assets/img17.png")}
            ></Image>
          </View>
          <TouchableOpacity
            style={styles.proximo}
            onPress={() => {
              navigation.navigate("CadPessoas2", {
                nome,
                email,
                contato
                
              });

            }}
          >
            <Image
              style={{ width: 50, height: 50, bottom: 5, left: 280 }}
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
    backgroundColor: "#9BC53D",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    position: "absolute",
    left: 19,
    top: -50,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 30,
    lineHeight: 150,
  },

  boxWhite: {
    position: "relative",
    width: 395,
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
    top: 50,
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
    top: 100,
    backgroundColor: "#9BC53D",
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
    fontSize: 25,
    lineHeight: 39,
    color: "#000",
  },
  InputEmail: {
    position: "absolute",
    width: 295,
    height: 37,
    left: 46,
    top: 200,
    backgroundColor: "#9BC53D",
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
    fontSize: 25,
    lineHeight: 39,
    color: "#000",
  },
  InputContato: {
    position: "absolute",
    width: 295,
    height: 37,
    left: 46,
    top: 300,
    backgroundColor: "#9BC53D",
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
    fontSize: 25,
    lineHeight: 39,
    color: "#000",
  },
  proximo: {
    position: "absolute",
    width: 295,
    height: 77,
    left: 46,
    top: 580,
  },
});
