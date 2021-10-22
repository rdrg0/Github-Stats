import Title from "../components/Title"
import homeImg from "../home_img.png"




export default function Home() {

  return (
    <main>
      <Title>
        Welcome to Github Userss
      </Title>
      <img src={homeImg} alt="github_mascot" />
      <button>Search</button>

    </main>
  )
}