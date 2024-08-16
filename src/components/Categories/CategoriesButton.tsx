/* eslint-disable @typescript-eslint/no-explicit-any */
import './categoryButton.scss';
const CategoriesButton = () => {
  return [1, 2, 3, 4, 5].map((item: any) => (
    <button className="category__btn" key={item}>
      Category
    </button>
  ));
};

export default CategoriesButton;
