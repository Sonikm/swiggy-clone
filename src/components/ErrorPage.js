import { useRouteError } from "react-router"

function ErrorPage() {

    const error = useRouteError();
    console.log(error);

    return (
        <div>
            {error.statusText}
        </div>
    )
}

export default ErrorPage
