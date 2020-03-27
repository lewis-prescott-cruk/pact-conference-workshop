"use strict"

const axios = require("axios")

exports.getMeIngredients = endpoint => {
  const url = endpoint.url
  const port = endpoint.port

  return axios.request({
    method: "GET",
    baseURL: `${url}:${port}`,
    url: "/ingredients/chocolate",
    headers: { Accept: "application/json" },
  })
}
