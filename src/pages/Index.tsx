
import { useState } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import { Heart, Star, Sparkles } from 'lucide-react';

const Index = () => {
  const [revealed, setRevealed] = useState(false);
  const revealDate = new Date('2024-05-01T18:00:00'); // Adjust this date

  return (
    <div className="min-h-screen bg-gradient-to-b from-krishna-yellow to-krishna-purple">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-reveal">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Star className="w-5 h-5 text-yellow-600 animate-float" />
            <span className="font-inter text-sm uppercase tracking-wider text-gray-600">Divine Revelation</span>
            <Star className="w-5 h-5 text-yellow-600 animate-float" />
          </div>
          <h1 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Baby Krishna
            <br />
            Gender Reveal
          </h1>
          <p className="font-inter text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Join us in celebrating this divine moment as we discover whether our little Krishna will be a prince or princess
          </p>
        </div>

        {/* Countdown Section */}
        <div className="mb-16 animate-reveal" style={{ animationDelay: '0.2s' }}>
          <div className="text-center mb-8">
            <h2 className="font-cormorant text-2xl md:text-3xl font-semibold mb-2">The Divine Revelation Begins In</h2>
          </div>
          <CountdownTimer targetDate={revealDate} />
        </div>

        {/* Reveal Button */}
        <div className="text-center mb-16 animate-reveal" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => setRevealed(true)}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-inter font-medium tracking-wide text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              Reveal the Divine Secret
            </span>
          </button>
        </div>

        {/* Gender Reveal Animation */}
        {revealed && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
            <div className="bg-white rounded-lg p-8 md:p-12 text-center max-w-lg mx-4 animate-reveal">
              <Sparkles className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">
                It's a Girl!
              </h2>
              <p className="font-inter text-gray-600 mb-6">
                A divine princess is joining our family!
              </p>
              <button
                onClick={() => setRevealed(false)}
                className="font-inter px-6 py-2 bg-krishna-pink text-gray-700 rounded-full hover:bg-pink-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
