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

const Peso = ({ navigation }) => {
  const [miligramas, setMiligramas] = useState("")
  const [gramas, setGramas] = useState("")
  const [quilogramas, setQuilogramas] = useState("")
  const [toneladas, setToneladas] = useState("")
  const [oncas, setOncas] = useState("")
  const [arroba, setArroba] = useState("")
  return (
    <View style={styles.container}>
        <View style={styles.conv_botoes_gp}>
            <TouchableOpacity onPress={() => navigation.navigate("Medidas")} style={styles.conv_botoes}><Text style={styles.conv_botoes_texto}>📏</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Calculadora")} style={styles.conv_botoes}><Text style={styles.conv_botoes_texto}>➕</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Temperatura")} style={styles.conv_botoes}><Text style={styles.conv_botoes_texto}>🌡</Text></TouchableOpacity>
        </View>

        <View style={styles.calculadora}>
          <View style={[styles.visor, styles.visor_medidas]}>
            <Text style={styles.conv_legenda}>mg</Text>
            <TextInput
              style={styles.conv_input}
              value={miligramas}
              onChangeText={(text) => setMiligramas(text)}
              keyboardType={"numeric"}
              placeholder="Miligrama "
              placeholderTextColor={"#ffa500"}
            />

            <Text style={styles.conv_legenda}>g</Text>
            <TextInput
              style={styles.conv_input}
              value={gramas}
              onChangeText={(text) => setGramas(text)}
              keyboardType={"numeric"}
              placeholder="Grama"
              placeholderTextColor={"#ffa500"}
            />

            <Text style={styles.conv_legenda}>kg</Text>
            <TextInput
              style={styles.conv_input}
              value={quilogramas}
              onChangeText={(text) => setQuilogramas(text)}
              keyboardType={"numeric"}
              placeholder="Quilograma"
              placeholderTextColor={"#ffa500"}
            />

            <Text style={styles.conv_legenda}>t</Text>
            <TextInput
              style={styles.conv_input}
              value={toneladas}
              onChangeText={(text) => setToneladas(text)}
              keyboardType={"numeric"}
              placeholder="Tonelada "
              placeholderTextColor={"#ffa500"}
            />

            <Text style={styles.conv_legenda}>oz</Text>
            <TextInput
              style={styles.conv_input}
              value={oncas}
              onChangeText={(text) => setOncas(text)}
              keyboardType={"numeric"}
              placeholder="Onça"
              placeholderTextColor={"#ffa500"}
            />

            <Text style={styles.conv_legenda}>@</Text>
            <TextInput
              style={styles.conv_input}
              value={arroba}
              onChangeText={(text) => setArroba(text)}
              keyboardType={"numeric"}
              placeholder="Arroba"
              placeholderTextColor={"#ffa500"}
            />
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
  
    conv_botoes_gp: {
        zIndex: 1,
      position: "absolute",
      left: 10,
      top: 50
    },
  
    conv_botoes: {
      backgroundColor: "#383838",
      width: width * .1,
      height: width * .1,
      marginBottom: 10,
      justifyContent: "center",
      borderRadius: 50,
    },
  
    conv_botoes_texto: {
      color: "#ffa500",
      textAlign: "center",
      fontWeight: "500",
      fontSize: 20
    },

    conv_legenda: {
      width: width * .15,
      backgroundColor: "#383838",
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      height: height * .08,
      marginLeft: width * .12,
      textAlign: "center",
      textAlignVertical: "center",
      color: "#ffa500",
      fontWeight: "500"
    },

    conv_input: {
      width: width * .63,
      height: height * .08,
      textAlignVertical: "center",
      color: "#ffa500",
      fontWeight: "500",
      paddingLeft: 10,
      borderColor: "#383838",
      borderWidth: 1.5,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      marginBottom: 20,
    },
  
    calculadora: {
      flex: 1,
      marginTop: height * .04,
      justifyContent: "flex-start",
      flexDirection: "column"
    },
  
    visor: {
      height: height * .4038,
      width: width * .95,
      borderBottomColor: "#383838",
      borderBottomWidth: 2,
      justifyContent: "flex-start",
      marginHorizontal: "2.5%",
      paddingVertical: "5%",
      paddingHorizontal: "2.5%",
    },

    visor_medidas: {
      height: height * 1,
      flexDirection: "row",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      borderBottomWidth: 0
    },
  
    texto: {
      fontSize: 30,
      color: "#ffa500",
      fontWeight: "500",
      textAlign: "right",
      textAlignVertical: "bottom",
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

export default Peso;