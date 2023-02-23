const getMusics = async (id: string) => {
  const request = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
  console.log('ID ', id);
  const requestJson = await request.json();
  return requestJson.results;
};

export default getMusics;
