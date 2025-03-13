import React from 'react';
import SignedInNavbar from "./SignedInNavbar";
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText, HelpCircle, CheckCircle, AlertTriangle } from 'lucide-react';

const PhilosophyCourseContentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">
    <SignedInNavbar />

        <main className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Unit 1: Karl Popper: Science, Conjectures, and Refutations</h1>
                <div className="flex items-center mt-2">
                <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm text-gray-600">Philosophy of Science Module</span>
                </div>
            </header>

            <main>
                <section className="mb-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Distinguishing Science from Pseudo-Science</h2>
                <p className="text-gray-700 mb-4">
                    Karl Popper's philosophical inquiry into the nature of science arose in 1919 when he sought a criterion to differentiate scientific theories from pseudo-scientific ones. His main concern was not about the truth or acceptability of a theory but whether it adhered to a genuinely empirical method.
                </p>
                <p className="text-gray-700">
                    The widely accepted view at the time was that science followed an inductive method, deriving general principles from observations. However, Popper was dissatisfied with this approach and sought a stricter demarcation criterion—one that could reliably separate science from non-science.
                </p>
                </section>

                <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Influences on Popper's Thought</h2>
                <p className="text-gray-700 mb-4">During his early studies, Popper encountered several major theories:</p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <h3 className="font-medium text-green-800 mb-2">Einstein's Theory of Relativity</h3>
                    <p className="text-gray-700">A physical theory with precise predictions that could be tested and potentially refuted.</p>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                    <h3 className="font-medium text-yellow-800 mb-2">Marx's Theory of History</h3>
                    <p className="text-gray-700">Interpreted historical events in a way that seemed to confirm its own framework, regardless of circumstances.</p>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 md:col-span-2">
                    <h3 className="font-medium text-yellow-800 mb-2">Freud's Psychoanalysis & Adler's Individual Psychology</h3>
                    <p className="text-gray-700">Offered explanations for human behavior that could fit any possible outcome.</p>
                    </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h3 className="font-medium text-gray-800 mb-2">Popper noticed a key difference:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Einstein's theory made risky predictions that could be tested against observations. If an experiment contradicted the theory, it would be refuted.</li>
                    <li>Marxist and psychoanalytic theories seemed to explain everything, yet nothing could disprove them. Any event could be reinterpreted to fit the theory, making them unfalsifiable.</li>
                    </ul>
                </div>
                </section>

                <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">The Problem with Unfalsifiable Theories</h2>
                <p className="text-gray-700 mb-4">
                    Popper observed that Marxism, psychoanalysis, and Adlerian psychology were regarded as scientific because they appeared to explain everything. However, their strength in always being confirmed was actually a weakness—they could not be proven wrong under any circumstances.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <p className="text-gray-700 italic">For example, Adler could explain both:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                    <li>A man drowning a child (due to inferiority feelings).</li>
                    <li>A man sacrificing himself to save a child (also due to inferiority feelings).</li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                    This flexibility meant that the theory could accommodate any scenario, but it could never be falsified—a crucial requirement for a scientific theory.
                    </p>
                </div>
                </section>

                <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Einstein's Theory as a Model of Scientific Rigor</h2>
                <p className="text-gray-700">
                    In contrast, Einstein's General Theory of Relativity provided a bold prediction about the bending of light by gravity. In 1919, Eddington's eclipse experiment confirmed this prediction, providing empirical support for Einstein's theory. However, had the observations contradicted the predictions, the theory would have been refuted—something that pseudo-sciences like psychoanalysis did not allow.
                </p>
                </section>

                <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Principles of Scientific Theories</h2>
                <p className="text-gray-700 mb-4">Popper formulated the following criteria for distinguishing science from pseudo-science:</p>
                
                <div className="space-y-4">
                    {[
                    "Confirmations are easy to find if one looks for them. Every theory can appear valid if only confirming instances are considered.",
                    "A theory must make risky predictions, which, if false, would refute the theory.",
                    "Good scientific theories prohibit certain outcomes—the more they forbid, the stronger they are.",
                    "A theory that cannot be refuted by any conceivable event is non-scientific. Scientific theories must be falsifiable.",
                    "A real test of a theory is an attempt to falsify it, not just confirm it.",
                    "Evidence should count only if it results from a genuine attempt to falsify the theory.",
                    "The use of ad hoc modifications to rescue a theory from falsification weakens its scientific status. This practice, called the \"conventionalist twist\", shields a theory from refutation at the cost of making it less scientific."
                    ].map((principle, index) => (
                    <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        </div>
                        <p className="text-gray-700">{principle}</p>
                    </div>
                    ))}
                </div>
                </section>

                <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Falsifiability as the Criterion for Science</h2>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <p className="text-gray-700">
                    Popper ultimately concluded that the scientific status of a theory is determined by its falsifiability. A theory that can be tested and potentially refuted is scientific, whereas one that can accommodate any outcome is not.
                    </p>
                </div>
                </section>

                <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Implications for Modern Science</h2>
                <p className="text-gray-700 mb-4">
                    Popper's principle of falsifiability remains a cornerstone in the philosophy of science. It is used to evaluate the scientific validity of theories in disciplines such as:
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium text-gray-800 mb-2">Physics</h3>
                    <p className="text-gray-700">Theories must make testable predictions.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium text-gray-800 mb-2">Biology</h3>
                    <p className="text-gray-700">Hypotheses must be subject to experimental falsification.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium text-gray-800 mb-2">Psychology & Social Sciences</h3>
                    <p className="text-gray-700">Theories should aim for falsifiability rather than mere explanatory power.</p>
                    </div>
                </div>
                </section>

                <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Consequences of Ad Hoc Modifications</h2>
                <p className="text-gray-700 mb-4">
                    Popper warned against modifying theories to avoid falsification. For example:
                </p>
                
                <div className="space-y-4 mb-4">
                    <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mr-3" />
                    </div>
                    <p className="text-gray-700">If a psychological theory is altered whenever an experiment contradicts it, it loses scientific credibility.</p>
                    </div>
                    
                    <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mr-3" />
                    </div>
                    <p className="text-gray-700">If an economic theory is adjusted to fit every financial crisis after it occurs, it is no longer predictive or testable.</p>
                    </div>
                </div>
                
                <p className="text-gray-700">
                    Such "rescue operations" degrade a theory's scientific status, making it less testable and thus closer to pseudo-science.
                </p>
                </section>

                <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Practice Questions</h2>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <ul className="space-y-4">
                    {[
                        "What does Popper mean by \"falsifiability\" and why is it important?",
                        "How does Einstein's theory differ from Marxist and psychoanalytic theories in terms of testability?",
                        "Why does the ability to explain all possible outcomes weaken a theory's scientific status?",
                        "How can falsifiability be applied to evaluate modern psychological theories?",
                        "What is the impact of ad hoc modifications on a theory's scientific validity?"
                    ].map((question, index) => (
                        <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                            <HelpCircle className="h-5 w-5 text-blue-500 mr-3" />
                        </div>
                        <p className="text-gray-700">{question}</p>
                        </li>
                    ))}
                    </ul>
                </div>
                </section>
            </main>

            <div className="bg-blue-100 p-6 mt-8 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Ready to Test Your Knowledge?</h2>
                <p className="text-gray-700 text-md mb-6">
                Take a short quiz to review what you've learned in Unit 1: Karl Popper: Science, Conjectures, and Refutations.
                </p>
                <button
                onClick={() => navigate("/quiz")}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                >
                Start Quiz
                </button>
            </div>

            <footer className="flex justify-between items-center pt-6 border-t border-gray-200 mt-12">
                <div className="flex items-center">
                <FileText className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Philosophy of Science Module</span>
                </div>
                <button className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                Next Lesson <ArrowRight className="h-4 w-4 ml-1" />
                </button>
            </footer>
            </div>
        </main>
    </div>
  );
};

export default PhilosophyCourseContentPage;