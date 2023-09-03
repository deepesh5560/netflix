import { baseUrl } from "@/utils/services";
import { useRouter } from "next/router";

const Trending = ({ trendingNow }) => {
  const navigate = useRouter();

  const handleClick = (val) => {
    navigate.push(`/details/${val}`);
  };
  return (
    <>
      {" "}
      {trendingNow.map((data, i) => {
        return (
          <a key={i}>
            <img
              src={`${baseUrl}${data.poster_path}`}
              alt="banner"
              onClick={() => handleClick(data.id)}
            />
          </a>
        );
      })}
    </>
  );
};

export default Trending;
