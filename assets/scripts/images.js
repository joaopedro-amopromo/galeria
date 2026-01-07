const URL = "https://picsum.photos/v2/list?page=3&limit=50";

export const getImages = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  return data;
};
