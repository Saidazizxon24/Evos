import { useEffect, useState } from "react";

const Main = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/evos_crud/src/products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(product => {
        setData(product);
        setLoading(false);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Loading ...</h1>;



  return (
    <div className="">
      <div>
        <h1 className="text-4xl text-center font-bold py-24">News</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.map(product => (
          <div
            className='w-[300px] mb-5 rounded-md p-3 mx-10 hover:shadow-gray-600 hover:shadow-md cursor-pointer'
            key={product.id}
          >
            <div>
              <img className='w-full h-[218px] object-cover' src={product.img} alt={product.name} />
              <h1 className='mb-3 text-xl font-medium tracking-normal'>{product.name}</h1>
              <h3 className='font-medium mb-4 text-[15px] leading-4 text-[#9AA6AC] tracking-tight'>{product.description}</h3>
              <h2 className='font-bold mb-5 leading-6 text-[#309B42] text-[16px] tracking-normal'>{product.price}</h2>
              <button className="bg-[#bfc1c2] hover:transition-all hover:bg-yellow-500 outline-none py-[13px] w-full rounded cursor-pointer">
                <h4 className="font-medium text-center text-[17px] leading-6 tracking-normal">Add to cart</h4>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;





