import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import ProductDetailsPage from "./views/ProductDetailsPage";
import ProductListPage from "./views/ProductListPage";
import CartPage from "./views/CartPage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import PageNotFoundPage from "./views/PageNotFoundPage";
import UserProfilePage from "./views/user/UserProfilePage";
import UserOrdersPage from "./views/user/UserOrdersPage";
import UserCartDetailsPage from "./views/user/UserCartDetailPage";
import UserOrdersDetailsPage from "./views/user/UserOrderDetailsPage";

function App() {
  return (
    // Establecemos la ruta directa de la HomePage
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product-detail" element={<ProductDetailsPage /> } />
        <Route path="/product-detail/:id" element={<ProductDetailsPage /> } />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        Route
        <Route path="/user" element={<UserProfilePage />} />
        <Route path="/user/my-orders" element={<UserOrdersPage />} />
        <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
        <Route path="/user/order-details" element={<UserOrdersDetailsPage />} />
        <Route path="*" element={<PageNotFoundPage />} />




      </Routes>
    </BrowserRouter>

  );
}

export default App;
