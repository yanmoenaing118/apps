import useSWR from "swr";
import { fetcher } from "../layout";

export default function useNavs() {
  const { data, error } = useSWR(
    "https://admin-bestbeauty.venuslab.co/api/categories",
    fetcher
  );

  return {
    loading: !data && !error,
    data: data?.data,
    error: error,
  };
}
