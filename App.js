import { QueryClient, QueryClientProvider } from "react-query";
import PostList from "./components/post-list/post-list";
import { STALE_TIME } from "./utils";

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
      <PostList />
    </QueryClientProvider>
  );
};
