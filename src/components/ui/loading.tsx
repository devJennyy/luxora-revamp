import { useEffect } from "react";

const LoadingAnimation = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className="sm:h-[80vh] h-[70vh] w-full text-[5rem] bg-main z-40 flex justify-center items-center">
      <div className="w-[200px] h-[40px] flex flex-wrap justify-around items-center">
        <style>{`
          @keyframes bounceDot {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 1px 1px #fff;
              visibility: visible;
            }
            50% {
              transform: scale(0.25);
              box-shadow: none;
            }
          }
        `}</style>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="w-4 h-4 rounded-full bg-primary block"
            style={{
              animation: "bounceDot 1s infinite ease-in-out",
              animationDelay: `${0.2 + i * 0.2}s`,
              transformOrigin: "center center",
              visibility: "hidden",
            }}
          />
        ))}
        <h6 className="w-full text-white text-xl text-center tracking-[0.6em] !mt-5 pl-[10px]">
          Loading
        </h6>
      </div>
    </div>
  );
};

export default LoadingAnimation;
