import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.calculadora}>
        <View
          style={styles.visor}>
          <Text style={styles.texto}>80 x 50</Text>
          <Text style={[styles.texto, {marginTop: 20, color: "white"}]}>4000</Text>
        </View>

        <View style={styles.botoes_grupo}>
          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.botoes_texto}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.botoes_texto}>( )</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.botoes_texto}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.botoes_texto}>÷</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.botoes_texto}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.botoes_texto}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.botoes_texto}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.botoes_texto}>X</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.botoes_texto}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.botoes_texto}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.botoes_texto}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.botoes_texto}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.botoes_texto}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.botoes_texto}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.botoes_texto}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.botoes_texto}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.botoes_texto}>+/-</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.botoes_texto}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.botoes_texto}>,</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.botoes_texto}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },

  calculadora: {
    flex: 1,
    marginTop: height * .1,
    justifyContent: "flex-start",
    flexDirection: "column"
  },

  visor: {
    height: height * .4,
    width: width * .86,
    borderBottomColor: "#323232",
    borderBottomWidth: 2,
    marginHorizontal: "7%"
  },

  texto: {
    fontSize: 30,
    color: "#ffa500",
    fontWeight: "500",
    textAlign: "right",
  },

  botoes_grupo: {
    height: height * .6,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "5%",
    paddingHorizontal: "10%",
    flexWrap: "wrap",
  },

  botoes: {
    width: (height * .7) * .13,
    backgroundColor: "#383838",
    borderRadius: 100,
    height: (height * .7) * .13,
    marginBottom: 10,
    justifyContent: "center"
  },

  botoes_texto: {
    fontSize: 25,
    color: "white",
    fontWeight: "500",
    textAlign: "center",
  }
});