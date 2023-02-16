import axios from "axios";
import {} from "@apollo/client";

export const api = axios.create({
  baseURL: "https://api.github.com/graphql",
});

export const token = () => "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";
