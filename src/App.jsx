
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/Chi Siamo"
import Prodotti from "./pages/Prodotti"
import Defaultlayout from "./components/DefaultLayout"

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Defaultlayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/ChiSiamo" element={<ChiSiamo />} />
          <Route path="/Prodotti" element={<Prodotti />} />
        </Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App
