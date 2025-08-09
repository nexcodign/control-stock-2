export default function Stock({ productos, setProductos }) {
  const borrarProducto = (index) => {
    if (confirm("¿Seguro que quieres borrar este producto?")) {
      const nuevos = productos.filter((_, i) => i !== index);
      setProductos(nuevos);
    }
  };

  const editarProducto = (index) => {
    const prod = productos[index];
    const nuevoNombre = prompt("Nuevo nombre:", prod.nombre) || prod.nombre;
    const nuevaCantidad = parseInt(prompt("Nueva cantidad:", prod.cantidad)) || prod.cantidad;
    const nuevoPrecio = parseFloat(prompt("Nuevo precio:", prod.precio)) || prod.precio;

    const nuevos = [...productos];
    nuevos[index] = { ...prod, nombre: nuevoNombre, cantidad: nuevaCantidad, precio: nuevoPrecio };
    setProductos(nuevos);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Stock Actual</h2>

      {/* Vista en pantallas grandes */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Nombre</th>
              <th className="border p-2">Medida</th>
              <th className="border p-2">Color</th>
              <th className="border p-2">Cantidad</th>
              <th className="border p-2">Precio</th>
              <th className="border p-2">Valor Total</th>
              <th className="border p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p, i) => (
              <tr
                key={i}
                className={p.cantidad === 0 ? "bg-red-200" : p.cantidad < 5 ? "bg-yellow-200" : ""}
              >
                <td className="border p-2">{p.nombre}</td>
                <td className="border p-2">{p.medida}</td>
                <td className="border p-2">{p.color}</td>
                <td className="border p-2">{p.cantidad}</td>
                <td className="border p-2">${p.precio}</td>
                <td className="border p-2">${p.precio * p.cantidad}</td>
                <td className="border p-2 flex gap-2">
                  <button onClick={() => editarProducto(i)} className="bg-yellow-500 text-white px-2 py-1 rounded">✏</button>
                  <button onClick={() => borrarProducto(i)} className="bg-red-500 text-white px-2 py-1 rounded">🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Vista en pantallas pequeñas */}
      <div className="sm:hidden flex flex-col gap-4">
        {productos.map((p, i) => (
          <div
            key={i}
            className={`p-4 rounded shadow ${p.cantidad === 0 ? "bg-red-200" : p.cantidad < 5 ? "bg-yellow-200" : "bg-white"}`}
          >
            <p><strong>Nombre:</strong> {p.nombre}</p>
            <p><strong>Medida:</strong> {p.medida}</p>
            <p><strong>Color:</strong> {p.color}</p>
            <p><strong>Cantidad:</strong> {p.cantidad}</p>
            <p><strong>Precio:</strong> ${p.precio}</p>
            <p><strong>Valor Total:</strong> ${p.precio * p.cantidad}</p>
            <div className="flex gap-2 mt-2">
              <button onClick={() => editarProducto(i)} className="bg-yellow-500 text-white px-2 py-1 rounded">✏</button>
              <button onClick={() => borrarProducto(i)} className="bg-red-500 text-white px-2 py-1 rounded">🗑</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}