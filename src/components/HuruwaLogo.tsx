type HuruwaLogoProps = {
  className?: string;
};

export default function HuruwaLogo({ className = "h-10 w-10" }: HuruwaLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="huruwa-gradient" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>

      <rect width="100" height="100" rx="28" fill="url(#huruwa-gradient)" />

      <circle cx="32" cy="38" r="7" fill="white" />
      <circle cx="68" cy="38" r="7" fill="white" />

      <rect x="28" y="64" width="6" height="10" rx="3" fill="white" opacity="0.8" />
      <rect x="39" y="58" width="6" height="22" rx="3" fill="white" opacity="0.9" />
      <rect x="50" y="54" width="6" height="30" rx="3" fill="white" />
      <rect x="61" y="58" width="6" height="22" rx="3" fill="white" opacity="0.9" />
      <rect x="72" y="64" width="6" height="10" rx="3" fill="white" opacity="0.8" />

      <circle cx="80" cy="20" r="4" fill="#fde047" opacity="0.9" />
    </svg>
  );
}