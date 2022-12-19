const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd067a0ba46mshf99640e4d2b933dp1432cejsn22b51a4db2dd',
		'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
	}
};

export const getYoutubeApi = async (): Promise<any> => {
  const result = await fetch('https://youtube-search-results.p.rapidapi.com/youtube-search/?q=tutorial%react', options)
	.then(response => response.json())
	// .then(response => console.log(response))
	.catch(err => console.error(err));
  return result;
};
