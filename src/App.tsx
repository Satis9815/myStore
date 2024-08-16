
import {Routes,Route} from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import ProductDetailsPage from "./pages/ProductDetails/ProductDetailsPage"
function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/product-details/:id" element={<ProductDetailsPage/>}/>
    </Routes>
    </>
  )
}

export default App
