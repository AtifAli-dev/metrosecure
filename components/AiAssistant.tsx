
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const knowledgeBase = `
📋 General & Booking FAQs
- Cleaning types: Maintenance, Deep Cleaning, End of Tenancy, Post-Construction.
- Recurring: Weekly (20% off), Bi-weekly (15%), Monthly (10%).
- Advance booking: 3-5 days recommended.
- Same day: If available, call before 10 AM.
- Weekends: Saturday yes, Sunday premium fee.
- Minimum: 2h maintenance, 3h deep clean.
- Estimates: Instant quotes over phone or site walkthrough.
- No legal contracts. Cancel anytime.
- No hidden fees. Prices include labor and supplies.
- Areas: All over England and Wales, plus major Scottish cities.
- Rates: Maintenance is flat rate; Deep cleans are hourly.
- Payment: Major cards, bank transfer, online portal.
- Deposit: 20% for large jobs (End of Tenancy).

🧼 Process & Safety
- Supplies: We provide pro-grade solutions and vacuums.
- Products: Eco-friendly "Green Cleaning" package available.
- Vetting: BS7858 standard checks, SIA licensing for security.
- Insurance: £10m Liability/Bonded/Worker's Comp covered.
- Training: 2-week Shadow Program for new staff.
- Satisfaction: 24-Hour Satisfaction Guarantee.

🛡️ Commercial & Security (B2B)
- Partners: Integrated with CAFM (Concept Evolution, Planon).
- TUPE: Expertly managed transfers.
- White Label: Can use partner branding/uniforms.
- Vetting: Enhanced DBS for schools/healthcare.
- Standards: BICSc trained, RAMS/COSHH provided for every site.
- Security: SIA licensed DS, SG, CCTV. Keyholding (BS7984-1).
- Monitoring: GPS-enabled guard touring systems.
- Lone Worker: 24/7 Control Room check-ins.
- ESG: Monthly reporting on chemicals, waste, and social value.

Contact:
Phone: 01316666666
Email: control@metrosecure.co.uk
Address: Greenwood House, Mitchem, London
`;

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: 'Hello! I am your MetroSecure assistant. How can I help you with our security or cleaning services today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are an expert corporate assistant for MetroSecure UK. 
          Use the following knowledge base to answer user questions:
          ${knowledgeBase}
          
          Guidelines:
          - Be polite, professional, and concise.
          - If you are stuck or don't know the answer, tell the user to contact us:
            Call: 01316666666
            Email: control@metrosecure.co.uk
          - Always mention that we serve all of England and Wales.`,
        }
      });

      const aiText = response.text || "I apologize, I'm having difficulty processing that. Please contact our support team at 01316666666 or control@metrosecure.co.uk.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please reach out to us at 01316666666 or control@metrosecure.co.uk for immediate assistance." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[550px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-100 overflow-hidden">
          <div className="p-4 bg-secondary text-white flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Bot size={18} />
              </div>
              <span className="font-bold font-heading">MetroSecure Assistant</span>
            </div>
          </div>

          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[85%] space-x-2 ${m.role === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${m.role === 'user' ? 'bg-primary text-white' : 'bg-gray-200 text-secondary'}`}>
                    {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-white shadow-sm border border-gray-100 rounded-tl-none text-gray-700'}`}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Loader2 className="animate-spin" size={16} />
                  <span className="text-xs font-bold">Checking FAQs...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about our services..."
                className="flex-grow p-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="p-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiAssistant;