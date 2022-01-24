import { useRouter } from "next/router";

export default function DramasPage() {
  const router = useRouter();
  const { query } = router;

  console.log({ ...query });

  return <h1>{JSON.stringify(query)}</h1>;
}

export async function getServerSideProps({ query }) {
  console.log(query);

  return {
    props: {
      dramas: [],
    },
  };
}
