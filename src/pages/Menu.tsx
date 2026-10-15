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
        "https://www.dapurkobe.co.id/wp-content/uploads/rendang-daging.jpg",
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
        "https://www.dapurkobe.co.id/wp-content/uploads/rendang-daging.jpg",
      stock: 5,
    },
    {
      id: 4,
      name: "Ikan Cue Goreng",
      description: "Ayam Pop dengan rasa lezat yang hakiki",
      price: 3000,
      image:
        "https://www.dapurkobe.co.id/wp-content/uploads/rendang-daging.jpg",
      stock: 5,
    },
    {
      id: 5,
      name: "Nasi Putih",
      description: "Ayam Pop dengan rasa lezat yang hakiki",
      price: 7000,
      image:
        "https://www.dapurkobe.co.id/wp-content/uploads/rendang-daging.jpg",
      stock: 5,
    },
    {
      id: 6,
      name: "Paket Komplit Ayam Goreng Kecombrang",
      description: "Ayam Pop dengan rasa lezat yang hakiki",
      price: 21500,
      image:
        "https://www.dapurkobe.co.id/wp-content/uploads/rendang-daging.jpg",
      stock: 5,
    },
    {
      id: 7,
      name: "Ayam Kecap",
      description: "Ayam Pop dengan rasa lezat yang hakiki",
      price: 25500,
      image:
        "https://www.dapurkobe.co.id/wp-content/uploads/rendang-daging.jpg",
      stock: 5,
    },
    {
      id: 8,
      name: "Nasi Telur Minang",
      description: "Ayam Pop dengan rasa lezat yang hakiki",
      price: 15500,
      image:
        "https://www.dapurkobe.co.id/wp-content/uploads/rendang-daging.jpg",
      stock: 5,
    },
    {
      id: 9,
      name: "Dendeng Cabe Ijo/Cabe Merah",
      description: "Ayam Pop dengan rasa lezat yang hakiki",
      price: 30000,
      image:
        "https://www.dapurkobe.co.id/wp-content/uploads/rendang-daging.jpg",
      stock: 5,
    },
    {
      id: 10,
      name: "Jus Timun Nanas",
      description: "Ayam Pop dengan rasa lezat yang hakiki",
      price: 24400,
      image:
        "https://www.dapurkobe.co.id/wp-content/uploads/rendang-daging.jpg",
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
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 ">
          {filteredDishes.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      </div>
      ;
    </>
  );
}

export default Menu;
