import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import CartDetail from "./Routes/CartDetail/CartDetail";
import Categories from "./Routes/Categories/Categories";
import Home from "./Routes/Home/Home";
import Layout from "./Components/Layout";
import Login from "./Routes/Login/Login";
import NotFound from "./Routes/NotFound/NotFound";
import ProductCreate from "./Routes/Products/ProductCreate";
import ProductDetail from "./Routes/Products/ProductDetail";
import ProductEdit from "./Routes/Products/ProductEdit";
import Products from "./Routes/Products/Products";
import Register from "./Routes/Register/Register";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart-detail" element={<CartDetail />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/products/create" element={<ProductCreate />} />
            <Route path="/products/edit/:id" element={<ProductEdit />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
