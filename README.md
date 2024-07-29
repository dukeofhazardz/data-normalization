# Data Normalization Cloud Function

This project provides a cloud function for normalizing one-dimensional or multi-dimensional arrays of numbers. It exposes endpoints to perform normalization and to retrieve API documentation.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Overview

The Data Normalization API offers functionality to normalize multi-dimensional arrays of numbers to a specified range. The API is built using Express.js and can be easily deployed to any cloud service that supports Node.js applications.

## Features

- Normalize one or multi-dimensional arrays of numbers.
- Specify a custom range for normalization.
- Retrieve detailed documentation for the API endpoints.

## Usage

The API provides two endpoints:

### 1. Normalize Data

- **Endpoint**: `POST /functions/dataNormalization`
- **Description**: Normalize a multi-dimensional array of numbers to a specified range.
- **Request Body**:

  ```json
  {
    "input": {
      "data": [[10, 20, 30], [40, 50, 60], [70, 80, 90]],
      "min": 0,
      "max": 1
    }
  }
  ```

- **Response**:

  ```json
  {
    "output": [[0, 0.125, 0.25], [0.375, 0.5, 0.625], [0.75, 0.875, 1]]
  }
  ```

- **Error Handling**:

  If `data` is not provided or an invalid request is made, the API responds with an error message.

### 2. Retrieve Documentation

- **Endpoint**: `GET /functions/dataNormalization`
- **Description**: Get documentation for the `dataNormalization` function.
- **Response**:

  ```json
  {
    "name": "dataNormalization",
    "description": "Normalize a one or multi-dimensional array to a specified range",
    "input": {
      "type": "object",
      "properties": {
        "data": {
          "type": "array",
          "description": "Multi-dimensional array of numbers to be normalized",
          "example": [[10, 20, 30], [40, 50, 60], [70, 80, 90]]
        },
        "min": {
          "type": "number",
          "description": "Minimum value of the normalized range",
          "example": 0
        },
        "max": {
          "type": "number",
          "description": "Maximum value of the normalized range",
          "example": 1
        }
      },
      "required": ["data"]
    },
    "output": {
      "type": "array",
      "description": "Normalized multi-dimensional array",
      "example": [[0, 0.125, 0.25], [0.375, 0.5, 0.625], [0.75, 0.875, 1]]
    }
  }
  ```
