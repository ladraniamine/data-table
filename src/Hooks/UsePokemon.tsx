import { useState } from "react";
import { Trow } from "../Context/Types/TableTypes";

const UsePokemon = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (
    setData: React.Dispatch<React.SetStateAction<Trow[]>>,
  ) => {
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
  };

  return { fetchData, loading, error };
};

export default UsePokemon;
