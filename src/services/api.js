import axios from "axios";

export function getDataServer(query, page) {
  const searchParams = {
    key: "23766907-8949d781ce5b5ece952eeda6b",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 12,
  };

  const response = axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}`,
    { params: searchParams }
  );

  return response.then(({ data }) => data);
}
