const getMusics = async (id: string) => {
  const request = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
  console.log('ID ', id);
  const requestJson = await request.json();
  const image = await requestJson.results[0].artworkUrl100;
  const requestWithBigImage = [{
    artistName: requestJson.results[0].artistName,
    collectionId: requestJson.results[0].collectionId,
    collectionName: requestJson.results[0].collectionName,
    collectionPrice: requestJson.results[0].collectionPrice,
    artworkUrl100: image.replace('100x100bb', '316x316bf'),
  }, ...requestJson.results];

  return requestWithBigImage;
};

export default getMusics;
