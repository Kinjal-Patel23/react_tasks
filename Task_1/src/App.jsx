import { Fragment } from "react";
import Portfolio from "./component/Portfolio";

const App = () => {
  const bio =
    "My Name is Kinjal Kaneriya. I have completed my BCA and I have also completed Full stack development classes at Red and White Institute";

  return (
    <>
      <Portfolio bio={bio} />
    </>
  );
};

export default App;
