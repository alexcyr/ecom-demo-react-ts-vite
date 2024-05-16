import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import styled from "styled-components";

const CartWrapper = styled.div`
	display: flex;
	gap: 16px;
	${({ theme }) => theme.pageWidth};
`;

const ProductsWrapper = styled.div`
	flex: 3;
	display: flex;
	flex-direction: column;
`;

const CartInfo = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const ProductRow = styled.div`
	display: flex;
	gap: 8px;
`;

const ProductImage = styled.img`
	height: 40px;
	width: 40px;
`;

const ProductTitle = styled.span``;

const ProductPrice = styled.span``;

const CartTotal = styled.div``;

const CheckoutButton = styled(Link)``;

export const Cart = () => {
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
		<CartWrapper>
			<ProductsWrapper>
				{items.map(({ image, title, price, id }) => (
					<ProductRow key={id}>
						<ProductImage src={image} />
						<ProductTitle>{title}</ProductTitle>
						<ProductPrice>{price}</ProductPrice>
					</ProductRow>
				))}
			</ProductsWrapper>
			<CartInfo>
				<CartTotal>Total: {getTotalPrice()}</CartTotal>
				<CheckoutButton to="/checkout">Checkout</CheckoutButton>
			</CartInfo>
		</CartWrapper>
	);
};

export default Cart;
