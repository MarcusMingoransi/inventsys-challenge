import { View } from "react-native";
import { styles } from "./styles";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from "rn-placeholder";

const Loading = () => {
  return (
    <View style={styles.container}>
      {Array.from(Array(7), (item, index) => {
        return (
          <Placeholder key={index} Animation={Fade} Left={PlaceholderMedia}>
            <PlaceholderLine height={20} />
            <PlaceholderLine width={30} />
          </Placeholder>
        );
      })}
    </View>
  );
};

export default Loading;
