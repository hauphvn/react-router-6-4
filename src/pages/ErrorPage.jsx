import MainNavigation from "../components/MainNavigation.jsx";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error)
  return(
    <>
      <MainNavigation/>
      <h1>An error occurred!</h1>
      <p>{error.statusText || error.message || error.status}</p>
    </>
  );
}

export default ErrorPage;
