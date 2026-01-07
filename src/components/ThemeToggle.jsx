function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
   className="ml-4 px-3 py-1 text-sm font-medium
           text-gray-700 dark:text-gray-300
           border rounded-md
           border-gray-400 dark:border-gray-600
           hover:text-[color:var(--color-tealPrimary)]
           hover:border-[color:var(--color-tealPrimary)]
           transition"

      aria-label="Toggle dark mode"
    >
      {isDark ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;
