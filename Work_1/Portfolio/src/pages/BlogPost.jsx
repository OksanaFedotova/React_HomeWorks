import { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Button from "../components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";

export default function BlogPost() {
  let navigate = useNavigate();
  let { id: planetId } = useParams();
  const [planet, setPlanet] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        `https://api.api-ninjas.com/v1/planets?name=${planetId}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "becwfveebgFVu9ngZP5cwq5MClC0FpDJN4ak2L0T",
            "Content-Type": "application/json",
          },
        },
      );
      const planetJSON = await data.json();

      setPlanet(planetJSON);
    };
    getData();
  }, [planetId]);
  return (
    <Layout>
      <Button
        label={"На главную"}
        disabled={false}
        onClick={() => navigate("/")}
      />
      {planet.map(({ name }, i) => (
        <div key={name}>{name}</div>
      ))}
    </Layout>
  );
}
