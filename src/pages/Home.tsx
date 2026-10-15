import React from "react";
import ProductCard from "../components/ProductCard";
const dishes = [
  {
    id: 4,
    name: "Ikan Cue Goreng",
    description: "Ayam Pop dengan rasa lezat yang hakiki",
    price: 3000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwYXPJ8BDCIpoOCjVUKba8FGKISlEnp8jOtkLc0fok58CjoyhhrJBKykY&s=10",
    stock: 5,
  },
  {
    id: 5,
    name: "Nasi Putih",
    description: "Ayam Pop dengan rasa lezat yang hakiki",
    price: 7000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gSix3tvnT4zUnT9X0W8jbj1Nj6OCS4Z99MvLciZ8xKWGE_f7j34jGQo&s=10",
    stock: 5,
  },
  {
    id: 6,
    name: "Paket Komplit Ayam Goreng Kecombrang",
    description: "Ayam Pop dengan rasa lezat yang hakiki",
    price: 21500,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDwni7EjY708FQ_8re10XKxLqoPsnzuzdXizwuYsyCr_QB4QuogHMRD0&s=10",
    stock: 5,
  },
  {
    id: 7,
    name: "Ayam Kecap",
    description: "Ayam Pop dengan rasa lezat yang hakiki",
    price: 25500,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8eFqoO00PE9jhAlA7V-_cQjT_7u_FF0W3AAvk0XI_Dvwn_PUpcdfLx6M&s=10",
    stock: 5,
  },
  {
    id: 8,
    name: "Nasi Telur Minang",
    description: "Ayam Pop dengan rasa lezat yang hakiki",
    price: 15500,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVz_lu77-A8MMKYxOg2xRKwmXMT5AJPpJicR8HdC8Sz1RXg7I9NQHG3_NV&s=10",
    stock: 5,
  },
  {
    id: 9,
    name: "Dendeng Cabe Ijo/Cabe Merah",
    description: "Ayam Pop dengan rasa lezat yang hakiki",
    price: 30000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIHVatm2fdYw0ciY9Bmrz3woh8HeXshkriRhrErdPyepbNiGYrtI33e-ay&s=10",
    stock: 5,
  },
  {
    id: 10,
    name: "Jus Timun Nanas",
    description: "Ayam Pop dengan rasa lezat yang hakiki",
    price: 24400,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE138CHmDA-PUo3LkX3ugxHSHPrJT-E2ummYNoQ0VuxWlnd7WZAXLZTy8&s=10",
    stock: 5,
  },
];

function Home() {
  return (
    <section className="mx-auto px-2 py-2">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 min-h-screen">
        <div className="relative p-6 overflow-hidden flex flex-col justify-center text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Selamat Datang di Taburai
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Nikmati berbagai pilihan hidangan lezat dari dapur kami. Kami
              berada di Bogor, Jawa Barat.
            </p>
          </div>
        </div>
        <div className="px-2 py-2 relative p-6 overflow-hidden flex flex-col justify-start text-white">
          <h1 className="text-xl text-left my-4 text-gray-800">
            Favorite Taburai
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {dishes.map((item, index) => (
              <ProductCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
