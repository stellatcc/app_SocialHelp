import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { TouchableOpacity } from "react-native";

SplashScreen.preventAutoHideAsync();

export function HelpNecessitados2({ navigation }) {
  return (
    <SafeAreaView style={styles.fundo}>
      <View>
        <Text style={styles.text}>
          Entre em contato pelo {"\n"}número ou E-mail forne{"\n"}cido!
        </Text>
        <Text style={styles.nome}>Nome da ONG:</Text>
        <TextInput style={styles.InputNome}></TextInput>
        <Text style={styles.numero}>Número de contato:</Text>
        <TextInput style={styles.InputContato}></TextInput>
        <Text style={styles.email}>E-mail:</Text>
        <TextInput style={styles.InputEmail}></TextInput>
        <TouchableOpacity
          style={styles.proximo}
          onPress={() => {
            navigation.navigate("HomeNecessitados");
          }}
        >
          <Image
            style={{ width: 50, height: 50, top: 55, right: 150 }}
            source={require("@assets/img14.png")}
          ></Image>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    left: 42,
    marginTop: 20,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 32,
    color: "#000",
  },
  nome: {
    position: "relative",
    left: 45,
    marginTop: 25,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: "#000",
  },

  InputNome: {
    position: "relative",
    width: 295,
    height: 34.86,
    left: 45,
    marginTop: 10,
    backgroundColor: "#FFFFE0",
    borderRadius: 20,
  },

  numero: {
    position: "relative",
    left: 45,
    marginTop: 20,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: "#000",
  },

  InputContato: {
    position: "relative",
    width: 295,
    height: 38.73,
    left: 45,
    marginTop: 12,
    backgroundColor: "#FFFFE0",
    borderRadius: 20,
  },

  textAjuda: {
    position: "relative",
    width: 235,
    height: 49,
    left: 70,
    top: 10,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 40,
    lineHeight: 48,
  },

  email: {
    position: "relative",
    left: 45,
    marginTop: 20,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39,
    color: "#000",
  },
  InputEmail: {
    position: "relative",
    width: 295,
    left: 45,
    height: 38.73,
    marginTop: 12,
    backgroundColor: "#FFFFE0",
    borderRadius: 20,
  },
  proximo: {
    position: "absolute",
    width: 295,
    height: 77,
    left: 180,
    top: 450,
  },

  fundo: {
    backgroundColor: "#5BC0EB",
    flex: 1,
  },
});
