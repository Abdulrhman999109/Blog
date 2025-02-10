import { AddArticels } from "../action";
import SubmitButton from "@/app/components/SubmitButton";

export default function CreateForm() {
  return (
    <form
      action={AddArticels}
      className="w-full max-w-2xl mx-auto bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 mt-10 space-y-6"
    >
      <div className="flex flex-col">
        <label className="text-yellow-50 text-lg font-semibold mb-2">Title:</label>
        <input
          required
          type="text"
          name="title"
          className="w-1/2 p-3 bg-gray-800 text-yellow-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition placeholder-gray-500"
          placeholder="Enter your title"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-yellow-50 text-lg font-semibold mb-2">Content:</label>
        <textarea
          required
          name="content"
          className="w-full h-64 p-3 bg-gray-800 text-yellow-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition placeholder-gray-500"
          placeholder="Write your article content here"
        />
      </div>

      <div className="text-right">
        <SubmitButton />
      </div>
    </form>
  );
}