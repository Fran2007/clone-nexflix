import { useFetch } from "../Hooks/useFetch";

export const Movies = () => {
  const { data, loading, fetchData } = useFetch(
    '"https://api.themoviedb.org/3/movie/550?api_key=be5a4af3c5c0462d446848203105836c&append_to_response=videos,images,names"'
  );

  return (
    <div>
      {data.map((movie, id) => {
        return <h1 key={id}>{movie.name}</h1>;
      })}
    </div>
  );
};
