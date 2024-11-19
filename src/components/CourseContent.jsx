import React from "react";

const CourseContent = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Unit 1: Introduction to Programming
        </h1>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">What is Programming?</h2>
          <p className="text-gray-700 text-sm">
            Programming is the process of creating instructions that a computer
            can follow to perform specific tasks. These instructions are
            written in programming languages and allow us to solve problems,
            automate tasks, and build software or applications.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Programming Languages</h2>
          <p className="text-gray-700 text-sm">
            Programming languages are the tools used to write programs. They
            have their own syntax and rules for writing code. Some common
            programming languages include:
          </p>
          <ul className="list-disc pl-6 text-gray-700 text-sm mt-2">
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>Ruby</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Algorithms and Flowcharts</h2>
          <p className="text-gray-700 text-sm">
            <strong>Algorithms</strong> are step-by-step instructions to solve a
            specific problem. They are written in plain language or pseudocode
            before being converted into code. 
          </p>
          <p className="text-gray-700 text-sm mt-2">
            <strong>Flowcharts</strong> are visual representations of algorithms
            that use symbols to illustrate the process flow. For example:
          </p>
          <div className="border rounded-lg p-4 bg-gray-100 mt-4">
            <p className="text-gray-600 text-sm">Flowchart Example:</p>
            <ul className="list-none">
              <li>Start → Input → Process → Output → End</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
