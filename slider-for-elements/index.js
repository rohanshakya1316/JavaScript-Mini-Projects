const elements = [
  {
    elementName: "Ocean Breeze",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description:
      "The ocean is a vast and powerful natural body of saltwater that covers most of the Earth's surface. Its endless waves, deep blue horizons, and rhythmic movement create a sense of peace while supporting countless marine ecosystems and regulating global climate patterns.",
  },
  {
    elementName: "Mountain Peak",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    description:
      "Mountains are majestic landforms shaped over millions of years through tectonic activity and natural erosion. Rising high above the surrounding landscape, they serve as sources of freshwater, shelters for unique wildlife, and symbols of strength, endurance, and natural beauty.",
  },
  {
    elementName: "Forest Spirit",
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b",
    description:
      "Forests are living ecosystems filled with towering trees, rich soil, and diverse species of plants and animals. Every rustling leaf, flowing stream, and birdsong contributes to a delicate natural balance that helps produce oxygen and sustain life across the planet.",
  },
  {
    elementName: "Golden Desert",
    imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
    description:
      "Deserts are vast and arid landscapes shaped by wind, sunlight, and time over countless centuries. Though they appear harsh and empty, they are home to uniquely adapted plants and animals that thrive in extreme temperatures and limited water conditions.",
  },
  {
    elementName: "Crystal Waterfall",
    imageUrl: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9",
    description:
      "Waterfalls are breathtaking natural formations where flowing water cascades over cliffs and rocky surfaces. Their continuous motion shapes the surrounding landscape, creates fresh ecosystems, and fills the air with a refreshing energy and soothing natural sound.",
  },
  {
    elementName: "Northern Lights",
    imageUrl: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73",
    description:
      "The northern lights are stunning atmospheric displays created when charged solar particles interact with the Earth's magnetic field. Waves of green, purple, and red light dance across polar skies, creating one of nature's most extraordinary visual phenomena.",
  },
  {
    elementName: "Wild Meadow",
    imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    description:
      "Wild meadows are open natural landscapes covered with grasses, colorful flowers, and diverse wildlife. They provide important habitats for pollinators, birds, and small animals while bringing vibrant beauty and ecological balance to the environment.",
  },
  {
    elementName: "Autumn Leaves",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description:
      "Autumn leaves represent the seasonal transformation of forests as trees prepare for colder months. Shades of red, orange, and gold appear as chlorophyll fades, creating breathtaking landscapes that symbolize change, renewal, and the natural cycle of life.",
  },
];

const imgElement = document.querySelector("img");

const textElement = document.querySelector(".description");

const elemName = document.querySelector(".element-name");

let id = 0;

const updateElementBySlider = () => {
  const { elementName, imageUrl, description } = elements[id];

  imgElement.src = imageUrl;
  textElement.innerText = description;
  elemName.innerText = elementName;

  id++;

  if (id === elements.length) {
    id = 0;
  }

  setTimeout(() => {
    updateElementBySlider();
  }, 7000);
};

updateElementBySlider();
