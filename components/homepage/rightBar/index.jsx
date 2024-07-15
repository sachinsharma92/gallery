const RightBar = () => {
  const collection = [
    "2024.04 Southern Islands - Keiko Fukuyama",
    "2024.04 Southern Islands - Keiko Fukuyama",
    "2024.04 Southern Islands - Keiko Fukuyama",
    "2024.04 Southern Islands - Keiko Fukuyama",
  ];
  return (
    <section className="p-6 flex justify-between flex-col">
      <div className="grid grid-cols-2 sm:grid-cols-1 justify-between">
        <div>
          <h4 className="text-xs">Jeremy Cai</h4>
          <p className="my-4">Current: Buenos Aires.</p>
          <div className="flex flex-col gap-4">
            <ul>
              <li>CEO: <span className="underline">Italic.</span></li>
              <li>Founder: <span className="underline">Fountain, Blemish, Courtly.</span></li>
              <li>Owner: <span className="underline">Tonari, Carbon.</span></li>
              <li>
                &gt;$250M raised, &gt;$200M sales. <br />
                2015 Thiel Fellow, YC S15.
              </li>
            </ul>

            <ul>
              <li>Investor in ~130 startups & funds.</li>
              <li>Select LP: <span className="underline">Dragonfly, Patron, Treble, 776.</span></li>
              <li>
                Select Direct:<span className="underline"> Ramp, Notion, Settle, Backbone, Patch, Pipe,
                Dandelion, Opal, Slope, Olipop, Knot.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-right sm:hidden">
          <div className="theme-mode flex gap-1 justify-end mb-4">
            <button>Light</button>
            <span>/</span>
            <button>Dark</button>
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
      </div>

      <div className="collection-list flex-col gap-4 hidden sm:flex">
        <h4 className="text-xs">Collection</h4>
        <div>
          <div className="flex flex-col gap-4">
            <div>
              <h5>2024</h5>
              <ul className="collection-list-style">
                {collection.map((item, index) => (
                  <li key={index}><span className="line-clamp-1">{item}</span></li>
                ))}
              </ul>
            </div>

            <div>
              <h5>2023</h5>
              <ul className="collection-list-style">
                {collection.map((item, index) => (
                  <li key={index} className="opacity-30"><span className="line-clamp-1">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightBar;
