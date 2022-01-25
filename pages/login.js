import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    new Promise((resolve, reject) => {
      resolve({ ok: true });
    }).then((res) => {
      // Do a fast client-side transition to the already prefetched dashboard page
      if (res.ok) router.push("/dashboard");
    });
  }, []);

  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch("/dashboard");
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit" className="shadow">
        Login
      </button>
    </form>
  );
}
