import React from 'react';
import { format, subDays, isSameDay } from 'date-fns';

export default function HeatmapCalendar({ data }) {
  const today = new Date();
  const weeks = 26; // Show 6 months
  const days = weeks * 7;

  const getDayData = (date) => {
    return data.find((d) => isSameDay(new Date(d.date), date));
  };

  const getIntensity = (activities) => {
    if (activities === 0) return 'bg-gray-100';
    if (activities <= 2) return 'bg-green-200';
    if (activities <= 4) return 'bg-green-400';
    if (activities <= 6) return 'bg-green-600';
    return 'bg-green-800';
  };

  const renderWeek = (weekStart) => {
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      const dayData = getDayData(date);
      const activities = dayData?.activities || 0;

      weekDays.push(
        <div
          key={date.toISOString()}
          className={`w-3 h-3 rounded-sm ${getIntensity(activities)} border border-gray-200`}
          title={`${format(date, 'MMM d, yyyy')}: ${activities} activities`}
        />
      );
    }
    return weekDays;
  };

  const renderWeeks = () => {
    const weeksArr = [];
    for (let i = 25; i >= 0; i--) {
      const weekStart = subDays(today, i * 7);
      weeksArr.push(
        <div key={i} className="flex flex-col gap-1">
          {renderWeek(weekStart)}
        </div>
      );
    }
    return weeksArr;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Activity Streak</h3>
      <div className="flex gap-1 overflow-x-auto">
        {renderWeeks()}
      </div>
      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-gray-100 rounded-sm border"></div>
          <div className="w-3 h-3 bg-green-200 rounded-sm border"></div>
          <div className="w-3 h-3 bg-green-400 rounded-sm border"></div>
          <div className="w-3 h-3 bg-green-600 rounded-sm border"></div>
          <div className="w-3 h-3 bg-green-800 rounded-sm border"></div>
        </div>
        <span>More</span>
      </div>
    </div>
  );
}
