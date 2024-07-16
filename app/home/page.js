"use client";
import CenterContainer from "@/components/homepage/centerContainer";
import LeftBar from "@/components/homepage/leftBar";
import RightBar from "@/components/homepage/rightBar";
import { useEffect, useRef, useState } from "react";
import cx from "classnames";

export default function HomePage() {
  const refMainComponent = useRef(null);
  const [isFullScreen, setFullScreen] = useState(false);

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

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", ({ matches }) => {
        if (matches) {
          setTheme("dark");
        } else {
          setTheme("");
        }
      });
  }, []);
  return (
    <section
      className={cx("homepage-layout", {
        'fullscreen-active': isFullScreen,
      })}
      ref={refMainComponent}
    >
      {!isFullScreen && <RightBar />}
      <CenterContainer isFullScreen={isFullScreen} clickHandler={fullScreenToggle} />
      {!isFullScreen && <LeftBar />}
    </section>
  );
}
