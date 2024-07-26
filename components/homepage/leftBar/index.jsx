import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const LeftBar = ({
  setSelectedData,
  selectedData,
  setSelectedYear,
  selectedYear,
  data,
}) => {
  return (
    <section className="p-6 flex justify-between flex-col dark:text-white left-bar">
      <div className="grid grid-cols-2 sm:grid-cols-1 justify-between">
        <div>
          <h4 className="text-[13px] leading-[20.8px]">Jeremy Cai</h4>
          <p className="my-4">Current: Buenos Aires.</p>
          <div className="flex flex-col gap-4">
            <ul>
              <li>
                CEO: <span className="underline">Italic.</span>
              </li>
              <li>
                Founder:{" "}
                <span className="underline">Fountain, Blemish, Courtly.</span>
              </li>
              <li>
                Owner: <span className="underline">Tonari, Carbon.</span>
              </li>
              <li>
                &gt;$250M raised, &gt;$200M sales. <br />
                2015 Thiel Fellow, YC S15.
              </li>
            </ul>

            <ul>
              <li>Investor in ~130 startups & funds.</li>
              <li>
                Select LP:{" "}
                <span className="underline">
                  Dragonfly, Patron, Treble, 776.
                </span>
              </li>
              <li>
                Select Direct:
                <span className="underline">
                  {" "}
                  Ramp, Notion, Settle, Backbone, Patch, Pipe, Dandelion, Opal,
                  Slope, Olipop, Knot.
                </span>
              </li>
            </ul>
          </div>

          <p className="mt-4">
            I commission artists to recreate memories and canon events from my
            childhood.
          </p>
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
        {data &&
          Object.keys(data).map((key) => (
            <Disclosure as="div" defaultOpen={key == selectedYear} key={key}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <h5>{key}</h5>
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm/5">
                <ul className="collection-list-style">
                  {data[key].map((item, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedYear(key);
                        setSelectedData(item);
                      }}
                      className={`${
                        item.id == selectedData.id ? "" : "opacity-30"
                      }`}
                    >
                      <span className="line-clamp-1">{item.Slug}</span>
                    </li>
                  ))}
                </ul>
              </DisclosurePanel>
            </Disclosure>
          ))}
      </div>
    </section>
  );
};

export default LeftBar;
