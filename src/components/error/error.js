import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import ImageError from "../../assets/images/warning.png";

const Error = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={ImageError} />
      <Text style={styles.title}>Whoops</Text>
      <Text style={styles.description}>Something went wrong!</Text>
    </View>
  );
};

export default Error;
