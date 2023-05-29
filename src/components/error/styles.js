import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  image: {
    width: 100,
    height: 100,
    maxWidth: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
  },
  description: {
    fontSize: 16,
    fontWeight: 500,
    color: "#8b8989",
  },
});
