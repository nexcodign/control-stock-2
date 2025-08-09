export default function HistorialVentas({ ventas }) {
  const gananciaTotal = ventas.reduce((acc, v) => acc + v.total, 0);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Historial de Ventas</h2>
      {ventas.length === 0 ? (
        <p className="text-gray-500">No hay ventas registradas aún.</p>
      ) : (
        <>
          <table className="w-full border-collapse border border-gray-300 text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Fecha</th>
                <th className="border p-2">Producto</th>
                <th className="border p-2">Cantidad</th>
                <th className="border p-2">Precio Unitario</th>
                <th className="border p-2">Total Venta</th>
              </tr>
            </thead>
            <tbody>
              {ventas.map((v, i) => (
                <tr key={i}>
                  <td className="border p-2">{v.fecha}</td>
                  <td className="border p-2">{v.producto}</td>
                  <td className="border p-2">{v.cantidad}</td>
                  <td className="border p-2">${v.precio}</td>
                  <td className="border p-2">${v.total}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 p-3 bg-green-100 border border-green-400 rounded">
            <h3 className="text-lg font-bold text-green-700">
              💰 Ganancia total: ${gananciaTotal.toFixed(2)}
            </h3>
          </div>
        </>
      )}
    </div>
  );
}