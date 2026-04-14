export default function Button({
  children,
  head,
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  head?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  return (
    <button
      className={`mx-auto flex font-semibold cursor-pointer ${head ? " hover:text-secondary transition-colors" : "shadow hover:brightness-115 hover:shadow-xl active:translate-y-1 active:shadow-md active:scale-98 duration-150 transition-all"}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
