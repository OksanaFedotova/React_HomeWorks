import { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Button from "../components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";

export default function BlogPost() {
  let navigate = useNavigate();
  let { id } = useParams();
  const [quote, setQuote] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await (
        await fetch(`http://localhost:3000/api/quotes/${id}`)
      ).json();
      setQuote(data);
    };
    getData();
  }, [id]);
  return (
    <Layout>
      <Button
        label={"На главную"}
        disabled={false}
        onClick={() => navigate("/")}
      />
      <div key={id}>{quote.text + "; -" + quote.author}</div>
    </Layout>
  );
}
