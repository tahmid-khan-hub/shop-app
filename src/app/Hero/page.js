import bannerImage from "../../../public/banner.jpg";

export default function Hero() {
  return (
    <section
      className="relative h-[620px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImage.src})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Centered content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-5xl font-bold mb-3 text-center">
          Welcome to ShopApp
        </h1>
        <p className="text-xl text-white text-center">
          Explore products, view details and manage your products after login.
        </p>
      </div>
    </section>
  );
}
