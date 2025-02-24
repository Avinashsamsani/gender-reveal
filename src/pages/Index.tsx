
import { useState } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import { Heart, Star, Sparkles } from 'lucide-react';

const Index = () => {
  const [revealed, setRevealed] = useState(false);
  const revealDate = new Date('2024-05-01T18:00:00');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#9b87f5] via-[#7E69AB] to-[#6E59A5] relative overflow-hidden">
      {/* Peacock Feather Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at center, #D946EF 2px, transparent 2px), 
                           radial-gradient(circle at center, #8B5CF6 2px, transparent 2px)`,
          backgroundSize: '60px 60px, 30px 30px',
          backgroundPosition: '0 0, 15px 15px'
        }}
      />
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-reveal">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Star className="w-5 h-5 text-yellow-300 animate-float" />
            <span className="font-inter text-sm uppercase tracking-wider text-white/80">Divine Revelation</span>
            <Star className="w-5 h-5 text-yellow-300 animate-float" />
          </div>
          <h1 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
            Baby Krishna
            <br />
            Gender Reveal
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Join us in celebrating this divine moment as we discover whether our little Krishna will be a prince or princess
          </p>
        </div>

        {/* Countdown Section */}
        <div className="mb-16 animate-reveal" style={{ animationDelay: '0.2s' }}>
          <div className="text-center mb-8">
            <h2 className="font-cormorant text-2xl md:text-3xl font-semibold mb-2 text-white">
              The Divine Revelation Begins In
            </h2>
          </div>
          <CountdownTimer targetDate={revealDate} />
        </div>

        {/* Enhanced Reveal Button */}
        <div className="text-center mb-16 animate-reveal" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => setRevealed(true)}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-inter font-medium tracking-wide text-white rounded-full overflow-hidden transition-all duration-500 transform hover:scale-105 focus:outline-none"
          >
            {/* Animated gradient background */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#D946EF] via-[#8B5CF6] to-[#D946EF] background-animate"></span>
            
            {/* Peacock feather pattern overlay */}
            <span className="absolute inset-0 w-full h-full opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at center, white 1px, transparent 1px)`,
                    backgroundSize: '10px 10px'
                  }}></span>
            
            {/* Button content */}
            <span className="relative flex items-center text-lg">
              <Heart className="w-6 h-6 mr-3 animate-float" />
              Reveal the Divine Secret
              <Sparkles className="w-6 h-6 ml-3" />
            </span>
          </button>
        </div>

        {/* Enhanced Gender Reveal Modal */}
        {revealed && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
            <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-4 animate-reveal shadow-[0_0_100px_rgba(255,215,0,0.3)]">
              {/* Lighting Effects */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 animate-pulse opacity-30"
                     style={{
                       backgroundImage: `radial-gradient(circle at 30% 30%, #FFD700 0%, transparent 50%),
                                      radial-gradient(circle at 70% 70%, #FFA500 0%, transparent 50%)`,
                     }}></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <img
                    src="/lovable-uploads/6402d869-30b1-4fc6-9fa1-0eee3588cbdf.png"
                    alt="Baby Krishna"
                    className="w-64 h-64 object-contain animate-float rounded-full shadow-[0_0_30px_rgba(255,215,0,0.3)]"
                  />
                </div>
                
                <div className="space-y-4">
                  <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    It's a Baby Boy!
                  </h2>
                  <p className="font-inter text-xl text-white/90 mb-6">
                    A divine prince is blessing our family!
                  </p>
                  
                  {/* Decorative Elements */}
                  <div className="flex justify-center space-x-4">
                    <Sparkles className="w-8 h-8 text-yellow-300 animate-float" />
                    <Star className="w-8 h-8 text-yellow-300 animate-float" style={{ animationDelay: "0.2s" }} />
                    <Sparkles className="w-8 h-8 text-yellow-300 animate-float" style={{ animationDelay: "0.4s" }} />
                  </div>
                  
                  <button
                    onClick={() => setRevealed(false)}
                    className="mt-8 font-inter px-8 py-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
