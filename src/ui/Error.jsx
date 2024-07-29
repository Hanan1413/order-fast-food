import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  // navigate to router
  const navigate = useNavigate();
  // show error from router
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
     <LinkButtton  to="-1">&larr; Go back </LinkButtton>

    </div>
  );
}

export default Error;
