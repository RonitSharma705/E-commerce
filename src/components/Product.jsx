import { useParams } from "react-router-dom";
import "./Product.css";

export default function Product() {
  const { category } = useParams();

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "600" }}>
        {category ? category.toUpperCase() : "ALL PRODUCTS"}
      </h1>

      {/* Hard-coded product demo */}
      <div style={{
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
      }}>
        <div className="product-card">Product 1</div>
        <div className="product-card">Product 2</div>
        <div className="product-card">Product 3</div>
      </div>
    </div>
  );
}
