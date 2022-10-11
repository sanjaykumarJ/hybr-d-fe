import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Posts } from "./components/post";
import { PostDetail } from "./components/post-details";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />}>
          
        </Route>
        <Route  path="details/:postId" element={<PostDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
