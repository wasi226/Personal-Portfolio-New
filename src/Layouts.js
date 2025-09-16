import React from "react";

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <style>
        {`
          :root {
            --primary-glow: rgba(139, 92, 246, 0.5);
            --secondary-glow: rgba(236, 72, 153, 0.3);
            --accent-glow: rgba(59, 130, 246, 0.4);
          }
          
          .glow-effect {
            box-shadow: 0 0 20px var(--primary-glow);
          }
          
          .text-glow {
            text-shadow: 0 0 20px var(--primary-glow);
          }
          
          .floating-animation {
            animation: floating 6s ease-in-out infinite;
          }
          
          @keyframes floating {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          .shimmer-effect {
            position: relative;
            overflow: hidden;
          }
          .shimmer-effect::after {
            content: '';
            position: absolute;
            top: 0;
            left: -150%;
            width: 50%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            transform: skewX(-25deg);
            animation: shimmer 6s infinite;
          }
          @keyframes shimmer {
            0% { left: -150%; }
            50% { left: 150%; }
            100% { left: -150%; }
          }
          
          @keyframes progress-bar-fill {
            from { width: 0%; }
          }
          .progress-animated {
            animation: progress-bar-fill 1.5s ease-out 0.5s forwards;
          }
          
          .fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
            transform: translateY(30px);
          }
          
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .gradient-text {
            background: linear-gradient(135deg, #8B5CF6, #EC4899, #3B82F6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .particle-bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
              radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%);
            pointer-events: none;
            z-index: -1;
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          .section-padding {
            padding: 6rem 0;
          }
        `}
      </style>
      <div className="relative particle-bg">
        {children}
      </div>
    </div>
  );
}