import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 16,
    padding: 8,
    maxWidth: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  postList: {
    marginTop: 16,
  },
  author: {
    fontSize: 12,
    fontWeight: 500,
  },
  createdAt: {
    fontSize: 10,
    fontWeight: 500,
    color: "#8b8989",
  },
  infoWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
    maxWidth: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    maxWidth: "100%",
    flexShrink: 1,
  },
  socialValue: {
    fontSize: 16,
  },
  socialWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  socialContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 32,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  webViewWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  webViewHeader: {
    width: "100%",
    height: 30,
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    marginBottom: 8,
    borderRadius: 8,
  },
});
