import { useEffect, useMemo, useState } from "react";

import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";
import "./app.css";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0");

  const data = [
    {
      id: 1,
      question:
        "https://www.partvisa.com/wp-content/uploads/2018/12/Flag-of-Japan.jpg",
      answers: [
        {
          id: 1,
          text: "Japanese",
          correct: true,
        },
        {
          id: 2,
          text: "Chinese",
          correct: false,
        },
        {
          id: 3,
          text: "Korean",
          correct: false,
        },
        {
          id: 4,
          text: "Thai",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "https://fararu.com/files/fa/news/1400/1/17/900774_888.jpg",
      answers: [
        {
          id: 1,
          text: "Japanese",
          correct: false,
        },
        {
          id: 2,
          text: "Chinese",
          correct: true,
        },
        {
          id: 3,
          text: "Korean",
          correct: false,
        },
        {
          id: 4,
          text: "Thai",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "http://tabnakjavan.com/files/fa/news/1400/8/10/291083_773.jpg",

      answers: [
        {
          id: 1,
          text: "Japanese",
          correct: false,
        },
        {
          id: 2,
          text: "Chinese",
          correct: false,
        },
        {
          id: 3,
          text: "Korean",
          correct: true,
        },
        {
          id: 4,
          text: "Thai",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "https://media.mehrnews.com/d/2019/03/07/3/3067838.jpg",

      answers: [
        {
          id: 1,
          text: "Japanese",
          correct: false,
        },
        {
          id: 2,
          text: "Chinese",
          correct: false,
        },
        {
          id: 3,
          text: "Korean",
          correct: false,
        },
        {
          id: 4,
          text: "Thai",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question:
        "https://www.meme-arsenal.com/memes/e2cb5fa3080dfd015ab3391b5f900bb1.jpg",
      answers: [
        {
          id: 1,
          text: "Click to show the Score !",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "1" },
        { id: 2, amount: "2" },
        { id: 3, amount: "3" },
        { id: 4, amount: "4" },
        { id: 5, amount: "5" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">Your Score: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setStop={setStop}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  key={m.id}
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
