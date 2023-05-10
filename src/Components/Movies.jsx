import { useFetch } from "../Hooks/useFetch";

export const Movies = () => {
  const { data } = useFetch(
    "https://api.themoviedb.org/3/movie/550?api_key=be5a4af3c5c0462d446848203105836c&append_to_response=vidieos"
  );

  return (
    <div>
      {data.length > 0 &&
        data.map((item, id) => {
          return (
            <div key={id}>
              <img src={`https://videos.tmdb.org/t/p/w500/${item.logo_path}`} />
              <p>{item.id}</p>
              <p>{item.name}</p>
            </div>
          );
        })}
    </div>
  );
};
