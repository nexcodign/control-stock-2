import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 flex flex-wrap items-center justify-between">
      <h1 className="font-bold text-lg">Gestión de Stock</h1>

      {/* Botón hamburguesa (solo en móvil) */}
      <button
        className="sm:hidden block text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Links */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } w-full sm:flex sm:w-auto sm:gap-4 sm:items-center`}
      >
        <Link to="/" className="block py-1">Stock</Link>
        <Link to="/agregar" className="block py-1">Agregar Producto</Link>
        <Link to="/venta" className="block py-1">Registrar Venta</Link>
        <Link to="/historial" className="block py-1">Historial</Link>
      </div>
    </nav>
  );
}