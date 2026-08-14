export default function SteamHeart({ className = '', color = 'currentColor', ...rest }) {
  return (
    <svg
      className={`steam-glyph ${className}`}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...rest}
    >
      <path
        d="M20 30c-6-4.2-9.5-8-9.5-12.2C10.5 14.6 12.8 12 16 12c1.7 0 3.2.9 4 2.3.8-1.4 2.3-2.3 4-2.3 3.2 0 5.5 2.6 5.5 5.8 0 4.2-3.5 8-9.5 12.2Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M17 6c0 1.6-1.6 1.6-1.6 3.2s1.6 1.6 1.6 3.2"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M23 6c0 1.6-1.6 1.6-1.6 3.2s1.6 1.6 1.6 3.2"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
