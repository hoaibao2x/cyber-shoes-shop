import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import { getProdAPI, ProductModel } from "../../redux/reducers/productReducer";

type Props = {};

// props: đối tượng props
function Home(props: Props) {
  const { arrProduct } = useSelector((state: RootState) => {
    return state.arrProduct;
  });

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    let action = getProdAPI();
    dispatch(action);
  }, []);

  const renderProduct = () => {
    return arrProduct.map((product: ProductModel, index: number) => {
      return (
        <div className="col-md-4" key={product.id}>
          <div className="card">
            <img src={product.image} alt="" />
            <h3>{product.name}</h3>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <h1 className="text-center">Shoes Shop</h1>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}

export default Home;
