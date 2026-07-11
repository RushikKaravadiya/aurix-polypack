import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp, FaChevronRight } from "react-icons/fa";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const [selectedImage, setSelectedImage] = useState(product?.image);

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-24 text-center">
        <h1 className="text-3xl font-semibold text-primary">
          Product not found
        </h1>
        <Link
          to="/products"
          className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-white"
        >
          Back to Products
        </Link>
      </main>
    );
  }

  return (
    <main>
      <section className="bg-primary px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-3xl font-semibold uppercase tracking-[0.3em] text-gold sm:text-4xl">
            Product Details
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-xl font-medium text-slate-100 sm:text-2xl md:text-3xl">
            {product.name}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-start">
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-full border border-primary bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition duration-300 hover:bg-primary hover:text-white"
          >
            ← Back to Products
          </Link>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft transition-all duration-500 mb-6">
              <img
                src={selectedImage || product.image}
                alt={product.name}
                className="h-[420px] w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>

            <div className="mt-4 grid gap-3 grid-cols-3 sm:grid-cols-4">
              {product.gallery.map((item, index) => {
                const isActive =
                  selectedImage === item ||
                  (!selectedImage && product.image === item);
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedImage(item)}
                    className={`overflow-hidden rounded-2xl border transition duration-300 ${isActive ? "border-primary bg-primary/10" : "border-slate-200 bg-white hover:border-primary/80 hover:bg-slate-50"}`}
                  >
                    <img
                      src={item}
                      alt={`${product.name} ${index + 1}`}
                      className="h-20 w-full object-cover rounded-xl"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                {product.category}
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-primary">
                {product.name}
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                {product.description}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-primary">
                Specifications
              </h3>
              <ul className="mt-4 space-y-2 text-slate-600">
                {product.specifications.map((spec) => (
                  <li key={spec}>• {spec}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://wa.me/919979936435"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full flex-1 items-center justify-center gap-2 rounded-full border border-primary bg-white px-6 py-4 text-base font-semibold text-primary transition duration-300 hover:bg-darkBlue hover:text-white hover:shadow-lg whitespace-nowrap"
              >
                <FaWhatsapp /> WhatsApp Chat
              </a>
              <Link
                to="/quote"
                className="inline-flex w-full flex-1 items-center justify-center gap-3 rounded-full border border-primary bg-white px-6 py-4 text-base font-semibold text-primary transition duration-300 hover:bg-darkBlue hover:text-white hover:shadow-lg whitespace-nowrap"
              >
                <FaChevronRight /> Get Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-slate-200 bg-background p-6">
            <h3 className="font-semibold text-primary">Applications</h3>
            <ul className="mt-3 space-y-2 text-slate-600">
              {product.applications.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-background p-6">
            <h3 className="font-semibold text-primary">Features</h3>
            <ul className="mt-3 space-y-2 text-slate-600">
              {product.features.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-background p-6">
            <h3 className="font-semibold text-primary">Advantages</h3>
            <ul className="mt-3 space-y-2 text-slate-600">
              {product.advantages.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-background p-6">
            <h3 className="font-semibold text-primary">Available Sizes</h3>
            <ul className="mt-3 space-y-2 text-slate-600">
              {product.sizes.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
