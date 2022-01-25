import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DramasPage({ queryString }) {
  const router = useRouter();
  const { query, pathname, asPath } = router;

  useEffect(() => {
    console.log("----------------");
    console.log("query, ", query);
    console.log("pathname, ", pathname);
    console.log("asPath ", asPath);
    console.log("queryString, ", getQueryString(asPath));
    console.log(router);
    console.log(
      "NEXT_PUBLIC_ANALYTICS_ID = ",
      process.env.NEXT_PUBLIC_ANALYTICS_ID
    );
  }, []);

  function handlePush() {
    router.push("/dramas/chinese?actress=yukee", "", {
      scroll: true,
    });
  }

  function handleReplace() {
    router.replace("/dramas/thai?actress=unknown");
  }

  function handleBack() {
    router.back();
  }
  return (
    <div>
      <header className="shadow p-3">header</header>
      <div className="actions">
        <button className="shadow px-3 py-2" onClick={handlePush}>
          push
        </button>
        <button className="shadow px-3 py-2" onClick={handleReplace}>
          replace
        </button>
        <button className="shadow px-3 py-2" onClick={handleBack}>
          go back
        </button>
      </div>
      <style>{`
      
        div {
          height: 1000px;
          position: relative;
        }

        .actions {
          position: absolute;
          top: 100%;
          left: 0;

        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ query, params, resolvedUrl }) {
  console.log("getServerSideProps");
  console.log("query", query);
  console.log("params", params);
  console.log("resolved url", getQueryString(resolvedUrl));

  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([]);
    }, 1000);
  });

  if (!result) {
    return {
      notFound: true,
    };
  }

  /**
   * redirect {
   *    destination: /login,
   *    permanent: true:false
   * }
   */

  return {
    props: {
      dramas: [],
      queryString: decodeURIComponent(resolvedUrl.split("?")[1]),
    },
  };
}

function getQueryString(resolvedUrl) {
  return resolvedUrl.split("?")[1];
}
