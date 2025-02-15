// pages/product/[id].js
import { useRouter } from "next/router";
import Head from "next/head";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Fetch product details based on the id
  const product = {
    id,
    name: `Product ${id}`,
    price: "$29.99",
    description: `Description for Product ${id}`,
    image: `/product${id}.jpg`,
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>{product.name}</title>
      </Head>
      <div className="max-w-lg bg-white rounded-lg shadow-md p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover mb-4 rounded"
        />
        <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
        <p className="text-gray-600 mt-2">{product.price}</p>
        <p className="text-gray-600 mt-4">{product.description}</p>
      </div>
    </div>
  );
}
