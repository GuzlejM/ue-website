"use client";

const ThinkingIndicator = ({ thinking, isProcessing }) => {
  if (!thinking) return null;

  const steps = thinking.split('\n').reduce((acc, step) => {
    if (step.trim() === '') return acc;
    
    const [_, ...content] = step.split('. ');
    if (!content.length) return acc;
    
    acc.push(content.join('. ').trim());
    return acc;
  }, []);

  return (
    <div className="mb-4 bg-gray-900/50 rounded-lg overflow-hidden backdrop-blur-sm">
      <div className="px-4 py-3">
        <div className="flex items-center gap-2 mb-3">
          <span className={`h-2 w-2 rounded-full ${isProcessing ? 'bg-emerald-500 animate-pulse' : 'bg-emerald-500'}`}></span>
          <span className="font-mono text-emerald-400 text-xs">Agent Thinking Process</span>
        </div>
        <div className="space-y-2.5">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="text-sm text-gray-300 pl-4">
                {step}
                {isProcessing && (
                  <div className="mt-2 h-0.5 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500/20 animate-progress"></div>
                  </div>
                )}
              </div>
              {isProcessing && index === steps.length - 1 && (
                <div className="absolute -right-1 top-1">
                  <span className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500/30"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500/60"></span>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThinkingIndicator; 