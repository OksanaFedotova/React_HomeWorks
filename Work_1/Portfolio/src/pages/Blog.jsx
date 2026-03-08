import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

export default function Blog() {
  let navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    // const getData = async () => {
    //   const data = await fetch("https://api.api-ninjas.com/v1/quotes", {
    //     method: "GET",
    //     headers: {
    //       "X-Api-Key": "becwfveebgFVu9ngZP5cwq5MClC0FpDJN4ak2L0T",
    //       "Content-Type": "application/json",
    //     },
    //   });
    const getData = async () => {
      const data = await fetch(
        "https://api.api-ninjas.com/v1/planets?name=Uranus",
        {
          method: "GET",
          headers: {
            "X-Api-Key": "becwfveebgFVu9ngZP5cwq5MClC0FpDJN4ak2L0T",
            "Content-Type": "application/json",
          },
        },
      );
      const articlesJSON = await data.json();
      setArticles(articlesJSON);
    };
    getData();
  }, []);
  return (
    <Layout>
      <Button
        label={"На главную"}
        disabled={false}
        onClick={() => navigate("/")}
      />

      {articles.map(({ name, radius, distance_light_year }, i) => (
        <div onClick={() => navigate(`./${name}`)} key={name}>
          {"Planet: " +
            name +
            " Radius: " +
            radius +
            " Distance " +
            distance_light_year}
        </div>
      ))}
    </Layout>
  );
}
