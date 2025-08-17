import React from 'react';
import { Clock, Star } from 'lucide-react';
import Button from './Button';

export default function SkillCard({ skill, onBookSession }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold text-lg">
          {skill.mentorName.charAt(0)}
        </div>
        <div className="ml-3">
          <h3 className="font-semibold text-gray-800">{skill.mentorName}</h3>
          <p className="text-sm text-gray-500">{skill.category}</p>
        </div>
      </div>

      <h4 className="text-lg font-bold text-gray-800 mb-2">{skill.name}</h4>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{skill.description}</p>

      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
          {skill.experienceLevel}
        </span>
        <div className="flex items-center text-yellow-500">
          <Star size={16} className="fill-current" />
          <span className="text-sm text-gray-600 ml-1">4.8</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center text-purple-600">
          <Clock size={16} />
          <span className="text-sm ml-1">1 SkillCoin/hour</span>
        </div>
        <Button
          size="sm"
          onClick={() => onBookSession(skill.id)}
          className="px-4 py-2"
        >
          Book Session
        </Button>
      </div>
    </div>
  );
}
