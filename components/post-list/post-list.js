import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  POSTS_URL,
  checkThumbnailValid,
  convertUnixDate,
  fetchPosts,
} from "../../utils";
import { useQuery } from "react-query";
import { useCallback, useState } from "react";
import WebView from "react-native-webview";

export default PostList = () => {
  const [postLink, setPostLink] = useState("");
  const { data, isLoading, error } = useQuery(["posts"], () =>
    fetchPosts(POSTS_URL)
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      {postLink && (
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              width: "100%",
              height: 30,
              backgroundColor: "green",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={() => setPostLink("")}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
          <WebView
            source={{
              uri: postLink,
            }}
          />
        </View>
      )}
      <FlatList
        data={data.data.children}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.data.id}
            onPress={() => setPostLink(item.data.url)}
          >
            <View>
              {checkThumbnailValid(item.data.thumbnail) && (
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
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

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
