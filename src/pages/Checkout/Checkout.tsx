import useCart from "../../hooks/useCart";

export const Checkout = () => {
	const { getItems } = useCart();
	const items = getItems();

	const getTotalPrice = () => {
		let total = 0;
		items.forEach((item) => {
			total += item.price;
		});
		return total;
	};

	return (
		<div>
			Total: {getTotalPrice()}
			<button>Place Order</button>
		</div>
	);
};

export default Checkout;
