import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput
} from "react-native";
import { useState } from "react";
  
var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

const Medidas = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.calculadora}>
        <Text>Medidas</Text>
        <View style={styles.botoes_conv_gp}>
            <TouchableOpacity onPress={() => navigation.navigate("Calculadora")} style={styles.botoes_conv}><Text style={styles.botoes_conv_texto}>➕</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Peso")} style={styles.botoes_conv}><Text style={styles.botoes_conv_texto}>⚖️</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Temperatura")} style={styles.botoes_conv}><Text style={styles.botoes_conv_texto}>🌡</Text></TouchableOpacity>
        </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#222222",
      alignItems: "center",
      justifyContent: "center",
    },
  
    botoes_conv_gp: {
        zIndex: 1,
      position: "absolute",
      left: 10,
      top: 0
    },
  
    botoes_conv: {
      backgroundColor: "#383838",
      width: width * .1,
      height: width * .1,
      marginBottom: 10,
      justifyContent: "center",
      borderRadius: 50,
    },
  
    botoes_conv_texto: {
      color: "#ffa500",
      textAlign: "center",
      fontWeight: "500",
      fontSize: 20
    },
  
    calculadora: {
      flex: 1,
      marginTop: height * .1,
      justifyContent: "flex-start",
      flexDirection: "column"
    },
  
    visor: {
      height: height * .335,
      width: width * .95,
      borderBottomColor: "#383838",
      borderBottomWidth: 2,
      justifyContent: "flex-end",
      marginHorizontal: "2.5%",
      paddingVertical: "5%",
      paddingRight: "2.5%",
      paddingLeft: "10%"
    },
  
    texto: {
      fontSize: 30,
      color: "#ffa500",
      fontWeight: "500",
      textAlign: "right",
      textAlignVertical: "bottom"
    },
  
    textoresultado: {
      fontSize: 45,
      color: "white",
      fontWeight: "500",
      textAlign: "right",
    },
  
    botoes_grupo: {
      width: width,
      height: height * .665,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: "5%",
      paddingHorizontal: "5%",
      flexWrap: "wrap",
    },
  
    botoes: {
      width: (height * .7) * .15,
      backgroundColor: "#383838",
      borderRadius: 100,
      height: (height * .7) * .15,
      marginBottom: 10,
      justifyContent: "center"
    },
  
    botoes_texto: {
      fontSize: 25,
      color: "white",
      fontWeight: "500",
      textAlign: "center",
    },
  
    botoes_texto_simb: {
      fontSize: 35,
    },
  
    botoes_texto_esp: {
      color: "#ffa500"
    },
  
    botoes_result: {
      backgroundColor: "#ffa500",
      fontSize: 35,
    },
  
    botoes_texto_result: {
      color: "#222222",
      fontSize: 35,
    }
  });

export default Medidas;