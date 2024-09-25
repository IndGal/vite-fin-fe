import logoIcon from "../../Static/Images/reshot-icon-logout-4CGXNEQY78.svg";

export default function LogoHeader() {
  return (
    <div
      className="logo-header"
      onClick={() => {
       // window.open("https://pictographs.io/");
      }}
    >
      <img className="logo-short" src={logoIcon} alt="logo" />
    </div>
  );
}
