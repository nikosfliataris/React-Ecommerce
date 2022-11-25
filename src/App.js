import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  HomePage,
  AboutPage,
  AuthWrapper,
  CartPage,
  CheckOutPage,
  ErrorPage,
  PrivateRoute,
  ProductsPage,
  SingleProductPage,
} from "./pages/index";
function App() {
  return (
    <>
      <AuthWrapper>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <CheckOutPage />
              </PrivateRoute>
            }
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </AuthWrapper>
    </>
  );
}

export default App;
