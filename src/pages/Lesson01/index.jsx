import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart01";
import instruction from "./instruction.md?raw";

const convertData = (input) => {
  return input.map(([name, count]) => ({
    name,
    count,
  })); // ここを作りましょう！
};

//配列の変換にはmap
//(input)=>{・・・}　アロー関数
//関数そのものを変数に代入している
//[]：配列、{}：オブジェクト
//{}でくくると関数扱いになるのでさらに()でくくっている
// map()は「すべての要素を変換する」ための関数であり、「一部を取り出す」のには向いていません。
const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer01"
      convertData={convertData}
      dataUrl="data/chs-capacity.json"
      instruction={instruction}
      title="Lesson 01"
      Chart={Chart}
    />
  );
};

export default Lesson;
