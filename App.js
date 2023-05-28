import { QueryClient, QueryClientProvider } from "react-query";
import { STALE_TIME } from "./utils";
import PostList from "./components/post-list";

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
