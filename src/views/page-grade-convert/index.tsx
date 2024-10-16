"use client";
import Modal from "@/components/modal";
import { useState } from "react";
import { MdOutlineRefresh } from "react-icons/md";

interface GradeRange {
  grade: string;
  min: number;
  max: number;
}

const Home = () => {
  const [score, setScore] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [grade, setGrade] = useState<string | null>(null);

  // Grade ranges for different total scores
  const gradeScales: { [key: number]: GradeRange[] } = {
    5: [
      { grade: "A*", min: 4.47, max: 5 },
      { grade: "A", min: 3.97, max: 4.46 },
      { grade: "B", min: 3.47, max: 3.96 },
      { grade: "C", min: 2.97, max: 3.46 },
      { grade: "D", min: 1.97, max: 2.96 },
      { grade: "E", min: 1.47, max: 1.96 },
      { grade: "F", min: 0.97, max: 1.46 },
      { grade: "U", min: 0, max: 0.96 },
    ],
    6: [
      { grade: "A*", min: 5.37, max: 6 },
      { grade: "A", min: 4.77, max: 5.36 },
      { grade: "B", min: 4.17, max: 4.76 },
      { grade: "C", min: 3.57, max: 4.16 },
      { grade: "D", min: 2.97, max: 3.56 },
      { grade: "E", min: 2.37, max: 2.96 },
      { grade: "F", min: 1.77, max: 2.36 },
      { grade: "U", min: 0, max: 1.76 },
    ],
    7: [
      { grade: "A*", min: 6.27, max: 7 },
      { grade: "A", min: 5.56, max: 6.26 },
      { grade: "B", min: 4.86, max: 5.55 },
      { grade: "C", min: 4.16, max: 4.85 },
      { grade: "D", min: 3.46, max: 4.15 },
      { grade: "E", min: 2.76, max: 3.45 },
      { grade: "F", min: 2.06, max: 2.75 },
      { grade: "U", min: 0, max: 2.05 },
    ],
    // Add more total scales here if needed
  };

  const calculateGrade = (score: number, total: number): string => {
    const scale = gradeScales[total];
    if (!scale) return "Invalid total";

    for (const range of scale) {
      if (score >= range.min && score <= range.max) {
        return range.grade;
      }
    }

    return "Invalid score";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (score !== null && total !== null) {
      const result = calculateGrade(score, total);
      setGrade(result);
    }
  };
  const handleRefresh = () => {
    setScore(null); // Clear the marks field
  }
  return (
    <div className="min-h-screen">
      <div className="flex items-start justify-center bg-gray-100 p-4 mt-6">
        <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Grade Calculator
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="total"
                className="block text-sm font-medium text-gray-700"
              >
                Total Mark:
              </label>
              <input
                type="number"
                id="total"
                className="bg-white mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary appearance-none text-black"
                value={total !== null ? total : ""}
                onChange={(e) => setTotal(parseFloat(e.target.value))}
                required
              />
            </div>
            <div>
              <label
                htmlFor="score"
                className="block text-sm font-medium text-gray-700"
              >
                Student's Score:
              </label>
              <input
                type="number"
                id="score"
                className="bg-white mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary appearance-none text-black"
                value={score !== null ? score : ""}
                onChange={(e) => setScore(parseFloat(e.target.value))}
                required
              />
            </div>
            <div className="flex justify-center gap-3">
              <button
                type="submit"
                className="w-[70%] bg-primary/90 text-white py-2 px-4 rounded-md shadow-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              >
                Calculate Grade
              </button>
              <button
                type="button" // Changed to type="button" to prevent form submission
                onClick={handleRefresh} // Added click handler to clear the marks field
                className="group flex justify-center items-center gap-1 w-[30%] bg-slate-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              >
                <span className="animate-none group-hover:animate-spin">
                  <MdOutlineRefresh className="text-lg" />
                </span>
                Refresh
              </button>
            </div>
          </form>
          {grade && (
            <div className="mt-6 text-center">
              <h2 className="text-lg font-bold text-gray-800">
                Student's' Grade: {grade}
              </h2>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center">
          <Modal />
        </div>
    </div>
  );
};

export default Home;
