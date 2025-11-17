export default function Button({
  children,
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  return (
    <button
      className={`mx-auto flex font-semibold cursor-pointer shadow hover:brightness-115 hover:shadow-xl active:translate-y-1 active:shadow-md active:scale-98 duration-150 transition-all`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
