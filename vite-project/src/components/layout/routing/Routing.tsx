import { Navigate, Route,Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Products from "../../pages/products/products";

export default function Rounting() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
         <Route path="/home" element={<Home />} />
         <Route path="/products" element={<Products />} />
         <Route path="/*" element={<>404</>} />
    </Routes>
  )
}
