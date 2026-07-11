import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="block h-full">
      <article
        className="
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white
          shadow-soft
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
        "
      >
        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full rounded-t-3xl object-cover"
        />

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          {/* Title */}
          <h3
            title={product.name}
            className="mb-3 line-clamp-1 text-xl font-semibold text-primary"
          >
            {product.name}
          </h3>

          {/* Description */}
          <div className="mb-6 flex-1">
            <p
              title={product.shortDescription}
              className="cursor-help line-clamp-2 text-sm leading-7 text-slate-600"
            >
              {product.shortDescription}
            </p>
          </div>

          {/* Button */}
          <div
            className="
              mt-auto
              flex
              w-full
              items-center
              justify-center
              rounded-full
              border
              border-primary
              bg-white
              px-6
              py-3
              text-sm
              font-semibold
              text-primary
              transition-all
              duration-300
              hover:bg-darkBlue
              hover:text-white
            "
          >
            View Details
          </div>
        </div>
      </article>
    </Link>
  );
}

export default ProductCard;