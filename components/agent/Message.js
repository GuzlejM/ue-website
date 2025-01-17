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
            return 'bg-yellow-500';
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
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${getStatusColor(message.status)} ${
                  message.status === 'running' ? 'animate-pulse' : ''
                }`}></span>
                <code className="bg-gray-800 px-2 py-1 rounded text-gray-200 border border-gray-700">
                  {message.input.command || `${message.name}: ${message.input.action}`}
                </code>
                {message.status === 'running' && (
                  <span className="text-xs text-yellow-500 ml-2">Running...</span>
                )}
                {message.status === 'completed' && (
                  <span className="text-xs text-emerald-500 ml-2">Completed</span>
                )}
              </div>
              {message.output && (
                <div className="mt-2 text-gray-400 border-t border-gray-700/50 pt-2">
                  <span className="text-xs text-gray-500">Output:</span>
                  <pre className="mt-1 text-sm bg-gray-800/50 p-2 rounded">{message.output}</pre>
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