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
  const [milimetros, setMilimetros] = useState("")
  const [centimetros, setCentimetros] = useState("")
  const [metros, setMetros] = useState("")
  const [quilometros, setQuilometros] = useState("")
  const [polegadas, setPolegadas] = useState("")
  const [pes, setPes] = useState("")
  const [jardas, setJardas] = useState("")
  const [milhas, setMilhas] = useState("")
  return (
    <View style={styles.container}>
        <View style={styles.conv_botoes_gp}>
            <TouchableOpacity onPress={() => navigation.navigate("Calculadora")} style={styles.conv_botoes}><Text style={styles.conv_botoes_texto}>➕</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Massa")} style={styles.conv_botoes}><Text style={styles.conv_botoes_texto}>⚖️</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Temperatura")} style={styles.conv_botoes}><Text style={styles.conv_botoes_texto}>🌡</Text></TouchableOpacity>
        </View>

        <View style={styles.calculadora}>
          <View style={[styles.visor, styles.visor_medidas]}>
            <Text style={styles.conv_legenda}>mm</Text>
            <TextInput
              style={styles.conv_input}
              value={milimetros}
              onChangeText={(text) => setMilimetros(text)}
              keyboardType={"numeric"}
              placeholder="Milímetros "
              placeholderTextColor={"#ffa500"}
            />

            <Text style={styles.conv_legenda}>cm</Text>
            <TextInput
              style={styles.conv_input}
              value={centimetros}
              onChangeText={(text) => setCentimetros(text)}
              keyboardType={"numeric"}
              placeholder="Centímetros"
              placeholderTextColor={"#ffa500"}
            />

            <Text style={styles.conv_legenda}>m</Text>
            <TextInput
              style={styles.conv_input}
              value={metros}
              onChangeText={(text) => setMetros(text)}
              keyboardType={"numeric"}
              placeholder="Metros"
              placeholderTextColor={"#ffa500"}
            />

            <Text style={styles.conv_legenda}>km</Text>
            <TextInput
              style={styles.conv_input}
              value={quilometros}
              onChangeText={(text) => setQuilometros(text)}
              keyboardType={"numeric"}
              placeholder="Quilômetros"
              placeholderTextColor={"#ffa500"}
            />

            <Text style={styles.conv_legenda}>pol</Text>
            <TextInput
              style={styles.conv_input}
              value={polegadas}
              onChangeText={(text) => setPolegadas(text)}
              keyboardType={"numeric"}
              placeholder="Polegadas"
              placeholderTextColor={"#ffa500"}
            />

            <Text style={styles.conv_legenda}>pés</Text>
            <TextInput
              style={styles.conv_input}
              value={pes}
              onChangeText={(text) => setPes(text)}
              keyboardType={"numeric"}
              placeholder="Pés"
              placeholderTextColor={"#ffa500"}
            />

            <Text style={styles.conv_legenda}>yd</Text>
            <TextInput
              style={styles.conv_input}
              value={jardas}
              onChangeText={(text) => setJardas(text)}
              keyboardType={"numeric"}
              placeholder="Jardas"
              placeholderTextColor={"#ffa500"}
            />

            <Text style={styles.conv_legenda}>mi</Text>
            <TextInput
              style={styles.conv_input}
              value={milhas}
              onChangeText={(text) => setMilhas(text)}
              keyboardType={"numeric"}
              placeholder="Milhas"
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

export default Medidas;