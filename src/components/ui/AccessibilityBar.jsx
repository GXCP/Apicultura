import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Eye, Smartphone } from "lucide-react";

export default function AccessibilityBar() {
  const [highContrast, setHighContrast] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    if (highContrast) {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
  }, [highContrast]);

  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return;

    if (mobileView) {
      document.body.classList.add("mobile-view");
      // Scale the root to fit the window width showing a phone-sized view
      const applyScale = () => {
        const windowW = window.innerWidth;
        const phoneW = 390;
        if (windowW > phoneW) {
          const scale = Math.min(windowW / phoneW * 0.85, 1);
          root.style.transform = `scale(${scale})`;
          root.style.transformOrigin = "top center";
          root.style.marginBottom = `-${root.scrollHeight * (1 - scale)}px`;
        }
      };
      applyScale();
      window.addEventListener("resize", applyScale);
      return () => window.removeEventListener("resize", applyScale);
    } else {
      document.body.classList.remove("mobile-view");
      root.style.transform = "";
      root.style.transformOrigin = "";
      root.style.marginBottom = "";
    }
  }, [mobileView]);

  const btnBase = {
    width: "48px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid",
    cursor: "pointer",
    transition: "all 0.3s",
    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
    filter: "none",
  };

  const buttons = (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 2147483647,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        filter: "none",
        transform: "translateZ(0)",
      }}
    >
      <button
        onClick={() => setHighContrast((v) => !v)}
        title={highContrast ? "Desativar alto contraste" : "Ativar alto contraste"}
        style={{
          ...btnBase,
          borderColor: highContrast ? "#facc15" : "#94A3B8",
          backgroundColor: highContrast ? "#facc15" : "#1A1C1E",
          color: highContrast ? "#000" : "#94A3B8",
        }}
      >
        <Eye size={20} />
      </button>

      <button
        onClick={() => setMobileView((v) => !v)}
        title={mobileView ? "Desativar modo mobile" : "Ativar modo mobile"}
        style={{
          ...btnBase,
          borderColor: mobileView ? "#D45D31" : "#94A3B8",
          backgroundColor: mobileView ? "#D45D31" : "#1A1C1E",
          color: mobileView ? "#fff" : "#94A3B8",
        }}
      >
        <Smartphone size={20} />
      </button>
    </div>
  );

  return createPortal(buttons, document.body);
}