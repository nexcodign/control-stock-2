import { useState } from "react";

export default function RegistrarVenta({ productos, setProductos, ventas, setVentas }) {
  const [productoIndex, setProductoIndex] = useState("");
  const [cantidadVendida, setCantidadVendida] = useState("");

  const handleVenta = (e) => {
    e.preventDefault();
    if (productoIndex === "" || cantidadVendida === "") return;

    const index = parseInt(productoIndex);
    const cantidad = parseInt(cantidadVendida);

    if (cantidad > productos[index].cantidad) {
      alert("No hay suficiente stock");
      return;
    }

    const nuevosProductos = [...productos];
    nuevosProductos[index].cantidad -= cantidad;

    const precioUnitario = productos[index].precio;
    const totalVenta = precioUnitario * cantidad;

    setProductos(nuevosProductos);
    setVentas([
      ...ventas,
      {
        producto: productos[index].nombre,
        cantidad,
        precio: precioUnitario,
        total: totalVenta,
        fecha: new Date().toLocaleString()
      }
    ]);

    setProductoIndex("");
    setCantidadVendida("");
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Registrar Venta</h2>
      <form onSubmit={handleVenta} className="flex flex-col gap-2 max-w-sm">
        <select value={productoIndex} onChange={(e) => setProductoIndex(e.target.value)} className="border p-2" required>
          <option value="">Seleccionar producto</option>
          {productos.map((p, i) => (
            <option key={i} value={i}>{p.nombre} - Stock: {p.cantidad}</option>
          ))}
        </select>
        <input
          type="number"
          value={cantidadVendida}
          onChange={(e) => setCantidadVendida(e.target.value)}
          placeholder="Cantidad vendida"
          className="border p-2"
          required
        />
        <button className="bg-green-600 text-white p-2">Registrar</button>
      </form>
    </div>
  );
}