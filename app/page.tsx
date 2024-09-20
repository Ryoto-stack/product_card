import Image from "next/image";

export default function Home() {
  return (
    <body className="flex items-center justify-center w-full min-h-screen">
      <div className="rounded-xl flex flex-row w-[700px] h-[497px] border">
        <div>
          <Image
            src="/image-product-desktop.jpg"
            alt="product-image"
            height={320}
            width={350}
            className="rounded-l-xl"
          />
        </div>
        <div className="p-10 flex flex-col ">
          <p className="tracking-widest font-semibold font-montserrat text-gray-400">
            PERFUME
          </p>
          <div>
            <h1 className="font-fraunces font-bold text-5xl text-start w-64 mt-6 ">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="text-gray-700 w-64 overflow-hidden mt-3 mb-3 ">
              A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the house of CHANEL.
            </p>
            <div className="flex flex-row items-center justify-between">
              <h1 className="font-fraunces text-5xl font-bold text-green-900">$149.99</h1>
              <p className="line-through font-semibold text-gray-400">$169.99</p>
            </div>
            <div className="w-72 mt-4 h-14 flex items-center justify-center font-bold text-white bg-green-900 rounded-xl">
              <p>Add to Cart</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
