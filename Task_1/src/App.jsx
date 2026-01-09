import Portfolio from './component/Portfolio'
import myPhoto from './assets/profile_img.jpeg'

const App = () => {
  return (
    <>
      <Portfolio
        name='Kinjal Kaneriya'
        bio='I am Kinjal Kaneriya. I have completed my BCA and currently I am MERN stack developer'
        photo={myPhoto}
      />
    </>
  )
}

export default App
