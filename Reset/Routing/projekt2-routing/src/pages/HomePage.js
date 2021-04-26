import React from "react";

import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria",
    author: "Adam Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sequi, est quidem expedita ipsam, quas natus voluptatem numquam esse iste laboriosam nemo facere alias, corrupti autem voluptas! Nihil, illo fugiat!",
  },
  {
    id: 2,
    title: "Czym jest paradoks",
    author: "Anna Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sequi, est quidem expedita ipsam, quas natus voluptatem numquam esse iste laboriosam nemo facere alias, corrupti autem voluptas! Nihil, illo fugiat!",
  },
  {
    id: 3,
    title: "Czym jest materia",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sequi, est quidem expedita ipsam, quas natus voluptatem numquam esse iste laboriosam nemo facere alias, corrupti autem voluptas! Nihil, illo fugiat!",
  },
];
const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className='home'>{artList}</div>;
};

export default HomePage;
