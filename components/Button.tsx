export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "submit";
}) {
  return (
    <button
      className={`rounded  text-text  hover:text-secondary font-semibold cursor-pointer shadow hover:brightness-115 hover:shadow-xl active:translate-y-1 active:shadow-md active:scale-98 duration-150 transition-all`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
