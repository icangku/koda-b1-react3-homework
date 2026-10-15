import React from "react";
interface ProductCardProps {
  item: {
    name: string;
    image: string;
    description: string;
    price: number;
  };
}

function ProductCard({ item }: ProductCardProps) {
  return (
    <div className="relative border border-orange-700 rounded-md p-6 shadow-xs overflow-hidden h-64 flex flex-col justify-end text-white hover:cursor-pointer">
      <img
        src={item.image}
        alt={item.name}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute bottom-0 left-0 z-20 w-full bg-black/30 backdrop-blur-md p-2 rounded-md border border-white/10">
        <h4 className="text-2xl font-bold tracking-wide text-orange-400">
          {item.name}
        </h4>
        <span className="text-lg font-semibold text-white">
          Rp{item.price.toLocaleString("id-ID")},-
        </span>
        {/* <p className="text-sm mt-1 text-gray-200">{item.description}</p> */}
      </div>
    </div>
  );
}

export default ProductCard;
