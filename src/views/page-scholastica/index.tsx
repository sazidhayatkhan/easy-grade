'use client'
import { useState } from 'react';
import { MdOutlineRefresh } from 'react-icons/md';

const ScholasticaPageUI = () => {
  const [withinMark, setWithinMark] = useState<string | number>(''); // Use empty string initially
  const [totalMark, setTotalMark] = useState<string | number>(''); // Use empty string initially
  const [marks, setMarks] = useState<string>(''); // State for user-inputted marks (comma-separated string)
  const [result, setResult] = useState<number | null>(null); // State for the calculated result

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Ensure that totalMark and withinMark are numbers before calculation
    const withinMarkNumber = typeof withinMark === 'string' ? parseFloat(withinMark) : withinMark;
    const totalMarkNumber = typeof totalMark === 'string' ? parseFloat(totalMark) : totalMark;

    // Split the marks by comma, trim spaces, convert them to numbers, and sum them up
    const marksArray = marks.split(',').map((mark) => parseFloat(mark.trim()));
    const totalMarksSum = marksArray.reduce((acc, curr) => acc + curr, 0);

    // Calculate the result as (sum of marks) / (total course mark)
    const calculatedResult = (totalMarksSum / totalMarkNumber) * withinMarkNumber;

    // Set the result in state
    setResult(calculatedResult);
  };

  // Function to handle refresh (clear marks input field)
  const handleRefresh = () => {
    setMarks(''); // Clear the marks field
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 p-4 mt-6">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Course Mark Calculator</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Within Mark Input */}
          <div>
            <label htmlFor="withinMark" className="block text-sm font-medium text-gray-700">Average Mark:</label>
            <input
              type="text" // Changed from number to text to handle empty string
              inputMode="numeric" // Hides spinner on mobile browsers
              pattern="[0-9]*" // Only allows numeric input
              id="withinMark"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary appearance-none" // added appearance-none
              value={withinMark}
              onChange={(e) => setWithinMark(e.target.value)}
              required
            />
          </div>
          
          {/* Total Course Mark Input */}
          <div>
            <label htmlFor="totalMark" className="block text-sm font-medium text-gray-700">Total Course Mark:</label>
            <input
              type="text" // Changed from number to text to handle empty string
              inputMode="numeric" // Hides spinner on mobile browsers
              pattern="[0-9]*" // Only allows numeric input
              id="totalMark"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary appearance-none" // added appearance-none
              value={totalMark}
              onChange={(e) => setTotalMark(e.target.value)}
              required
            />
          </div>

          {/* Marks Input */}
          <div>
            <label htmlFor="marks" className="block text-sm font-medium text-gray-700">Enter Marks (comma separated):</label>
            <input
              type="text"
              id="marks"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              required
            />
          </div>

          {/* Submit and Refresh Buttons */}
          <div className="flex justify-center gap-3">
            <button
              type="submit"
              className="w-[70%] bg-primary/90 text-white py-2 px-4 rounded-md shadow-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              Calculate
            </button>
            <button
              type="button"  // Changed to type="button" to prevent form submission
              onClick={handleRefresh} // Added click handler to clear the marks field
              className="group flex justify-center items-center gap-1 w-[30%] bg-slate-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              <span className='animate-none group-hover:animate-spin'><MdOutlineRefresh className='text-lg'/></span>Refresh
            </button>
          </div>
        </form>

        {/* Result */}
        {result !== null && (
          <div className="mt-6 text-center">
            <h2 className="text-lg font-bold text-gray-800">Result: {result.toFixed(2)}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScholasticaPageUI;
