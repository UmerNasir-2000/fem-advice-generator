import AdviceCard from "./components/card"
import useFetch from "./hooks/useFetch"

const App = () => {
  const advice = useFetch()

  return (
    <>
      <main>{advice && <AdviceCard {...advice} />}</main>
      {/* <footer>
        Challenge by
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . Coded by <a href='https://github.com/UmerNasir-2000'>Umer Nasir</a>.
      </footer> */}
    </>
  )
}

export default App
