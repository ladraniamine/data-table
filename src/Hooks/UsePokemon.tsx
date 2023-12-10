import { useState } from "react";
import { Trow } from "../Types/Types";

function UsePokemon() {
  const [loading, setLoading] = useState(true);
  //we can also handle the error and add a button to refetch again the data in case of failure
  const [error, setError] = useState("");

  async function fetchData(
    setData: React.Dispatch<React.SetStateAction<Trow[]>>,
  ) {
    setLoading(true);
    try {
      const response = await fetch(import.meta.env.VITE_POKEMON_URL);
      if (!response.ok) return setError("somthing went Wrong");
      const data = await response.json();
      setData(data);
      setError("");
    } catch (error) {
      setError("somthing went Wrong");
    } finally {
      setLoading(false);
    }
  }

  return { fetchData, loading, error };
}

export default UsePokemon;
