import React, { useState } from "react";
import SignedInNavbar from "./SignedInNavbar";

const PhilosophyQuiz = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleChange = (e, questionId) => {
    setAnswers({ ...answers, [questionId]: e.target.value });
  };

  const handleSubmit = () => {
    const correctAnswers = {
      q1: "c",
      q2: "falsifiable",
      q3: "False",
      q4: "c",
      q5: "inductive",
      q6: "falsifiable",
      q7: "b",
      q8: "conventionalist",
      q9: "risky",
      q10: "True",
    };

    let points = 0;
    for (let questionId in correctAnswers) {
      if (
        answers[questionId] &&
        answers[questionId].trim().toLowerCase() === correctAnswers[questionId].toLowerCase()
      ) {
        points++;
      }
    }

    setScore(points);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <SignedInNavbar />

      <main className="container mx-auto px-4 py-8">
        <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
          <h1 className="text-2xl font-bold mb-6">Quiz: Karl Popper: Science, Conjectures, and Refutations</h1>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
            <form>
              {/* Question 1 */}
              <div className="mb-6">
                <h3 className="font-semibold">1. According to Karl Popper, what is the primary criterion for distinguishing a scientific theory from a pseudo-scientific one?</h3>
                <div>
                  <label className="block mt-2">
                    <input
                      type="radio"
                      name="q1"
                      value="a"
                      onChange={(e) => handleChange(e, "q1")}
                      className="mr-2"
                    />
                    a) The number of confirmations it has received
                  </label>
                </div>
                <div>
                  <label className="block mt-2">
                    <input
                      type="radio"
                      name="q1"
                      value="b"
                      onChange={(e) => handleChange(e, "q1")}
                      className="mr-2"
                    />
                    b) Its ability to explain all possible outcomes
                  </label>
                </div>
                <div>
                  <label className="block mt-2">
                    <input
                      type="radio"
                      name="q1"
                      value="c"
                      onChange={(e) => handleChange(e, "q1")}
                      className="mr-2"
                    />
                    c) Its falsifiability and ability to be tested
                  </label>
                </div>
                <div>
                  <label className="block mt-2">
                    <input
                      type="radio"
                      name="q1"
                      value="d"
                      onChange={(e) => handleChange(e, "q1")}
                      className="mr-2"
                    />
                    d) Its acceptance by the scientific community
                  </label>
                </div>
              </div>

              {/* Question 2 */}
              <div className="mb-6">
                <h3 className="font-semibold">2. Popper argued that a theory is scientific only if it is ________, meaning it can be tested and potentially proven false.</h3>
                <input
                  type="text"
                  name="q2"
                  onChange={(e) => handleChange(e, "q2")}
                  className="border border-gray-300 rounded-lg px-4 py-2 mt-2 w-full"
                  placeholder="Your answer here"
                />
              </div>

              {/* Question 3 */}
              <div className="mb-6">
                <h3 className="font-semibold">3. A theory that can accommodate any outcome, regardless of what happens, is considered highly scientific according to Popper. (True/False)</h3>
                <input
                  type="text"
                  name="q3"
                  onChange={(e) => handleChange(e, "q3")}
                  className="border border-gray-300 rounded-lg px-4 py-2 mt-2 w-full"
                  placeholder="True or False"
                />
              </div>

              {/* Question 4 */}
              <div className="mb-6">
                <h3 className="font-semibold">4. Which of the following theories did Popper consider to be an example of a scientific theory due to its testability?</h3>
                <div>
                  <label className="block mt-2">
                    <input
                      type="radio"
                      name="q4"
                      value="a"
                      onChange={(e) => handleChange(e, "q4")}
                      className="mr-2"
                    />
                    a) Freud's psychoanalysis
                  </label>
                </div>
                <div>
                  <label className="block mt-2">
                    <input
                      type="radio"
                      name="q4"
                      value="b"
                      onChange={(e) => handleChange(e, "q4")}
                      className="mr-2"
                    />
                    b) Adler's individual psychology
                  </label>
                </div>
                <div>
                  <label className="block mt-2">
                    <input
                      type="radio"
                      name="q4"
                      value="c"
                      onChange={(e) => handleChange(e, "q4")}
                      className="mr-2"
                    />
                    c) Einstein's theory of relativity
                  </label>
                </div>
                <div>
                  <label className="block mt-2">
                    <input
                      type="radio"
                      name="q4"
                      value="d"
                      onChange={(e) => handleChange(e, "q4")}
                      className="mr-2"
                    />
                    d) Marx's theory of history
                  </label>
                </div>
              </div>

              {/* Question 5 */}
              <div className="mb-6">
                <h3 className="font-semibold">5. Popper rejected the ________ method because it relied on deriving general principles from observations, which he believed was insufficient for distinguishing science from pseudo-science.</h3>
                <input
                  type="text"
                  name="q5"
                  onChange={(e) => handleChange(e, "q5")}
                  className="border border-gray-300 rounded-lg px-4 py-2 mt-2 w-full"
                  placeholder="Your answer here"
                />
              </div>

              {/* Question 6 */}
              <div className="mb-6">
                <h3 className="font-semibold">6. Popper criticized theories like Marxism and psychoanalysis because they were not ________; they could explain any event without the possibility of being proven wrong.</h3>
                <input
                  type="text"
                  name="q6"
                  onChange={(e) => handleChange(e, "q6")}
                  className="border border-gray-300 rounded-lg px-4 py-2 mt-2 w-full"
                  placeholder="Your answer here"
                />
              </div>

              {/* Question 7 */}
              <div className="mb-6">
                <h3 className="font-semibold">7. What was the significance of Eddington's 1919 eclipse experiment in the context of Popper's philosophy?</h3>
                <div>
                  <label className="block mt-2">
                    <input
                      type="radio"
                      name="q7"
                      value="a"
                      onChange={(e) => handleChange(e, "q7")}
                      className="mr-2"
                    />
                    a) It proved that all scientific theories are true
                  </label>
                </div>
                <div>
                  <label className="block mt-2">
                    <input
                      type="radio"
                      name="q7"
                      value="b"
                      onChange={(e) => handleChange(e, "q7")}
                      className="mr-2"
                    />
                    b) It confirmed Einstein's predictions, demonstrating the power of falsifiable theories
                  </label>
                </div>
                <div>
                  <label className="block mt-2">
                    <input
                      type="radio"
                      name="q7"
                      value="c"
                      onChange={(e) => handleChange(e, "q7")}
                      className="mr-2"
                    />
                    c) It showed that theories do not need experimental support
                  </label>
                </div>
                <div>
                  <label className="block mt-2">
                    <input
                      type="radio"
                      name="q7"
                      value="d"
                      onChange={(e) => handleChange(e, "q7")}
                      className="mr-2"
                    />
                    d) It demonstrated that pseudo-scientific theories can also make predictions
                  </label>
                </div>
              </div>

              {/* Question 8 */}
              <div className="mb-6">
                <h3 className="font-semibold">
                  8. The "________ twist" refers to making ad hoc modifications to a theory to protect it from falsification, which Popper argued weakens its scientific status.
                </h3>
                <input
                  type="text"
                  name="q8"
                  onChange={(e) => handleChange(e, "q8")}
                  className="border border-gray-300 rounded-lg px-4 py-2 mt-2 w-full"
                  placeholder="Your answer here"
                />
              </div>

              {/* Question 9 */}
              <div className="mb-6">
                <h3 className="font-semibold">
                  9. A scientific theory must make ________ predictions, meaning it must prohibit certain outcomes that, if observed, would refute the theory.
                </h3>
                <input
                  type="text"
                  name="q9"
                  onChange={(e) => handleChange(e, "q9")}
                  className="border border-gray-300 rounded-lg px-4 py-2 mt-2 w-full"
                  placeholder="Your answer here"
                />
              </div>

              {/* Question 10 */}
              <div className="mb-6">
                <h3 className="font-semibold">10. According to Popper, the best way to test a scientific theory is by attempting to falsify it rather than just looking for confirmations. (True/False)</h3>
                <input
                  type="text"
                  name="q10"
                  onChange={(e) => handleChange(e, "q10")}
                  className="border border-gray-300 rounded-lg px-4 py-2 mt-2 w-full"
                  placeholder="True or False"
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>

            {score !== null && (
              <div className="mt-6 p-4 bg-green-100 rounded-lg">
                <h3 className="font-semibold text-green-800">
                  You scored {score} out of 10!
                </h3>
                <p className="mt-2 text-green-700">
                  {score < 6 ? "Review the material and try again!" : 
                   score < 9 ? "Good job! You have a solid understanding of Karl Popper's philosophy." :
                   "Excellent! You have a very good grasp of Karl Popper's philosophy of science."}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PhilosophyQuiz;