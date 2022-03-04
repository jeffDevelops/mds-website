import { Handler } from "@netlify/functions"
import { join } from "core-js/es6/array"
import { GoogleSpreadsheet } from "google-spreadsheet"

const NA = "No Relevant Experience/Not Applicable"

export const handler: Handler = async ({ body: raw }) => {
  if (!process.env.GCP_CLIENT_EMAIL) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "GCP_CLIENT_EMAIL is not set in environment variables",
      }),
    }
  }

  if (!process.env.GCP_PRIVATE_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "GCP_PRIVATE_KEY is not set in environment variables",
      }),
    }
  }

  if (!process.env.GOOGLE_SHEETS_SPREADSHEET_ID) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error:
          "GOOGLE_SHEETS_SPREADSHEET_ID is not set in environment variables",
      }),
    }
  }

  const body = JSON.parse(raw)

  // Instantiate the Google Spreadsheet client with the id from the Sheet's url (.../d/${id}/...)
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_SPREADSHEET_ID)

  // Authenticate with the service account in GCP
  await doc.useServiceAccountAuth({
    client_email: process.env.GCP_CLIENT_EMAIL,
    private_key: process.env.GCP_PRIVATE_KEY.replace(/\\n/g, "\n"),
  })

  await doc.loadInfo()

  const sheet = doc.sheetsByIndex[0]

  const newRow = await sheet.addRow({
    "Best Non-Work Email": body.nonWorkEmail,
    "Census Region": body.localRegion,
    "In-Person Organization":
      body.inPersonOrganizationExperience === NA
        ? "N/A"
        : body.inPersonOrganizationExperience,
    "Labor Organizer":
      body.laborOrUnionOrganizationExperience === NA
        ? "N/A"
        : body.laborOrUnionOrganizationExperience,
    "Web Development":
      body.webDevelopmentExperience === NA
        ? "N/A"
        : body.webDevelopmentExperience,
    "Art / Design / Signage":
      body.artDesignSignageExperience === NA
        ? "N/A"
        : body.artDesignSignageExperience,
    Memes:
      body.socialMediaEngagementExperience === NA
        ? "N/A"
        : body.socialMediaEngagementExperience,
    "Preferred Social Platform": body.preferredSocialPlatform,
    "Preferred Social Platform Username": body.socialPlatformUsername,
    "Reddit Username": body.regularlyEngagedSocialPlatforms.includes("Reddit")
      ? body.preferredSocialPlatform === "Reddit" // Check to see whether they engage with  Reddit at all
        ? body.socialPlatformUsername // Check to see if the user already answered this for their preferred social platform first
        : body.redditUsername
      : "N/A",
    "Discord Username": body.regularlyEngagedSocialPlatforms.includes("Discord")
      ? body.preferredSocialPlatform === "Discord" // Check to see whether they engage with Discord at all
        ? body.socialPlatformUsername // Check to see if the user already answered this for their preferred social platform first
        : body.discordUsername
      : "N/A",
    "Twitter Handle": body.regularlyEngagedSocialPlatforms.includes("Twitter")
      ? body.preferredSocialPlatform === "Twitter" // Check to see whether they engage with Twitter at all
        ? body.socialPlatformUsername // Check to see if the user already answered this for their preferred social platform first
        : body.twitterHandle
      : "N/A",
    "Reddit (Mod)":
      body.redditModeratorExperience === NA
        ? "N/A"
        : body.redditModeratorExperience,
    "Discord (Mod)":
      body.discordModeratorExperience === NA
        ? "N/A"
        : body.discordModeratorExperience,
    "Translation Services":
      body.translationServicesExperience === NA
        ? "N/A"
        : body.translationServicesExperience,
    "Transcription Services":
      body.transcriptionServicesExperience === NA
        ? "N/A"
        : body.transcriptionServicesExperience,
    "Journalism / Writing":
      body.journalismWritingExperience === NA
        ? "N/A"
        : body.journalismWritingExperience,
    "Legal / Finance":
      body.legalOrFinanceExperience === NA
        ? "N/A"
        : body.legalOrFinanceExperience,
    "Non-Profit":
      body.nonProfitExperience === NA ? "N/A" : body.nonProfitExperience,
    "Preferred Name": body.preferredName,
    "Translation Services (Languages)":
      body.translationServicesExperience === NA
        ? "N/A"
        : body.translationServicesExperienceText,
    "Web Dev (Specializations)":
      body.webDevelopmentExperience === NA
        ? "N/A"
        : body.webDevelopmentExperienceText,
    "Additional Relevant Experience": body.additionalRelevantExperience,
    "Regular Social Platforms": body.regularlyEngagedSocialPlatforms
      .sort((a, b) => (a < b ? -1 : 1)) // Sort alphabetically
      .join(", "), // Comma-separate
    Timestamp: (() => {
      const date = new Date()
      return `${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    })(),
  })

  try {
    await newRow.save()
    return {
      statusCode: 200,
      body: JSON.stringify({ body }),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "An error occurred while writing to the Google Sheet",
      }),
    }
  }
}
