import React from "react";

function Home() {
  return (
    <section>
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-400 mb-4">
            Selamat Datang di Taburai
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Nikmati berbagai pilihan hidangan lezat dari dapur kami. Kami berada
            di Bogor, Jawa Barat.
          </p>
        </div>
      </div>
      <h1 className="text-4xl text-center my-4 text-gray-400">
        Favorite Taburai
      </h1>
      <div className="mx-auto px-20 py-20">
        <div className="grid grid-cols-4 gap-4">
          <div className="relative border border-orange-700 rounded-md p-6 shadow-xs overflow-hidden h-64 flex flex-col justify-end text-white">
            <img
              src="https://www.dapurkobe.co.id/wp-content/uploads/rendang-daging.jpg"
              alt="Rendang"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute bottom-0 left-0 z-20 bg-black/30 backdrop-blur-md p-2 rounded-md border border-white/10">
              <h4 className="text-2xl font-bold tracking-wide text-orange-400">
                Rendang
              </h4>
              <p className="text-sm mt-1 text-gray-200">
                Merupakan sebuah makanan khas padang terenak sepanjang masa.
              </p>
            </div>
          </div>

          <div className="relative border border-orange-700 rounded-md p-6 shadow-xs overflow-hidden h-64 flex flex-col justify-end text-white">
            <img
              src="https://www.dapurkobe.co.id/wp-content/uploads/rendang-daging.jpg"
              alt="Rendang"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute bottom-0 left-0 z-20 bg-black/30 backdrop-blur-md p-2 rounded-md border border-white/10">
              <h4 className="text-2xl font-bold tracking-wide text-orange-400">
                Rendang
              </h4>
              <p className="text-sm mt-1 text-gray-200">
                Merupakan sebuah makanan khas padang terenak sepanjang masa.
              </p>
            </div>
          </div>

          <div className="relative border border-orange-700 rounded-md p-6 shadow-xs overflow-hidden h-64 flex flex-col justify-end text-white">
            <img
              src="https://www.dapurkobe.co.id/wp-content/uploads/rendang-daging.jpg"
              alt="Rendang"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute bottom-0 left-0 z-20 bg-black/30 backdrop-blur-md p-2 rounded-md border border-white/10">
              <h4 className="text-2xl font-bold tracking-wide text-orange-400">
                Rendang
              </h4>
              <p className="text-sm mt-1 text-gray-200">
                Merupakan sebuah makanan khas padang terenak sepanjang masa.
              </p>
            </div>
          </div>

          <div className="relative border border-orange-700 rounded-md p-6 shadow-xs overflow-hidden h-64 flex flex-col justify-end text-white">
            <img
              src="https://www.dapurkobe.co.id/wp-content/uploads/rendang-daging.jpg"
              alt="Rendang"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute bottom-0 left-0 z-20 bg-black/30 backdrop-blur-md p-2 rounded-md border border-white/10">
              <h4 className="text-2xl font-bold tracking-wide text-orange-400">
                Rendang
              </h4>
              <p className="text-sm mt-1 text-gray-200">
                Merupakan sebuah makanan khas padang terenak sepanjang masa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
