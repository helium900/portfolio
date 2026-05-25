import React, { useMemo } from 'react';

function SkyBackground({ theme }) {
  // Generate random positions and animations for stars in Dark Mode.
  // We wrap this in useMemo so that the stars do not re-position on every theme toggle or scroll update.
  const stars = useMemo(() => {
    const starCount = 70;
    const tempStars = [];
    for (let i = 0; i < starCount; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * 2 + 1; // 1px to 3px
      const duration = Math.random() * 4 + 2; // 2s to 6s
      const delay = Math.random() * 5; // 0s to 5s
      tempStars.push({ id: i, top, left, size, duration, delay });
    }
    return tempStars;
  }, []);

  const isDark = theme === 'dark';

  return (
    <div 
      className={`fixed inset-0 w-full h-full pointer-events-none z-[-10] overflow-hidden transition-all duration-1000 ${
        isDark 
          ? 'bg-gradient-to-b from-[#020617] via-[#0b1329] to-[#020617]' 
          : 'bg-gradient-to-b from-[#0ea5e9] via-[#7dd3fc] to-[#e0f2fe]'
      }`}
    >
      {/* ================= LIGHT MODE SKY ELEMENTS ================= */}
      {!isDark && (
        <div className="absolute inset-0 w-full h-full transition-opacity duration-1000 opacity-100">
          {/* Glowing Sun */}
          <div 
            className="absolute top-[20%] right-[10%] w-28 h-28 md:w-36 md:h-36 rounded-full bg-amber-400 border border-amber-300/30 animate-sun-dim select-none"
            style={{ animationDelay: '-32s' }}
          >
            {/* Sun flare outer ring */}
            <div className="absolute inset-[-10px] rounded-full bg-amber-300/20 blur-md animate-sun-dim" style={{ animationDelay: '-32s' }}></div>
          </div>

          {/* Floating Cloud 1 (Moves along top-[10%] directly crossing the sun at right-[10%]) */}
          <div 
            className="absolute top-[20%] left-0 w-64 h-16 opacity-75 blur-[3px] animate-cloud-1 select-none"
            style={{ animationDelay: '-32s' }}
          >
            <div className="absolute w-20 h-20 bg-white rounded-full top-[-30px] left-[15px]"></div>
            <div className="absolute w-28 h-28 bg-white rounded-full top-[-50px] left-[65px]"></div>
            <div className="absolute w-16 h-16 bg-white rounded-full top-[-10px] left-[145px]"></div>
            <div className="absolute w-full h-10 bg-white rounded-full bottom-0"></div>
          </div>

          {/* Floating Cloud 2 */}
          <div 
            className="absolute top-[30%] left-0 w-80 h-20 opacity-70 blur-[4px] animate-cloud-2 select-none"
            style={{ animationDelay: '-15s' }}
          >
            <div className="absolute w-24 h-24 bg-white rounded-full top-[-35px] left-[25px]"></div>
            <div className="absolute w-36 h-36 bg-white rounded-full top-[-60px] left-[85px]"></div>
            <div className="absolute w-20 h-20 bg-white rounded-full top-[-15px] left-[195px]"></div>
            <div className="absolute w-full h-12 bg-white rounded-full bottom-0"></div>
          </div>

          {/* Floating Cloud 3 */}
          <div 
            className="absolute top-[50%] left-0 w-72 h-16 opacity-75 blur-[3px] animate-cloud-3 select-none"
            style={{ animationDelay: '-65s' }}
          >
            <div className="absolute w-22 h-22 bg-white rounded-full top-[-30px] left-[20px]"></div>
            <div className="absolute w-26 h-26 bg-white rounded-full top-[-45px] left-[75px]"></div>
            <div className="absolute w-18 h-18 bg-white rounded-full top-[-10px] left-[155px]"></div>
            <div className="absolute w-full h-10 bg-white rounded-full bottom-0"></div>
          </div>

          {/* Floating Cloud 4 (Subtle & high altitude) */}
          <div 
            className="absolute top-[70%] left-0 w-56 h-12 opacity-60 blur-[5px] animate-cloud-4 select-none" 
            style={{ animationDelay: '-100s' }}
          >
            <div className="absolute w-16 h-16 bg-white rounded-full top-[-25px] left-[10px]"></div>
            <div className="absolute w-20 h-20 bg-white rounded-full top-[-35px] left-[50px]"></div>
            <div className="absolute w-14 h-14 bg-white rounded-full top-[-10px] left-[110px]"></div>
            <div className="absolute w-full h-8 bg-white rounded-full bottom-0"></div>
          </div>
        </div>
      )}

      {/* ================= DARK MODE SKY ELEMENTS ================= */}
      {isDark && (
        <div className="absolute inset-0 w-full h-full transition-opacity duration-1000 opacity-100">
          {/* Twinkling Stars */}
          <div className="absolute inset-0 w-full h-full">
            {stars.map((star) => (
              <div
                key={star.id}
                className="absolute bg-white rounded-full animate-twinkle"
                style={{
                  top: `${star.top}%`,
                  left: `${star.left}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  boxShadow: star.size > 2 ? '0 0 6px 1px rgba(255,255,255,0.7)' : 'none',
                  '--twinkle-duration': `${star.duration}s`,
                  animationDelay: `${star.delay}s`,
                }}
              />
            ))}
          </div>

          {/* Glowing Moon */}
          <div className="absolute top-[20%] right-[12%] w-24 h-24 md:w-32 md:h-32 rounded-full bg-slate-100 shadow-[0_0_50px_10px_rgba(224,242,254,0.25)] border border-blue-100/20">
            {/* Subtle lunar texture crater overlays */}
            <div className="absolute top-[20%] left-[25%] w-5 h-5 bg-slate-200/60 rounded-full blur-[0.5px]"></div>
            <div className="absolute top-[45%] left-[15%] w-7 h-7 bg-slate-200/60 rounded-full blur-[0.5px]"></div>
            <div className="absolute top-[60%] left-[45%] w-6 h-6 bg-slate-200/60 rounded-full blur-[0.5px]"></div>
            <div className="absolute top-[30%] left-[55%] w-4 h-4 bg-slate-200/60 rounded-full blur-[0.5px]"></div>
            {/* Moon Glow Halo */}
            <div className="absolute inset-[-15px] rounded-full bg-sky-200/5 blur-xl"></div>
          </div>

          {/* Diagonal Shooting Stars */}
          {/* Couple 1: Fires at 0s & 0.4s */}
          <div 
            className="absolute bg-gradient-to-r from-transparent via-white/80 to-white w-[200px] h-[3px] rounded-full blur-[0.5px] shadow-[0_0_12px_3px_#ffffff] animate-shooting"
            style={{
              top: '12%',
              right: '5%',
              animationDelay: '0s',
            }}
          />
          <div 
            className="absolute bg-gradient-to-r from-transparent via-white/80 to-white w-[240px] h-[3.5px] rounded-full blur-[0.5px] shadow-[0_0_12px_3px_#ffffff] animate-shooting"
            style={{
              top: '32%',
              right: '25%',
              animationDelay: '0.4s',
            }}
          />

          {/* Couple 2: Fires at 5s & 5.3s */}
          <div 
            className="absolute bg-gradient-to-r from-transparent via-white/80 to-white w-[160px] h-[2.5px] rounded-full blur-[0.5px] shadow-[0_0_10px_2px_#ffffff] animate-shooting"
            style={{
              top: '5%',
              right: '40%',
              animationDelay: '5s',
            }}
          />
          <div 
            className="absolute bg-gradient-to-r from-transparent via-white/80 to-white w-[220px] h-[3px] rounded-full blur-[0.5px] shadow-[0_0_12px_3px_#ffffff] animate-shooting"
            style={{
              top: '25%',
              right: '12%',
              animationDelay: '5.3s',
            }}
          />

          {/* Couple 3: Fires at 10s & 10.3s */}
          <div 
            className="absolute bg-gradient-to-r from-transparent via-white/80 to-white w-[180px] h-[3px] rounded-full blur-[0.5px] shadow-[0_0_12px_3px_#ffffff] animate-shooting"
            style={{
              top: '18%',
              right: '55%',
              animationDelay: '10s',
            }}
          />
          <div 
            className="absolute bg-gradient-to-r from-transparent via-white/80 to-white w-[200px] h-[2.5px] rounded-full blur-[0.5px] shadow-[0_0_10px_2px_#ffffff] animate-shooting"
            style={{
              top: '42%',
              right: '30%',
              animationDelay: '10.3s',
            }}
          />
        </div>
      )}
    </div>
  );
}

export default SkyBackground;
