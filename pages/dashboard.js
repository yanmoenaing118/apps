export default function Dashboard({ name }) {
  return <h1>MY name {name}</h1>;
}

export async function getStaticProps() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hi");
    }, 6000);
  });

  return {
    props: {
      name: "Dashboard",
    },
  };
}
