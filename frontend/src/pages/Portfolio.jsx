import React, { useState } from "react";
import { Star, Calendar, Clock, User, Award, ExternalLink } from "lucide-react";
import Button from "../components/ui/Button";

// Mock data
const mockSessions = [
  {
    id: "1",
    skillId: "1",
    skillName: "React Development",
    mentorId: "current-user",
    mentorName: "You",
    learnerId: "2",
    learnerName: "Emma Davis",
    date: new Date("2024-12-15"),
    duration: 2,
    type: "video",
    status: "completed",
    feedback: {
      rating: 5,
      comment:
        "Excellent teacher! Very clear explanations and great examples.",
    },
  },
  {
    id: "2",
    skillId: "2",
    skillName: "Spanish Conversation",
    mentorId: "3",
    mentorName: "Maria Rodriguez",
    learnerId: "current-user",
    learnerName: "You",
    date: new Date("2024-12-14"),
    duration: 1,
    type: "video",
    status: "completed",
    feedback: {
      rating: 5,
      comment:
        "Great conversation practice! Very patient and encouraging.",
    },
  },
  {
    id: "3",
    skillId: "3",
    skillName: "UI/UX Design",
    mentorId: "4",
    mentorName: "Jennifer Wilson",
    learnerId: "current-user",
    learnerName: "You",
    date: new Date("2024-12-12"),
    duration: 1.5,
    type: "video",
    status: "completed",
    feedback: {
      rating: 4,
      comment:
        "Good introduction to design principles. Would love more hands-on practice.",
    },
  },
  {
    id: "4",
    skillId: "4",
    skillName: "Digital Photography",
    mentorId: "current-user",
    mentorName: "You",
    learnerId: "5",
    learnerName: "Lisa Chen",
    date: new Date("2024-12-10"),
    duration: 1,
    type: "video",
    status: "completed",
    feedback: {
      rating: 5,
      comment:
        "Amazing session! Learned so much about composition and lighting.",
    },
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredSessions = mockSessions.filter((session) => {
    if (filter === "taught") return session.mentorName === "You";
    if (filter === "learned") return session.learnerName === "You";
    return true;
  });

  const taughtSessions = mockSessions.filter((s) => s.mentorName === "You");
  const learnedSessions = mockSessions.filter((s) => s.learnerName === "You");
  const averageRating =
    mockSessions.reduce(
      (acc, session) => acc + (session.feedback?.rating || 0),
      0
    ) / mockSessions.length;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Portfolio
          </h1>
          <p className="text-xl text-gray-600">
            Your learning journey and teaching impact
          </p>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <Award size={24} className="text-purple-600 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {taughtSessions.length}
                </p>
                <p className="text-sm text-gray-500">Sessions Taught</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <User size={24} className="text-pink-600 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {learnedSessions.length}
                </p>
                <p className="text-sm text-gray-500">Sessions Learned</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <Star size={24} className="text-yellow-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {averageRating.toFixed(1)}
                </p>
                <p className="text-sm text-gray-500">Average Rating</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <Clock size={24} className="text-blue-600 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {mockSessions.reduce((acc, session) => acc + session.duration, 0)}
                </p>
                <p className="text-sm text-gray-500">Total Hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Public Portfolio Link */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl p-6 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Share Your Portfolio</h3>
              <p>Show your skills and experience to potential learners</p>
            </div>
            <Button
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-50"
            >
              <ExternalLink size={16} className="mr-2" />
              View Public Profile
            </Button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setFilter("all")}
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                filter === "all"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              All Sessions ({mockSessions.length})
            </button>
            <button
              onClick={() => setFilter("taught")}
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                filter === "taught"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              Taught ({taughtSessions.length})
            </button>
            <button
              onClick={() => setFilter("learned")}
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                filter === "learned"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              Learned ({learnedSessions.length})
            </button>
          </div>
        </div>

        {/* Sessions List */}
        <div className="space-y-6">
          {filteredSessions.map((session) => (
            <div
              key={session.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {session.skillName}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <User size={16} className="mr-2" />
                        <span>
                          {session.mentorName === "You"
                            ? `Taught to ${session.learnerName}`
                            : `Learned from ${session.mentorName}`}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        <span>{session.date.toLocaleDateString()}</span>
                        <Clock size={16} className="ml-4 mr-2" />
                        <span>{session.duration}h</span>
                        <span
                          className={`ml-4 px-2 py-1 rounded-full text-xs font-medium ${
                            session.type === "video"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {session.type === "video" ? "Video Call" : "Audio Only"}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        session.mentorName === "You"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-pink-100 text-pink-800"
                      }`}
                    >
                      {session.mentorName === "You" ? "Taught" : "Learned"}
                    </span>
                  </div>

                  {session.feedback && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 mr-2">
                          Rating:
                        </span>
                        <div className="flex items-center">
                          {renderStars(session.feedback.rating)}
                          <span className="text-sm text-gray-600 ml-2">
                            ({session.feedback.rating}/5)
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm italic">
                        "{session.feedback.comment}"
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-center items-center lg:border-l lg:pl-6">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 ${
                      session.mentorName === "You"
                        ? "bg-gradient-to-r from-purple-500 to-purple-600"
                        : "bg-gradient-to-r from-pink-500 to-pink-600"
                    }`}
                  >
                    {session.mentorName === "You" ? "+" : "-"}
                    {session.duration}
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    {session.mentorName === "You"
                      ? `Earned ${session.duration} SkillCoins`
                      : `Spent ${session.duration} SkillCoins`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSessions.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <Award size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No sessions yet
            </h3>
            <p className="text-gray-600 mb-6">
              Start teaching or learning to build your portfolio!
            </p>
            <Button>
              <ExternalLink size={16} className="mr-2" />
              Discover Skills
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

