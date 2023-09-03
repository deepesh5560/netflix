import { baseUrl } from "@/utils/services";

const Details = ({ details }) => {
  console.log(details);
  return (
    <>
      <div className="details">
        <div>
          <img src={`${baseUrl}${details.backdrop_path}`} alt="" />
        </div>
        <div className="detail-info">
          <div>
            <h1>{details.original_title}</h1>
          </div>
          <div>
            <div className="date-cab">
              <div className="date">
                {details.release_date && details.release_date.split("-")[0]}
              </div>
              <div className="age">
                <div>{details.adult ? "A" : "U/A"}</div>
              </div>
            </div>
          </div>
          <div>
            <button>Play</button>
            <button className="btn-2">Add to My List</button>
          </div>

          <div className="overView">{details.overview}</div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Details;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { detailsId } = query;
  const header = `https://api.themoviedb.org/3/movie/${detailsId}?api_key=9dc13ab07684260de99422672d9e454f&language=en-US`;
  const details = await fetch(header).then((res) => res.json());
  return {
    props: {
      details: details,
    },
  };
};
