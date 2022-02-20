/**
 * @typedef Region
 * @type {object}
 * @property {string[]} states - states in region.
 */

/**
 * @type {object.<string, Region> }
 * @description Enumerates the possible responses for each region field
 */
export const Regions = {
  "New England": {
    states: [
      "Connecticut",
      "Maine",
      "Massachusetts",
      "New Hampshire",
      "Rhode Island",
      "Vermont",
    ],
  },
  "Mid-Atlantic": {
    states: ["New Jersey", "New York", "Pennsylvania"],
  },
  "East North Central": {
    states: ["Illinois", "Indiana", "Michigan", "Ohio", "Wisconsin"],
  },
  "West North Central": {
    states: [
      "Iowa",
      "Kansas",
      "Minnesota",
      "Missouri",
      "Nebraska",
      "North Dakota",
      "South Dakota",
    ],
  },
  "South Atlantic": {
    states: [
      "Delaware",
      "Florida",
      "Georgia",
      "Maryland",
      "North Carolina",
      "South Carolina",
      "Virginia",
      "Washington, D.C.",
      "West Virginia",
    ],
  },
  "East South Central": {
    states: ["Alabama", "Kentucky", "Mississippi", "Tennessee"],
  },
  "West South Central": {
    states: ["Arkansas", "Louisiana", "Oklahoma", "Texas"],
  },
  Mountain: {
    states: [
      "Arizona",
      "Colorado",
      "Idaho",
      "Montana",
      "Nevada",
      "New Mexico",
      "Utah",
      "Wyoming",
    ],
  },
  Pacific: {
    states: ["Alaska", "California", "Hawaii", "Oregon", "Washington"],
  },
  Asia: { states: [] },
  Africa: { states: [] },
  Australia: { states: [] },
  Eurape: { states: [] },
  "North America (Excluding USA)": { states: [] },
  "South America": { states: [] },
}
