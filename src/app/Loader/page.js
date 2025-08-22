export default function Loader() {
  return (
    <>
      <div className="min-h-screen w-full bg-[#020617] relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)`,
          }}
        />
        <div className="flex items-center justify-center h-screen">
          <span className="loading loading-dots loading-xl text-white"></span>
        </div>
      </div>
    </>
  );
}
