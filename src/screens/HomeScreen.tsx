import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/slices/productSlice";

const HomeScreen = () => {
  const { products, loading, error } = useSelector(
    (state: RootState) => state.product,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return <></>;
};

export default HomeScreen;
