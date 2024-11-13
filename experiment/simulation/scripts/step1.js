var sampleImages = [
  "./assets/Fresh Oil.png",
  "./assets/1passoil.png",
  "./assets/2passoil.png",
  "./assets/3passoil.png",
];

var flaskSamples = ["Fresh Oil", "1 pass Oil", "2 pass Oil", "3 pass Oil"];

var selectedSample = null;
var sampleIndex = null;

function selectSample(sender, id) {
  if (selectedSample == null) {
    selectedSample = id;
    sampleIndex = id;

    gsap.to(".step1-tools .tooltiptext", { opacity: 0 });
    gsap.to(sender, {
      duration: 1,
      y: -100,
      ease: Back.easeOut.config(1.7),
    });

    document.querySelector("#sampleimage img").src = sampleImages[id];
    document.querySelector(
      "#step3flask img"
    ).src = `./assets/${flaskSamples[id]}/3.png`;
    document.querySelector(
      "#step-4-flask img"
    ).src = `./assets/${flaskSamples[id]}/alcohol/2.png`;
    document.querySelector(
      "#step5flask img"
    ).src = `./assets/${flaskSamples[id]}/alcohol/2.png`;
    document.querySelector(
      "#step-6-flask"
    ).src = `./assets/${flaskSamples[id]}/alcohol/2.png`;
    document.querySelector(
      "#observationSample"
    ).innerHTML = `${flaskSamples[id]}`;

    gsap.to(".question-1", { opacity: 1 });
    addTask("<b>Step 1</b> Sample selection");
    const inferenceTextElement = document.getElementById("inferenceText");
    let inferenceText = "";

    switch (sampleIndex) {
      case 0:
        inferenceText =
          "The limit of FFA as per FSSAI standard is 0.5%. The FFA content of the given sample is 0.141%. So, this sample is in the FSSAI range and safe for edible purposes.";
        break;
      case 1:
        inferenceText =
          "The limit of FFA as per FSSAI standard is 0.5%. The FFA content of the given sample is 0.423%. So, this sample is in the FSSAI range and safe for edible purposes.";
        break;
      case 2:
        inferenceText =
          "The limit of FFA as per FSSAI standard is 0.5%. The FFA content of the given sample is 1.692%. So, this sample is beyond the safe limit of FFA as per FSSAI and not fit for edible purposes.";
        break;
      case 3:
        inferenceText =
          "The limit of FFA as per FSSAI standard is 0.5%. The FFA content of the given sample is 2.820%. So, this sample is beyond the safe limit of FFA as per FSSAI and not fit for edible purposes.";
        break;
      default:
        inferenceText = "Please select a valid sample.";
    }
    console.log(sampleIndex, inferenceText);

    inferenceTextElement.innerText = inferenceText;
  }
}
