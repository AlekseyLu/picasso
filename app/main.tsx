import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../shared/api/store";
import { Home } from "../pages/Home";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router basename={import.meta.env.BASE_URL}>
    <Provider store={store}>
      <Home />
    </Provider>
  </Router>
);
