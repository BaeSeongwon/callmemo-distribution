function CallMemoLogo({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="#2563EB" />
      <path
        d="M10 12.5c0-1.1.9-2 2-2h1.2c.6 0 1 .4 1 1v.3c0 .6-.4 1-1 1H12.5c-.3 0-.5.2-.5.5v8c0 .3.2.5.5.5H14c.6 0 1 .4 1 1v.2c0 .6-.4 1-1 1h-1.8c-1.1 0-2-.9-2-2v-10z"
        fill="white"
      />
      <path
        d="M16.5 10.5h2.8c2.2 0 4 1.8 4 4s-1.8 4-4 4h-1.3v3.5c0 .6-.4 1-1 1h-.5c-.6 0-1-.4-1-1v-10.5c0-.6.4-1 1-1h.5c.6 0 1 .4 1 1v.5zm1.5 6h1.3c1.1 0 2-.9 2-2s-.9-2-2-2h-1.3v4z"
        fill="white"
      />
      <rect x="8" y="22" width="16" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="10" y="25" width="12" height="1.5" rx="0.75" fill="white" opacity="0.5" />
    </svg>
  )
}

export { CallMemoLogo }
