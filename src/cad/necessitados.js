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
import {  CheckBox } from "react-native-elements";
import { RadioButton } from "react-native-paper";

export function CadNecessitados({ navigation }) {
  const [checar, setChecar] = useState(false);
  const [check, setCheck] = useState(false);
  const [ischeck, setIsCheck] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [qtdIntegrantes, setQtdIntegrantes] = useState("");
  const [contato, setContato] = useState("");


  return (
    <>
      <View style={styles.conteiner}>
        <Text style={styles.text}>Cadastro {"\n"}Necessitados</Text>
        <Image
          style={{ position: "absolute", width: 120, height: 120, left: 245, bottom: 600 }}
          source={require("@assets/image.png")}
        ></Image>
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
            <View style={{ flexDirection: "row", marginTop: 375 }}>
              <RadioButton
                style={styles.radio}
                value='sim'
                status={checar === "sim" ? "checked" : "unchecked"}
                onPress={() => setChecar("sim")}
              />
              <Text>Sim</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 25 }}>
              <RadioButton
                style={styles.radio}
                value='não'
                status={checar === "não" ? "checked" : "unchecked"}
                onPress={() => setChecar("não")}
              />
              <Text>Não</Text>
            </View>
            <Text style={styles.qtd}>Se sim, quantos inte-{"\n"}grantes?</Text>
            <TextInput
              onChangeText={(text) => setQtdIntegrantes(text)}
              style={styles.InputQtd}
            ></TextInput>
            <Text style={styles.precisa}>Do que você precisa?</Text>
              
            <View>
            <CheckBox containerStyle={{ backgroundColor: '#FFFFD8', borderColor: '#FFFFD8', top: 180, width: 80, height: 80 }} checked={ischeck} onPress={() => setIsCheck(!ischeck)}
            />
            <Image
              style={{ width: 50, height: 50, top: 110, left: 50 }}
              source={require("@assets/img16.png")}
            ></Image>
          </View>
          <View>
            <CheckBox containerStyle={{ backgroundColor: '#FFFFD8', borderColor: '#FFFFD8', top: 120, }} checked={check} onPress={() => setCheck(!check)}
            />
            <Image
              style={{ width: 50, height: 50, top: 85, left: 50 }}
              source={require("@assets/img17.png")}
            ></Image>
          </View>
     

           
            <TouchableOpacity
              style={styles.proximo}
              onPress={() => {
                navigation.navigate("CadNecessitados2", {
                  nome,
                  email,
                  qtdIntegrantes,
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
    left: 5,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 25,
    lineHeight: 39,
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
  text: {
    position: "absolute",
    left: 30,
    top: 8,
    fontWeight: 400,
    fontSize: 30,
    lineHeight: 45,
  },

  boxWhite: {
    position: "relative",
    width: 395,
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
    top: 25,
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
    top: 75,
    backgroundColor: "#5BC0EB",
    borderRadius: 20,
  },
  email: {
    position: "absolute",
    width: 244.18,
    height: 36,
    left: 46,
    top: 125,
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
    top: 175,
    backgroundColor: "#5BC0EB",
    borderRadius: 20,
  },
  numero: {
    position: "absolute",
    width: 295,
    height: 36,
    left: 46,
    top: 225,
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
    top: 275,
    backgroundColor: "#5BC0EB",
    borderRadius: 20,
  },

  qtd: {
    position: "absolute",
    left: 46,
    marginTop: 485,
    fontStyle: "normal",
    fontSize: 25,
    lineHeight: 32,
    color: "#000",
  },
  InputQtd: {
    position: "absolute",
    width: 295,
    height: 37,
    left: 46,
    marginTop: 560,
    backgroundColor: "#5BC0EB",
    borderRadius: 20,
  },
  ajuda: {
    position: "absolute",
    width: 295,
    height: 36,
    left: 46,
    top: 330,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 25,
    lineHeight: 39,
    color: "#000",
  },
  precisa: {
    position: "absolute",
    left: 46,
    top: 620,
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
    marginTop: 800,
  },
});
