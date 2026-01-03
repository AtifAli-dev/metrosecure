import React from 'react';

const AiAssistant: React.FC = () => {
  // CONFIGURATION
  // Replace with your actual number (format: 441316666666)
  const phoneNumber = "441316666666"; 
  const welcomeMessage = "Hello MetroSecure, I would like to inquire about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(welcomeMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center transition-transform hover:scale-110 active:scale-95 duration-300"
        title="Chat on WhatsApp"
      >
        {/* Real WhatsApp Icon using SVG */}
        <div className="w-16 h-16 rounded-full shadow-2xl flex items-center justify-center bg-[#25D366]">
          <svg
            viewBox="0 0 24 24"
            width="35"
            height="35"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.301-.15-1.767-.872-2.04-.971-.272-.1-.47-.15-.667.15-.197.3-.763.971-.934 1.171-.17.2-.341.225-.641.075-1.018-.51-1.748-.838-2.451-1.448-.609-.53-1.014-1.183-1.134-1.383-.12-.2-.013-.308.137-.458.135-.135.301-.35.451-.525.151-.175.201-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.667-1.608-.913-2.201-.24-.578-.485-.5-.667-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.418.249-.697.249-1.294.174-1.418-.075-.125-.277-.2-.578-.35zM12.01 21c-1.625 0-3.218-.437-4.609-1.265L3 21l1.295-4.26c-.902-1.416-1.378-3.057-1.378-4.739 0-4.964 4.045-9 9-9s9 4.036 9 9-4.045 9-9 9zM12 2.045c-5.466 0-9.91 4.444-9.91 9.91 0 1.748.459 3.453 1.33 4.965L2 22l5.223-1.371a9.852 9.852 0 0 0 4.777 1.226c5.466 0 9.91-4.444 9.91-9.91s-4.444-9.91-9.91-9.91z" />
          </svg>
        </div>

        {/* Pulse effect to draw attention */}
        <span className="absolute -z-10 inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
      </a>
    </div>
  );
};

export default AiAssistant;