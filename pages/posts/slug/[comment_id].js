import { useRouter } from "next/router";

export default function CommentPage() {
  const router = useRouter();

  return (
    <div>
      <h1>{JSON.stringify(router.query)}</h1>
      <h1>{router.query.comment_id}</h1>
    </div>
  );
}
