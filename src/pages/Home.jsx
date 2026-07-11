import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroSlider from "../components/HeroSlider";
import ProductCard from "../components/ProductCard";
import QuoteModal from "../components/QuoteModal";
import products from "../data/products";
import { FaIndustry, FaShieldAlt, FaTruck, FaChartLine } from "react-icons/fa";

const stats = [
  { label: "Years of Expertise", value: "15+" },
  { label: "Products Manufactured", value: "100+" },
  { label: "Happy Clients", value: "500+" },
  { label: "Export Markets", value: "20+" },
];

const features = [
  {
    title: "Advanced Manufacturing",
    description:
      "State-of-the-art infrastructure and modern machinery for consistent production.",
    icon: <FaIndustry />,
  },
  {
    title: "Quality Assurance",
    description:
      "Strict quality control at every stage to deliver durable and reliable products.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Fast Delivery",
    description:
      "Efficient logistics and warehousing ensure timely deliveries across regions.",
    icon: <FaTruck />,
  },
  {
    title: "Growth Focused",
    description:
      "Custom solutions designed to support your business expansion and sustainability goals.",
    icon: <FaChartLine />,
  },
];

const testimonials = [
  {
    name: "Ramesh Patel",
    role: "Operations Head, AgroPack",
    quote:
      "Aurix Polypack delivered robust packaging that exceeded our expectations in both quality and turnaround time.",
  },
  {
    name: "Nisha Shah",
    role: "Procurement Lead, Summit Industries",
    quote:
      "Professional team, prompt communication, and excellent product consistency. A trusted partner.",
  },
];

function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <main>
      <HeroSlider />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              About Aurix Polypack
            </p>
            <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
              A trusted manufacturer of premium PP woven products
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              Aurix Polypack is a leading PP woven fabric manufacturer committed
              to producing durable, high-performance packaging that meets the
              needs of agriculture, industrial, and consumer markets.
            </p>
            <button
              onClick={() => setQuoteOpen(true)}
              className="rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-darkBlue"
            >
              Request a Quote
            </button>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft"
              >
                <div className="mb-3 text-2xl text-gold">{feature.icon}</div>
                <h3 className="mb-2 font-semibold text-primary">
                  {feature.title}
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Our Products
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
              Wide range of packaging and industrial solutions
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-5 flex justify-center">
            <Link
              to="/products"
              className="inline-flex items-center rounded-full border border-primary bg-primary px-8 py-3 text-base font-semibold text-white transition duration-300 hover:bg-darkBlue hover:border-darkBlue"
            >
              Explore All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-primary py-8 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/10 p-6 text-center"
            >
              <p className="text-4xl font-semibold text-gold">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
            What our clients say
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft"
            >
              <p className="text-lg leading-8 text-slate-600">
                “{testimonial.quote}”
              </p>
              <div className="mt-6">
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-gradient-to-r from-primary to-darkBlue px-8 py-6 text-center text-white shadow-soft">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Need a customized packaging solution?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Let our experts craft a tailored quote for your industry and
            requirements.
          </p>
          <button
            onClick={() => setQuoteOpen(true)}
            className="mt-8 rounded-full bg-gold px-6 py-3 font-semibold text-primary transition hover:bg-lightGold"
          >
            Get a Free Quote
          </button>
        </div>
      </section>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </main>
  );
}

export default Home;
