import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();

  return <h1>{JSON.stringify(router.query)}</h1>;
}
