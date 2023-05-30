import { useState } from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(true);

  const fetch = async () => {
    try {
      await callback();
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetch, isLoading];
};
