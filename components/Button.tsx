export default function Button({
  children,
  head,
  onClick,
  type = "button",
  ariaLabel,
}: {
  children: React.ReactNode;
  head?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
}) {
  return (
    <button
      className={`mx-auto flex font-semibold cursor-pointer ${head ? "brightness-120 hover:brightness-80 transition-brightness" : "shadow hover:shadow-xl active:translate-y-1 active:shadow-md active:scale-98 duration-150 transition-all"}`}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
