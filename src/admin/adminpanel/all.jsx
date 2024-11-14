import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


const All = () => {
  const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch(`/products.json`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching products:', error));
    }, []);
  
    const handleDelete = (id) => {
      if (window.confirm('Are you sure you want to delete this product?')) {
        fetch(`http://localhost:3001/products/${id}`, {
          method: 'DELETE',
        })
          .then(() => {
            setProducts(products.filter((product) => product.id !== id));
          })
          .catch((error) => console.error('Error deleting product:', error));
      }
    };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Product List</h1>
      <table className="table-auto w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} className="border-b">
              <td className="px-4 py-2">{product.id}</td>
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2">{product.price}</td>
              <td className="px-4 py-2">
                <Link to={`/admin/edit/${product.id}`} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 mr-2">
                  Edit
                </Link>
                <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default All


