import React, { useState, useEffect } from 'react';
import SlideContainer from '../SlideContainer';
import { dialogueMessages } from '../../constants/content';
import { DialogueMessage } from '../../types';

interface BubbleProps {
    message: DialogueMessage;
    isVisible: boolean;
}

const ChatBubble: React.FC<BubbleProps> = ({ message, isVisible }) => {
    const isGuru = message.speaker === "Guru";
    const bubbleClass = isGuru
        ? "bg-brand-primary text-white self-start"
        : "bg-gray-200 text-brand-text self-end";
    
    return (
        <div
            className={`flex flex-col mb-4 max-w-xs md:max-w-md w-fit transition-all duration-500 ${isVisible ? 'animate-bubble-pop' : 'opacity-0'}`}
            style={{
                alignSelf: isGuru ? 'flex-start' : 'flex-end',
                transformOrigin: isGuru ? 'bottom left' : 'bottom right'
            }}
        >
            <p className="text-sm font-semibold mb-1 px-1" style={{textAlign: message.align}}>{message.speaker}</p>
            <div className={`p-3 rounded-2xl shadow-md ${bubbleClass}`}>
                <p>{message.text}</p>
            </div>
        </div>
    );
};

const Slide5: React.FC = () => {
    const [visibleMessages, setVisibleMessages] = useState<boolean[]>(new Array(dialogueMessages.length).fill(false));
    const [showClosing, setShowClosing] = useState(false);

    useEffect(() => {
        const timeouts: ReturnType<typeof setTimeout>[] = [];
        dialogueMessages.forEach((_, index) => {
            const timeout = setTimeout(() => {
                setVisibleMessages(prev => {
                    const newVisible = [...prev];
                    newVisible[index] = true;
                    return newVisible;
                });
            }, index * 1000); // Stagger the animation
            timeouts.push(timeout);
        });

        const closingTimeout = setTimeout(() => {
            setShowClosing(true);
        }, dialogueMessages.length * 1000);
        timeouts.push(closingTimeout);

        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, []);

    return (
        <SlideContainer>
            <div className="flex flex-col h-full">
                <h2 className="text-xl md:text-2xl font-bold text-brand-primary mb-4 text-center border-b pb-2">
                    Pentingnya Menerima Diri & Menjaga Diri
                </h2>

                {/* Chat Bubbles */}
                <div className="flex-grow flex flex-col space-y-2 p-2">
                    {dialogueMessages.map((msg, index) => (
                        <ChatBubble key={index} message={msg} isVisible={visibleMessages[index]} />
                    ))}
                </div>

                {/* Closing Message Section (integrated at the bottom) */}
                <div className={`mt-8 transition-all duration-1000 ${showClosing ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'}`}>
                     <div className="p-6 rounded-xl bg-gradient-to-br from-brand-secondary to-brand-dark text-white shadow-2xl">
                        <h3 className="text-2xl font-bold mb-4 text-center">Pesan Penutup</h3>
                        <p className="text-sm leading-relaxed mb-4">
                           Teman-teman yang hebat, ingatlah bahwa setiap dari kalian punya sesuatu yang sangat berharga, yaitu diri sendiri. Dalam pergaulan, terutama antara laki-laki dan perempuan, menjaga batasan adalah tanda kalian menghargai diri dan orang lain.
                        </p>
                        <p className="text-sm leading-relaxed font-semibold">
                            Jadilah pribadi yang mampu membentengi diri dengan batasan yang baik, karena itu adalah langkah awal untuk meraih impianmu dengan penuh keyakinan dan rasa hormat.
                        </p>
                    </div>
                </div>
            </div>
        </SlideContainer>
    );
};

export default Slide5;