import { useState } from "react";
import CardList from "../../components/cards";

export default function DetailsPage({ query }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="max-w-xl mx-auto">
        <div className="flex justify-between">
          <h1>count: {count}</h1>
          <h1 className="font-bold">{query?.slug}</h1>
        </div>
        <button onClick={() => setCount(count + 1)}>click</button>
      </div>
      <main className="max-w-xl mx-auto">
        <CardList
          list={new Array(6)
            .fill(0)
            .map((el, idx) => "This is " + idx + " Page")}
        />
      </main>
    </>
  );
}

export async function getServerSideProps({ query, params }) {
  console.log("query", query);
  console.log("params", params);

  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 1000);
  });

  return {
    props: {
      result,
      query,
    },
  };
}
