const filters = {
  Brightness: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  contrast: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  exposure: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  saturation: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  hueRotate: {
    value: 0,
    min: 0,
    max: 360,
    unit: "deg",
  },
  blur: {
    value: 0,
    min: 0,
    max: 20,
    unit: "px",
  },
  grayscale: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  sepia: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  opacity: {
    value: 100,
    min: 0,
    max: 100,
    unit: "%",
  },
  invert: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
};
const imageCanvas = document.querySelector("#image-canvas");
const filterContainer = document.querySelector(".filters");
const imageInput= document.querySelector("#image-input");
function createFilterElement(name, value, min, max, unit = "%") {
  const div = document.createElement("div");
  div.classList.add("filter");
  const input = document.createElement("input");
  input.type = "range";
  input.min = min;
  input.max = max;
  input.value = value;
  input.id = name;
  const p = document.createElement("p");
  p.innerText = name;
  div.appendChild(p);
  div.appendChild(input);
  return div;
}
Object.keys(filters).forEach((key) => {
  const filterElement = createFilterElement(
    key,
    filters[key].value,
    filters[key].min,
    filters[key].max,
    filters[key].unit,
  );
  filterContainer.appendChild(filterElement);
});
imageInput.addEventListener("change" (Event) ={
  const file = Event.target.files[0]
  const img = new Image(),
  img.src = URL.createObjectURL(file),
});
