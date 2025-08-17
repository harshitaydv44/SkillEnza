import React from 'react';
import { Calendar, TrendingUp, Award, Clock } from 'lucide-react';
import HeatmapCalendar from '../components/ui/HeatmapCalendar';

// Mock data for the last 6 months
const generateMockData = () => {
  const data = [];
  const today = new Date();

  for (let i = 0; i < 180; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    // Random activity level (0-8 activities per day)
    const activities = Math.random() > 0.7 ? Math.floor(Math.random() * 8) : 0;

    data.push({
      date: date.toISOString().split('T')[0],
      activities
    });
  }

  return data.reverse();
};

export default function StreakTracker() {
  const streakData = generateMockData();
  const currentStreak = 12;
  const longestStreak = 45;
  const totalHoursTaught = 127;
  const totalHoursLearned = 89;

  const stats = [
    {
      icon: TrendingUp,
      title: 'Current Streak',
      value: `${currentStreak} days`,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Award,
      title: 'Longest Streak',
      value: `${longestStreak} days`,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Clock,
      title: 'Hours Taught',
      value: `${totalHoursTaught} hrs`,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Clock,
      title: 'Hours Learned',
      value: `${totalHoursLearned} hrs`,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Streak Tracker</h1>
          <p className="text-xl text-gray-600">Track your learning journey and maintain consistency</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <stat.icon size={24} className={stat.color} />
              </div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Streak Alert */}
        {currentStreak >= 7 && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6 mb-8">
            <div className="flex items-center">
              <Award size={32} className="mr-4" />
              <div>
                <h3 className="text-xl font-bold mb-2">🔥 You're on fire!</h3>
                <p>You've maintained a {currentStreak}-day streak! Keep up the amazing work and continue building your skills.</p>
              </div>
            </div>
          </div>
        )}

        {/* Heatmap Calendar */}
        <HeatmapCalendar data={streakData} />

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>

          <div className="space-y-4">
            <div className="flex items-center p-4 bg-purple-50 rounded-lg">
              <div className="w-2 h-2 bg-purple-600 rounded-full mr-4"></div>
              <div className="flex-1">
                <p className="text-gray-900">Taught <span className="font-semibold">React Development</span> session</p>
                <p className="text-sm text-gray-500">Today, 2:00 PM - Earned 2 SkillCoins</p>
              </div>
              <div className="text-purple-600 font-semibold">+2 🪙</div>
            </div>

            <div className="flex items-center p-4 bg-pink-50 rounded-lg">
              <div className="w-2 h-2 bg-pink-600 rounded-full mr-4"></div>
              <div className="flex-1">
                <p className="text-gray-900">Learned <span className="font-semibold">Spanish Conversation</span></p>
                <p className="text-sm text-gray-500">Yesterday, 10:00 AM - Spent 1 SkillCoin</p>
              </div>
              <div className="text-pink-600 font-semibold">-1 🪙</div>
            </div>

            <div className="flex items-center p-4 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
              <div className="flex-1">
                <p className="text-gray-900">Taught <span className="font-semibold">Photography Basics</span> session</p>
                <p className="text-sm text-gray-500">2 days ago, 4:00 PM - Earned 1 SkillCoin</p>
              </div>
              <div className="text-blue-600 font-semibold">+1 🪙</div>
            </div>
          </div>
        </div>

        {/* Streak Tips */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl p-6 mt-8 text-white">
          <h3 className="text-xl font-bold mb-4">💡 Streak Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Maintain Your Streak:</h4>
              <ul className="space-y-1">
                <li>• Schedule regular teaching sessions</li>
                <li>• Book learning sessions in advance</li>
                <li>• Set daily reminders</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Maximize Your Impact:</h4>
              <ul className="space-y-1">
                <li>• Teach skills you're passionate about</li>
                <li>• Learn skills that complement your goals</li>
                <li>• Engage actively in every session</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
