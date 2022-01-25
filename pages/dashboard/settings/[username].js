import { useRouter } from "next/router";

export default function UserSettingsPage() {
  const router = useRouter();

  const { query } = router;

  return <h1>{JSON.stringify(query)}</h1>;
}
