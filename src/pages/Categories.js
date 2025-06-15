import { useEffect, useState } from "react";
import api from "../api";
import Loading from "../components/Loading";
import SuccessMessage from "../components/SuccessMessage";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
    color: "#ffffff",
  });
}

const fetchCategories = async () => {
  setLoading(true);
  try {
    const res = await api.get("/api/categories/");
    setCategories(res.data);
  } catch (error) {
    setMessage({
      text: error.response?.data.detail || "Failed to fetch categories",
      type: "error",
    });
  } finally {
    setLoading(false);
  }
};
