import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { styles } from "./styles";

const Tabs = ({ tabs, selectedTab, onPressTab }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.tabsWrapper}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => onPressTab(tab)}
            style={{
              borderBottomWidth: selectedTab === tab ? 2 : 0,
              ...styles.tab,
            }}
          >
            <Text style={styles.title}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Tabs;
