import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Loading from "./components/Loading";

function App() {
  const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  function handleToggleSideBar() {
    setShowSideBar(!showSideBar);
  }

  useEffect(() => {
    async function fetchApiData() {
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_API_KEY}`;

      const today = new Date().toDateString();

      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("Fetched from cache today");
        return;
      }
      localStorage.clear();

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData);
        console.log('From API');
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchApiData();
  }, []);

  return (
    <>
      {data ? <Main data={data} /> : <Loading />}
      {showSideBar && (
        <SideBar handleToggleSideBar={handleToggleSideBar} data={data} />
      )}
      {data && <Footer handleToggleSideBar={handleToggleSideBar} data={data} />}
    </>
  );
}

export default App;
