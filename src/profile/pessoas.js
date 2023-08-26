import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

export function ProfilePessoas({ navigation }) {
  return (
    <>
      <View style={styles.conteiner}>
        <Text style={styles.text}>Seu perfil:</Text>
        <Text style={styles.nomeOng}>Nome da ONG:</Text>
        <TextInput style={styles.InputNome}></TextInput>
        <Text style={styles.email}>Email:</Text>
        <TextInput style={styles.InputEmail}></TextInput>
        <Text style={styles.numero}>Número de contato:</Text>
        <TextInput style={styles.InputNum}></TextInput>
        <Text style={styles.ajuda}>Forma de ajuda:</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HomePessoas");
          }}
        >
          <Image
            style={{ width: 35, height: 35, top: 280, right: 100 }}
            source={require("@assets/img7.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("TelaPessoas7");
          }}
        >
          <Image
            style={{ width: 35, height: 35, left: 26, top: 246.5 }}
            source={require("@assets/img8.png")}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#FAEDCD",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    position: "absolute",
    left: 19,
    top: 20,
    fontStyle: "normal",
    fontSize: 40,
  },

  nomeOng: {
    position: "absolute",
    left: 20,
    top: 90,
    fontFamily: "normal",
    fontStyle: "normal",
    fontSize: 32,
    color: "#000000",
  },

  InputNome: {
    position: "absolute",
    width: 295,
    height: 37,
    left: 20,
    top: 150,
    backgroundColor: "#9BC53D",
    borderRadius: 20,
  },

  email: {
    position: "absolute",
    left: 20,
    top: 200,
    fontStyle: "normal",
    fontSize: 32,
    color: "#000",
  },

  InputEmail: {
    position: "absolute",
    width: 295,
    height: 37,
    left: 20,
    top: 250,
    backgroundColor: "#9BC53D",
    borderRadius: 20,
  },

  numero: {
    position: "absolute",
    left: 20,
    top: 300,
    fontStyle: "normal",
    fontSize: 32,
    color: "#000",
  },
  InputNum: {
    position: "absolute",
    width: 295,
    height: 37,
    left: 20,
    top: 350,
    backgroundColor: "#9BC53D",
    borderRadius: 20,
  },
  ajuda: {
    position: "absolute",
    left: 20,
    top: 400,
    fontStyle: "normal",
    fontSize: 32,
    color: "#000",
  },
});
