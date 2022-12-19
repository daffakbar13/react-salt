import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://instagram47.p.rapidapi.com/public_user_posts',
  params: { userid: '1718924098' },
  headers: {
    'X-RapidAPI-Key': 'd067a0ba46mshf99640e4d2b933dp1432cejsn22b51a4db2dd',
    'X-RapidAPI-Host': 'instagram47.p.rapidapi.com',
  },
};

export const getYoutubeApi = async (): Promise<any> => {
  const result = await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
  return result;
};
