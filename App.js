import { QueryClient, QueryClientProvider } from "react-query";
import { STALE_TIME } from "./utils";
import PostList from "./components/post-list";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME,
    },
  },
});

export default App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="reddit/r/programming" component={PostList} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};
