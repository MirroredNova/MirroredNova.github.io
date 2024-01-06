import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { useWindowSize } from "usehooks-ts";

const countryData = [
  ["Country", "year", { role: "tooltip", type: "string", p: { html: true } }],
  ["US", 2000, "Home Country"],
  ["MX", 2018, "First Visit Year: 2018"],
  ["CA", 2019, "First Visit Year: 2019"],
  ["IS", 2020, "First Visit Year: 2020"],
  ["CR", 2021, "First Visit Year: 2021"],
  ["GB", 2021, "First Visit Year: 2021"],
  ["CH", 2022, "First Visit Year: 2022"],
  ["IT", 2022, "First Visit Year: 2022"],
  ["VA", 2022, "First Visit Year: 2022"],
  ["AT", 2022, "First Visit Year: 2022"],
  ["DE", 2022, "First Visit Year: 2022"],
  ["NL", 2022, "First Visit Year: 2022"],
  ["BE", 2022, "First Visit Year: 2022"],
  ["FR", 2022, "First Visit Year: 2022"],
  ["DK", 2022, "First Visit Year: 2022"],
  ["NO", 2023, "First Visit Year: 2023"],
  ["SE", 2023, "First Visit Year: 2023"],
  ["FI", 2023, "First Visit Year: 2023"],
  ["JP", 2023, "First Visit Year: 2023"],
];

const countryOptions = {
  colorAxis: {
    colors: [
      "#1b2124",
      "#1f5675",
      "#578fcc",
      "#54c1ae",
      "#45e281",
      "#bde75b",
      "#f7ae4e",
    ],
    values: [2000, 2018, 2019, 2020, 2021, 2022, 2023],
  },
  enableInteractivity: true,
  backgroundColor: "#000000",
  legend: "none",
};

const AboutCard = () => {
  const [key, setkey] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    setkey((prevKey) => !prevKey);
  }, [size.width]);

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-extrabold text-default-600">More About Me</h2>
      <div className="flex flex-col gap-4 text-default-500">
        <p>
          My enthusiasm for technology extends to exploring new tools and
          methodologies, embodying a perpetual quest for self-improvement.
          Committed to delivering innovative solutions, I thrive in the
          ever-evolving landscape of web development, continually expanding my
          skill set to push the boundaries of what&apos;s possible.
        </p>
        <p>
          Beyond coding, I embrace a global lifestyle, where I find joy in rock
          climbing, hiking, and immersing myself in the great outdoors. Whether
          scaling cliffs or trekking through nature, I relish the diverse
          landscapes our world offers. In quieter moments, I indulge in reading,
          play video games, and enjoy movies with my cat.
        </p>
        <p>
          Traveling is a huge passion of mine; exploring new destinations fuels
          my wanderlust, and I&apos;m always eager for exciting adventures.
          Meeting new people is a delight as I seek fresh views and
          perspectives, valuing the richness of global experiences.
        </p>
        <p>
          The map below displays an overview of my travels and the color
          represents the year that I visited.
        </p>
      </div>
      <div className="mt-6">
        <Chart
          key={key ? "true" : "false"}
          chartType="GeoChart"
          width="100%"
          height="100%"
          data={countryData}
          options={countryOptions}
        />
      </div>
    </div>
  );
};

export default AboutCard;
