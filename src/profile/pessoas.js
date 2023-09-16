import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

export function ProfilePessoas({ navigation, route }) {
  const { nome, email, contato } = route.params[0];
  return (
    <>
      <View style={styles.conteiner}>
        <Text style={styles.text}>Seu perfil:</Text>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>{nome}</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{email}</Text>
        <Text style={styles.label}>Número de contato:</Text>
        <Text style={styles.value}>{contato}</Text>
        <Text style={styles.label}>Forma de ajuda:</Text>

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
            navigation.navigate("ProfilePessoas");
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
    paddingLeft: 50,
    justifyContent: "center",
  },

  text: {
    position: "absolute",
    left: 19,
    top: 5,
    fontStyle: "normal",
    fontSize: 40,
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
    backgroundColor: "#9BC53D",
    fontStyle: "normal",
    borderRadius: 25,
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: "#000",
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
