import { Handler } from "@netlify/functions"
import fetch from "node-fetch"

export const handler: Handler = async ({ body }) => {
  const { token } = JSON.parse(body)

  if (!process.env.GATSBY_RECAPTCHA_SITE_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "GATSBY_RECAPTCHA_SITE_KEY is not set in environment variables",
      }),
    }
  }

  if (!process.env.RECAPTCHA_SECRET_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "RECAPTCHA_SECRET_KEY is not set in environment variables",
      }),
    }
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )

    const deserialized = (await response.json()) as { success: boolean }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: deserialized.success }),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "An error occurred while verifying the reCAPTCHA",
      }),
    }
  }
}
