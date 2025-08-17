// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-white to-purple-50">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
        Your <span className="text-purple-600">Skill</span> is Currency
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        Join a community of empowered women where you can teach skills, earn
        SkillCoins, and learn anything you desire. Your expertise has value.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <a
          href="#signup"
          className="px-6 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
        >
          Sign Up →
        </a>
        <a
          href="#learn-more"
          className="px-6 py-3 rounded-full border border-purple-600 text-purple-600 font-medium hover:bg-purple-50 transition"
        >
          Learn More
        </a>
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-3xl font-bold text-purple-600">10,000+</h3>
          <p className="mt-2 text-gray-700">Women</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-purple-600">500+</h3>
          <p className="mt-2 text-gray-700">Skills</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-purple-600">50,000+</h3>
          <p className="mt-2 text-gray-700">Exchanges</p>
        </div>
      </div>
    </section>
  );
}
