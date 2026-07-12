import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import MainLogo from "/images/MainLogo.png";
import {
  FaBullseye,
  FaEye,
  FaIndustry,
  FaAward,
  FaCogs,
  FaShippingFast,
  FaUsers,
  FaGlobeAsia,
} from "react-icons/fa";

const strengths = [
  {
    icon: <FaIndustry />,
    title: "Modern Infrastructure",
    desc: "Advanced machinery and manufacturing facility ensuring high productivity.",
  },
  {
    icon: <FaAward />,
    title: "Premium Quality",
    desc: "Strict quality control and durable products meeting industry standards.",
  },
  {
    icon: <FaCogs />,
    title: "Customization",
    desc: "Customized PP woven packaging solutions as per customer requirements.",
  },
  {
    icon: <FaShippingFast />,
    title: "Fast Delivery",
    desc: "Reliable logistics and timely delivery across India and overseas.",
  },
  {
    icon: <FaUsers />,
    title: "Experienced Team",
    desc: "Skilled professionals committed to innovation and customer satisfaction.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Global Reach",
    desc: "Serving domestic and international markets with trusted packaging solutions.",
  },
];
function About() {
  return (
    <main>
      <PageHeader
        title="About Us"
        subtitle="Delivering performance and trust through every woven product"
      />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={MainLogo}
            alt="Manufacturing unit"
            className="h-[450px] w-full rounded-[32px] object-cover shadow-soft"
          />
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-primary">
              Company Introduction
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              Aurix Polypack is a dedicated PP woven fabric manufacturer
              specializing in high-quality woven fabrics, bags, tarpaulin, and
              related packaging products for domestic and international
              clientele.
            </p>
            <p className="text-lg leading-8 text-slate-600">
              Our manufacturing processes are designed to deliver robust
              products with excellent finish, reliable performance, and
              cost-effective value for every customer.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-soft hover:-translate-y-2 transition duration-300">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold text-white text-3xl shadow-lg">
              <FaBullseye />
            </div>

            <h3 className="text-2xl font-semibold text-primary">Mission</h3>

            <p className="mt-4 text-slate-600 leading-7">
              To manufacture durable, innovative, and sustainable woven
              packaging that empowers businesses globally.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-soft hover:-translate-y-2 transition duration-300">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold text-white text-3xl shadow-lg">
              <FaEye />
            </div>

            <h3 className="text-2xl font-semibold text-primary">Vision</h3>

            <p className="mt-4 text-slate-600 leading-7">
              To become a benchmark in quality, reliability, and customer
              satisfaction across the packaging industry.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-soft hover:-translate-y-2 transition duration-300">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold text-white text-3xl shadow-lg">
              <FaAward />
            </div>

            <h3 className="text-2xl font-semibold text-primary">
              Quality Policy
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              We maintain stringent controls and modern standards to ensure
              every product meets customer expectations.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Our Strengths
          </p>

          <h2 className="mt-3 text-4xl font-bold text-primary">
            Why Choose Aurix Polypack
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600 leading-7">
            Combining advanced technology, skilled professionals, and strict
            quality standards, we deliver packaging solutions that businesses
            can trust.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-3 hover:border-gold hover:shadow-2xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold text-3xl text-white transition group-hover:rotate-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-primary">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
