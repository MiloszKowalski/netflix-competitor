import axios from 'axios';

const apiUrl = "https://itunes.apple.com/us/rss/topmovies/limit=100/json";

export type MovieInfo = {
  id: string,
  name: string,
  description: string,
  artist: string,
  category: string,
  imageUri: string,
  detailsPage: string,
  releaseDate: string,
  rights: string
}

function convertToMovieType(data: any): MovieInfo[] {

  const movieData = data.map((x: any) => {
    const movie: MovieInfo = {
      id: x.id.attributes["im:id"],
      name: x["im:name"].label,
      description: x.summary.label,
      artist: x["im:artist"].label,
      category: x.category.attributes.label,
      imageUri: x["im:image"].slice(-1)[0].label,
      detailsPage: x.id.label,
      releaseDate: x["im:releaseDate"].attributes.label,
      rights: x.rights.label
    }

    return movie;
  });

  return movieData;
}

export function getMovieListing(): MovieInfo[] | any {
  return new Promise((resolve, reject) => {
    axios.get(apiUrl)
    .then((response) => {
      if(response.status !== 200 || !response.data) {
        return [];
      }
      resolve(convertToMovieType(response.data.feed.entry));
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
  });
}