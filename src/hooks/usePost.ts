import axios from "@/services/axios.config";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const reviewMethodology = async (data: any) =>
  axios
    .post("reviews/submit-review", data)
    .then((res) => res.data.data)
    .catch((err) => Promise.reject(err.response.data));

export default function usePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["reviewMethodology"],
    mutationFn: reviewMethodology,
    retry: 0,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["methodologyDetailsWithRound"],
      });
    },
  });
}
