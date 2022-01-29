export default function ProductDetailsPage({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <h1>{product.price} KS</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await fetch(
    "https://admin-bestbeauty.venuslab.co/api/products/categories?view=20&page=1"
  ).then((res) => res.json());

  const paths = data.map((product) => ({
    params: {
      slug: product.slug,
    },
  }));

  // fallback: false means other route should be 404
  // if the route doesn't exist
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { data: product } = await fetch(
    `https://admin-bestbeauty.venuslab.co/api/products/${params.slug}`
  )
    .then((res) => res.json())
    .catch((err) => err);

  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product,
    },
  };
}

/**
export async function getServerSideProps(context) {
  console.log("params ", context.params);
  console.log("query ", context.query);
  console.log("resolvedUrl string ", context.resolvedUrl);
  console.log("locale ", context.locale);

  // const {
  //   error,
  //   message,
  //   data: product,
  // } = await fetch("https://admin-bestbeauty.venuslab.co/api/products/344")
  //   .then((res) => res.json())
  //   .catch((err) => err);

  // console.log(error, message);

  // if (error) {
  //   return {
  //     notFound: true,
  //   };
  // }

  const token = "adfdf";

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      product: {
        name: "test",
        price: 1000,
      },
    },
  };
}
 */
