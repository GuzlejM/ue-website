"use client";

const Message = ({ message }) => {
  switch (message.type) {
    case 'text':
      return (
        <div className="flex">
          <div className="max-w-[80%] rounded-lg bg-gray-800/50 px-4 py-3 backdrop-blur">
            <div className="agent-message whitespace-pre-wrap text-gray-200">
              {message.text}
            </div>
          </div>
        </div>
      );
    case 'tool_use':
      const getStatusColor = (status) => {
        switch (status) {
          case 'running':
            return 'bg-orange-500';
          case 'completed':
            return 'bg-emerald-500';
          default:
            return 'bg-red-500';
        }
      };

      return (
        <div className="flex">
          <div className="max-w-[80%] w-full rounded-lg bg-gray-900/50 px-4 py-3 border border-gray-700/50 backdrop-blur">
            <div className="font-mono text-sm">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className={`h-2 w-2 rounded-full ${getStatusColor(message.status)} ${
                    message.status === 'running' ? 'animate-pulse' : ''
                  }`}></span>
                  <code className="flex-1 bg-gray-800 px-3 py-1.5 rounded text-gray-200 border border-gray-700">
                    {message.input.command}
                  </code>
                </div>
                
                <div className="flex items-center gap-2 px-4">
                  <span className={`text-xs ${
                    message.status === 'running' ? 'text-orange-500' : 'text-emerald-500'
                  }`}>
                    {message.status === 'running' ? 'Running...' : 'Completed'}
                  </span>
                  {message.input.step && (
                    <>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-400">
                        {message.input.step}
                      </span>
                    </>
                  )}
                </div>
              </div>
              
              {message.output && (
                <div className="mt-3 text-gray-400 border-t border-gray-700/50 pt-3">
                  <span className="text-xs text-gray-500 px-4">Output:</span>
                  <pre className="mt-2 text-sm bg-gray-800/50 p-3 rounded">{message.output}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    case 'user':
      return (
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-lg bg-emerald-600 px-4 py-3">
            <p className="font-medium text-white">{message.content}</p>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default Message; 