import CardList from "../components/cards";
import Filter from "../components/filters";
import Header from "../components/header";

export default function Home({ list }) {
  return (
    <>
      <Header />
      <Filter />
      <main className="max-w-xl mx-auto">
        <CardList list={list} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const list = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Array(2).fill(9));
    }, 5000);
  });

  return {
    props: {
      list,
    },
  };
}
