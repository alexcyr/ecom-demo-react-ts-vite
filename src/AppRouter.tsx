import { HashRouter, Route, Routes } from "react-router-dom";
import ProductListings from "./pages/ProductListings/ProductListings";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import { Product } from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";

const routePaths = [
	{
		path: "/",
		element: <ProductListings />,
	},
	{
		path: "/cart",
		element: <Cart />,
	},
	{
		path: "/checkout",
		element: <Checkout />,
	},
	{
		path: "/product/:id",
		element: <Product />,
	},
];

export const AppRouter = () => (
	<HashRouter>
		<Navbar />
		<Routes>
			{routePaths.map((path) => (
				<Route path={path.path} element={path.element} key={path.path} />
			))}
		</Routes>
	</HashRouter>
);

export default AppRouter;
