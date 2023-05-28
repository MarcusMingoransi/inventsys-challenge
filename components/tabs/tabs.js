import { View, TouchableOpacity, Text, ScrollView } from "react-native";

const Tabs = ({ tabs, selectedTab, onPressTab }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ flexDirection: "row" }}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => onPressTab(tab)}
            style={{
              padding: 10,
              borderBottomWidth: selectedTab === tab ? 2 : 0,
              borderBottomColor: "blue",
            }}
          >
            <Text>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Tabs;
