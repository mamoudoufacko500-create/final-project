import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./components/Layout/home-layout";
import HomePage from "./components/Page/home-page";
import WomenPage from "./components/Page/women-page";
import MenPage from "./components/Page/men-page";
import AboutPage from "./components/Page/about-page";
import ShopPage from "./components/Page/shop-page";
import ContactPage from "./components/Page/contact-page";
import ProductPage from "./components/Page/product-page";
import AuthLayout from "./components/Layout/auth-layout";
import LoginPage from "./components/Page/auth/Login-page";
import RegisterPage from "./components/Page/auth/Register-page";
import DashboardLayout from "./components/Layout/dashboard-layout";
import HomePageDashboard from "./components/Dashboard/home-page-dashboard";
import { Toaster } from "sonner";
import UserPage from "./components/Dashboard/user-page";
import CreatePage from "./components/Dashboard/create-page";
import ProduitPage from "./components/Dashboard/produit-page";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="bottom-center" richColors />
      <Routes>
        {/* Route home page */}
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:id" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* authentification */}
          <Route path="auth" element={<AuthLayout />}>
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
          </Route>
        </Route>

        {/* route dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<HomePageDashboard />} />
          <Route path="user" element={<UserPage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="product" element={<ProduitPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
