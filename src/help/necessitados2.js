import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native";

export function HelpNecessitados2({ navigation, route }) {
  return (
    <SafeAreaView style={styles.fundo}>
      <View>
        <Text style={styles.text}>
          Entre em contato pelo {"\n"}número ou E-mail forne{"\n"}cido!
        </Text>
        <Text style={styles.label}>Nome da ONG:</Text>
        <TextInput style={styles.value}>{route.params.nomeOng}</TextInput>
        <Text style={styles.label}>Número de contato:</Text>
        <TextInput style={styles.value}>{route.params.contato}</TextInput>
        <Text style={styles.label}>E-mail:</Text>
        <TextInput style={styles.value}>{route.params.email}</TextInput>
        <TouchableOpacity
          style={styles.proximo}
          onPress={() => {
            navigation.navigate("HomeNecessitados", route.params);
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
    fontSize: 32,
    color: "#000",
  },
  label: {
    left: 48,
    position: "relative",
    marginBottom: 10,
    fontStyle: "normal",
    fontSize: 32,
    lineHeight: 39,
    color: "#000",
  },
  value: {
    left: 48,
    position: "relative",
    marginBottom: 25,
    width: 300,
    backgroundColor: "white",
    fontStyle: "normal",
    borderRadius: 25,
    fontSize: 32,
    lineHeight: 39,
    color: "#000",
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
