import { Provider } from "react-redux";
import { store } from "./Store/index";
import RouterMain from "./Router/RouterMain";
import "./Static/css/common.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";

const theme = createTheme({
	spacing: 4,
	palette: {
		mode: "dark",
		primary: {
			main: "#FFF201",
		},
		secondary: {
			main: "#0100FC",
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<div className='fin-root'>
					<div className='fin-app'>
						<RouterMain />
						<Toaster />
					</div>
				</div>
			</Provider>
		</ThemeProvider>
	);
}

export default App;
