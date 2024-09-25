import { useAppSelector } from "../../Store";
import PageHeader from "../../Components/PageHeader/PageHeader";
import "./StartPage.css";

export default function StartPage() {
	const user = useAppSelector(state => state.user.user);

	const renderLoginFirst = () => {
		if (user?.isAdmin) return null;

		
			return <div className='not-connected'></div>;
	};

	const renderNotAdmin = () => {
		if (!user?.isAdmin) {
			return <div className='info-message'>You are not admin</div>;
		}
	};

	return (
		<div className='page admin-page'>
			<PageHeader />
			<>
				{renderLoginFirst()}
				{renderNotAdmin()}
			</>
		</div>
	);
}
