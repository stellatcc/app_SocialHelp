import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import * as SplashScreen from "expo-splash-screen";

export function Enter({ navigation }) {
    SplashScreen.hideAsync();
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("selecionar") }}>
                    <Image
                        style={{ width: 430, height: 430 }}
                        source={require("@assets/image.png")}
                    ></Image>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAEDCD",
        alignItems: "center",
        justifyContent: "center",
    }
});
