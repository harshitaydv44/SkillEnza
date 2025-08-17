import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import SkillCard from "../components/ui/SkillCard";
import { CATEGORIES } from "../constants";

// Mock data
const mockSkills = [
  {
    id: "1",
    name: "React Development",
    category: "Technology",
    description:
      "Learn modern React development including hooks, context, and best practices for building dynamic web applications.",
    experienceLevel: "Intermediate",
    mentorId: "1",
    mentorName: "Sarah Johnson",
    mentorImage:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=400",
  },
  {
    id: "2",
    name: "UI/UX Design",
    category: "Design",
    description:
      "Master the fundamentals of user interface and user experience design using Figma and design thinking principles.",
    experienceLevel: "Beginner",
    mentorId: "2",
    mentorName: "Emma Davis",
    mentorImage:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=400",
  },
  {
    id: "3",
    name: "Digital Marketing",
    category: "Business",
    description:
      "Learn effective digital marketing strategies including social media, content marketing, and analytics.",
    experienceLevel: "Intermediate",
    mentorId: "3",
    mentorName: "Lisa Chen",
    mentorImage:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?w=400",
  },
  {
    id: "4",
    name: "Spanish Conversation",
    category: "Languages",
    description:
      "Improve your Spanish speaking skills through engaging conversations and practical vocabulary building.",
    experienceLevel: "Beginner",
    mentorId: "4",
    mentorName: "Maria Rodriguez",
    mentorImage:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=400",
  },
  {
    id: "5",
    name: "Photography Basics",
    category: "Photography",
    description:
      "Learn the fundamentals of photography including composition, lighting, and basic editing techniques.",
    experienceLevel: "Beginner",
    mentorId: "5",
    mentorName: "Jennifer Wilson",
    mentorImage:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=400",
  },
  {
    id: "6",
    name: "Yoga & Wellness",
    category: "Fitness",
    description:
      "Discover the benefits of yoga practice with guided sessions focusing on flexibility, strength, and mindfulness.",
    experienceLevel: "Beginner",
    mentorId: "6",
    mentorName: "Amanda Green",
    mentorImage:
      "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?w=400",
  },
];

export default function DiscoverSkills() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const filteredSkills = mockSkills.filter((skill) => {
    const matchesSearch =
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.mentorName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      !selectedCategory || skill.category === selectedCategory;
    const matchesLevel =
      !selectedLevel || skill.experienceLevel === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  const handleBookSession = (skillId) => {
    console.log("Booking session for skill:", skillId);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Skills
          </h1>
          <p className="text-xl text-gray-600">
            Find the perfect mentor and start learning something new today
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search by skill name, category, or mentor"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">All Categories</option>
                {CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience Level
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Session Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">All Types</option>
                <option value="video">Video</option>
                <option value="audio">Audio Only</option>
              </select>
            </div>

            {/* Apply Filters Button */}
            <div className="flex items-end">
              <button className="w-full flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200">
                <Filter size={16} className="mr-2" />
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredSkills.length} of {mockSkills.length} skills
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              onBookSession={handleBookSession}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No skills found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters to find more skills.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
