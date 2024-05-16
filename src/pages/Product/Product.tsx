import { useParams } from "react-router-dom";
import styled from "styled-components";
import useFetchProduct from "../../hooks/useFetchProduct";
import useCart from "../../hooks/useCart";

const ProductWrapper = styled.div`
	display: flex;
	gap: 16px;
	${({ theme }) => theme.pageWidth};
`;
const ImageWrapper = styled.div`
	flex: 2;
`;

const Image = styled.img`
	width: 100%;
`;

const Content = styled.div`
	flex: 1;
`;

const Title = styled.h1``;

const Description = styled.p``;

const AddToCartButton = styled.button``;

export const Product = () => {
	let { id } = useParams();
	const { data, isFetching, isError } = useFetchProduct({ id });
	const { addToCart } = useCart();

	const handleAddToCartClick = () => {
		if (data) {
			addToCart(data);
			alert("Added product to cart");
		}
	};

	if (isFetching) {
		return "Loading";
	}

	if (isError) {
		return "Error Loading Product";
	}

	return data ? (
		<ProductWrapper>
			<ImageWrapper>
				<Image src={data.image} />
			</ImageWrapper>
			<Content>
				<Title>{data.title}</Title>
				<Description>{data.description}</Description>
				<AddToCartButton onClick={handleAddToCartClick}>Add To Cart</AddToCartButton>
			</Content>
		</ProductWrapper>
	) : null;
};
