/* eslint-disable @typescript-eslint/no-explicit-any */
import { getProductByCategory } from '../../store/features/Product/ProductApi';
import { useAppDispatch } from '../../store/store';
import './categoryButton.scss';
const CategoriesButton = (props: any) => {
  const dispatch = useAppDispatch();
  const { category,filterCategory, setFilterCategory } = props;
  return (
    <button
      className={`category__btn ${category===filterCategory && "active"}`}
      onClick={() => {
        dispatch(getProductByCategory({ category: category }));
        setFilterCategory(category);
      }}
    >
      {category}
    </button>
  );
};

export default CategoriesButton;
