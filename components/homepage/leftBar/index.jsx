const LeftBar = ({ setTheme }) => {
  return (
    <section className="p-6 flex justify-between flex-col dark:text-white">
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
          <ul className="flex flex-col gap-2">
            <li>Notes</li>
            <li>X</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      <div>
        <p className="text-xs leading-[18px]">
          Keiko Fukuyama <br />
          <span className="italic">Southern islands,</span> 2000
        </p>
        <p className="my-4 leading-[15px]">
          Commissioned by Jeremy Cai. <br /> 2024.01
        </p>
        <p className="text-xs leading-[18px]">
          Barnes was born in Livingston, Alabama in 1895 and attended both the
          Art Institute of Chicago and Columbia University.
        </p>
      </div>
    </section>
  );
};

export default LeftBar;
