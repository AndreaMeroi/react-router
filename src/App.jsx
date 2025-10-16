// install and import BROWSEROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom"


// import pages 
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import Prodotti from "./pages/ProdottiPage"







function App() {


  return (



    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>

          <Route index element={<HomePage />} />
          <Route path="/ChiSiamo" element={<ChiSiamo />} />
          <Route path="/Prodotti" element={<Prodotti />} />


        </Route>
      </Routes>
    </BrowserRouter >





  )
}

export default App
