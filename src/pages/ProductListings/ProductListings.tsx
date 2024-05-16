import useFetchProductListings from "../../hooks/useFetchProductListings";
import styled from "styled-components";
import ProductTile from "./components/ProductTile";

const PageWrapper = styled.div`
	${({ theme }) => theme.pageWidth};
`;

const ProductGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const ProductListings = () => {
	const { data, isFetching, isError } = useFetchProductListings();

	if (isFetching) {
		return <div>Loading</div>;
	}

	if (isError) {
		return <div>Encountered an error fetching products</div>;
	}

	return data ? (
		<PageWrapper>
			<ProductGrid>
				{data.map((item) => (
					<ProductTile {...item} key={item.id} />
				))}
			</ProductGrid>
		</PageWrapper>
	) : null;
};

export default ProductListings;
