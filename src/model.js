import * as tf from "@tensorflow/tfjs";

async function predict(features) {
  // JavaScript
  const model_gh_link =
    "https://github.com/sapienscube/kddcup-intrusion-detection-system/blob/master/src/model.json";

  const model_gdrive_link =
    "https://crossorigin.me/https://drive.google.com/open?id=1-YAH1oKF141fSnmIfIF7N8YnUXviTlD-";

  const model = await tf.loadLayersModel(model_gh_link);
  console.log(model);
  return 1;
}

export default predict;
