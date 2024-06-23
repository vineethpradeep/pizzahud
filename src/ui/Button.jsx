import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-primary poppins transform rounded-full px-6 py-3 text-sm text-white ring-red-300 transition duration-300 hover:scale-105 focus:ring-4";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round:
      "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "bg-stone-300 poppins transform rounded-full px-6 py-3 text-sm text-stone-950 ring-stone-200 transition duration-300 hover:scale-105 focus:ring-4 disabled:cursor-not-allowed",
    geoBtn:
      "rounded-lg disabled:cursor-not-allowed poppins bg-yellow-400 transform rounded-full px-6 py-3 text-sm text-stone-800 ring-yellow-300 transition duration-300 hover:scale-105 focus:ring-4 ",
    cartBtn:
      "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed py-1 md:px-3.5 md:py-2 text-sm mx-auto max-w-xs space-x-5 px-6 flex items-center justify-between",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button className={styles[type]} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}
