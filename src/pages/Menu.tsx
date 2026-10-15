import { useState } from "react";
import ProductCard from "../components/ProductCard";
interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
}

function Menu() {
  const dishes: Dish[] = [
    {
      id: 1,
      name: "Ayam Pop",
      description: "Ayam Pop dengan rasa lezat yang hakiki",
      price: 10000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLaZ2HaPDY5zEfKkbOdW2s3HB44KifPP8v7apGvgjSu8LCKGxm_J2hpTQ&s=10",
      stock: 5,
    },
    {
      id: 2,
      name: "Rendang",
      description: "Ayam Pop dengan rasa lezat yang hakiki",
      price: 15000,
      image:
        "https://www.dapurkobe.co.id/wp-content/uploads/rendang-daging.jpg",
      stock: 5,
    },
    {
      id: 3,
      name: "Ikan Nila Bakar",
      description: "Ayam Pop dengan rasa lezat yang hakiki",
      price: 13000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SCdDIYMJbBUFquqwMnyLx_jzh8_2Sqd6nNy53qwXCeg9aFn7DA6OI1I&s=10",
      stock: 5,
    },
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

  const [query, setQuery] = useState("");
  const [filteredDishes, setFilteredDishes] = useState<Dish[]>(dishes);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);

    if (value.trim()) {
      const keyword = value.toLowerCase();

      const filteredData = dishes.filter((item) => {
        const matchName = item.name.toLowerCase().includes(keyword);
        const matchDesc = item.description.toLowerCase().includes(keyword);

        return matchName || matchDesc;
      });

      setFilteredDishes(filteredData);
    } else {
      setFilteredDishes(dishes);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="mx-auto md:px-10 px-4 py-2">
        <h1 className="text-4xl text-center my-8 text-gray-400">Menu</h1>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="grid grid-cols-1">
            <div>
              <div className="flex flex-col gap-1 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Rendang..."
                  className="input-custom"
                  onChange={handleSearch}
                  value={query}
                  required
                />
              </div>
            </div>
          </div>
        </form>
        {filteredDishes.length === 0 ? (
          <p>No Dishes available.</p>
        ) : (
          <div className="grid md:grid-cols-5 grid-cols-1 gap-4 ">
            {filteredDishes.map((item, index) => (
              <ProductCard item={item} key={index} />
            ))}
          </div>
        )}
      </div>
      ;
    </>
  );
}

export default Menu;
