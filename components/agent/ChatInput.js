"use client";

const ChatInput = ({ value, onChange, onSubmit, isProcessing }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={onSubmit} className="relative">
      <input
        type="text"
        className="w-full rounded-full border-2 border-gray-700/50 bg-gray-900/50 py-3 pl-4 pr-[100px] focus:border-emerald-500/50 focus:ring-0 backdrop-blur"
        placeholder="Enter your command or question..."
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        disabled={isProcessing}
      />
      <button
        type="submit"
        className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-emerald-600 px-6 py-2 transition-all hover:bg-emerald-500 ${
          isProcessing ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={isProcessing}
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput; 