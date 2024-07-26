"use client";
import CenterContainer from "@/components/homepage/centerContainer";
import LeftBar from "@/components/homepage/leftBar";
import RightBar from "@/components/homepage/rightBar";
import { getPages } from "@/dataManager/Notion";
import { ThemeContext } from "@/store/ThemeProvider";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const refMainComponent = useRef(null);
  const [isFullScreen, setFullScreen] = useState(false);
  const [theme, setTheme] = useState("");
  const [data, setData] = useState({});
  const [selectedData, setSelectedData] = useState({});
  const [selectedYear, setSelectedYear] = useState(null);
  useEffect(() => {
    const currentTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "";
    setTheme(currentTheme);

    const handleMediaChange = ({ matches }) => {
      setTheme(matches ? "dark" : "");
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleMediaChange);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleMediaChange);
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

  function transformData(rawData) {
    const transformedData = {};
    rawData.data.results.forEach((item) => {
      const year = item.properties["Year Created"]?.number || "";
      const id = item.id;
      const description =
        item.properties.Description?.rich_text?.[0]?.plain_text || "";
      const artist = item.properties.Artist?.rich_text?.[0]?.plain_text || "";
      const subtitle =
        item.properties.Subtitle?.rich_text?.[0]?.plain_text || "";
      const status = item.properties.Status?.status?.name || "";
      const assets = item.properties.Asset?.files || [];
      const yearTag =
        item.properties["Year Tag"]?.rich_text?.[0]?.plain_text || "";
      const slug = item.properties.Slug?.formula?.string || "";
      const name = item.properties.Name?.title?.[0]?.plain_text || "";

      const formattedItem = {
        id: id,
        Description: description,
        Artist: artist,
        "Year Created": year.toString(),
        Subtitle: subtitle,
        Status: status,
        Asset: assets,
        "Year Tag": yearTag,
        Slug: slug,
        Name: name,
      };

      if (!transformedData[year]) {
        transformedData[year] = [];
      }
      transformedData[year].push(formattedItem);
    });
    if (Object.keys(transformedData).length > 0) {
      const firstYear = Object.keys(transformedData)[0];
      const firstData = transformedData[firstYear][0];
      setSelectedYear(firstYear);
      setSelectedData(firstData);
      setData(transformedData);
    }
  }

  useEffect(() => {
    getPages()
      .then((res) => {
        transformData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <section
        className={`homepage-layout ${theme} ${
          isFullScreen && "fullscreen-active"
        }`}
        ref={refMainComponent}
      >
        {!isFullScreen && (
          <LeftBar
            data={data}
            selectedData={selectedData}
            setSelectedData={setSelectedData}
            setSelectedYear={setSelectedYear}
            selectedYear={selectedYear}
          />
        )}
        <CenterContainer
          isFullScreen={isFullScreen}
          clickHandler={fullScreenToggle}
          selectedData={selectedData}
        />
        {!isFullScreen && (
          <RightBar setTheme={setTheme} selectedData={selectedData} />
        )}
      </section>
    </ThemeContext.Provider>
  );
}
