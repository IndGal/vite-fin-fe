import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {  
  StartPage,
} from "../Pages";
import Loader from "../Components/Loading/Loading";
import ScrollToAnchor from "./ScrollToAnchor";
import useAuth from "../Helpers/useAuth";
import ErrorMessage from "../Components/ErrorMessage/ErrorMessage";

export default function RouterMain() {
 // useAuth();

  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/start/" />} />
          <Route path="/start" element={<StartPage />} />  
        </Routes>
        <Loader />
        <ErrorMessage />
        <ScrollToAnchor />
      </Router>
    </div>
  );
}
