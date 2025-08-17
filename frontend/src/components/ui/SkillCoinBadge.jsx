import React from 'react';
import { Coins } from 'lucide-react';

export default function SkillCoinBadge({ balance, size = 'md', floating = false }) {
  const sizeClasses = {
    sm: 'text-sm px-3 py-1',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  const baseClasses = `inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-full shadow-lg ${sizeClasses[size]}`;
  const floatingClasses = floating
    ? 'fixed top-20 right-4 z-50 hover:scale-105 transform transition-transform duration-200'
    : '';

  return (
    <div className={`${baseClasses} ${floatingClasses}`}>
      <Coins size={iconSizes[size]} className="mr-2" />
      {balance} SkillCoins
    </div>
  );
}
