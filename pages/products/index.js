// https://admin-bestbeauty.venuslab.co/api/products/categories
import Link from "next/link";
export default function Products({ products }) {
  return (
    <section>
      <h1>Products</h1>
      <div className="products">
        {products.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
      <style jsx>{`
        .products {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          grid-auto-rows: 100px;
          grid-gap: 1em;
        }
      `}</style>
    </section>
  );
}

function Product({ product }) {
  return (
    <div className="shadow p-1">
      <Link href={`/products/${product.slug}`}>
        <a>{product.name}</a>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await fetch(
    "https://admin-bestbeauty.venuslab.co/api/products/categories?view=20&page=1"
  ).then((res) => res.json());

  const products = mutateData(data);

  return {
    props: {
      products,
    },
  };
}

// export async function getServerSideProps() {
//   const { data } = await fetch(
//     "https://admin-bestbeauty.venuslab.co/api/products/categories?view=20&page=1"
//   ).then((res) => res.json());

//   const products = mutateData(data);

//   return {
//     props: {
//       products,
//     },
//   };
// }

function mutateData(data) {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      slug: item.slug,
    };
  });
}

// "id": 1,
// "name": "Erwin Rohan",
// "slug": "erwin-rohan",
