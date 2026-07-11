import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="block">
      <motion.article
        whileHover={{ y: -8, scale: 1.01 }}
        className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition-all duration-300"
      >
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover"
        />

        {/* Card Content */}
        <div className="flex flex-col p-6">
          <h3 className="mb-3 text-xl font-semibold text-primary">
            {product.name}
          </h3>

          {/* Description */}
          <div className="mb-6 min-h-[3rem]">
            <p
              className="
                text-sm
                leading-6
                text-slate-600
                line-clamp-2
                transition-all
                duration-300
                lg:group-hover:line-clamp-none
              "
            >
              {product.shortDescription}
            </p>
          </div>

          {/* Button */}
          <div className="mt-auto inline-flex w-full items-center justify-center rounded-full border border-primary bg-white px-6 py-3 text-sm font-semibold text-primary transition duration-300 group-hover:bg-darkBlue group-hover:text-white">
            View Details
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

export default ProductCard;
