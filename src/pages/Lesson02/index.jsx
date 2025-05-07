import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart02";
import instruction from "./instruction.md?raw";

const convertData = (input) => {
  input.sort((item1, item2) => item2.count - item1.count);
  return input.slice(0, 20);
};

// sort() に渡すのは 「比較関数（comparison function）」 
// この関数は、配列内の2つの要素（ここでは item1, item2）を比較し、
// 並び順をどうするか決めるために呼び出されます
// sort((a, b) => a-b) →昇順　
// a < b →　a - b < 0
// なんかよくわからんな、これはそういうものらしい。こうやって書くんだってさ

const Lesson = () => {
  return (
    <LessonPage
      dataUrl="data/qiita-tags.json"
      answerUrl="/answer02"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 02"
      Chart={Chart}
    />
  );
};

export default Lesson;
