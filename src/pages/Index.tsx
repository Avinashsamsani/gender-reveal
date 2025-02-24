import { useState } from 'react';
import { Baby, Heart, Star, Sparkles } from 'lucide-react';

const Index = () => {
  const [revealed, setRevealed] = useState(false);

  const milestones = [
    { title: "First Breath", icon: <Baby className="w-8 h-8 text-rose-400 animate-float" /> },
    { title: "First Cuddle", icon: <Heart className="w-8 h-8 text-pink-400 animate-float" /> },
    { title: "First Celebration", icon: <Star className="w-8 h-8 text-yellow-400 animate-float" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-baby-peach via-baby-cream to-baby-mint relative overflow-hidden">
      {/* Decorative background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at center, #FDE1D3 2px, transparent 2px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Baby className="w-6 h-6 text-rose-400 animate-float" />
            <span className="font-medium text-sm uppercase tracking-wider text-gray-600">Baby's First Steps</span>
            <Baby className="w-6 h-6 text-rose-400 animate-float" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-800">
            Precious
            <br />
            Moments
          </h1>
          
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-baby-rose via-baby-peach to-baby-cream rounded-full" />
          </div>
        </div>

        {/* Milestones Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.title}
              className="group bg-white/30 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/40 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 flex justify-center">
                {milestone.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.title}</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-baby-rose to-baby-peach mx-auto rounded-full" />
            </div>
          ))}
        </div>

        {/* Reveal Button Section */}
        <div className="text-center mb-20">
          <button
            onClick={() => setRevealed(true)}
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-white rounded-full overflow-hidden transition-all duration-500 transform hover:scale-105 focus:outline-none bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 shadow-lg"
          >
            <span className="relative flex items-center space-x-2">
              <Heart className="w-6 h-6 animate-float" />
              <span>Meet Our Little Angel</span>
              <Sparkles className="w-6 h-6 animate-float" style={{ animationDelay: '0.2s' }} />
            </span>
          </button>
        </div>

        {/* Details Section
        <div className="max-w-4xl mx-auto bg-white/30 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-baby-peach to-baby-cream flex items-center justify-center">
                <Star className="w-16 h-16 text-yellow-400 animate-float opacity-50" />
              </div>
            </div>
            
            <div className="space-y-6 text-center md:text-left">
              <div className="flex flex-col gap-3">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Parents</span>
                <h3 className="text-2xl font-semibold text-gray-800">Mouni & Family</h3>
              </div>
              
              <div className="flex justify-center md:justify-start space-x-4">
                <Star className="w-6 h-6 text-yellow-400 animate-float" />
                <Heart className="w-6 h-6 text-rose-400 animate-float" style={{ animationDelay: '0.2s' }} />
                <Sparkles className="w-6 h-6 text-blue-400 animate-float" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        </div> */}

 {/* Enhanced Gender Reveal Modal */}
 {revealed && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
            <div className="bg-gradient-to-br from-[#A7D3C4] to-[#96C8DA] rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-4 animate-reveal shadow-[0_0_100px_rgba(255,215,0,0.3)]">
              {/* Lighting Effects */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 animate-pulse opacity-30"
                     style={{
                      backgroundImage: `radial-gradient(circle at 30% 30%, #D6E6F2 0%, transparent 50%),
                      radial-gradient(circle at 70% 70%, #AFCBEB 0%, transparent 50%)`,
    
                     }}></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <img
                    src="/baby krishna.jpeg"
                    alt="Baby Krishna"
                    className="w-64 h-64 object-contain animate-float rounded-full shadow-[0_0_30px_rgba(255,215,0,0.3)]"
                  />
                </div>
                
                <div className="space-y-4">
                  <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    It's a Baby Boy!❤️
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