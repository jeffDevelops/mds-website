import React, { useState, useCallback, useLayoutEffect } from "react"
import { DegreeOfExperience, Regions, SocialMediaPlatforms } from "./config"
import * as FormStyles from "./form.module.css"
import RadioGroup from "../RadioGroup"
import Checkbox from "../Checkbox"
import deepEqual from "lodash/isEqual"

/**
 * RADIO GROUP RESPONSIVE LAYOUT
 *
 * A custom hook for calculating the number of columns to use for the radio button group
 */
const useRadioButtonLayout = () => {
  // Maintain state for the column and row configuration
  const [regionRadioButtonColumns, setRegionRadioButtonColumns] = useState([
    4, 4, 10,
  ])

  useLayoutEffect(() => {
    // Configure the number of rows in each column, based on the viewport width
    const handleResize = () => {
      switch (true) {
        case window.innerWidth <= 600:
          if (!deepEqual(regionRadioButtonColumns, [Infinity]))
            setRegionRadioButtonColumns([Infinity])
          return
        case window.innerWidth < 800 && window.innerWidth > 600:
          if (!deepEqual(regionRadioButtonColumns, [6, Infinity]))
            setRegionRadioButtonColumns([6, Infinity])
          return
        case window.innerWidth >= 800:
          if (!deepEqual(regionRadioButtonColumns, [4, 4, Infinity]))
            setRegionRadioButtonColumns([4, 4, Infinity])
          return
        default:
          console.error("Unhandled viewport size")
      }
    }

    // Run the column config on component mount
    handleResize()

    // Listen for resize events and clean up if unmounted
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [regionRadioButtonColumns])

  return regionRadioButtonColumns
}

const VolunteerForm = () => {
  const [preferredName, setPreferredName] = useState("")
  const [preferredSocialPlatform, setPreferredSocialPlatform] = useState(null)
  const [socialPlatformUsername, setSocialPlatformUsername] = useState("")
  const [nonWorkEmail, setNonWorkEmail] = useState("")
  const [localRegion, setLocalRegion] = useState(Object.keys(Regions)[0])
  const [artDesignSignageExperience, setArtDesignSignageExperience] = useState(
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

  const [additionalRelevantExperience, setAdditionalRelevantExperience] =
    useState("")

  const dummySubmit = useCallback(() => {}, [preferredSocialPlatform])

  const regionRadioButtonColumns = useRadioButtonLayout()

  const handleRegularlyEngagedSocialPlatformsChange = useCallback(
    ({ target: { value, checked } }) => {
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
    [regularlyEngagedSocialPlatforms]
  )

  return (
    <div id="mauticform_wrapper_TODO:" className={FormStyles.formContainer}>
      <h1>May Day Strike Volunteer Application</h1>
      <p>
        Please submit the following information to help us coordinate teams to
        get your invitation link at the end, thank you!
      </p>

      <form
        className={FormStyles.form}
        autoComplete="false"
        method="post"
        action="TODO:"
        id="mauticform_TODO:"
        data-mautic-form="TODO:"
        encType="multipart/form-data"
      >
        <h2>About You</h2>

        <div className={FormStyles.twoColumnFlex}>
          <div
            id="mauticform_TODO:_preferred_social_platform"
            className={FormStyles.formField}
          >
            <label
              className={FormStyles.textInputLabel}
              htmlFor="volunteer-form_preferred-social-platform"
            >
              <h5>Preferred Social Platform</h5>
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
            id="mauticform_TODO:_preferred_social_platform"
            className={FormStyles.formField}
          >
            <label
              className={FormStyles.textInputLabel}
              htmlFor="volunteer-form_social-platform-username"
            >
              <h5>Username for the platform you specified</h5>
              <p>
                Please double check the spelling to ensure we can contact you!
              </p>
            </label>

            <input
              id="volunteer-form_social-platform-username"
              onChange={({ target: { value } }) =>
                setSocialPlatformUsername(value)
              }
              type="text"
              autoComplete="off"
            />
          </div>
        </div>

        <div
          id="mauticform_TODO:_non-work-email"
          className={FormStyles.formField}
        >
          <label
            className={FormStyles.textInputLabel}
            htmlFor="volunteer-form_non-work-email"
          >
            <h5>Best non-work email</h5>

            <p>
              Please double check the spelling to ensure we can contact you, and
              make sure not to use your work email!
            </p>
          </label>

          <input
            id="volunteer-form_social-platform-username"
            onChange={({ target: { value } }) => setNonWorkEmail(value)}
            type="text"
            autoComplete="off"
          />
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
        </div>

        <div className={FormStyles.twoColumnFlex}>
          <div className={FormStyles.formField}>
            <h5 className={FormStyles.marginBottomHeading}>
              In-Person Organization
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
              Journalism / Writing
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
        </div>

        <div className={FormStyles.twoColumnFlex}>
          <div className={FormStyles.formField}>
            <h5 className={FormStyles.marginBottomHeading}>
              Labor / Union Organization
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
            <h5 className={FormStyles.marginBottomHeading}>Legal / Finance</h5>

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
        </div>

        <div className={FormStyles.twoColumnFlex}>
          <div className={FormStyles.formField}>
            <h5 className={FormStyles.marginBottomHeading}>Non-Profit</h5>

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
              <h5>Web Development Experience Type</h5>
              <p>
                Please indicate which types of experience you have
                (Front-end/Back-end/Programmer/etc)
              </p>

              <input
                value={webDevelopmentExperienceText}
                type="text"
                autocomplete="off"
              />
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
              <h5>Language(s)</h5>
              <p>Please list language(s) you can translate</p>

              <input
                value={translationServicesExperienceText}
                type="text"
                autocomplete="off"
              />
            </div>
          )}
        </div>

        <div className={FormStyles.twoColumnFlex}>
          <div className={FormStyles.formField}>
            <h5 className={FormStyles.marginBottomHeading}>
              Discord Moderator
            </h5>

            <RadioGroup
              onChange={value => setArtDesignSignageExperience(value)}
              value={artDesignSignageExperience}
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
              onChange={value => setTranscriptionServicesExperience(value)}
              value={transcriptionServicesExperience}
              options={Object.keys(DegreeOfExperience).map(key => ({
                id: `volunteer-form_reddit-moderator-${key}`,
                key: key,
                label: DegreeOfExperience[key],
                value: DegreeOfExperience[key],
              }))}
            />
          </div>
        </div>

        <div className={FormStyles.twoColumnFlex}>
          <div className={FormStyles.formField}>
            <h5>
              Which social platforms do you engage with on a regular basis?
            </h5>
            <p>Check all that apply!</p>
            <Checkbox
              value="Discord"
              onChange={handleRegularlyEngagedSocialPlatformsChange}
              checked={regularlyEngagedSocialPlatforms.includes("Discord")}
            >
              Discord
            </Checkbox>
            <Checkbox
              value="Facebook"
              onChange={handleRegularlyEngagedSocialPlatformsChange}
              checked={regularlyEngagedSocialPlatforms.includes("Facebook")}
            >
              Facebook
            </Checkbox>
            <Checkbox
              value="Instagram"
              onChange={handleRegularlyEngagedSocialPlatformsChange}
              checked={regularlyEngagedSocialPlatforms.includes("Instagram")}
            >
              Instagram
            </Checkbox>
            <Checkbox
              value="Reddit"
              onChange={handleRegularlyEngagedSocialPlatformsChange}
              checked={regularlyEngagedSocialPlatforms.includes("Reddit")}
            >
              Reddit
            </Checkbox>
          </div>

          <div className={FormStyles.formField}>
            <h5 style={{ opacity: 0 }}>
              Which social platforms do you engage with on a regular basis?
            </h5>
            <p style={{ opacity: 0 }}>Check all that apply!</p>
            <Checkbox
              value="Snapchat"
              onChange={handleRegularlyEngagedSocialPlatformsChange}
              checked={regularlyEngagedSocialPlatforms.includes("Snapchat")}
            >
              Snapchat
            </Checkbox>
            <Checkbox
              value="TikTok"
              onChange={handleRegularlyEngagedSocialPlatformsChange}
              checked={regularlyEngagedSocialPlatforms.includes("TikTok")}
            >
              TikTok
            </Checkbox>
            <Checkbox
              value="Twitch"
              onChange={handleRegularlyEngagedSocialPlatformsChange}
              checked={regularlyEngagedSocialPlatforms.includes("Twitch")}
            >
              Twitch
            </Checkbox>
            <Checkbox
              value="Twitter"
              onChange={handleRegularlyEngagedSocialPlatformsChange}
              checked={regularlyEngagedSocialPlatforms.includes("Twitter")}
            >
              Twitter
            </Checkbox>
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

        <div id="mauticform_TODO:_error"></div>
        <div id="mauticform_TODO:_message"></div>
      </form>
    </div>
  )
}

export default VolunteerForm
