import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function Menu() {
  const MENU = [
    { title: "На главную", to: "/", uniqKey: uuid() },
    { title: "Работы", to: "works", uniqKey: uuid() },
    { title: "Отзывы", to: "testimonials", uniqKey: uuid() },
    { title: "Блог", to: "blog", uniqKey: uuid() },
  ];
  return (
    <ul className="menu">
      {MENU.map(({ title, to, uniqKey }) => (
        <Link key={uniqKey} to={to}>
          {" "}
          {title}{" "}
        </Link>
      ))}
    </ul>
  );
}
