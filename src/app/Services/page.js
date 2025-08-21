import { FaShippingFast, FaHeadset, FaUndo } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Fast Delivery",
      desc: "We ensure your products are delivered quickly and safely to your doorstep.",
      icon: <FaShippingFast className="text-5xl text-emerald-500 mb-4" />,
    },
    {
      title: "24/7 Support",
      desc: "Our support team is always available to help you with any questions.",
      icon: <FaHeadset className="text-5xl text-emerald-500 mb-4" />,
    },
    {
      title: "Easy Returns",
      desc: "Shop with confidence knowing you can easily return products if needed.",
      icon: <FaUndo className="text-5xl text-emerald-500 mb-4" />,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-[1300px] mx-auto w-[96%] text-center">
        <h2 className="text-3xl text-white font-bold mb-3">Our Services</h2>
        <p className="text-gray-600 mb-12">
          We are committed to providing top-notch services for our customers.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}