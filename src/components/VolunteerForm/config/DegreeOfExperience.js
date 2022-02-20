/**
 * @typedef DegreeOfExperience
 * @type {object}
 *
 * @property {string} HobbyInterest - 'Hobby Interest'
 * @property {string} VolunteerExperience - 'Volunteer Experience'
 * @property {string} WorkExperience - 'Work Experience'
 * @property {string} NoRelevantExperienceOrNA - 'No Relevant Experience/Not Applicable'
 *
 * @description Enumerates the possible responses for each degree of experience field
 *
 */

/**
 * @type {object.<string, DegreeOfExperience> }
 */
export const DegreeOfExperience = {
  HobbyInterest: "Hobby Interest",
  VolunteerExperience: "Volunteer Experience",
  WorkExperience: "Work Experience",
  NoRelevantExperienceOrNA: "No Relevant Experience/Not Applicable",
}
