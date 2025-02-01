'use client';

import ScheduleSection from './components/ScheduleSection';

function Fireworks() {
  return (
    <>
      <div className="firework left-[20%]" />
      <div className="firework left-[40%]" />
      <div className="firework left-[60%]" />
      <div className="firework left-[80%]" />
    </>
  );
}

export default function Home() {
  const hackSchedule = [
    { time: "10:00 AM", title: "Hack starts" },
    { time: "11:00 AM", title: "Special guest lecture by Chi Wang, founder of AutoGen framework" },
  ];

  const workshopSchedule1 = [
    { time: "12:00 PM", title: "AI Powered Portfolio Building with Konstantina Yaneva", location: "Room BlueScreen" },
    { time: "12:00 PM", title: "Foundational LLMs from Scratch with Igor Saldalski", location: "Room Localhost" },
    { time: "12:00 PM", title: "Building even faster with Codapt with Trevor Keith", location: "Room TypeError" },
  ];

  const workshopSchedule2 = [
    { time: "1:00 PM", title: "Building Next.js App with LLMs Assistants with Artem Lukoianov", location: "Room BlueScreen" },
    { time: "1:00 PM", title: "Agents with Abby Damodaran and Nikolay Vyahhi", location: "Room Localhost" },
    { time: "1:00 PM", title: "AI Partners: Beyond Tools to Teammates with Ilya Gulko", location: "Room TypeError" },
  ];

  const afternoonSchedule = [
    { time: "2:00 PM - 4:00 PM", title: "Talks on AI Ethics, Frameworks, and Human Flourishing" },
    { time: "5:00 PM - 6:00 PM", title: "Startup Pitches" },
  ];

  const demoSession1 = [
    { time: "6:00 PM - 6:45 PM", title: "Everydai Projects: Charm, CodePromptFu, SocialCal, OpenbookLM" },
    { time: "6:00 PM - 6:45 PM", title: "Sundai Projects: Cairo, Silicon Tools, QuizMe, ScriptCut, Groovify, Grim Repor" },
    { time: "6:00 PM - 6:45 PM", title: "MIT Projects: IAP Rapid Prototyping Projects" },
  ];

  const demoSession2 = [
    { time: "7:00 PM - 7:45 PM", title: "Sundai Projects: Kill The Robot, Home Wrecker, AI Pet Photo, Sundai Travel" },
    { time: "7:00 PM - 7:45 PM", title: "Sundai Projects: Automated Data Scientist, Personal AI Shopper, InstaGift" },
    { time: "7:00 PM - 7:45 PM", title: "Sundai Projects: Termsminator, Book Digest, Sendbet, Keysplitter, Journey Board, Sundai Filters" },
  ];

  const closingEvents = [
    { time: "7:45 PM - 8:00 PM", title: "Sponsor presentations from Foley Hoag and Æthos" },
    { time: "8:00 PM - 8:30 PM", title: "Sundai Achievements and Plans" },
    { time: "8:30 PM - 9:00 PM", title: "Hack Pitch" },
  ];

  return (
    <main className="min-h-screen p-8 md:p-12 max-w-5xl mx-auto matrix-bg">
      <Fireworks />
      
      <div className="text-center mb-12">
        <pre className="text-green-400 opacity-70 mb-4 hidden md:block">
{` _____                 _         _ 
/  ___|               | |       (_)
\\ \`--.  _   _  _ __   | |  __ _ _ 
 \`--. \\| | | || '_ \\  | | / _\` || |
/\\__/ /| |_| || | | | | || (_| || |
\\____/  \\__,_||_| |_| |_| \\__,_||_|`}
        </pre>
        <h1 className="text-4xl md:text-6xl font-bold mb-2 glitch-text" data-text="Anniversary Schedule">
          Anniversary Schedule
        </h1>
        <p className="text-green-400/70 font-mono">
          <span className="opacity-50">$</span> ./run_event.sh --date=&quot;Sunday&quot; --mode=&quot;awesome&quot;
        </p>
      </div>
      
      <div className="space-y-12">
        <div className="relative">
          <div className="absolute -left-4 top-0 bottom-0 border-l-2 border-green-400/20"></div>
          <ScheduleSection title="Part 1: Hack" events={hackSchedule} />
          
          <div>
            <h2 className="text-2xl font-bold mb-4 text-green-400 glitch-text" data-text="Part 2: Learn">
              {'>'} Part 2: Learn
            </h2>
            <h3 className="text-xl mb-4 text-green-400">
              <span className="opacity-50">function</span> workshops<span className="opacity-50">(</span>time: &quot;12:00 - 2:00 PM&quot;<span className="opacity-50">)</span>
            </h3>
            <ScheduleSection title="12:00 PM Workshops" events={workshopSchedule1} />
            <ScheduleSection title="1:00 PM Workshops" events={workshopSchedule2} />
            <ScheduleSection title="Afternoon Events" events={afternoonSchedule} />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-green-400 glitch-text" data-text="Part 3: Experience">
              {'>'} Part 3: Experience
            </h2>
            <ScheduleSection title="Demo Session 1" events={demoSession1} />
            <ScheduleSection title="Demo Session 2" events={demoSession2} />
            <ScheduleSection title="Closing Events" events={closingEvents} />
          </div>
        </div>
      </div>
    </main>
  );
}
