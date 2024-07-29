const express = require("express");
const bodyParser = require("body-parser");
const { dataNormalization } = require("./function");

const app = express();
app.use(bodyParser.json());

app.post("/functions/dataNormalization", async (req, res) => {
  try {
    const { input } = req.body;
    const { data, min = 0, max = 1 } = input || {};
    const output = dataNormalization(data, min, max);
    res.send({ output });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

const docs = {
  name: "dataNormalization",
  description:
    "Normalize a one or multi-dimensional array to a specified range",
  input: {
    type: "object",
    properties: {
      data: {
        type: "array",
        description: "Multi-dimensional array of numbers to be normalized",
        example: [
          [10, 20, 30],
          [40, 50, 60],
          [70, 80, 90],
        ],
      },
      min: {
        type: "number",
        description: "Minimum value of the normalized range",
        example: 0,
      },
      max: {
        type: "number",
        description: "Maximum value of the normalized range",
        example: 1,
      },
    },
    required: ["data"],
  },
  output: {
    type: "array",
    description: "Normalized multi-dimensional array",
    example: [
      [0, 0.125, 0.25],
      [0.375, 0.5, 0.625],
      [0.75, 0.875, 1],
    ],
  },
};

app.get("/functions/dataNormalization", (req, res) => {
  res.send(docs);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
