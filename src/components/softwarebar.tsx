import Grasshopper from "/src/assets/Grasshopper.png";
import OpenStudio from "/src/assets/OpenStudio.png";
import EnergyPlus from "/src/assets/EnergyPlus.png";
import HoneyBee from "/src/assets/HoneyBee.png";
import Rhinoceros from "/src/assets/Rhinoceros.png";
import Sketchup from "/src/assets/Sketchup.png";
import Climate from "/src/assets/Climate Consultant.png";
import Autocad from "/src/assets/Autocad.png";
import Revit from "/src/assets/Revit.webp";
import Dialux from "/src/assets/Dialux.png";

interface IProps {
  title: string;
  sofwareList: string[];
}

const software = [
  {
    name: "Grasshopper",
    icon: Grasshopper,
    link: "https://www.grasshopper3d.com/",
  },
  {
    name: "OpenStudio",
    icon: OpenStudio,
    link: "https://openstudio.net/",
  },
  {
    name: "EnergyPlus",
    icon: EnergyPlus,
    link: "https://energyplus.net/",
  },
  {
    name: "HoneyBee",
    icon: HoneyBee,
    link: "https://www.ladybug.tools/honeybee.html",
  },
  {
    name: "Rhinoceros",
    icon: Rhinoceros,
    link: "https://www.rhino3d.com/",
  },
  {
    name: "Sketchup",
    icon: Sketchup,
    link: "https://www.sketchup.com/pt-br",
  },
  {
    name: "Climate Consultant",
    icon: Climate,
    link: "https://www.sbse.org/resources/climate-consultant",
  },
  {
    name: "Autocad",
    icon: Autocad,
    link: "https://www.autodesk.com/br/products/autocad",
  },
  {
    name: "Revit",
    icon: Revit,
    link: "https://www.autodesk.com/br/products/revit/architecture",
  },
  {
    name: "Dialux",
    icon: Dialux,
    link: "https://www.dialux.com",
  }
];

function SoftwareBar({ title, sofwareList }: IProps) {
  const showSoftware =
    sofwareList.length > 1
      ? software.filter((item) => sofwareList.includes(item.name))
      : software;

  return (
    <div className="bg-gray-100 py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="p-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-7">
              {showSoftware.map((item, index) => (
                <a href={item.link} key={index} target="_blank">
                  <img
                    alt={item.name}
                    src={item.icon}
                    width={158}
                    height={48}
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoftwareBar;
