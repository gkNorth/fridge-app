import { useEffect, useState } from "react"
import '../styles/globals.css'
import Header from "./components/Header"

function MyApp({ Component, pageProps }) {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch('../api', { method: 'GET' })
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <Header />
      <Component {...pageProps} items={items} />
    </>
  )
}

export default MyApp
