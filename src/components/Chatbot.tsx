'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiXMark, HiPaperAirplane } from 'react-icons/hi2';
import Image from 'next/image';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Welcome to StyleKart.ai. How may I assist you today?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newMessage: Message = {
            id: messages.length + 1,
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages([...messages, newMessage]);
        setInputValue('');

        // Simulate bot response (frontend only)
        setTimeout(() => {
            const botResponse: Message = {
                id: messages.length + 2,
                text: "Thank you for your inquiry. Our AI stylist is analyzing your request...",
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
        }, 1000);
    };

    const quickActions = [
        "Style recommendations",
        "Size guide",
        "Track order"
    ];

    return (
        <>
            {/* Gucci-Inspired Floating Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ scale: 1.08, boxShadow: '0 20px 40px rgba(212, 196, 176, 0.4)' }}
                        whileTap={{ scale: 0.92 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-8 right-8 w-20 h-20 rounded-full shadow-2xl shadow-[#D4C4B0]/30 z-50 group overflow-hidden border-2 border-white"
                    >
                        {/* Image fills entire button */}
                        <Image
                            src="/images/chatbot.png"
                            alt="StyleKart AI Assistant"
                            fill
                            className="object-cover"
                            quality={100}
                        />
                        
                        {/* Elegant hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                        
                        {/* Subtle pulse ring - Gucci style */}
                        <motion.span
                            className="absolute -inset-1 rounded-full border border-[#D4C4B0]/40"
                            animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0, 0.5]
                            }}
                            transition={{ 
                                duration: 3, 
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed bottom-8 right-8 w-[400px] h-[600px] bg-white shadow-2xl z-50 flex flex-col border border-[#E8E6E1]"
                    >
                        {/* Header */}
                        <div className="relative bg-gradient-to-br from-[#F5E6D3] via-[#EAD5C0] to-[#E0C4AD] p-6 border-b border-[#D4C4B0]">
                            <div className="absolute inset-0 opacity-[0.03]" style={{
                                backgroundImage: `radial-gradient(circle at 2px 2px, #8B7355 1px, transparent 0)`,
                                backgroundSize: '30px 30px'
                            }} />
                            
                            <div className="relative flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/40">
                                        <Image
                                            src="/images/chatbot.png"
                                            alt="StyleKart AI"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-[#3A2F23] font-light text-base tracking-wide">StyleKart.ai</h3>
                                        <p className="text-[#6B5446]/80 text-[10px] uppercase tracking-[0.2em] font-light">Personal Stylist</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-8 h-8 rounded-full hover:bg-white/40 transition-colors flex items-center justify-center"
                                >
                                    <HiXMark className="w-5 h-5 text-[#3A2F23]/80" />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#FBF9F7]">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[75%] ${
                                        message.sender === 'user'
                                            ? 'bg-gradient-to-br from-[#D4C4B0] to-[#C4B4A0] text-[#2A2A2A]'
                                            : 'bg-white border border-[#E8E6E1] text-[#2A2A2A]'
                                    } px-4 py-3 shadow-sm`}>
                                        <p className="text-sm font-light leading-relaxed">{message.text}</p>
                                        <p className={`text-[9px] mt-1.5 uppercase tracking-wider ${
                                            message.sender === 'user' ? 'text-[#3A2F23]/60' : 'text-gray-400'
                                        }`}>
                                            {message.timestamp.toLocaleTimeString('en-US', { 
                                                hour: '2-digit', 
                                                minute: '2-digit' 
                                            })}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quick Actions */}
                        <div className="px-6 py-3 bg-white border-t border-[#E8E6E1]">
                            <div className="flex gap-2 overflow-x-auto">
                                {quickActions.map((action, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setInputValue(action)}
                                        className="px-4 py-2 bg-[#F5E6D3]/50 hover:bg-[#E8D5C4] text-[#3A2F23] text-xs font-light whitespace-nowrap transition-colors duration-300 border border-[#E8E6E1]"
                                    >
                                        {action}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-[#E8E6E1]">
                            <div className="flex gap-3 items-center">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask me anything..."
                                    className="flex-1 px-4 py-3 bg-[#FBF9F7] border border-[#E8E6E1] focus:outline-none focus:border-[#D4C4B0] transition-colors text-sm font-light placeholder:text-gray-400"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim()}
                                    className="w-12 h-12 bg-gradient-to-br from-[#D4C4B0] to-[#C4B4A0] hover:from-[#C4B4A0] hover:to-[#B4A490] disabled:bg-gray-300 text-white flex items-center justify-center transition-all duration-300 disabled:cursor-not-allowed"
                                >
                                    <HiPaperAirplane className="w-5 h-5 text-[#2A2A2A]" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
