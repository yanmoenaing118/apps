import CardList from "../components/cards";
import Filter from "../components/filters";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header />
      <Filter />
      <main className="max-w-xl mx-auto">
        <CardList list={new Array(6).fill(9)} />
      </main>
    </>
  );
}
