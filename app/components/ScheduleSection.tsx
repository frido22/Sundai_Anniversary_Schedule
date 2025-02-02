interface Event {
  time: string;
  title: string;
  location?: string;
  highlight?: boolean;
  zoomLink?: string;
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
            className={`bg-black/50 p-3 md:p-4 border transition-all hover:translate-x-1 matrix-bg group ${
              event.highlight 
                ? 'border-green-400 border-2 shadow-lg shadow-green-400/20' 
                : 'border-green-400/30 hover:border-green-400'
            }`}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start relative z-10">
              <div className="flex-1">
                <p className="text-green-400 font-mono text-sm md:text-base flex items-center">
                  <span className="opacity-50 mr-2">$</span>
                  {event.time}
                </p>
                <p className="text-white group-hover:text-green-300 transition-colors text-sm md:text-base mt-1 md:mt-0">
                  <span className="opacity-50"># </span>
                  {event.title}
                </p>
                {event.location && (
                  <div className="text-green-400/70 text-xs md:text-sm mt-1">
                    <p>
                      <span className="opacity-50">@ </span>
                      {event.location}
                    </p>
                  </div>
                )}
                {event.zoomLink && (
                  <div className="text-xs md:text-sm mt-1">
                    <a href={event.zoomLink} target="_blank" rel="noopener noreferrer" 
                       className="block text-blue-400 hover:text-blue-300 transition-colors">
                      <span className="opacity-50">$ </span>
                      Zoom Stream
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
