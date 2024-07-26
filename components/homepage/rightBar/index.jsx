const RightBar = ({ setTheme, selectedData }) => {
  return (
    <section className="p-6 flex justify-between flex-col dark:text-white right-bar">
      <div className="text-right hidden sm:block">
        <div className="theme-mode flex gap-1 justify-end mb-4">
          <button
            className="uppercase underline dark:no-underline"
            onClick={() => setTheme("")}
          >
            Light
          </button>
          <span>/</span>
          <button
            className="uppercase dark:underline"
            onClick={() => setTheme("dark")}
          >
            Dark
          </button>
        </div>

        <div className="social-sec">
          <ul className="flex flex-col gap-1">
            <li>Notes</li>
            <li>X</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      <div>
        <p className="text-[13px] leading-[19.5px]">
          {selectedData.Artist} <br />
          <span className="italic">{selectedData.Name},</span>{" "}
          {selectedData["Year Created"]}
        </p>
        <p className="my-4">
          {selectedData.Subtitle} <br /> {selectedData["Year Tag"]}
        </p>
        <p className="text-[13px] leading-[19.5px]">
          {selectedData.Description}
        </p>
      </div>
    </section>
  );
};

export default RightBar;
