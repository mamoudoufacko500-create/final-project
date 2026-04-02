import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeLayout from "./components/Layout/home-layout"
import HomePage from "./components/Page/home-page"
import WomenPage from "./components/Page/women-page"
import MenPage from "./components/Page/men-page"
import AboutPage from "./components/Page/about-page"
import ShopPage from "./components/Page/shop-page"
import ContactPage from "./components/Page/contact-page"
import ProductPage from "./components/Page/product-page"


function App() {
 

  return (
    <BrowserRouter>
    <Routes>

      {/* Route home page */}
      <Route path="/" element={<HomeLayout />}>
      <Route path="/" element={<HomePage />}/>
      <Route path="/women" element={<WomenPage />}/>
      <Route path="/men" element={<MenPage />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/shop" element={<ShopPage />}/>
       <Route path="/shop/:id" element={<ProductPage />} />
      <Route path="/contact" element={<ContactPage />}/>
      </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
