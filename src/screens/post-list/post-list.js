import {
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  POSTS_NEW_URL,
  POSTS_TOP_URL,
  POSTS_CONTROVERSIAL_URL,
  POSTS_HOT_URL,
  checkThumbnailValid,
  convertUnixDate,
  fetchPosts,
} from "../../utils";
import { useQuery } from "react-query";
import { useCallback, useState } from "react";
import WebView from "react-native-webview";
import Tabs from "../../components/tabs";
import UpArrowIcon from "../../components/icons/up-arrow-icon";
import DownArrowIcon from "../../components/icons/down-arrow-icon";
import CommentIcon from "../../components/icons/comment-icon";
import { styles } from "./styles";
import LeftArrowIcon from "../../components/icons/left-arror-icon";
import Loading from "../../components/loading";
import Error from "../../components/error";

const POSTS_SEGMENTS = {
  New: POSTS_NEW_URL,
  Top: POSTS_TOP_URL,
  Controversial: POSTS_CONTROVERSIAL_URL,
  Hot: POSTS_HOT_URL,
};

const PostList = () => {
  const [postLink, setPostLink] = useState("");
  const [postListLink, setPostListLink] = useState(POSTS_SEGMENTS.New);
  const [selectedTab, setSelectedTab] = useState("New");
  const [refreshing, setRefreshing] = useState(false);

  const tabs = ["New", "Top", "Controversial", "Hot"];

  const { data, isLoading, error, refetch } = useQuery(
    ["posts", postListLink],
    () => fetchPosts(postListLink)
  );

  const onTabPress = (tab) => {
    setSelectedTab(tab);
    setPostListLink(POSTS_SEGMENTS[tab]);
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Tabs tabs={tabs} selectedTab={selectedTab} onPressTab={onTabPress} />
      {postLink && (
        <View style={styles.webViewWrapper}>
          <View style={styles.webViewHeader}>
            <TouchableOpacity onPress={() => setPostLink("")}>
              <LeftArrowIcon size={24} color="#000000" />
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
        style={styles.postList}
        data={data ? data.data.children : []}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.data.id}
            onPress={() => setPostLink(item.data.url)}
          >
            <View style={styles.card}>
              <View style={styles.infoWrapper}>
                <Text style={styles.author}>by: {item.data.author}</Text>
                <Text style={styles.createdAt}>
                  {" "}
                  . {convertUnixDate(item.data.created)}
                </Text>
              </View>
              <View style={styles.contentWrapper}>
                {checkThumbnailValid(item.data.thumbnail) && (
                  <Image
                    style={styles.thumbnail}
                    source={{ uri: item.data.thumbnail || "" }}
                  />
                )}

                <Text style={styles.title}>{item.data.title}</Text>
              </View>
              <View style={styles.socialContainer}>
                <View style={styles.socialWrapper}>
                  <UpArrowIcon size={16} color="#000000" />
                  <Text style={styles.socialValue}>
                    {item.data.ups - item.data.downs}
                  </Text>
                  <DownArrowIcon size={16} color="#000000" />
                </View>
                <View style={styles.socialWrapper}>
                  <CommentIcon size={16} color="#000000" />
                  <Text style={styles.socialValue}>
                    {item.data.num_comments}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default PostList;
