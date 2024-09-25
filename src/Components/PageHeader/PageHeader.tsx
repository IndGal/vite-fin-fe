import "./pageHeader.css";
import LogoHeader from "./LogoHeader";
import MenuHeader from "./MenuHeader";

type TPageHeader = {
  showNavigation?: string[];
};

export default function PageHeader({ showNavigation }: TPageHeader) {
  return (
    <div className="page-header">
      <LogoHeader />
      <MenuHeader />
    </div>
  );
}
