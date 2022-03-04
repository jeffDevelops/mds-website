import React, { useCallback } from "react"
import { DegreeOfExperience, Regions, SocialMediaPlatforms } from "./config"
import * as FormStyles from "./form.module.css"
import RadioGroup from "../RadioGroup"
import Checkbox from "../Checkbox"
import {
  MOBILE_MAX_WIDTH,
  useRadioButtonLayout,
} from "./hooks/useRadioButtonLayout"
import { useFormState } from "./hooks/useFormState"
import { useReCaptcha } from "../../hooks/useReCaptcha"

const VolunteerForm = () => {
  // Custom Hooks
  const { regionRadioButtonColumns, viewportWidth } = useRadioButtonLayout()
  const { verifyReCaptchaResponse } = useReCaptcha()
  const {
    submitForm,
    errorsExist,
    validationErrors,

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
    didAttemptSubmit,
    setDidAttemptSubmit,
    loading,
    setLoading,
    success,
    setSuccess,
  } = useFormState()

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault()
      setDidAttemptSubmit(true)

      const reCaptchaSuccess = await verifyReCaptchaResponse()

      // Fail silently if the captcha was not verified, so as not to give any indication that the form was not submitted
      if (!reCaptchaSuccess) {
        setLoading(false)
        setSuccess(true)
        return
      }

      await submitForm()
      setLoading(false)
      setSuccess(true)
    },
    [
      setDidAttemptSubmit,
      setLoading,
      setSuccess,
      submitForm,
      verifyReCaptchaResponse,
    ]
  )

  // "Which social media platform do you engage with on a regular basis?" checkboxes
  const handleRegularlyEngagedSocialPlatformsChange = useCallback(
    ({ target: { value } }) => {
      if (regularlyEngagedSocialPlatforms.includes(value)) {
        return setRegularlyEngagedSocialPlatforms(
          regularlyEngagedSocialPlatforms.filter(platform => platform !== value)
        )
      }

      setRegularlyEngagedSocialPlatforms([
        ...regularlyEngagedSocialPlatforms,
        value,
      ])
    },
    [regularlyEngagedSocialPlatforms, setRegularlyEngagedSocialPlatforms]
  )

  const secondColumnSocialCheckboxes = useCallback(
    () => (
      <>
        <Checkbox
          value={SocialMediaPlatforms.Snapchat}
          onChange={handleRegularlyEngagedSocialPlatformsChange}
          checked={regularlyEngagedSocialPlatforms.includes(
            SocialMediaPlatforms.Snapchat
          )}
        >
          Snapchat
        </Checkbox>
        <Checkbox
          value={SocialMediaPlatforms.TikTok}
          onChange={handleRegularlyEngagedSocialPlatformsChange}
          checked={regularlyEngagedSocialPlatforms.includes(
            SocialMediaPlatforms.TikTok
          )}
        >
          TikTok
        </Checkbox>
        <Checkbox
          value={SocialMediaPlatforms.Twitch}
          onChange={handleRegularlyEngagedSocialPlatformsChange}
          checked={regularlyEngagedSocialPlatforms.includes(
            SocialMediaPlatforms.Twitch
          )}
        >
          Twitch
        </Checkbox>
        <Checkbox
          value={SocialMediaPlatforms.Twitter}
          onChange={handleRegularlyEngagedSocialPlatformsChange}
          checked={regularlyEngagedSocialPlatforms.includes(
            SocialMediaPlatforms.Twitter
          )}
        >
          Twitter
        </Checkbox>
      </>
    ),
    [
      handleRegularlyEngagedSocialPlatformsChange,
      regularlyEngagedSocialPlatforms,
    ]
  )

  return (
    <>
      <h1>May Day Strike Volunteer Application</h1>
      <p>
        Please submit the following information to help us coordinate teams to
        get your invitation link at the end, thank you!
      </p>

      <form
        onSubmit={handleSubmit}
        className={FormStyles.form}
        autoComplete="false"
        id="volunteer-form"
        encType="multipart/form-data"
      >
        <h2>About You</h2>

        <div className={FormStyles.twoColumnFlex}>
          <div className={FormStyles.formField}>
            <label
              className={FormStyles.textInputLabel}
              htmlFor="volunteer-form_preferred-name"
            >
              <h5>
                Preferred Name <span className={FormStyles.required}>*</span>
              </h5>
              <p>
                Feel free to use a pseudonym or username if you'd like to remain
                anonymous.
              </p>
            </label>

            <input
              id="volunteer-form_preferred-name"
              onChange={({ target: { value } }) => setPreferredName(value)}
              value={preferredName}
              type="text"
              autoComplete="off"
            />

            {didAttemptSubmit && validationErrors.preferredName && (
              <p className={FormStyles.validationError}>
                {validationErrors.preferredName}
              </p>
            )}
          </div>

          <div
            id="volunteer-form_non-work-email"
            className={FormStyles.formField}
          >
            <label
              className={FormStyles.textInputLabel}
              htmlFor="volunteer-form_non-work-email"
            >
              <h5>
                Best non-work email{" "}
                <span className={FormStyles.required}>*</span>
              </h5>

              <p>
                Please double check the spelling to ensure we can contact you,
                and make sure not to use your work email!
              </p>
            </label>

            <input
              id="volunteer-form_non-work-email"
              onChange={({ target: { value } }) => setNonWorkEmail(value)}
              type="text"
              autoComplete="off"
              value={nonWorkEmail}
            />

            {didAttemptSubmit && validationErrors.nonWorkEmail && (
              <p className={FormStyles.validationError}>
                {validationErrors.nonWorkEmail}
              </p>
            )}
          </div>
        </div>

        <div className={FormStyles.twoColumnFlex}>
          <div
            id="volunteer-form_preferred-social-platform"
            className={FormStyles.formField}
          >
            <label
              className={FormStyles.textInputLabel}
              htmlFor="volunteer-form_preferred-social-platform"
            >
              <h5>
                Preferred Social Platform{" "}
                <span className={FormStyles.required}>*</span>
              </h5>
              <p>
                To help us get in contact, please let us know where you'd like
                us to reach you!
              </p>
            </label>

            <select
              id="volunteer-form_preferred-social-platform"
              onChange={({ target: { value } }) =>
                setPreferredSocialPlatform(value)
              }
            >
              {Object.keys(SocialMediaPlatforms).map(platform => (
                <option key={platform} value={platform}>
                  {platform}
                </option>
              ))}
            </select>
          </div>

          <div
            id="volunteer-form_preferred-social-platform-username"
            className={FormStyles.formField}
          >
            <label
              className={FormStyles.textInputLabel}
              htmlFor="volunteer-form_preferred-social-platform-username"
            >
              <h5>
                Username for the platform you specified{" "}
                <span className={FormStyles.required}>*</span>
              </h5>
              <p>
                Please double check the spelling to ensure we can contact you!
              </p>
            </label>

            <input
              id="volunteer-form_preferred-social-platform-username"
              onChange={({ target: { value } }) =>
                setSocialPlatformUsername(value)
              }
              type="text"
              autoComplete="off"
              value={socialPlatformUsername}
            />

            {didAttemptSubmit && validationErrors.socialPlatformUsername && (
              <p className={FormStyles.validationError}>
                {validationErrors.socialPlatformUsername}
              </p>
            )}
          </div>
        </div>

        <div className={FormStyles.formField}>
          <h5>Your local region</h5>
          <p>Select one</p>

          <RadioGroup
            onChange={value => setLocalRegion(value)}
            value={localRegion}
            columns={regionRadioButtonColumns}
            options={Object.keys(Regions).map(key => ({
              id: `volunteer-form_region-${key}`,
              label: key,
              key: key,
              value: key,
              disclosure: !Regions[key].states.length
                ? undefined
                : // Concat regions into comma-separated list
                  Regions[key].states.reduce((acc, localeState, index, arr) => {
                    acc += `${localeState}${
                      index === arr.length - 1 ? "" : ", "
                    }`
                    return acc
                  }, ""),
            }))}
          />
        </div>

        <div className={FormStyles.twoColumnFlex}>
          <div className={FormStyles.formField}>
            <h5>
              Which social platforms do you engage with on a regular basis?
            </h5>
            <p>Check all that apply!</p>
            <Checkbox
              value={SocialMediaPlatforms.Discord}
              onChange={handleRegularlyEngagedSocialPlatformsChange}
              checked={regularlyEngagedSocialPlatforms.includes(
                SocialMediaPlatforms.Discord
              )}
            >
              Discord
            </Checkbox>
            <Checkbox
              value={SocialMediaPlatforms.Facebook}
              onChange={handleRegularlyEngagedSocialPlatformsChange}
              checked={regularlyEngagedSocialPlatforms.includes(
                SocialMediaPlatforms.Facebook
              )}
            >
              Facebook
            </Checkbox>
            <Checkbox
              value={SocialMediaPlatforms.Instagram}
              onChange={handleRegularlyEngagedSocialPlatformsChange}
              checked={regularlyEngagedSocialPlatforms.includes(
                SocialMediaPlatforms.Instagram
              )}
            >
              Instagram
            </Checkbox>
            <Checkbox
              value={SocialMediaPlatforms.Reddit}
              onChange={handleRegularlyEngagedSocialPlatformsChange}
              checked={regularlyEngagedSocialPlatforms.includes(
                SocialMediaPlatforms.Reddit
              )}
            >
              Reddit
            </Checkbox>

            {viewportWidth <= MOBILE_MAX_WIDTH &&
              secondColumnSocialCheckboxes()}
          </div>

          {viewportWidth > MOBILE_MAX_WIDTH && (
            <div className={FormStyles.formField}>
              <h5 style={{ opacity: 0 }}>
                Which social platforms do you engage with on a regular basis?
              </h5>
              <p style={{ opacity: 0 }}>Check all that apply!</p>
              {secondColumnSocialCheckboxes()}
            </div>
          )}
        </div>

        {preferredSocialPlatform !== SocialMediaPlatforms.Discord && // Don't make the user answer more than once
          regularlyEngagedSocialPlatforms.includes(
            SocialMediaPlatforms.Discord
          ) && (
            <div className={FormStyles.formField}>
              <label htmlFor="volunteer-form_discord-username">
                <h5>
                  Discord Username{" "}
                  <span className={FormStyles.required}>*</span>
                </h5>
              </label>
              <input
                type="text"
                id="volunteer-form_discord-username"
                value={discordUsername}
                onChange={({ target: { value } }) => setDiscordUsername(value)}
              />
              {didAttemptSubmit && validationErrors.discordUsername && (
                <p className={FormStyles.validationError}>
                  {validationErrors.discordUsername}
                </p>
              )}
            </div>
          )}

        {preferredSocialPlatform !== SocialMediaPlatforms.Reddit && // Don't make the user answer more than once
          regularlyEngagedSocialPlatforms.includes(
            SocialMediaPlatforms.Reddit
          ) && (
            <div className={FormStyles.formField}>
              <label htmlFor="volunteer-form_reddit-username">
                <h5>
                  Reddit Username <span className={FormStyles.required}>*</span>
                </h5>
              </label>
              <input
                type="text"
                id="volunteer-form_reddit-username"
                value={redditUsername}
                onChange={({ target: { value } }) => setRedditUsername(value)}
              />
              {didAttemptSubmit && validationErrors.redditUsername && (
                <p className={FormStyles.validationError}>
                  {validationErrors.redditUsername}
                </p>
              )}
            </div>
          )}

        {preferredSocialPlatform !== SocialMediaPlatforms.Twitter && // Don't make the user answer more than once
          regularlyEngagedSocialPlatforms.includes(
            SocialMediaPlatforms.Twitter
          ) && (
            <div className={FormStyles.formField}>
              <label htmlFor="volunteer-form_twitter-handle">
                <h5>
                  Twitter Handle <span className={FormStyles.required}>*</span>
                </h5>
              </label>
              <input
                type="text"
                id="volunteer-form_twitter-handle"
                value={twitterHandle}
                onChange={({ target: { value } }) => setTwitterHandle(value)}
              />
              {didAttemptSubmit && validationErrors.twitterHandle && (
                <p className={FormStyles.validationError}>
                  {validationErrors.twitterHandle}
                </p>
              )}
            </div>
          )}

        <h2>Skills And Talents</h2>
        <p>
          Please indicate if you have work or volunteer experience, or hobby
          interest in the following fields.
        </p>

        <div className={FormStyles.twoColumnFlex}>
          <div className={FormStyles.formField}>
            <h5 className={FormStyles.marginBottomHeading}>
              Art / Graphics Design / Signage
            </h5>

            <RadioGroup
              onChange={value => setArtDesignSignageExperience(value)}
              value={artDesignSignageExperience}
              options={Object.keys(DegreeOfExperience).map(key => ({
                id: `volunteer-form_art-design-signage-${key}`,
                key: key,
                label: DegreeOfExperience[key],
                value: DegreeOfExperience[key],
              }))}
            />
          </div>

          <div className={FormStyles.formField}>
            <h5 className={FormStyles.marginBottomHeading}>
              General Social Media Engagement (Creative Slogans/Memes)
            </h5>

            <RadioGroup
              onChange={value => setSocialMediaEngagementExperience(value)}
              value={socialMediaEngagementExperience}
              options={Object.keys(DegreeOfExperience).map(key => ({
                id: `volunteer-form_social-media-engagement-${key}`,
                key: key,
                label: DegreeOfExperience[key],
                value: DegreeOfExperience[key],
              }))}
            />
          </div>
        </div>

        <div className={FormStyles.twoColumnFlex}>
          <div className={FormStyles.formField}>
            <h5 className={FormStyles.marginBottomHeading}>
              In-Person Organization
            </h5>

            <RadioGroup
              onChange={value => setInPersonOrganizationExperience(value)}
              value={inPersonOrganizationExperience}
              options={Object.keys(DegreeOfExperience).map(key => ({
                id: `volunteer-form_in-person-organization-${key}`,
                key: key,
                label: DegreeOfExperience[key],
                value: DegreeOfExperience[key],
              }))}
            />
          </div>

          <div className={FormStyles.formField}>
            <h5 className={FormStyles.marginBottomHeading}>
              Journalism / Writing
            </h5>

            <RadioGroup
              onChange={value => setJournalismWritingExperience(value)}
              value={journalismWritingExperience}
              options={Object.keys(DegreeOfExperience).map(key => ({
                id: `volunteer-form_journalism-or-writing-${key}`,
                key: key,
                label: DegreeOfExperience[key],
                value: DegreeOfExperience[key],
              }))}
            />
          </div>
        </div>

        <div className={FormStyles.twoColumnFlex}>
          <div className={FormStyles.formField}>
            <h5 className={FormStyles.marginBottomHeading}>
              Labor / Union Organization
            </h5>

            <RadioGroup
              onChange={value => setLaborOrUnionOrganizationExperience(value)}
              value={laborOrUnionOrganizationExperience}
              options={Object.keys(DegreeOfExperience).map(key => ({
                id: `volunteer-form_labor-or-union-organization-${key}`,
                key: key,
                label: DegreeOfExperience[key],
                value: DegreeOfExperience[key],
              }))}
            />
          </div>

          <div className={FormStyles.formField}>
            <h5 className={FormStyles.marginBottomHeading}>Legal / Finance</h5>

            <RadioGroup
              onChange={value => setLegalOrFinanceExperience(value)}
              value={legalOrFinanceExperience}
              options={Object.keys(DegreeOfExperience).map(key => ({
                id: `volunteer-form_legal-finance-${key}`,
                key: key,
                label: DegreeOfExperience[key],
                value: DegreeOfExperience[key],
              }))}
            />
          </div>
        </div>

        <div className={FormStyles.twoColumnFlex}>
          <div className={FormStyles.formField}>
            <h5 className={FormStyles.marginBottomHeading}>Non-Profit</h5>

            <RadioGroup
              onChange={value => setNonProfitExperience(value)}
              value={nonProfitExperience}
              options={Object.keys(DegreeOfExperience).map(key => ({
                id: `volunteer-form_non-profit-${key}`,
                key: key,
                label: DegreeOfExperience[key],
                value: DegreeOfExperience[key],
              }))}
            />
          </div>

          <div className={FormStyles.formField}>
            <h5 className={FormStyles.marginBottomHeading}>
              Transcription Services
            </h5>

            <RadioGroup
              onChange={value => setTranscriptionServicesExperience(value)}
              value={transcriptionServicesExperience}
              options={Object.keys(DegreeOfExperience).map(key => ({
                id: `volunteer-form_transcription-services-${key}`,
                key: key,
                label: DegreeOfExperience[key],
                value: DegreeOfExperience[key],
              }))}
            />
          </div>
        </div>

        {/* Web Development */}
        <div className={FormStyles.twoColumnFlex}>
          <div className={FormStyles.formField}>
            <h5 className={FormStyles.marginBottomHeading}>Web Development</h5>

            <RadioGroup
              onChange={value => setWebDevelopmentExperience(value)}
              value={webDevelopmentExperience}
              options={Object.keys(DegreeOfExperience).map(key => ({
                id: `volunteer-form_web-development-experience-${key}`,
                key: key,
                label: DegreeOfExperience[key],
                value: DegreeOfExperience[key],
              }))}
            />
          </div>

          {webDevelopmentExperience !==
            DegreeOfExperience.NoRelevantExperienceOrNA && (
            <div className={FormStyles.formField}>
              <h5>
                Web Development Experience Type{" "}
                <span className={FormStyles.required}>*</span>
              </h5>
              <p>
                Please indicate which types of experience you have
                (Front-end/Back-end/Programmer/etc)
              </p>

              <input
                value={webDevelopmentExperienceText}
                onChange={({ target: { value } }) =>
                  setWebDevelopmentExperienceText(value)
                }
                type="text"
                autoComplete="off"
              />

              {didAttemptSubmit &&
                validationErrors.webDevelopmentExperienceText && (
                  <p className={FormStyles.validationError}>
                    {validationErrors.webDevelopmentExperienceText}
                  </p>
                )}
            </div>
          )}
        </div>

        {/* Translation Services */}
        <div className={FormStyles.twoColumnFlex}>
          <div className={FormStyles.formField}>
            <h5 className={FormStyles.marginBottomHeading}>
              Translation Services
            </h5>

            <RadioGroup
              onChange={value => setTranslationServicesExperience(value)}
              value={translationServicesExperience}
              options={Object.keys(DegreeOfExperience).map(key => ({
                id: `volunteer-form_translation-services-experience-${key}`,
                key: key,
                label: DegreeOfExperience[key],
                value: DegreeOfExperience[key],
              }))}
            />
          </div>

          {translationServicesExperience !==
            DegreeOfExperience.NoRelevantExperienceOrNA && (
            <div className={FormStyles.formField}>
              <h5>
                Language(s)<span className={FormStyles.required}>*</span>
              </h5>
              <p>Please list language(s) you can translate</p>

              <input
                value={translationServicesExperienceText}
                onChange={({ target: { value } }) =>
                  setTranslationServicesExperienceText(value)
                }
                type="text"
                autoComplete="off"
              />

              {didAttemptSubmit &&
                validationErrors.translationServicesExperienceText && (
                  <p className={FormStyles.validationError}>
                    {validationErrors.translationServicesExperienceText}
                  </p>
                )}
            </div>
          )}
        </div>

        <div className={FormStyles.twoColumnFlex}>
          <div className={FormStyles.formField}>
            <h5 className={FormStyles.marginBottomHeading}>
              Discord Moderator
            </h5>

            <RadioGroup
              onChange={value => setDiscordModeratorExperience(value)}
              value={discordModeratorExperience}
              options={Object.keys(DegreeOfExperience).map(key => ({
                id: `volunteer-form_discord-moderator-${key}`,
                key: key,
                label: DegreeOfExperience[key],
                value: DegreeOfExperience[key],
              }))}
            />
          </div>

          <div className={FormStyles.formField}>
            <h5 className={FormStyles.marginBottomHeading}>Reddit Moderator</h5>

            <RadioGroup
              onChange={value => setRedditModeratorExperience(value)}
              value={redditModeratorExperience}
              options={Object.keys(DegreeOfExperience).map(key => ({
                id: `volunteer-form_reddit-moderator-${key}`,
                key: key,
                label: DegreeOfExperience[key],
                value: DegreeOfExperience[key],
              }))}
            />
          </div>
        </div>

        <div className={FormStyles.formField}>
          <h5>Additional Relevant Experience For Consideration</h5>
          <p>
            Please feel free to use this section for letting us know about any
            other experience or talents you have that would help May Day Strike!
          </p>
          <textarea
            onChange={({ target: { value } }) =>
              setAdditionalRelevantExperience(value)
            }
            value={additionalRelevantExperience}
          />
        </div>

        {didAttemptSubmit && errorsExist && (
          <p className={FormStyles.validationError}>
            Errors exist in the form above. Check your answers and try again.
          </p>
        )}

        <div
          id="g-recaptcha"
          className={FormStyles.recaptchaContainer}
          data-sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
        />

        <button disabled={didAttemptSubmit && errorsExist} type="submit">
          Submit
        </button>
      </form>
    </>
  )
}

export default VolunteerForm
