import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart03";
import instruction from "./instruction.md?raw";

const convertData = (input) => {
  // ここを作りましょう！
  return input.filter((item) => item.gender === "男性");
};

//あんまりよくないやつ
// const convertData = (input) => {
//   const result = [];
//   for (let i = 0; i < input.length; i++) {
//     if (input[i].gender === "男性") {
//       result.push(input[i]);
//     }
//   }
//   return result;
// };
//filterとかいう便利な関数があるんだからそっち使おうゼ！

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer03"
      dataUrl="data/size-and-weight.json"
      convertData={(input) => {
        return [
          {
            id: "男性",
            data: convertData(input),
          },
        ];
      }}
      instruction={instruction}
      title="Lesson 03"
      Chart={Chart}
    />
  );
};

export default Lesson;
