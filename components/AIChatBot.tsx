import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Minimize2, Loader2 } from 'lucide-react';
import { sendMessageToSal } from '../services/gemini';
import { ChatMessage } from '../types';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'سلام! من «صال» هستم، دستیار مجازی شما. چطور می‌توانم امروز در شناخت خدمات صالتک به شما کمک کنم؟' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    setInputValue('');
    
    // Add user message
    const newHistory: ChatMessage[] = [
      ...messages,
      { role: 'user', text: userText }
    ];
    setMessages(newHistory);
    setIsLoading(true);

    // Call Gemini
    const responseText = await sendMessageToSal(newHistory, userText);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-accent hover:bg-accent-glow text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center justify-center group"
        >
          <MessageSquare className="h-6 w-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:mr-2 transition-all duration-300 ease-in-out whitespace-nowrap">گفتگو با صال</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-primary-light border border-white/10 rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col h-[500px] overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">دستیار صالتک</h3>
                <div className="flex items-center space-x-1 space-x-reverse">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-xs text-blue-100">آنلاین</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 space-x-reverse">
               <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <Minimize2 className="h-4 w-4" />
              </button>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-primary/50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-x-2 ${
                  msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'user' ? 'bg-accent/20 text-accent' : 'bg-purple-500/20 text-purple-400'
                }`}>
                  {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-accent text-white rounded-tl-none'
                      : 'bg-white/10 text-gray-200 rounded-tr-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center space-x-2 space-x-reverse text-gray-400 text-xs mr-10">
                <Loader2 className="h-3 w-3 animate-spin" />
                <span>صال در حال نوشتن...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-primary-light border-t border-white/5">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="درباره خدمات ما بپرسید..."
                className="w-full bg-primary border border-white/10 rounded-full pr-4 pl-12 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="absolute left-2 top-2 p-1.5 bg-accent text-white rounded-full hover:bg-accent-glow disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="h-4 w-4 rotate-180" />
              </button>
            </div>
            <div className="text-center mt-2">
              <p className="text-[10px] text-gray-500">قدرت گرفته از هوش مصنوعی جمنای</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatBot;