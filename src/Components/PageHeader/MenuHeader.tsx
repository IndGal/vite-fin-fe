import { useState } from "react";
import { Button } from "../../Controls";
import menuIcon from "../../Static/Images/reshot-icon-logout-4CGXNEQY78.svg";
import { useNavigate } from "react-router-dom";


export default function MenuHeader() {
  const navigate = useNavigate(); 


  const onClick = (selector: string) => {
    const pathParams = window.location.pathname.split("/");

    const newPath =
      pathParams[1] === "referral"
        ? "/referral" + "#" + selector
        : "/referral/" +
          (pathParams.length > 2 ? pathParams[pathParams.length - 1] : "");

    navigate(newPath);
  };

  
  const renderMenu = () => {

    return (
      <>
        <div className="buttons-row ">
          
            <Button
              name="btnpresale"
              label="PRESALE"
              showType="secondary"
              onClick={() => onClick("start")}
            />
         
            <div className="buttons-separator"></div>
          
            <Button
              name="btntokenomics"
              label="TOKENOMICS"
              showType="secondary"
              onClick={() => onClick("tokenomics")}
            />
            <div className=" buttons-separator"></div>
        </div>
        {/* <Button
          name="btnsandwitch"
          className="hamburger"
          showType="secondary"
          img={menuIcon}
          onClick={onMenuUp}
        /> */}
      </>
    );
  };

  return (
    <div className="menu-header ">
      {renderMenu()}
      {/* {renderBurgerMenu()} */}
    </div>
  );
}
