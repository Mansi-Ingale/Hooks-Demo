import { useState } from "react";
// import './App.css';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const style = {
    backgroundColor: "#7950f2",
    color: "#fff",
  };

  const [step, setSteps] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevClick() {
    if (step > 1) setSteps(step - 1);
  }

  function handleNextClick() {
    if (step < 3) setSteps(step + 1);
  }

  return (
    <>
      <div>
        <button className="close" onClick={ () => setIsOpen(!isOpen)}>&times;</button>
        {isOpen && (
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <p className="message">
              Step {step} : {messages[step - 1]}
            </p>

            <div className="buttons">
              <button style={style} onClick={handlePrevClick}>
                Previous
              </button>
              <button style={style} onClick={handleNextClick}>
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
