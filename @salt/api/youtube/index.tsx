import axios from "axios";

const options = (q: string) => ({
  method: "GET",
  url: "https://youtube-search-results.p.rapidapi.com/youtube-search/",
  params: { q },
  headers: {
    "X-RapidAPI-Key": "d067a0ba46mshf99640e4d2b933dp1432cejsn22b51a4db2dd",
    "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
  },
});

export const getYoutubeApi = async (search: string): Promise<any> => {
  const payload = search.split(" ").join("+");
  const result = await axios
    .request(options(payload))
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
    return result
};
