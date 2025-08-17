import React, { useState } from "react";
import Button from "../components/ui/Button";

export default function MySkills() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  // Handle Add Skill
  const addSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim() === "") return;
    setSkills([...skills, newSkill]);
    setNewSkill("");
  };

  // Handle Remove Skill
  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          My Skills
        </h2>

        {/* Add Skill Form */}
        <form onSubmit={addSkill} className="flex gap-2 mb-6">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Enter a skill"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Button type="submit">Add</Button>
        </form>

        {/* Skills List */}
        {skills.length > 0 ? (
          <ul className="space-y-2">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2"
              >
                <span className="text-gray-800">{skill}</span>
                <button
                  onClick={() => removeSkill(skill)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No skills added yet.</p>
        )}
      </div>
    </div>
  );
}
