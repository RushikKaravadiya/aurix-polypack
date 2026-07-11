import ProductCard from '../components/ProductCard'
import products from '../data/products'
import PageHeader from '../components/PageHeader'

function Products() {
  return (
    <main>
      <PageHeader title="Products" subtitle="Explore our complete product portfolio" />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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
