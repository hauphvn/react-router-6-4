import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage ,{loader as loaderPosts} from './pages/BlogPosts';
import NewPostPage from './pages/NewPost';
import PostDetailPage from './pages/PostDetail';
import RootLayout from './pages/RootLayout';
import WelcomePage from './pages/Welcome';
import ErrorPage from "./pages/ErrorPage.jsx";
const router = createBrowserRouter(createRoutesFromElements(
  <Route path={'/'} element={<RootLayout/>} errorElement={<ErrorPage/>}>
    <Route index element={<WelcomePage />} />
    <Route path="/blog" element={<BlogLayout />}>
      <Route index element={<BlogPostsPage />} loader={loaderPosts} />
      <Route path=":id" element={<PostDetailPage />} />
    </Route>
    <Route path="/blog/new" element={<NewPostPage />} />
  </Route>
))
function App() {
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <RootLayout>
    //
    //   </RootLayout>
    // </BrowserRouter>
  );
}

export default App;
