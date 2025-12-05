interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({ className = '', showText = true }: LogoProps) => {
  return (
    <div className={`logo ${className}`}>
      <svg
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
      >
        {/* Círculo principal com arcos */}
        <g className="logo-icon">
          {/* Círculo central */}
          <circle
            cx="80"
            cy="100"
            r="45"
            stroke="#7A63FF"
            strokeWidth="4"
            fill="none"
          />
          
          {/* Arcos externos */}
          <path
            d="M 80 40 A 60 60 0 0 1 130 70"
            stroke="#7A63FF"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 135 90 A 60 60 0 0 1 125 140"
            stroke="#7A63FF"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 110 155 A 60 60 0 0 1 50 155"
            stroke="#7A63FF"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 30 135 A 60 60 0 0 1 25 85"
            stroke="#7A63FF"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 35 65 A 60 60 0 0 1 60 45"
            stroke="#7A63FF"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Arcos internos */}
          <path
            d="M 55 55 A 35 35 0 0 0 40 85"
            stroke="#7A63FF"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 40 115 A 35 35 0 0 0 65 145"
            stroke="#7A63FF"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 100 140 A 35 35 0 0 0 120 110"
            stroke="#7A63FF"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 115 75 A 35 35 0 0 0 95 55"
            stroke="#7A63FF"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        
        {showText && (
          <>
            {/* Linha separadora */}
            <line
              x1="155"
              y1="55"
              x2="155"
              y2="145"
              stroke="#E7E7E7"
              strokeWidth="1"
            />
            
            {/* Texto GBIT Solutions */}
            <text
              x="175"
              y="85"
              fill="#E7E7E7"
              fontFamily="'Tenor Sans', serif"
              fontSize="36"
              fontWeight="400"
            >
              GBIT
            </text>
            <text
              x="175"
              y="125"
              fill="#E7E7E7"
              fontFamily="'Tenor Sans', serif"
              fontSize="36"
              fontWeight="400"
            >
              Solutions
            </text>
            <text
              x="175"
              y="150"
              fill="#969696"
              fontFamily="'Montserrat', sans-serif"
              fontSize="12"
              fontWeight="400"
              fontStyle="italic"
            >
              Soluções Completas em TI
            </text>
          </>
        )}
      </svg>
    </div>
  );
};

export default Logo;