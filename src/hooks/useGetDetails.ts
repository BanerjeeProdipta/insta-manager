import axios from "@/services/axios.config";
import { useQuery } from "@tanstack/react-query";

const getDetails = async (id: string) =>
  axios
    .get("campaign", {
      params: {
        id,
      },
    })
    .then((res) => res.data.data)
    .catch((err) => Promise.reject(err.response.data));

export default function useGetDetails(id: string) {
  return useQuery({
    queryKey: ["details", id],
    queryFn: () => getDetails(id),
  });
}
