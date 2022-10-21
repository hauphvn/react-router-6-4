import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage, { loader as loaderPosts } from './pages/BlogPosts';
import NewPostPage, { action as addNewPost } from './pages/NewPost';
import PostDetailPage from './pages/PostDetail';
import RootLayout from './pages/RootLayout';
import WelcomePage from './pages/Welcome';
import ErrorPage from "./pages/ErrorPage.jsx";
import DeferredBlogPostsPage, { loader as deferLoaderPosts } from "./pages/DeferredBlogPosts";

const router = createBrowserRouter(
  [{
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <WelcomePage/> },
      {
        path: '/blog', element: <BlogLayout/>,
        children: [
          { index: true, element: <BlogPostsPage/>, loader: loaderPosts },
          { path: ':id', element: <PostDetailPage/> },
          { path: 'defer-slow-loading', element: <DeferredBlogPostsPage/>, loader: deferLoaderPosts },
        ]
      },
      { path: '/blog/new', element: <NewPostPage/>, action: addNewPost }
    ]
  }]
)
// const router = createBrowserRouter(createRoutesFromElements(
//   <Route path={'/'} element={<RootLayout/>} errorElement={<ErrorPage/>}>
//     <Route index element={<WelcomePage/>}/>
//     <Route path="/blog" element={<BlogLayout/>}>
//       <Route index element={<BlogPostsPage/>} loader={loaderPosts}/>
//       <Route path=":id" element={<PostDetailPage/>}/>
//       <Route path={'defer-slow-loading'} element={<DeferredBlogPostsPage/>} loader={deferLoaderPosts}/>
//     </Route>
//     <Route path="/blog/new" element={<NewPostPage/>} action={addNewPost}/>
//   </Route>
// ))

function App() {
  return (
    <RouterProvider router={router}/>
    // <BrowserRouter>
    //   <RootLayout>
    //
    //   </RootLayout>
    // </BrowserRouter>
  );
}

export default App;
