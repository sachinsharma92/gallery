"use client";
import CenterContainer from "@/components/homepage/centerContainer";
import LeftBar from "@/components/homepage/leftBar";
import RightBar from "@/components/homepage/rightBar";
import { ThemeContext } from "@/store/ThemeProvider";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const refMainComponent = useRef(null);
  const [isFullScreen, setFullScreen] = useState(false);
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "";
    setTheme(currentTheme);
    
    const handleMediaChange = ({ matches }) => {
      setTheme(matches ? "dark" : "");
    };

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleMediaChange);

    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", handleMediaChange);
    };
  }, []);

  const fullScreenToggle = () => {
    const screenControl = refMainComponent.current;
    if (screenControl) {
      if (screenControl.requestFullscreen) {
        screenControl.requestFullscreen();
        setFullScreen(true);
      } else if (screenControl.mozRequestFullScreen) {
        screenControl.mozRequestFullScreen(); // Firefox
        setFullScreen(true);
      } else if (screenControl.webkitRequestFullscreen) {
        screenControl.webkitRequestFullScreen(); // Safari
        setFullScreen(true);
      } else if (screenControl.msRequestFullscreen) {
        screenControl.msRequestFullscreen(); // IE/Edge
        setFullScreen(true);
      }
    }

    if (document.fullscreenElement) {
      document.exitFullscreen();
      setFullScreen(false);
    }
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        document.exitFullscreen();
        setFullScreen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <section
        className={`homepage-layout ${theme} ${
          isFullScreen && "fullscreen-active"
        }`}
        ref={refMainComponent}
      >
        {!isFullScreen && <RightBar />}
        <CenterContainer
          isFullScreen={isFullScreen}
          clickHandler={fullScreenToggle}
        />
        {!isFullScreen && <LeftBar setTheme={setTheme} />}
      </section>
    </ThemeContext.Provider>
  );
}
