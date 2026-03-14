import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

export default function Blog() {
  let navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await (
        await fetch("api/quotes")
      ).json();
      setArticles(data);
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
      {articles.map(({ author, id, text }) => (
        <div onClick={() => navigate(`./${id}`)} key={id}>
          {text + "; -" + author}
        </div>
      ))}
    </Layout>
  );
}
