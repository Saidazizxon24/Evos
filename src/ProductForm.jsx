// // src/ProductForm.js
// import { useState, useEffect } from 'react';
// import productsData from './products.json';

// const ProductForm = ({ product, onSubmit, onCancel }) => {
//   const [name, setName] = useState(product ? product.name : '');
//   const [price, setPrice] = useState(product ? product.price : '');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ id: product ? product.id : null, name, price });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input
//         type="text"
//         placeholder="Product Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         className="p-2 border rounded"
//         required
//       />
//       <input
//         type="number"
//         placeholder="Product Price"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//         className="p-2 border rounded"
//         required
//       />
//       <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//         {product ? 'Update' : 'Add'} Product
//       </button>
//       <button type="button" onClick={onCancel} className="bg-gray-500 text-white p-2 rounded">
//         Cancel
//       </button>
//     </form>
//   );
// };

// export default ProductForm;
