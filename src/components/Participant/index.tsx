import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const Participant = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Wagner Oliveira</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};