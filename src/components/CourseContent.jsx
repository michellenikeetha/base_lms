import React from "react";
import SignedInNavbar from "./SignedInNavbar";
import programmingLanguagesImage from "../assets/langs.png";
import flowchartImage from "../assets/flowchart.png";
import { useNavigate } from 'react-router-dom';

const CourseContent = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">
      <SignedInNavbar />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">
            Unit 1: Introduction to Programming
          </h1>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">What is Programming?</h2>
            <p className="text-gray-700 text-sm">
              Programming is the process of designing, writing, testing, and maintaining a set of instructions 
              (called code) that a computer can execute. It enables us to create software applications, websites, 
              games, and much more. Computers rely on programming languages to understand human intent and perform 
              specific tasks. Programming allows us to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 text-sm mt-2">
              <li>Solve real-world problems through automation.</li>
              <li>Create interactive user experiences in apps and websites.</li>
              <li>Process large volumes of data efficiently.</li>
              <li>Develop artificial intelligence and machine learning systems.</li>
            </ul>
            <p className="text-gray-700 text-sm mt-2">
              Computers cannot interpret human language directly, so programmers use programming languages to
              communicate in a structured way.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Programming Languages</h2>
            <p className="text-gray-700 text-sm">
              Programming languages are tools that allow us to write code in a way that computers can interpret. Each 
              language has its own syntax, structure, and purpose. Here are some popular programming languages:
            </p>
            <ul className="list-disc pl-6 text-gray-700 text-sm mt-2">
              <li>
                <strong>Python:</strong> Known for its simplicity, Python is widely used in data science, AI, and 
                web development.
              </li>
              <li>
                <strong>Java:</strong> Popular for its portability and often used in enterprise applications and 
                Android app development.
              </li>
              <li>
                <strong>C++:</strong> Ideal for system programming, game development, and high-performance 
                applications.
              </li>
              <li>
                <strong>JavaScript:</strong> Essential for creating interactive web applications and front-end 
                development.
              </li>
              <li>
                <strong>Ruby:</strong> Often used for web development, especially with the Ruby on Rails framework.
              </li>
            </ul>
            <img
              src={programmingLanguagesImage}
              width={400}
              alt="Programming Languages"
              className="mt-4 rounded-lg shadow-lg"
            />
            <p className="text-gray-700 text-sm mt-2">
              Programming languages are chosen based on the type of project,
              performance requirements, and developer preference.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Algorithms and Flowcharts</h2>

            <p className="text-gray-700 text-sm">
              <strong>Algorithms:</strong> Algorithms are step-by-step instructions designed to solve a problem 
              or perform a specific task. They serve as the backbone of programming by providing a clear set of rules 
              to follow. Think of them as a recipe for solving a problem. For instance, an algorithm for making a cup of tea could look like
              this:
            </p>
            <div className="border rounded-lg p-4 bg-gray-100 mt-4">
              <ul className="list-decimal pl-6 text-gray-700 text-sm">
                <li>Boil water.</li>
                <li>Put a tea bag in a cup.</li>
                <li>Pour hot water into the cup.</li>
                <li>Add sugar or milk (optional).</li>
                <li>Stir and serve.</li>
              </ul>
            </div>

            <p className="text-gray-700 text-sm mt-6">
              Algorithms can be represented in different ways, such as plain text, pseudocode, or flowcharts. They are 
              crucial for defining logical solutions to problems.
            </p>
            <p className="text-gray-700 text-sm mt-2">
              <strong>Key Concept:</strong> Algorithms are always correct if implemented correctly, and they can be 
              verified through dry runs.
            </p>

            <p className="text-gray-700 text-sm mt-6">
              <strong>Flowcharts:</strong> Flowcharts visually represent algorithms. They use shapes like rectangles 
              (process), diamonds (decisions), and arrows (flow) to illustrate steps clearly. For example:
            </p>
            <p className="text-gray-700 text-sm mt-2">
              Here is a flowchart for checking whether a number is positive or negative:
            </p>
            <img
              src={flowchartImage}
              width={400}
              alt="Flowchart Example"
              className="mt-4 rounded-lg shadow-lg"
            />
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-2">Summary</h2>
            <p className="text-gray-700 text-sm">
              Programming involves understanding concepts like programming languages, algorithms, and flowcharts. By 
              mastering these basics, you can build a solid foundation for solving complex problems through logical 
              thinking and structured approaches.
            </p>
            <p className="text-gray-700 text-sm mt-2">
              Algorithms and flowcharts are tools to streamline problem-solving and ensure consistency in your 
              solutions.
            </p>
          </div>

          <div className="bg-blue-100 p-6 mt-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Ready to Test Your Knowledge?</h2>
            <p className="text-gray-700 text-sm mb-6">
              Take a short quiz to review what you've learned in Unit 1: Introduction to Programming.
            </p>
            <button
              onClick={() => navigate("/quiz")}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Start Quiz
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default CourseContent;
