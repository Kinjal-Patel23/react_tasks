const Portfolio = ({ name, bio, photo }) => {
  return (
    <div className='main-div'>
      <h1>My Portfolio</h1>
      <img src={photo} alt='profileImg' />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  )
}

export default Portfolio
