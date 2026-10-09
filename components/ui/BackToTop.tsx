"use client";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="transition duration-300 hover:text-cyan-400"
    >
      Back to top ↑
    </button>
  );
}