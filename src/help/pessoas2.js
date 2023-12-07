import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { TouchableOpacity } from "react-native";

SplashScreen.preventAutoHideAsync();

export function HelpPessoas2({ navigation, route }) {
  return (
    <SafeAreaView style={styles.fundo}>
      <ScrollView>
        <Text style={styles.text}>
          Entre em contato {"\n"}pelo número ou E-mail {"\n"}fornecido!
        </Text>
        <Image
            style={{position:"absolute", width:120, height:120, left:265, top:5}}
            source={require("@assets/image.png")}
        ></Image>
        <Text style={styles.label}>Nome da ONG:</Text>
        <Text style={styles.value}>{route.params.nomeOng}</Text>
        <Text style={styles.label}>Número de contato:</Text>
        <Text style={styles.value}>{route.params.contato}</Text>
        <Text style={styles.label}>E-mail:</Text>
        <Text style={styles.value}>{route.params.email}</Text>
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
    left: 35,
    marginTop: 20,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 25,
    color: "#000",
  },
  label: {
    position: "relative",
    marginBottom: 20,
    marginLeft: 40,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 25,
    lineHeight: 40,
    color: "#000",
  },
  value: {
    position: "relative",
    marginLeft: 40,
    marginBottom: 25,
    width: 300,
    backgroundColor: "white",
    fontStyle: "normal",
    borderRadius: 25,
    fontWeight: 400,
    fontSize: 25,
    lineHeight: 39,
    color: "#000",
  },
  ajuda: {
    position: "relative",
    left: 65,
    marginTop: 12,
    fontStyle: "normal",
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
