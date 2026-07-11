import ProductCard from '../components/ProductCard'
import products from '../data/products'

function Products() {
  return (
    <main>
      <section className="bg-primary px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-3xl font-semibold uppercase tracking-[0.3em] text-gold sm:text-4xl">Products</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-xl font-medium text-slate-100 sm:text-2xl md:text-3xl">Explore our complete product portfolio</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Products
