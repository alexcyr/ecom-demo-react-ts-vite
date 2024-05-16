import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme.styled";
import AppRouter from "./AppRouter";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<AppRouter />
		</ThemeProvider>
	);
}

export default App;
