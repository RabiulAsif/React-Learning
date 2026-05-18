const NetflixSeries = () => {
const Summary = "A group of friends navigate the ups and downs of life in this heartwarming comedy.";
const Name = "Friends";

let age = 8;

let canWatch = "Not available";

if (age >= 18) {
  canWatch = "Watch now";
}

const returnGenre = () => {
  const genre = "Comedy";
  return genre;
};

return (
  <div>
    <div>
      <img src="download.jpg" alt="an image" width="40%" height="40%" />
      </div>
        <h2>Name: {Name}</h2>
        <h3>Rating: {6/3.2}</h3>
        <p>Summary: {Summary}</p>
        <p>Genre: {returnGenre()}</p>
        <button>{canWatch}</button>
      </div>
);
};
export default NetflixSeries;