import { useRouteError } from "react-router";
import empty404 from "../assets/empty_404.avif";
import { Link } from "react-router-dom";

function PageNotFound() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex h-[100vh] w-full flex-col items-center justify-center">
      <div className="flex flex-col gap-2 px-8 items-center justify-center text-center">
        <img className="w-[300px] xs:w-[180px]" src={empty404} alt="" />
        <h2 className="text-3xl font-bold xs:text-xl">Page not found</h2>
        <p className="text-gray-500 xs:text-sm">
          Uh-oh! Looks like the page you are trying to access, doesn't <br />{" "}
          exist. Please start afresh.
        </p>
        <Link to="/">
          <button className="mt-4 bg-orange-500 p-3 px-4 xs:text-sm hover:bg-orange-600 text-white outline-none">
            GO HOME
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
