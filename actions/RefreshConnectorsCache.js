const axios = require("axios");

module.exports = {
  key: "RefreshConnectorsCache",
  title: "Refresh connectors cache on the runner",
  description: "Clean the connectors cache on the runner and then download all the connectors again.",
  type: "delete",
  inputParameters: [],
  operation: {
    type: "js",
    handler,
  },
  outputParameters: [],
};

async function handler({ configurationParameters }) {
  await axios.get(`${configurationParameters.RunenrUrl}/runner/tools/refresh-connectors-cache`, {
    headers: {
      "x-api-key": configurationParameters.RunnerApiKey,
    },
  });

  return {};
}
