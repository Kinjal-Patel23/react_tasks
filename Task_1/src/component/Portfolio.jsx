import profile from "../assets/profile_img.jpeg";

const Portfolio = ({ bio }) => {
  const aboutMe = {
    photo: profile,
    name: "Kinjal Kaneriya",
  };

  return (
    <>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <h1>My Portfolio</h1>
        <img
          src={aboutMe.photo}
          alt="profileImg"
          style={{ width: "200px", height: "200px" }}
        />
        <h1>{aboutMe.name}</h1>
        <p>{bio}</p>
      </div>
    </>
  );
};

export default Portfolio;
