import { useState } from "react";

export default function AgregarProducto({ productos, setProductos }) {
  const [form, setForm] = useState({
    nombre: "",
    medida: "",
    color: "",
    cantidad: "",
    precio: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductos([...productos, { ...form, cantidad: parseInt(form.cantidad), precio: parseFloat(form.precio) }]);
    setForm({ nombre: "", medida: "", color: "", cantidad: "", precio: "" });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Agregar Producto</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm">
        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" className="border p-2" required />
        <input name="medida" value={form.medida} onChange={handleChange} placeholder="Medida" className="border p-2" />
        <input name="color" value={form.color} onChange={handleChange} placeholder="Color" className="border p-2" />
        <input type="number" name="cantidad" value={form.cantidad} onChange={handleChange} placeholder="Cantidad" className="border p-2" required />
        <input type="number" step="0.01" name="precio" value={form.precio} onChange={handleChange} placeholder="Precio" className="border p-2" required />
        <button className="bg-blue-600 text-white p-2">Guardar</button>
      </form>
    </div>
  );
}