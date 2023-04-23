import "@/styles/globals.css";

import { Navbar } from "../../components/componentindex";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />;
    </div>
  );
};

export default App;
