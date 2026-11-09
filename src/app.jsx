import React, { useState, useEffect } from 'react';

// --- INLINE SVG ICONS ---
const IconTrophy = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9V4h12v5M6 9a6 6 0 0012 0M6 9H4a2 2 0 00-2 2v2a4 4 0 004 4h12a4 4 0 004-4v-2a2 2 0 00-2-2h-2M9 20h6m-3-4v4" />
  </svg>
);

const IconPlay = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const IconRotateCcw = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const IconChevronRight = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
  </svg>
);

const IconSparkles = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const IconVolume2 = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
  </svg>
);

const IconVolumeX = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15zM17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
  </svg>
);

const IconAward = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const IconCheckCircle = () => (
  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconArrowRight = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const IconMinus = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
  </svg>
);

// --- REAL DATA FROM YOUR GOOGLE FORMS SURVEY (3 Games, 5 Questions Each) ---
const INITIAL_GAMES = [
  {
    id: 1,
    title: "თამაში 1",
    questions: [
      {
        id: 1,
        question: "დაასახელეთ, რომელია ყველაზე პოპულარული საჩუქარი:",
        answers: [
          { id: 1, text: "სუნამო", points: 12 },
          { id: 2, text: "საათი", points: 11 },
          { id: 3, text: "ფული", points: 10 },
          { id: 4, text: "წიგნი", points: 8 },
          { id: 5, text: "სამკაული", points: 6 },
          { id: 6, text: "ჭიქა", points: 3 }
        ]
      },
      {
        id: 2,
        question: "დაასახელეთ საკვები, რომელსაც ყველაზე ხშირად უკვეთავთ სწრაფი კვების ობიექტში:",
        answers: [
          { id: 1, text: "შაურმა", points: 15 },
          { id: 2, text: "ხინკალი", points: 11 },
          { id: 3, text: "ბურგერი", points: 9 },
          { id: 4, text: "კარტოფილი", points: 7 },
          { id: 5, text: "პიცა", points: 5 },
          { id: 6, text: "ხაჭაპური", points: 3 }
        ]
      },
      {
        id: 3,
        question: "დაასახელეთ, რა არ უნდა გააკეთოს მოსწავლემ გაკვეთილზე:",
        answers: [
          { id: 1, text: "ხმაური", points: 16 },
          { id: 2, text: "შეუფერებელი ქცევა", points: 14 },
          { id: 3, text: "ტელეფონის გამოყენება", points: 13 },
          { id: 4, text: "ჭამა", points: 7 }
        ]
      },
      {
        id: 4,
        question: "დაასახელეთ საქართველოს კუთხე, რომლის ბუნებაც ყველაზე მეტად გიზიდავთ:",
        answers: [
          { id: 1, text: "ლეჩხუმი", points: 23 },
          { id: 2, text: "სვანეთი", points: 14 },
          { id: 3, text: "რაჭა", points: 5 },
          { id: 4, text: "სამეგრელო", points: 4 },
          { id: 5, text: "აჭარა", points: 3 },
          { id: 6, text: "მთიანეთი", points: 1 }
        ]
      },
      {
        id: 5,
        question: "დაასახელეთ თქვენი ფავორიტი ქართული კერძი:",
        answers: [
          { id: 1, text: "ხინკალი", points: 25 },
          { id: 2, text: "მწვადი", points: 8 },
          { id: 3, text: "ლობიანი / ლობიო", points: 7 },
          { id: 4, text: "ხაჭაპური", points: 6 },
          { id: 5, text: "საცივი", points: 3 },
          { id: 6, text: "ჩაქაფული", points: 1 }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "თამაში 2",
    questions: [
      {
        id: 1,
        question: "დაასახელეთ ერთი რამ, რასაც წაიღებდით მიტოვებულ კუნძულზე:",
        answers: [
          { id: 1, text: "დანა", points: 15 },
          { id: 2, text: "ასანთი / სანთებელა", points: 11 },
          { id: 3, text: "წყალი / წყლის ფილტრი", points: 9 },
          { id: 4, text: "ნაჯახი", points: 7 },
          { id: 5, text: "კომპასი", points: 5 },
          { id: 6, text: "იარაღი", points: 3 }
        ]
      },
      {
        id: 2,
        question: "დაასახელეთ ქვეყანა, რომელსაც ჰყავს საუკეთესო ფეხბურთელები:",
        answers: [
          { id: 1, text: "ესპანეთი", points: 15 },
          { id: 2, text: "არგენტინა", points: 13 },
          { id: 3, text: "საქართველო", points: 8 },
          { id: 4, text: "ბრაზილია", points: 6 },
          { id: 5, text: "საფრანგეთი", points: 5 },
          { id: 6, text: "ინგლისი", points: 3 }
        ]
      },
      {
        id: 3,
        question: "დაასახელეთ თქვენი ფავორიტი ქართველი სპორტსმენი:",
        answers: [
          { id: 1, text: "ილია თოფურია", points: 17 },
          { id: 2, text: "ხვიჩა კვარაცხელია", points: 16 },
          { id: 3, text: "მერაბ დვალიშვილი", points: 8 },
          { id: 4, text: "გიორგი მიქაუტაძე", points: 5 },
          { id: 5, text: "ნონა გაფრინდაშვილი", points: 3 },
          { id: 6, text: "ლაშა ტალახაძე", points: 1 }
        ]
      },
      {
        id: 4,
        question: "დაასახელეთ სასურველი სუპერძალა:",
        answers: [
          { id: 1, text: "ტელეპორტაცია", points: 17 },
          { id: 2, text: "აზრების კითხვა", points: 11 },
          { id: 3, text: "ფრენა", points: 9 },
          { id: 4, text: "დროის კონტროლი", points: 7 },
          { id: 5, text: "უჩინარობა", points: 4 },
          { id: 6, text: "ტელეკინეზი", points: 2 }
        ]
      },
      {
        id: 5,
        question: "დაასახელეთ, რომელ აპლიკაციაში ატარებთ ყველაზე მეტ დროს:",
        answers: [
          { id: 1, text: "ინსტაგრამი", points: 24 },
          { id: 2, text: "ტიკტოკი", points: 11 },
          { id: 3, text: "იუთუბი", points: 7 },
          { id: 4, text: "ფეისბუქი", points: 5 },
          { id: 5, text: "გუგლი", points: 3 }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "თამაში 3",
    questions: [
      {
        id: 1,
        question: "დაასახელეთ მოწყობილობა, რომლის დახმარებითაც ყველაზე ხშირად უყურებთ ფილმებს:",
        answers: [
          { id: 1, text: "ტელეფონი", points: 23 },
          { id: 2, text: "კომპიუტერი", points: 15 },
          { id: 3, text: "ტელევიზორი", points: 7 },
          { id: 4, text: "პლანშეტი", points: 4 },
          { id: 5, text: "პროექტორი", points: 1 }
        ]
      },
      {
        id: 2,
        question: "დაასახელეთ, რას იზამდით, მოჩვენება რომ დაგენახათ:",
        answers: [
          { id: 1, text: "გაქცევა", points: 16 },
          { id: 2, text: "შევუტევდი / გავეკიდებოდი font-bold", points: 11 },
          { id: 3, text: "შემეშინდებოდა", points: 10 },
          { id: 4, text: "არაფერს", points: 9 },
          { id: 5, text: "პირჯვარს გადავიწერდი", points: 4 }
        ]
      },
      {
        id: 3,
        question: "დაასახელეთ, რას აკეთებთ ყველაზე ხშირად თავისუფალ დროს:",
        answers: [
          { id: 1, text: "ფილმები / სერიალები", points: 13 },
          { id: 2, text: "თამაში", points: 11 },
          { id: 3, text: "სქროლვა / სოცმედია", points: 9 },
          { id: 4, text: "ძილი", points: 7 },
          { id: 5, text: "კითხვა", points: 6 },
          { id: 6, text: "მუსიკა", points: 4 }
        ]
      },
      {
        id: 4,
        question: "დაასახელეთ სასკოლო საგანი, რომელიც ყველაზე მეტად დაგჭირდებათ ცხოვრებაში:",
        answers: [
          { id: 1, text: "მათემატიკა", points: 18 },
          { id: 2, text: "ინგლისური", points: 12 },
          { id: 3, text: "ქართული", points: 8 },
          { id: 4, text: "გეოგრაფია", points: 6 },
          { id: 5, text: "ისტორია", points: 4 },
          { id: 6, text: "ბიოლოგია", points: 2 }
        ]
      },
      {
        id: 5,
        question: "დაასახელეთ ერთი რამ, რისიც ყველაზე მეტად გეშინიათ:",
        answers: [
          { id: 1, text: "ცხოველები", points: 19 },
          { id: 2, text: "საყვარელი ადამიანების დაკარგვა", points: 10 },
          { id: 3, text: "წყალი", points: 8 },
          { id: 4, text: "სიმაღლე", points: 7 },
          { id: 5, text: "სიბნელე", points: 5 },
          { id: 6, text: "მაკარონი", points: 1 }
        ]
      }
    ]
  }
];

// Sound Synthesizer Utility using Web Audio API
const playSound = (type) => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'reveal') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1046.50, ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } else if (type === 'next') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } else if (type === 'win') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.setValueAtTime(554.37, ctx.currentTime + 0.15);
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.6);
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    }
  } catch (e) {
    console.log("Audio play error:", e);
  }
};

export default function App() {
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // Game scores
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  
  // Custom Team Names
  const [team1Name, setTeam1Name] = useState("გუნდი 1");
  const [team2Name, setTeam2Name] = useState("გუნდი 2");

  // State of revealed answers for current question: { [answerId]: boolean }
  const [revealedAnswers, setRevealedAnswers] = useState({});

  // Point assignment state when card is clicked
  const [pendingPointsCard, setPendingPointsCard] = useState(null);

  // Modal for next question prompt
  const [showNextModal, setShowNextModal] = useState(false);

  // Game over state
  const [isGameOver, setIsGameOver] = useState(false);

  // Sound toggle
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Get active game and question
  const currentGame = INITIAL_GAMES.find(g => g.id === selectedGameId);
  const currentQuestion = currentGame?.questions[currentQuestionIndex];

  // Reset answer states on question change
  useEffect(() => {
    setRevealedAnswers({});
    setShowNextModal(false);
    setPendingPointsCard(null);
  }, [currentQuestionIndex, selectedGameId]);

  // Check if all answers for current question are revealed
  useEffect(() => {
    if (!currentQuestion) return;
    const totalAnswers = currentQuestion.answers.length;
    const revealedCount = Object.keys(revealedAnswers).filter(id => revealedAnswers[id]).length;

    // Show next question prompt ONLY after pending points assignment is cleared
    if (totalAnswers > 0 && revealedCount === totalAnswers && !showNextModal && !isGameOver && !pendingPointsCard) {
      const timer = setTimeout(() => {
        setShowNextModal(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [revealedAnswers, currentQuestion, showNextModal, isGameOver, pendingPointsCard]);

  // Start selected game
  const handleSelectGame = (gameId) => {
    setSelectedGameId(gameId);
    setCurrentQuestionIndex(0);
    setTeam1Score(0);
    setTeam2Score(0);
    setRevealedAnswers({});
    setIsGameOver(false);
    if (soundEnabled) playSound('next');
  };

  // Click card handler
  const handleCardClick = (answer) => {
    if (!revealedAnswers[answer.id]) {
      setRevealedAnswers(prev => ({ ...prev, [answer.id]: true }));
      setPendingPointsCard(answer);
      if (soundEnabled) playSound('reveal');
    } else {
      setPendingPointsCard(answer);
    }
  };

  // Add points to a team
  const addPointsToTeam = (teamNumber, points) => {
    if (teamNumber === 1) {
      setTeam1Score(prev => prev + points);
    } else if (teamNumber === 2) {
      setTeam2Score(prev => prev + points);
    }
    setPendingPointsCard(null);
  };

  // Advance to next question or trigger game over
  const handleConfirmNextQuestion = () => {
    if (soundEnabled) playSound('next');
    if (currentQuestionIndex < currentGame.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowNextModal(false);
    } else {
      setIsGameOver(true);
      setShowNextModal(false);
      if (soundEnabled) playSound('win');
    }
  };

  // Back to Menu
  const handleReturnToMenu = () => {
    setSelectedGameId(null);
    setIsGameOver(false);
  };

  return (
    <div className="w-full h-screen bg-slate-950 text-white font-sans overflow-hidden select-none flex flex-col justify-between relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-indigo-950 to-slate-950">
      
      {/* Background Decorative Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-blue-600/15 blur-[120px] pointer-events-none rounded-full" />

      {/* SOUND TOGGLE BUTTON */}
      <div className="absolute top-4 right-4 z-50">
        <button 
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="p-3 bg-slate-800/80 hover:bg-slate-700 text-amber-400 rounded-full border border-amber-500/30 transition shadow-lg backdrop-blur"
          title={soundEnabled ? "ხმის გამორთვა" : "ხმის ჩართვა"}
        >
          {soundEnabled ? <IconVolume2 /> : <IconVolumeX />}
        </button>
      </div>

      {/* 1. GAME SELECTION SCREEN */}
      {!selectedGameId ? (
        <div className="flex-1 flex flex-col items-center justify-center p-8 z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-6 backdrop-blur">
              <IconSparkles />
              <span className="font-semibold tracking-wider uppercase text-sm">School Feud TV Show</span>
            </div>
            <h1 className="text-6xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 drop-shadow-[0_5px_15px_rgba(245,158,11,0.3)]">
              SCHOOL FEUD
            </h1>
            <p className="text-xl text-slate-300 mt-4 max-w-xl mx-auto">
              აირჩიეთ თამაში პროექტორზე დასაწყებად. სულ არის 3 თამაში, თითოეული შედგება 5 კითხვისგან!
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 w-full max-w-5xl">
            {INITIAL_GAMES.map((game) => (
              <div 
                key={game.id}
                onClick={() => handleSelectGame(game.id)}
                className="group relative bg-gradient-to-b from-slate-800 to-slate-900/90 border-2 border-amber-500/30 hover:border-amber-400 rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] flex flex-col items-center justify-between min-h-[280px]"
              >
                <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition">
                  <IconTrophy />
                </div>
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-2">{game.title}</h2>
                  <p className="text-slate-400 font-medium">5 კითხვა • მაქს. 6 პასუხი</p>
                </div>
                <button className="mt-6 w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black rounded-xl flex items-center justify-center gap-2 transition shadow-lg">
                  <IconPlay />
                  დაწყება
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : isGameOver ? (
        /* GAME OVER SCREEN */
        <div className="flex-1 flex flex-col items-center justify-center p-8 z-10 animate-fade-in">
          <div className="bg-slate-900/90 border-2 border-amber-500/40 rounded-3xl p-12 max-w-3xl w-full text-center shadow-[0_0_60px_rgba(245,158,11,0.2)] backdrop-blur-xl">
            <div className="inline-block p-4 bg-amber-500/20 rounded-full border border-amber-400/40 text-amber-400 mb-6">
              <IconAward />
            </div>
            <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 mb-2">
              თამაში დასრულებულია!
            </h1>
            <p className="text-2xl text-slate-300 font-medium mb-8">საბოლოო შედეგები</p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className={`p-6 rounded-2xl border-2 transition ${team1Score > team2Score ? 'bg-amber-500/15 border-amber-400 scale-105 shadow-[0_0_25px_rgba(245,158,11,0.3)]' : 'bg-slate-800/60 border-slate-700'}`}>
                {team1Score > team2Score && <span className="inline-block px-3 py-1 bg-amber-500 text-slate-950 text-xs font-black rounded-full mb-2 uppercase">გამარჯვებული</span>}
                <h3 className="text-2xl font-bold text-slate-200">{team1Name}</h3>
                <p className="text-6xl font-black text-amber-400 mt-2">{team1Score}</p>
                <p className="text-slate-400 text-sm mt-1">ქულა</p>
              </div>

              <div className={`p-6 rounded-2xl border-2 transition ${team2Score > team1Score ? 'bg-amber-500/15 border-amber-400 scale-105 shadow-[0_0_25px_rgba(245,158,11,0.3)]' : 'bg-slate-800/60 border-slate-700'}`}>
                {team2Score > team1Score && <span className="inline-block px-3 py-1 bg-amber-500 text-slate-950 text-xs font-black rounded-full mb-2 uppercase">გამარჯვებული</span>}
                <h3 className="text-2xl font-bold text-slate-200">{team2Name}</h3>
                <p className="text-6xl font-black text-amber-400 mt-2">{team2Score}</p>
                <p className="text-slate-400 text-sm mt-1">ქულა</p>
              </div>
            </div>

            {team1Score === team2Score && (
              <p className="text-2xl font-bold text-yellow-400 mb-6">ფრე! ორივე გუნდმა თანაბარი ქულები დააგროვა!</p>
            )}

            <button 
              onClick={handleReturnToMenu}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xl rounded-2xl shadow-lg transition flex items-center gap-3 mx-auto"
            >
              <IconRotateCcw />
              მთავარ მენიუში დაბრუნება
            </button>
          </div>
        </div>
      ) : (
        /* MAIN GAMEPLAY DASHBOARD */
        <div className="flex-1 flex flex-col justify-between p-6 z-10 max-w-[1600px] w-full mx-auto">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
            <button 
              onClick={handleReturnToMenu}
              className="px-4 py-2 bg-slate-800/80 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 font-semibold text-sm transition flex items-center gap-2"
            >
              <IconRotateCcw />
              მენიუ
            </button>

            <div className="text-center">
              <span className="text-amber-400 font-bold tracking-widest uppercase text-sm bg-amber-500/10 px-4 py-1 rounded-full border border-amber-500/20">
                {currentGame.title}
              </span>
            </div>

            <div className="bg-slate-800/80 px-4 py-1.5 rounded-xl border border-slate-700 text-slate-300 font-bold text-sm">
              კითხვა <span className="text-amber-400 text-lg ml-1">{currentQuestionIndex + 1}</span> / {currentGame.questions.length}
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 items-stretch flex-1">
            
            {/* TEAM 1 SCOREBOARD */}
            <div className="col-span-3 bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-2 border-blue-500/30 rounded-3xl p-6 flex flex-col justify-between items-center text-center shadow-xl backdrop-blur relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-blue-500" />
              
              <div className="w-full">
                <input 
                  type="text" 
                  value={team1Name} 
                  onChange={(e) => setTeam1Name(e.target.value)}
                  className="w-full bg-transparent text-center text-2xl font-black text-blue-400 focus:outline-none border-b border-dashed border-blue-500/30 pb-1 mb-2"
                />
                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">გუნდი 1</p>
              </div>

              <div className="my-auto py-6">
                <div className="text-7xl font-black text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] bg-slate-950 border-4 border-blue-500/40 rounded-2xl px-8 py-6 min-w-[160px] tracking-tight">
                  {team1Score}
                </div>
              </div>

              <div className="w-full space-y-2">
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">ქულის მართვა</p>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setTeam1Score(prev => prev + 10)}
                    className="flex-1 py-2 bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 border border-blue-500/40 font-bold rounded-xl text-sm transition"
                  >
                    +10
                  </button>
                  <button 
                    onClick={() => setTeam1Score(prev => prev + 5)}
                    className="flex-1 py-2 bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 border border-blue-500/40 font-bold rounded-xl text-sm transition"
                  >
                    +5
                  </button>
                  <button 
                    onClick={() => setTeam1Score(prev => Math.max(0, prev - 5))}
                    className="py-2 px-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 font-bold rounded-xl text-sm transition flex items-center justify-center"
                    title="-5 ქულა"
                  >
                    <IconMinus />
                  </button>
                </div>
              </div>
            </div>

            {/* CENTER PANEL */}
            <div className="col-span-6 flex flex-col justify-between space-y-4">
              
              <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-2 border-amber-500/50 rounded-2xl p-6 text-center shadow-[0_0_30px_rgba(245,158,11,0.15)] flex items-center justify-center min-h-[120px]">
                <h2 className="text-2xl lg:text-3xl font-extrabold text-amber-100 leading-tight tracking-wide">
                  "{currentQuestion.question}"
                </h2>
              </div>

              {/* DYNAMIC & ADAPTIVE ANSWERS GRID */}
              <div className={`flex-1 flex flex-col justify-center gap-3 w-full ${
                currentQuestion.answers.length <= 4 ? 'max-w-xl mx-auto' : ''
              }`}>
                <div className={`grid gap-3.5 w-full ${
                  currentQuestion.answers.length <= 4 
                    ? 'grid-cols-1' 
                    : 'grid-cols-2'
                }`}>
                  {currentQuestion.answers.map((answer, index) => {
                    const isRevealed = !!revealedAnswers[answer.id];
                    const isOddLast = currentQuestion.answers.length % 2 !== 0 && index === currentQuestion.answers.length - 1 && currentQuestion.answers.length > 4;

                    return (
                      <div
                        key={answer.id}
                        onClick={() => handleCardClick(answer)}
                        className={`perspective cursor-pointer ${
                          currentQuestion.answers.length <= 4 ? 'h-[64px]' : 'h-[60px]'
                        } ${isOddLast ? 'col-span-2 w-1/2 mx-auto' : ''}`}
                      >
                        <div className={`relative w-full h-full duration-500 transform-style-3d transition-transform ${isRevealed ? 'rotate-y-180' : ''}`}>
                          
                          {/* FRONT (HIDDEN STATE) */}
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-2 border-amber-500/40 rounded-xl flex items-center justify-between px-5 shadow-md hover:border-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.25)] backface-hidden">
                            <span className="text-xl font-black text-amber-400 bg-amber-500/10 w-9 h-9 rounded-lg flex items-center justify-center border border-amber-500/30">
                              {index + 1}
                            </span>
                            <span className="text-slate-400 font-extrabold text-xs tracking-widest uppercase">
                              დაფარული პასუხი
                            </span>
                          </div>

                          {/* BACK (REVEALED STATE) */}
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-950 font-black rounded-xl flex items-center justify-between px-5 shadow-xl backface-hidden rotate-y-180 border-2 border-yellow-300">
                            <span className="text-base font-black tracking-wide truncate max-w-[240px]">
                              {answer.text}
                            </span>
                            <div className="bg-slate-950 text-amber-400 px-3 py-1 rounded-lg text-xl font-black border border-amber-400/50 shadow-inner min-w-[45px] text-center">
                              {answer.points}
                            </div>
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* TEAM 2 SCOREBOARD */}
            <div className="col-span-3 bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-2 border-emerald-500/30 rounded-3xl p-6 flex flex-col justify-between items-center text-center shadow-xl backdrop-blur relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-emerald-500" />

              <div className="w-full">
                <input 
                  type="text" 
                  value={team2Name} 
                  onChange={(e) => setTeam2Name(e.target.value)}
                  className="w-full bg-transparent text-center text-2xl font-black text-emerald-400 focus:outline-none border-b border-dashed border-emerald-500/30 pb-1 mb-2"
                />
                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">გუნდი 2</p>
              </div>

              <div className="my-auto py-6">
                <div className="text-7xl font-black text-white drop-shadow-[0_0_20px_rgba(16,185,129,0.5)] bg-slate-950 border-4 border-emerald-500/40 rounded-2xl px-8 py-6 min-w-[160px] tracking-tight">
                  {team2Score}
                </div>
              </div>

              <div className="w-full space-y-2">
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">ქულის მართვა</p>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setTeam2Score(prev => prev + 10)}
                    className="flex-1 py-2 bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-500/40 font-bold rounded-xl text-sm transition"
                  >
                    +10
                  </button>
                  <button 
                    onClick={() => setTeam2Score(prev => prev + 5)}
                    className="flex-1 py-2 bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-500/40 font-bold rounded-xl text-sm transition"
                  >
                    +5
                  </button>
                  <button 
                    onClick={() => setTeam2Score(prev => Math.max(0, prev - 5))}
                    className="py-2 px-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 font-bold rounded-xl text-sm transition flex items-center justify-center"
                    title="-5 ქულა"
                  >
                    <IconMinus />
                  </button>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-slate-400 text-xs font-medium">
            <span>პროექტორის რეჟიმი: გამოიყენეთ F11 სრული ეკრანისთვის</span>
            <button 
              onClick={() => setShowNextModal(true)}
              className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl transition flex items-center gap-2 text-sm shadow-md"
            >
              შემდეგი კითხვა
              <IconChevronRight />
            </button>
          </div>

        </div>
      )}

      {/* MODAL: POINT ALLOCATION */}
      {pendingPointsCard && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-8 max-w-md w-full text-center shadow-[0_0_50px_rgba(245,158,11,0.25)]">
            <p className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-1">გამოცნობილია პასუხი!</p>
            <h3 className="text-3xl font-extrabold text-white mb-2">"{pendingPointsCard.text}"</h3>
            <p className="text-5xl font-black text-amber-400 mb-6">+{pendingPointsCard.points} ქულა</p>
            <p className="text-slate-300 text-base font-medium mb-6">რომელ გუნდს დაემატოს ქულები?</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <button
                onClick={() => addPointsToTeam(1, pendingPointsCard.points)}
                className="py-4 bg-blue-600 hover:bg-blue-500 text-white font-black text-lg rounded-2xl transition shadow-lg flex flex-col items-center gap-1"
              >
                <span>{team1Name}</span>
                <span className="text-xs font-normal opacity-80">(+ {pendingPointsCard.points} ქულა)</span>
              </button>

              <button
                onClick={() => addPointsToTeam(2, pendingPointsCard.points)}
                className="py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-lg rounded-2xl transition shadow-lg flex flex-col items-center gap-1"
              >
                <span>{team2Name}</span>
                <span className="text-xs font-normal opacity-80">(+ {pendingPointsCard.points} ქულა)</span>
              </button>
            </div>

            <button
              onClick={() => setPendingPointsCard(null)}
              className="text-slate-400 hover:text-slate-200 text-sm font-semibold underline mt-2"
            >
              გამოტოვება (ქულის გარეშე)
            </button>
          </div>
        </div>
      )}

      {/* MODAL: NEXT QUESTION PROMPT */}
      {showNextModal && (
        <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-8 max-w-lg w-full text-center shadow-[0_0_50px_rgba(245,158,11,0.2)]">
            <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-400/30">
              <IconCheckCircle />
            </div>
            <h3 className="text-3xl font-black text-white mb-2">ყველა პასუხი გახსნილია!</h3>
            <p className="text-xl text-slate-300 font-medium mb-8">გადავიდე შემდეგ შეკითხვაზე?</p>

            <div className="flex gap-4">
              <button
                onClick={() => setShowNextModal(false)}
                className="flex-1 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl transition"
              >
                გაუქმება
              </button>
              <button
                onClick={handleConfirmNextQuestion}
                className="flex-1 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black rounded-xl transition shadow-lg flex items-center justify-center gap-2"
              >
                დიახ, გადასვლა
                <IconArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles for 3D Flip Effects */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}