import React from 'react';

const Logo: React.FC<{ className?: string; isDark?: boolean }> = ({ className = "h-12", isDark = false }) => {
  const color = isDark ? "#1F487C" : "#FFFFFF";

  return (
    <svg
      viewBox="0 0 450 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* REALITEZA - Local Font + Robust CSS Fallback */}
      <text
        x="0"
        y="65"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        style={{
          fontFamily: "'Indigo Outline', 'DM Sans', sans-serif",
          fontSize: "78px",
          fontWeight: "800",
          letterSpacing: "1px"
        }}
      >
        REALITEZA
      </text>

      {/* Accent Geometric Element */}
      <rect x="0" y="78" width="450" height="4" fill={color} opacity="0.3" />
      <rect x="0" y="78" width="120" height="4" fill={color} />

      {/* Tagline - Solid Style */}
      <text
        x="0"
        y="110"
        fill={color}
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "18px",
          fontWeight: "800",
          letterSpacing: "1.5px"
        }}
      >
        BUILDING ENVELOPE ENGINEERING SERVICES
      </text>
    </svg>
  );
};

export default Logo;
