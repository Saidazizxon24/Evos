
// import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// const createProduct = () => {
//   const { id } = useParams(); // If id exists, we are editing a product
//   const [product, setProduct] = useState({ name: '', price: '' });
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (id) {
//       // Fetch the product details if we're editing
//       fetch(`/products.json/${id}`)
//         .then(response => {
//           setProduct(response.data);
//         })
//         .catch(error => {
//           console.error("Error fetching the product!", error);
//         });
//     }
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (id) {
//       // Edit existing product
//       fetch.put(`/api/products/${id}`, product)
//         .then(() => {
//           navigate('/admin/products'); // Redirect back to products list
//         })
//         .catch(error => {
//           console.error("There was an error updating the product!", error);
//         });
//     } else {
//       // Create new product
//       fetch.post('/api/products', product)
//         .then(() => {
//           navigate('/admin/products'); // Redirect back to products list
//         })
//         .catch(error => {
//           console.error("There was an error creating the product!", error);
//         });
//     }
//   };
//   return (
//     <div className="container mx-auto p-4">
//     <h1 className="text-2xl font-semibold mb-4">{id ? 'Edit Product' : 'Create Product'}</h1>
//     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
//         <input
//           type="text"
//           name="name"
//           value={product.name}
//           onChange={handleInputChange}
//           className="w-full px-3 py-2 border rounded"
//           placeholder="Enter product name"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
//         <input
//           type="number"
//           name="price"
//           value={product.price}
//           onChange={handleInputChange}
//           className="w-full px-3 py-2 border rounded"
//           placeholder="Enter product price"
//         />
//       </div>
//       <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
//         {id ? 'Update Product' : 'Create Product'}
//       </button>
//     </form>
//   </div>
//   )
// }

// export default createProduct