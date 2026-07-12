import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp, FaChevronRight } from "react-icons/fa";
import products from "../data/products";
import PageHeader from "../components/PageHeader";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const whatsappText = product
    ? encodeURIComponent(
        `Hi Aurix Polypack! I am interested in ${product.name}. Please send me more details.`,
      )
    : "";

  const infoCards = [
    product.applications?.length && "applications",
    product.features?.length && "features",
    product.advantages?.length && "advantages",
    product.sizes?.length && "sizes",
  ].filter(Boolean);

  const gridCols =
    infoCards.length === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : infoCards.length === 3
        ? "md:grid-cols-2 lg:grid-cols-3"
        : infoCards.length === 2
          ? "md:grid-cols-2"
          : "grid-cols-1";

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-16 text-center">
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
      <PageHeader title="Product Details" subtitle={product.name} />

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-start">
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-full border border-primary bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition duration-300 hover:bg-primary hover:text-white"
          >
            ← Back to Products
          </Link>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
          <div className="lg:sticky lg:top-28 self-start">
            <div className="mb-5 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
              <div className="flex h-[300px] sm:h-[420px] lg:h-[500px] items-center justify-center p-4 sm:p-6">
                <img
                  src={selectedImage || product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain transition-all duration-300"
                />
              </div>
            </div>

            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex snap-x snap-mandatory gap-3 pb-2">
                {product.gallery.map((item, index) => {
                  const isActive =
                    selectedImage === item ||
                    (!selectedImage && product.image === item);

                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(item)}
                      className={`snap-start shrink-0 rounded-2xl border bg-white p-1 transition-all duration-300
          ${
            isActive
              ? "border-primary ring-2 ring-primary/30"
              : "border-slate-200 hover:border-primary"
          }`}
                    >
                      <img
                        src={item}
                        alt=""
                        className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl object-cover"
                      />
                    </button>
                  );
                })}
              </div>
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
                href={`https://wa.me/919979936435?text=${whatsappText}`}
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

      {infoCards.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className={`grid gap-8 ${gridCols}`}>
            {product.applications?.length > 0 && (
              <div className="rounded-3xl border border-slate-200 bg-background p-6">
                <h3 className="font-semibold text-primary">Applications</h3>
                <ul className="mt-3 space-y-2 text-slate-600">
                  {product.applications.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.features?.length > 0 && (
              <div className="rounded-3xl border border-slate-200 bg-background p-6">
                <h3 className="font-semibold text-primary">Features</h3>
                <ul className="mt-3 space-y-2 text-slate-600">
                  {product.features.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.advantages?.length > 0 && (
              <div className="rounded-3xl border border-slate-200 bg-background p-6">
                <h3 className="font-semibold text-primary">Advantages</h3>
                <ul className="mt-3 space-y-2 text-slate-600">
                  {product.advantages.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.sizes?.length > 0 && (
              <div className="rounded-3xl border border-slate-200 bg-background p-6">
                <h3 className="font-semibold text-primary">Available Sizes</h3>
                <ul className="mt-3 space-y-2 text-slate-600">
                  {product.sizes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  );
}

export default ProductDetails;
