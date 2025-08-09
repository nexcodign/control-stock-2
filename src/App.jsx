import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Stock from "./pages/Stock";
import AgregarProducto from "./pages/AgregarProducto";
import RegistrarVenta from "./pages/RegistrarVenta";
import { useState, useEffect } from "react";
import HistorialVentas from "./pages/HistorialVentas";
function App() {
  const [productos, setProductos] = useState([]);
  const [ventas, setVentas] = useState([]);

  // Cargar datos de localStorage al iniciar
  useEffect(() => {
    const prodStorage = JSON.parse(localStorage.getItem("productos")) || [];
    const ventasStorage = JSON.parse(localStorage.getItem("ventas")) || [];
    setProductos(prodStorage);
    setVentas(ventasStorage);
  }, []);

  // Guardar cambios en localStorage
  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }, [productos]);

  useEffect(() => {
    localStorage.setItem("ventas", JSON.stringify(ventas));
  }, [ventas]);

  <button
  onClick={() => {
    if (confirm("¿Seguro que quieres borrar todo el stock y ventas?")) {
      setProductos([]);
      setVentas([]);
      localStorage.clear();
    }
  }}
  className="bg-red-700 text-white p-2 rounded my-4"
>
  Vaciar Todo
</button>

  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/historial" element={<HistorialVentas ventas={ventas} />} />
          <Route path="/" element={<Stock productos={productos} />} />
          <Route path="/agregar" element={<AgregarProducto productos={productos} setProductos={setProductos} />} />
          <Route path="/venta" element={<RegistrarVenta productos={productos} setProductos={setProductos} ventas={ventas} setVentas={setVentas} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
