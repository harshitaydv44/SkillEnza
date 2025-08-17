import React from 'react';
import { ArrowRight, UserPlus, Coins, Brain, Shield, Users, Target } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-25 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Time</span> is Currency
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join a community of empowered women where you can teach skills, earn SkillCoins, and learn anything you desire. Your expertise has value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Sign Up <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="mt-16 relative">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl p-8 text-white text-center shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto flex items-center justify-center">
                    <Users size={32} />
                  </div>
                  <h3 className="text-lg font-semibold">10,000+ Women</h3>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto flex items-center justify-center">
                    <Brain size={32} />
                  </div>
                  <h3 className="text-lg font-semibold">500+ Skills</h3>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto flex items-center justify-center">
                    <Coins size={32} />
                  </div>
                  <h3 className="text-lg font-semibold">50,000+ Exchanges</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Three simple steps to start your journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white">
                <UserPlus size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Sign Up</h3>
              <p className="text-gray-600">Create your profile and tell us about the skills you have and want to learn.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white">
                <Brain size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Teach or Learn</h3>
              <p className="text-gray-600">Share your expertise or book sessions with other amazing women in our community.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white">
                <Coins size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Earn/Spend SkillCoins</h3>
              <p className="text-gray-600">Build your SkillCoin balance by teaching and use them to learn new skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why SkillEnza Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why SkillEnza?</h2>
            <p className="text-xl text-gray-600">Join a community built for women, by women</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-6 flex items-center justify-center text-white">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Safe Women-Only Community</h3>
              <p className="text-gray-600">A secure, supportive environment where women can learn and grow together without barriers.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-6 flex items-center justify-center text-white">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Equal Value for All Skills</h3>
              <p className="text-gray-600">Every skill is valued equally. Whether it's coding or cooking, your time is worth the same.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-6 flex items-center justify-center text-white">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Skill Matching</h3>
              <p className="text-gray-600">Our smart algorithm matches you with the perfect learning partners based on your goals and experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Skills into Currency?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of women who are already building their futures through skill exchange.
          </p>
          <Link to="/signup">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-50"
            >
              Get Started Today <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
