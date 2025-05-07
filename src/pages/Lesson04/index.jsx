import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart04";
import instruction from "./instruction.md?raw";

const convertData = (input) => {
  const spe = new Set(input.map( (({species}) => spaces)));
  const species = Array.from(spe);
  return species.map( (species) => {
    return { //辞書型を返している
      id: species,
      data: input
        .filter( (item) => item.species === species )
        .map( ({ sepalLength: x, setalWidth: y}) => ({ x, y})),
        //inputの中身をfilterで厳選して、その厳選したものをmap関数で回している、ってコト！！
    };
  });
};

// map関数使うのは合ってた！
//input.map(({ species }) => species);
//
// input.map((item) => {
//   return item.species;
// });


const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer04"
      dataUrl="data/iris.json"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 04"
      Chart={Chart}
    />
  );
};

export default Lesson;
