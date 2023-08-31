import "@/styles/globals.css";

import { NavBar } from "../../components/componentsindex";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
