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
      { grade: "D", min: 2.47, max: 2.96 },
      { grade: "E", min: 1.97, max: 2.46 },
      { grade: "F", min: 1.47, max: 1.96 },
      { grade: "U", min: 0, max: 1.46 },
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
      { grade: "A*", min: 6.26, max: 7 },
      { grade: "A", min: 5.56, max: 6.25 },
      { grade: "B", min: 4.86, max: 5.55 },
      { grade: "C", min: 4.16, max: 4.85 },
      { grade: "D", min: 3.46, max: 4.15 },
      { grade: "E", min: 2.76, max: 3.45 },
      { grade: "F", min: 2.06, max: 2.75 },
      { grade: "U", min: 0, max: 2.05 },
    ],
    8: [
      { grade: "A*", min: 7.16, max: 8 },
      { grade: "A", min: 6.36, max: 7.15 },
      { grade: "B", min: 5.56, max: 6.35 },
      { grade: "C", min: 4.76, max: 5.55 },
      { grade: "D", min: 3.96, max: 4.75 },
      { grade: "E", min: 3.16, max: 3.95 },
      { grade: "F", min: 2.36, max: 3.15 },
      { grade: "U", min: 0, max: 2.35 },
    ],
    9: [
      { grade: "A*", min: 8.05, max: 9 },
      { grade: "A", min: 7.16, max: 8.04 },
      { grade: "B", min: 6.25, max: 7.15 },
      { grade: "C", min: 5.35, max: 6.24 },
      { grade: "D", min: 4.45, max: 5.34 },
      { grade: "E", min: 3.55, max: 4.44 },
      { grade: "F", min: 2.65, max: 3.54 },
      { grade: "U", min: 0, max: 2.64 },
    ],
    10: [
      { grade: "A*", min: 8.95, max: 10 },
      { grade: "A", min: 7.95, max: 8.94 },
      { grade: "B", min: 6.95, max: 7.94 },
      { grade: "C", min: 5.95, max: 6.94 },
      { grade: "D", min: 4.95, max: 5.94 },
      { grade: "E", min: 3.95, max: 4.94 },
      { grade: "F", min: 2.95, max: 3.94 },
      { grade: "U", min: 0, max: 2.94 },
    ],
    11: [
      { grade: "A*", min: 9.84, max: 11 },
      { grade: "A", min: 8.74, max: 9.83 },
      { grade: "B", min: 7.64, max: 8.73 },
      { grade: "C", min: 6.54, max: 7.63 },
      { grade: "D", min: 5.44, max: 6.53 },
      { grade: "E", min: 4.34, max: 5.43 },
      { grade: "F", min: 3.24, max: 4.33 },
      { grade: "U", min: 0, max: 3.23 },
    ],
    12: [
      { grade: "A*", min: 10.74, max: 12 },
      { grade: "A", min: 9.54, max: 10.73 },
      { grade: "B", min: 8.34, max: 9.53 },
      { grade: "C", min: 7.14, max: 8.33 },
      { grade: "D", min: 5.94, max: 7.13 },
      { grade: "E", min: 4.74, max: 5.93 },
      { grade: "F", min: 3.54, max: 4.73 },
      { grade: "U", min: 0, max: 3.53 },
    ],
    13: [
      { grade: "A*", min: 11.63, max: 13 },
      { grade: "A", min: 10.33, max: 11.62 },
      { grade: "B", min: 9.03, max: 10.32 },
      { grade: "C", min: 7.73, max: 9.02 },
      { grade: "D", min: 6.43, max: 7.72 },
      { grade: "E", min: 5.13, max: 6.42 },
      { grade: "F", min: 3.83, max: 5.12 },
      { grade: "U", min: 0, max: 3.82 },
    ],
    14: [
      { grade: "A*", min: 12.53, max: 14 },
      { grade: "A", min: 11.13, max: 12.52 },
      { grade: "B", min: 9.73, max: 11.12 },
      { grade: "C", min: 8.33, max: 9.72 },
      { grade: "D", min: 6.93, max: 8.32 },
      { grade: "E", min: 5.53, max: 6.92 },
      { grade: "F", min: 4.13, max: 5.52 },
      { grade: "U", min: 0, max: 4.12 },
    ],
    15: [
      { grade: "A*", min: 13.42, max: 15 },
      { grade: "A", min: 11.92, max: 13.41 },
      { grade: "B", min: 10.42, max: 11.91 },
      { grade: "C", min: 8.92, max: 10.41 },
      { grade: "D", min: 7.42, max: 8.91 },
      { grade: "E", min: 5.92, max: 7.41 },
      { grade: "F", min: 5.42, max: 5.91 },
      { grade: "U", min: 0, max: 4.41 },
    ],
    16: [
      { grade: "A*", min: 14.32, max: 16 },
      { grade: "A", min: 12.72, max: 14.31 },
      { grade: "B", min: 11.12, max: 12.71 },
      { grade: "C", min: 9.52, max: 11.11 },
      { grade: "D", min: 7.92, max: 9.51 },
      { grade: "E", min: 6.32, max: 7.91 },
      { grade: "F", min: 4.72, max: 6.31 },
      { grade: "U", min: 0, max: 4.71 },
    ],
    17: [
      { grade: "A*", min: 15.21, max: 17 },
      { grade: "A", min: 13.51, max: 15.20 },
      { grade: "B", min: 11.81, max: 13.50 },
      { grade: "C", min: 10.11, max: 11.80 },
      { grade: "D", min: 8.41, max: 10.10 },
      { grade: "E", min: 6.71, max: 8.40 },
      { grade: "F", min: 5.01, max: 6.70 },
      { grade: "U", min: 0, max: 5 },
    ],
    18: [
      { grade: "A*", min: 16.11, max: 18 },
      { grade: "A", min: 14.31, max: 16.10 },
      { grade: "B", min: 12.51, max: 14.30 },
      { grade: "C", min: 10.71, max: 12.50 },
      { grade: "D", min: 8.91, max: 10.70 },
      { grade: "E", min: 7.11, max: 8.90 },
      { grade: "F", min: 5.31, max: 7.10 },
      { grade: "U", min: 0, max: 5.30 },
    ],
    19: [
      { grade: "A*", min: 17, max: 19 },
      { grade: "A", min: 15.10, max: 16.99 },
      { grade: "B", min: 13.2, max: 15.09 },
      { grade: "C", min: 11.30, max: 13.19 },
      { grade: "D", min: 9.40, max: 11.29 },
      { grade: "E", min: 7.50, max: 9.39 },
      { grade: "F", min: 5.60, max: 7.49 },
      { grade: "U", min: 0, max: 5.59 },
    ],
    20: [
      { grade: "A*", min: 17.9, max: 20 },
      { grade: "A", min: 15.91, max: 17.89 },
      { grade: "B", min: 13.9, max: 15.89 },
      { grade: "C", min: 11.09, max: 13.89 },
      { grade: "D", min: 9.9, max: 11.89 },
      { grade: "E", min: 7.9, max: 9.89 },
      { grade: "F", min: 5.9, max: 7.89 },
      { grade: "U", min: 0, max: 5.89 },
    ],
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
    onChange={(e) => setTotal(parseInt(e.target.value, 10))} // Changed to parseInt
    step="1" // Allows only integers
    min="0"  // Prevents negative numbers
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
