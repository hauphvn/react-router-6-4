import Posts from "../components/Posts.jsx";
import { Await, defer, useLoaderData } from "react-router-dom";
import { getPost, getPosts } from "../util/api.js";
import {Suspense} from "react";

function DeferredBlogPostsPage() {
  const loaderData = useLoaderData();
  return (
    <>
    <h1>This is area first load without await for fetching api</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={loaderData.posts} errorElement={<p>Error loading defer posts</p>}>
          {(loadedPosts) => <Posts blogPosts={loadedPosts} />}
        </Await>
      </Suspense>
      {/*<Posts blogPosts={loadedPosts} />*/}
    </>
  );
}
export default DeferredBlogPostsPage;
export async function loader(){
  return defer({posts: getPosts()});
}
