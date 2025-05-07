import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart05";
import instruction from "./instruction.md?raw";

const convertData = (input) => {
  const genders = Array.from(new Set(input.map(({ gender }) => gender))); //const genders = ["男性", "女性"];
  const min = Math.round(Math.min(...input.map(({y}) => y)));
  const max = Math.round(Math.max(...input.map( ({y}) => y)));
  const bins 
    = Array.from({ length: max - min + 1 }) //要素は全てundefined
        .map((_, i) => { //Array.fromでつくった要素数nの配列に対してmap //引数_は配列の要素を使わない
          const obj = {
            bin: (min + i).toString(), //文字列に型変換
          };
          for (const gender of genders) { //mapだとgenderを使って新しいものを作ってしまうから、for文でただ参照するだけにしている
            obj[gender] = 0;
          }
          return obj;
        });
  for (const { y, gender } of input) {
    const i = Math.round(y) - min; //身長が配列binsの何番目かを調べる
    bins[i][gender] += 1;
  }
  return bins;
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer05"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 05"
      Chart={Chart}
    />
  );
};

export default Lesson;
