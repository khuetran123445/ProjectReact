import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type TProduct = {
  id: number;
  images: string;
  title: string;
  price: number;
};
const OrderNow = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [product, setProduct] = useState<TProduct | null>(null);
  useEffect(() => {
    const getProduct = localStorage.getItem("products");
    if (getProduct) {
      const products: TProduct[] = JSON.parse(getProduct);
      const selectedProduct = products.find((p) => p.id === parseInt(id!, 15));
      setProduct(selectedProduct || null);
    }
  }, [id]);
  if (!product) {
    return <div>No product selected</div>; // Xử lý trường hợp không có sản phẩm
  }
  return (
    <div>
      <img
        src={product.images}
        alt={product.title}
        style={{
          width: "150px",
          height: "auto",
        }}
      />
      <h1>{product.title}</h1>
    </div>
  );
};

export default OrderNow;
