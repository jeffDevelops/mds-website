import { Handler } from "@netlify/functions"

export const handler: Handler = async (event, context) => {
  const { name = "stranger" } = event.queryStringParameters

  console.log(process.env.RECAPTCHA_SECRET_KEY, process.env.RECAPTCHA_SITE_KEY)

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${name}!`,
    }),
  }
}
