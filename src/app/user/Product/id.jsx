// // pages/alat/[id].js
// import { useRouter } from "next/router";
// import Head from "next/head";

// export default function AlatDetail() {
//   const router = useRouter();
//   const { id } = router.query;

//   // Fetch alat details based on the id
//   const alat = {
//     id,
//     name: `Alat ${id}`,
//     price: "$29.99",
//     description: `Description for Alat ${id}`,
//     image: `/alat${id}.jpg`,
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <Head>
//         <title>{alat.name}</title>
//       </Head>
//       <div className="max-w-lg bg-white rounded-lg shadow-md p-6">
//         <img
//           src={alat.image}
//           alt={alat.name}
//           className="w-full h-60 object-cover mb-4 rounded"
//         />
//         <h2 className="text-2xl font-bold text-gray-800">{alat.name}</h2>
//         <p className="text-gray-600 mt-2">{alat.price}</p>
//         <p className="text-gray-600 mt-4">{alat.description}</p>
//       </div>
//     </div>
//   );
// }
