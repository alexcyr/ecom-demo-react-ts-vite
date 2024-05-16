import { Link } from "react-router-dom";
import styled from "styled-components";
import StarSrc from "../../../assets/icons/star.svg";

const TileLink = styled(Link)`
	max-width: 300px;
	position: relative;
`;

const ProductImage = styled.img`
	width: 100%;
`;

const Title = styled.div``;

const RatingRow = styled.div`
	display: flex;
	gap: 4px;
`;

const StarImage = styled.img`
	width: 24px;
	height: 24px;
`;

export interface ProductTileProps {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: { rate: number; count: number };
}

export const ProductTile = ({ id, title, image, rating }: ProductTileProps) => (
	<TileLink to={`/product/${id}`}>
		<ProductImage src={image} loading="lazy" alt={`${title} image`} />
		<Title>{title}</Title>
		<RatingRow>
			<StarImage src={StarSrc} alt="rating" />
			{rating.rate} {`(${rating.count})`}
		</RatingRow>
	</TileLink>
);

export default ProductTile;
