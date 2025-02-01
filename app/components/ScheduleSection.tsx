interface Event {
  time: string;
  title: string;
  location?: string;
}

interface ScheduleSectionProps {
  title: string;
  events: Event[];
}

export default function ScheduleSection({ title, events }: ScheduleSectionProps) {
  return (
    <div className="mb-8 relative">
      <h2 className="text-2xl font-bold mb-4 text-green-400 glitch-text" data-text={title}>
        {'>'} {title}
      </h2>
      <div className="space-y-2">
        {events.map((event, index) => (
          <div 
            key={index} 
            className="bg-black/50 p-4 border border-green-400/30 hover:border-green-400 transition-all hover:translate-x-1 matrix-bg group"
          >
            <div className="flex justify-between items-start relative z-10">
              <div className="flex-1">
                <p className="text-green-400 font-mono flex items-center">
                  <span className="opacity-50 mr-2">$</span>
                  {event.time}
                </p>
                <p className="text-white group-hover:text-green-300 transition-colors">
                  <span className="opacity-50"># </span>
                  {event.title}
                </p>
              </div>
              {event.location && (
                <span className="text-green-400/70 font-mono text-sm ml-4 whitespace-nowrap">
                  <span className="opacity-50">@</span> {event.location}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
