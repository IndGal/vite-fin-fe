import { useAppSelector } from "../../Store";
import "./Loading.css";

export default function Loader() {
  //if any request is pending showing icon on loading
  const isLoadingMessage = useAppSelector((state)=>state.app.loadingMessage);
  const isLoadingServiceAuth = useAppSelector((state) =>
    Object.values(state.serviceAuth.queries).some(
      (query) => query?.status === "pending"
    )
  );
  const isLoadingServiceUser = useAppSelector((state) =>
    Object.values(state.serviceUser.queries).some(
      (query) => query?.status === "pending"
    )
  );
  
  if (!isLoadingServiceAuth && !isLoadingServiceUser  && !isLoadingMessage) return null;
  return (
    <div className="component loader-base">
      <div className="loader-container">
        <div className="loader"></div>
      </div>
      {isLoadingMessage && <div className="loading-message">{isLoadingMessage}</div> }
    </div>
  );
}
