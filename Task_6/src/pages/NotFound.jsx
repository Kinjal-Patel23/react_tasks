import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-[180px] font-bold pb-2.5 text-blue-950">Oops!</h1>
      <h1 className="text-2xl font-bold mb-4">
        404 - This Page is outside of the universe...!!
      </h1>
      <p className="text-gray-600 mb-6">
        Sorry, The page you are trying to access doesn't exist or has been
        moved.
      </p>

      <Link to="/" className="px-6 py-2 bg-black text-white rounded">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
