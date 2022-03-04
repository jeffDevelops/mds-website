import { useEffect, useCallback } from "react"

export const useReCaptcha = () => {
  useEffect(() => {
    // Register callback for when reCAPTCHA is loaded and ready to render the widget
    window.reCaptchaOnloadCallback = () => {
      window.grecaptcha.render("g-recaptcha", {
        sitekey: process.env.GATSBY_RECAPTCHA_SITE_KEY,
      })
    }

    // With the onloadCallback registered, load the reCAPTCHA script, configuring it to call the registered callback
    document.head.appendChild(
      Object.assign(document.createElement("script"), {
        src: "https://www.google.com/recaptcha/api.js?onload=reCaptchaOnloadCallback&render=explicit",
        async: true,
        defer: true,
      })
    )

    // Cleanup
    return () => {
      window.reCaptchaOnloadCallback = null

      document.head.removeChild(
        document.head.querySelector(
          'script[src="https://www.google.com/recaptcha/api.js?onload=reCaptchaOnloadCallback&render=explicit"]'
        )
      )
    }
  }, [])

  const verifyReCaptchaResponse = useCallback(async () => {
    const token = await window.grecaptcha.getResponse()

    const captchaResponse = await fetch(`/.netlify/functions/verify-captcha`, {
      method: "POST",
      body: JSON.stringify({
        token,
      }),
    })

    const data = await captchaResponse.json()

    return data.success
  }, [])

  return {
    verifyReCaptchaResponse,
  }
}
