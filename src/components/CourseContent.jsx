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
            Programming is the process of designing, writing, testing, and
            maintaining a set of instructions (called code) that a computer can
            execute. It enables us to create software applications, websites,
            games, and much more. Programming allows us to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 text-sm mt-2">
            <li>Solve real-world problems through automation.</li>
            <li>Create interactive user experiences in apps and websites.</li>
            <li>Process large volumes of data efficiently.</li>
            <li>Develop artificial intelligence and machine learning systems.</li>
          </ul>
          <p className="text-gray-700 text-sm mt-2">
            Computers do not understand human language. Therefore, we use
            programming languages to communicate with them in a structured way.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Programming Languages</h2>
          <p className="text-gray-700 text-sm">
            Programming languages are tools that allow us to write code in a way
            that computers can interpret. Each language has its own syntax,
            structure, and purpose. Some of the popular programming languages
            are:
          </p>
          <ul className="list-disc pl-6 text-gray-700 text-sm mt-2">
            <li>
              <strong>Python:</strong> Easy to learn, widely used in data
              science, AI, and web development.
            </li>
            <li>
              <strong>Java:</strong> Known for its portability and often used in
              enterprise applications and Android app development.
            </li>
            <li>
              <strong>C++:</strong> Used for system programming, game
              development, and high-performance applications.
            </li>
            <li>
              <strong>JavaScript:</strong> Essential for creating interactive
              web applications.
            </li>
            <li>
              <strong>Ruby:</strong> Popular for web development with the Ruby
              on Rails framework.
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

        <div>
          <h2 className="text-xl font-bold mb-2">Algorithms and Flowcharts</h2>

          <p className="text-gray-700 text-sm">
            <strong>Algorithms:</strong> Algorithms are step-by-step
            instructions designed to solve a problem or perform a specific task.
            Think of them as a recipe for solving a problem.
          </p>
          <p className="text-gray-700 text-sm mt-2">
            For example, an algorithm for making a cup of tea could look like
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
            <strong>Flowcharts:</strong> A flowchart is a diagram that
            represents an algorithm visually. It uses shapes like rectangles,
            diamonds, and arrows to illustrate the process flow.
          </p>
          <p className="text-gray-700 text-sm mt-2">
            Here's a simple flowchart for checking if a number is positive:
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
            Programming is a powerful tool that enables us to solve problems and
            create applications. With a basic understanding of programming
            languages, algorithms, and flowcharts, you can begin your journey
            into the world of coding.
          </p>
          <p className="text-gray-700 text-sm mt-2">
            Remember, programming is not just about writing code—it’s about
            thinking logically and creatively to solve challenges.
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
