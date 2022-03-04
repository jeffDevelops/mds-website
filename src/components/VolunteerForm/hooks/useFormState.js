import { useState, useMemo, useCallback, useLayoutEffect } from "react"
import { DegreeOfExperience, Regions, SocialMediaPlatforms } from "../config"
import { isEmail } from "validator"

export const useFormState = () => {
  const [preferredName, setPreferredName] = useState("")

  const [preferredSocialPlatform, setPreferredSocialPlatform] = useState(
    SocialMediaPlatforms.Discord
  )

  const [socialPlatformUsername, setSocialPlatformUsername] = useState("")

  const [nonWorkEmail, setNonWorkEmail] = useState("")

  const [localRegion, setLocalRegion] = useState(Object.keys(Regions)[0])

  const [artDesignSignageExperience, setArtDesignSignageExperience] = useState(
    DegreeOfExperience.NoRelevantExperienceOrNA
  )

  const [socialMediaEngagementExperience, setSocialMediaEngagementExperience] =
    useState(DegreeOfExperience.NoRelevantExperienceOrNA)

  const [inPersonOrganizationExperience, setInPersonOrganizationExperience] =
    useState(DegreeOfExperience.NoRelevantExperienceOrNA)

  const [journalismWritingExperience, setJournalismWritingExperience] =
    useState(DegreeOfExperience.NoRelevantExperienceOrNA)

  const [
    laborOrUnionOrganizationExperience,
    setLaborOrUnionOrganizationExperience,
  ] = useState(DegreeOfExperience.NoRelevantExperienceOrNA)

  const [legalOrFinanceExperience, setLegalOrFinanceExperience] = useState(
    DegreeOfExperience.NoRelevantExperienceOrNA
  )

  const [nonProfitExperience, setNonProfitExperience] = useState(
    DegreeOfExperience.NoRelevantExperienceOrNA
  )

  const [transcriptionServicesExperience, setTranscriptionServicesExperience] =
    useState(DegreeOfExperience.NoRelevantExperienceOrNA)

  const [webDevelopmentExperience, setWebDevelopmentExperience] = useState(
    DegreeOfExperience.NoRelevantExperienceOrNA
  )

  const [webDevelopmentExperienceText, setWebDevelopmentExperienceText] =
    useState("")

  const [translationServicesExperience, setTranslationServicesExperience] =
    useState(DegreeOfExperience.NoRelevantExperienceOrNA)

  const [
    translationServicesExperienceText,
    setTranslationServicesExperienceText,
  ] = useState("")

  const [discordModeratorExperience, setDiscordModeratorExperience] = useState(
    DegreeOfExperience.NoRelevantExperienceOrNA
  )

  const [redditModeratorExperience, setRedditModeratorExperience] = useState(
    DegreeOfExperience.NoRelevantExperienceOrNA
  )

  const [regularlyEngagedSocialPlatforms, setRegularlyEngagedSocialPlatforms] =
    useState([])

  const [redditUsername, setRedditUsername] = useState("")

  const [discordUsername, setDiscordUsername] = useState("")

  const [twitterHandle, setTwitterHandle] = useState("")

  const [additionalRelevantExperience, setAdditionalRelevantExperience] =
    useState("")

  const [didAttemptSubmit, setDidAttemptSubmit] = useState(false)

  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState(false)
  const [shouldRemoveForm, setShouldRemoveForm] = useState(false)

  const validationErrors = useMemo(() => {
    const errors = {}

    if (!preferredName) {
      errors.preferredName = "Please enter your preferred name"
    } else {
      delete errors.preferredName
    }

    if (!nonWorkEmail) {
      errors.nonWorkEmail =
        "Please enter the best non-work email address to reach you"
    } else if (!isEmail(nonWorkEmail)) {
      errors.nonWorkEmail = "Please enter a valid email address"
    } else {
      delete errors.nonWorkEmail
    }

    if (!socialPlatformUsername) {
      errors.socialPlatformUsername = `Please enter your ${preferredSocialPlatform} username`
    } else {
      delete errors.socialPlatformUsername
    }

    if (
      webDevelopmentExperience !==
        DegreeOfExperience.NoRelevantExperienceOrNA &&
      !webDevelopmentExperienceText
    ) {
      errors.webDevelopmentExperienceText =
        "Please enter your web development experience"
    } else {
      delete errors.webDevelopmentExperienceText
    }

    if (
      translationServicesExperience !==
        DegreeOfExperience.NoRelevantExperienceOrNA &&
      !translationServicesExperienceText
    ) {
      errors.translationServicesExperienceText =
        "Please enter your translation services experience"
    } else {
      delete errors.translationServicesExperienceText
    }

    if (
      preferredSocialPlatform !== SocialMediaPlatforms.Discord &&
      regularlyEngagedSocialPlatforms.includes(SocialMediaPlatforms.Discord) &&
      !discordUsername
    ) {
      errors.discordUsername = "Please enter your Discord username"
    } else {
      delete errors.discordUsername
    }

    if (
      preferredSocialPlatform !== SocialMediaPlatforms.Reddit &&
      regularlyEngagedSocialPlatforms.includes(SocialMediaPlatforms.Reddit) &&
      !redditUsername
    ) {
      errors.redditUsername = "Please enter your Reddit username"
    } else {
      delete errors.redditUsername
    }

    if (
      preferredSocialPlatform !== SocialMediaPlatforms.Twitter &&
      regularlyEngagedSocialPlatforms.includes(SocialMediaPlatforms.Twitter) &&
      !twitterHandle
    ) {
      errors.twitterHandle = "Please enter your Twitter handle"
    } else {
      delete errors.twitterHandle
    }

    return errors
  }, [
    discordUsername,
    nonWorkEmail,
    preferredName,
    preferredSocialPlatform,
    redditUsername,
    regularlyEngagedSocialPlatforms,
    socialPlatformUsername,
    translationServicesExperience,
    translationServicesExperienceText,
    twitterHandle,
    webDevelopmentExperience,
    webDevelopmentExperienceText,
  ])

  const errorsExist = useMemo(() => {
    return Object.keys(validationErrors).length > 0
  }, [validationErrors])

  const submitForm = useCallback(async () => {
    setDidAttemptSubmit(true)

    setLoading(true)

    const response = await fetch(`/.netlify/functions/submit-volunteer-form`, {
      method: "POST",
      body: JSON.stringify({
        preferredName,
        preferredSocialPlatform,
        socialPlatformUsername,
        nonWorkEmail,
        localRegion,
        artDesignSignageExperience,
        socialMediaEngagementExperience,
        inPersonOrganizationExperience,
        journalismWritingExperience,
        laborOrUnionOrganizationExperience,
        legalOrFinanceExperience,
        nonProfitExperience,
        transcriptionServicesExperience,
        webDevelopmentExperience,
        webDevelopmentExperienceText,
        translationServicesExperience,
        translationServicesExperienceText,
        discordModeratorExperience,
        redditModeratorExperience,
        regularlyEngagedSocialPlatforms,
        redditUsername,
        discordUsername,
        twitterHandle,
        additionalRelevantExperience,
      }),
    })

    await response.json()
  }, [
    preferredName,
    preferredSocialPlatform,
    socialPlatformUsername,
    nonWorkEmail,
    localRegion,
    artDesignSignageExperience,
    socialMediaEngagementExperience,
    inPersonOrganizationExperience,
    journalismWritingExperience,
    laborOrUnionOrganizationExperience,
    legalOrFinanceExperience,
    nonProfitExperience,
    transcriptionServicesExperience,
    webDevelopmentExperience,
    webDevelopmentExperienceText,
    translationServicesExperience,
    translationServicesExperienceText,
    discordModeratorExperience,
    redditModeratorExperience,
    regularlyEngagedSocialPlatforms,
    redditUsername,
    discordUsername,
    twitterHandle,
    additionalRelevantExperience,
  ])

  // On mount, and before rendering, ensure the form hasn't already been submitted in this browser
  useLayoutEffect(() => {
    const didAlreadySubmit = localStorage.getItem("didSubmitVolunteerForm")
    if (Boolean(didAlreadySubmit)) {
      setSuccess(true)
    }
  }, [setSuccess])

  return {
    validationErrors,
    errorsExist,
    submitForm,
    didAttemptSubmit,
    setDidAttemptSubmit,
    loading,
    setLoading,
    success,
    setSuccess,
    shouldRemoveForm,
    setShouldRemoveForm,

    preferredName,
    setPreferredName,
    preferredSocialPlatform,
    setPreferredSocialPlatform,
    socialPlatformUsername,
    setSocialPlatformUsername,
    nonWorkEmail,
    setNonWorkEmail,
    localRegion,
    setLocalRegion,
    artDesignSignageExperience,
    setArtDesignSignageExperience,
    socialMediaEngagementExperience,
    setSocialMediaEngagementExperience,
    inPersonOrganizationExperience,
    setInPersonOrganizationExperience,
    journalismWritingExperience,
    setJournalismWritingExperience,
    laborOrUnionOrganizationExperience,
    setLaborOrUnionOrganizationExperience,
    legalOrFinanceExperience,
    setLegalOrFinanceExperience,
    nonProfitExperience,
    setNonProfitExperience,
    transcriptionServicesExperience,
    setTranscriptionServicesExperience,
    webDevelopmentExperience,
    setWebDevelopmentExperience,
    webDevelopmentExperienceText,
    setWebDevelopmentExperienceText,
    translationServicesExperience,
    setTranslationServicesExperience,
    translationServicesExperienceText,
    setTranslationServicesExperienceText,
    discordModeratorExperience,
    setDiscordModeratorExperience,
    redditModeratorExperience,
    setRedditModeratorExperience,
    regularlyEngagedSocialPlatforms,
    setRegularlyEngagedSocialPlatforms,
    redditUsername,
    setRedditUsername,
    discordUsername,
    setDiscordUsername,
    twitterHandle,
    setTwitterHandle,
    additionalRelevantExperience,
    setAdditionalRelevantExperience,
  }
}
