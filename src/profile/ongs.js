import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export function ProfileOngs({ navigation, route }) {
  const { nomeOng, email, contato } = route.params[0];

  return (
    <>
      <View style={styles.conteiner}>
        <Text style={styles.text}>Seu perfil:</Text>
        <Text style={styles.label}>Nome da ONG:</Text>
        <Text style={styles.value}>{nomeOng}</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{email}</Text>
        <Text style={styles.label}>Número de contato:</Text>
        <Text style={styles.value}>{contato}</Text>
        <Text style={styles.label}>Forma de ajuda:</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HomeOng");
          }}
        >
          <Image
            style={{ width: 30, height: 30, top: 280, right: 100 }}
            source={require("@assets/img7.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ProfileOngs");
          }}
        >
          <Image
            style={{ width: 30, height: 30, left: 25, top: 253 }}
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
    top: 20,
    fontStyle: "normal",
    fontSize: 30,
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
    backgroundColor: "#FDE74C",
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
