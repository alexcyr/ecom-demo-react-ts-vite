import { ProductTileProps } from "../pages/ProductListings/components/ProductTile";

interface CartInfo {
	items: ProductTileProps[];
}

const CART_STORAGE_KEY = "cart";

export const useCart = () => {
	const addToCart = (item: ProductTileProps) => {
		const cartString = localStorage.getItem(CART_STORAGE_KEY);
		let cartInfo: CartInfo;
		if (cartString) {
			cartInfo = JSON.parse(cartString);
		} else {
			cartInfo = { items: [] };
		}
		cartInfo.items.push(item);

		localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartInfo));
	};

	const getItems = () => {
		const cartString = localStorage.getItem(CART_STORAGE_KEY);
		let cartInfo: CartInfo;
		if (cartString) {
			cartInfo = JSON.parse(cartString);
		} else {
			cartInfo = { items: [] };
		}

		return cartInfo.items;
	};

	return { addToCart, getItems };
};
export default useCart;
