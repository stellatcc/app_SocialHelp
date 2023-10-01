import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

export function ProfileNecessitados({ navigation, route }) {
  const { nome, qtdIntegrantes, contato } = route.params[0];
  return (
    <>
      <View style={styles.conteiner}>
        <Text style={styles.text}>Seu perfil:</Text>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>{nome}</Text>
        <Text style={styles.label}>Número de contato:</Text>
        <Text style={styles.value}>{contato}</Text>
        <Text style={styles.label}>Do que você precisa?</Text>
        <Text style={styles.value}>{}</Text>
        <Text style={styles.label}>Quantidade de pessoas na familia:</Text>
        <Text style={styles.value}>{contato}</Text>

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
    position: "relative",
    fontStyle: "normal",
    right: 25,
    fontSize: 30,
  },

  label: {
    marginBottom: 20,
    position: "relative",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 25,
    lineHeight: 39,
    color: "#000",
  },
  value: {
    marginBottom: 15,
    position: "relative",
    width: 300,
    backgroundColor: "#5BC0EB",
    fontStyle: "normal",
    borderRadius: 25,
    fontWeight: 400,
    fontSize: 25,
    lineHeight: 39,
    color: "#000",
  },
  ajuda: {
    position: "absolute",
    left: 20,
    top: 400,
    fontStyle: "normal",
    fontSize: 25,
    color: "#000",
  },
});
