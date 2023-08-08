import AdviceCard from "./components/card"
import useFetch from "./hooks/useFetch"

const App = () => {
  const { advice, setAdvice, loading, setLoading } = useFetch()

  return (
    <>
      <main>
        {advice && (
          <AdviceCard
            advice={advice}
            setAdvice={setAdvice}
            loading={loading}
            setLoading={setLoading}
          />
        )}
      </main>
      <footer>
        Challenge by
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href='https://github.com/UmerNasir-2000' target='_blank'>
          Umer Nasir
        </a>
        .
      </footer>
    </>
  )
}

export default App
