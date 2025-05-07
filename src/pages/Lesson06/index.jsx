import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart06";
import instruction from "./instruction.md?raw";

const convertData = (input) => {
  return input.map( ({gender, y, x}) => {
    return {
      color: gender === "男性" ? "blue" : "red",
      gender,
      bmi: x/ (y/100)**2,
      weight: x,
      height: y,
    };
  });
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer06"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 06"
      Chart={Chart}
    />
  );
};

export default Lesson;
