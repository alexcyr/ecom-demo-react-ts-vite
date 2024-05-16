import { useCallback, useEffect, useState } from "react";
import { ProductTileProps } from "../pages/ProductListings/components/ProductTile";

interface FetchProductProps {
	id?: string;
}

export const useFetchProduct = ({ id }: FetchProductProps) => {
	const [isFetching, setIsFetching] = useState(false);
	const [isError, setIsError] = useState(false);
	const [data, setData] = useState<ProductTileProps>();

	const fetchProduct = useCallback(async () => {
		if (id) {
			setIsFetching(true);
			setIsError(false);
			const res = await fetch(`https://fakestoreapi.com/products/${id}`);

			if (res.ok) {
				const json = await res.json();
				setData(json);
			} else {
				setIsError(true);
			}
			setIsFetching(false);
		}
	}, [id]);

	useEffect(() => {
		fetchProduct();
	}, []);

	return {
		isFetching,
		isError,
		data,
		refetch: fetchProduct,
	};
};

export default useFetchProduct;
