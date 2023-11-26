import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getAll = async () =>
  axios
    .get(
      `https://graph.instagram.com/17895695668004550?fields=id,media_type,media_url,username,timestamp&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}`
    )
    .then((res) => res.data.data)
    .catch((err) => Promise.reject(err.response.data));

export default function useGetAll() {
  return useQuery({
    queryKey: ["list"],
    queryFn: () => getAll(),
  });
}
