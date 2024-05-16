import { useCallback, useEffect, useState } from "react";
import { ProductTileProps } from "../pages/ProductListings/components/ProductTile";

export const useFetchProductListings = () => {
	const [isFetching, setIsFetching] = useState(false);
	const [isError, setIsError] = useState(false);
	const [data, setData] = useState<ProductTileProps[]>();

	const fetchProductListings = useCallback(async () => {
		setIsFetching(true);
		setIsError(false);
		const res = await fetch("https://fakestoreapi.com/products");

		if (res.ok) {
			const json = await res.json();
			setData(json);
		} else {
			setIsError(true);
		}
		setIsFetching(false);
	}, []);

	useEffect(() => {
		fetchProductListings();
	}, []);

	return {
		isFetching,
		isError,
		data,
		refetch: fetchProductListings,
	};
};

export default useFetchProductListings;
