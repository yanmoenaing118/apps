import { fetcher } from "../../layout";

async function handler(req, res) {
  const result = await fetcher(
    "https://admin-bestbeauty.venuslab.co/api/categories"
  );

  res.status(200).json(result);
}

export default handler;
