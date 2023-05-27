import { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import api from "./services/api";
import { convertUnixDate } from "./utils/date-manipulation";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    api
      .get("https://api.reddit.com/r/pics/hot.json")
      .then((response) => {
        console.log(response);
        setPosts(response.data ? response.data.data.children : []);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const checkValidImage = useCallback((url) => {
    return url && url !== "self";
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View key={item.data.id}>
            {checkValidImage(item.data.thumbnail) && (
              <Image
                style={styles.thumbnail}
                source={{ uri: item.data.thumbnail || "" }}
              />
            )}
            <View>
              <Text style={styles.author}>by: {item.data.author}</Text>
              <Text style={styles.author}>
                {" "}
                . {convertUnixDate(item.data.created)}
              </Text>
            </View>
            <Text style={styles.title}>{item.data.title}</Text>
            <View>
              <Text style={styles.socialValue}>
                Votes: {item.data.ups - item.data.downs}
              </Text>
              <Text style={styles.socialValue}>
                Comments{item.data.num_comments}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c1c1c1",
    alignItems: "center",
    justifyContent: "center",
  },
  author: {
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
  socialValue: {
    fontSize: 16,
  },
  thumbnail: {
    width: 60,
    height: 60,
  },
});
