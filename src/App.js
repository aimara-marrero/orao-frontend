import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

//user components : 

import RoutesWithUserComponent from "./components/user/RoutesWithUserComponent";

// public available routes:
import HomePage from "./views/HomePage";
import ProductDetailsPage from "./views/ProductDetailsPage";
import ProductListPage from "./views/ProductListPage";
import CartPage from "./views/CartPage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import PageNotFoundPage from "./views/PageNotFoundPage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

//Protected user pages: 
import UserProfilePage from "./views/user/UserProfilePage";
import UserOrdersPage from "./views/user/UserOrdersPage";
import UserCartDetailsPage from "./views/user/UserCartDetailPage";
import UserOrdersDetailsPage from "./views/user/UserOrderDetailsPage";

//Protected admin pages: 

import AdminUsersPage from "./views/admin/AdminUsersPage";
import AdminProductsPage from "./views/admin/AdminProductsPage";
import AdminOrdersPage from "./views/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./views/admin/AdminOrdersPage";
import AdminEditUserPage from "./views/admin/AdminEditUserPage";
import AdminEditProductPage from "./views/admin/AdminEditProductPage";
import AdminCreateProductPage from "./views/admin/AdminCreateProductPage";
import AdminChatsPage from "./views/admin/AdminChatsPage";
import AdminAnalyticsPage from "./views/admin/AdminAnalyticsPage";



function App() {


  return (

    // Establecemos la ruta directa de la HomePage
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserComponent />} >

          {/*Publicly available routes:*/}
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-detail" element={<ProductDetailsPage />} />
          <Route path="/product-detail/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<PageNotFoundPage />} />
        </Route>
        {/*user protected routes:*/}
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-orders" element={<UserOrdersPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route path="/admin/order-details" element={<UserOrdersDetailsPage />} />

        </Route>

        {/*admin protected routes:*/}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/create-new-product" element={<AdminCreateProductPage />} />
          <Route path="/admin/edit-product" element={<AdminEditProductPage />} />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/admin/order-details" element={<AdminOrderDetailsPage />} />
          <Route path="/admin/chats" element={<AdminChatsPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />

        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>

  );
}

export default App;
