import { useRouteError } from "react-router-dom";

function ErrorPage()
{
    let error = useRouteError();
    console.error(error);

    return(
        <div>Упс!</div>
    );
}

export default ErrorPage;