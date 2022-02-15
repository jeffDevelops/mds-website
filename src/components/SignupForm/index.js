import React, { useState } from "react"
import * as FormStyles from "./form.module.css"

const SignupForm = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [demand, setDemand] = useState()

  const handleChange = setter => event => {
    setter(event.target.value)
  }

  return (
    <div id="mauticform_wrapper_basesignupform" className={FormStyles.formContainer}>
      <form
        autoComplete="false"
        method="post"
        action="https://mds.headcount.guru/form/submit?formId=1"
        id="mauticform_basesignupform"
        data-mautic-form="basesignupform"
        encType="multipart/form-data"
      >
        <div id="mauticform_basesignupform_error"></div>
        <div id="mauticform_basesignupform_message"></div>

        <div data-mautic-form-page="1">
          <div id="mauticform_basesignupform_first_name" className={FormStyles.formField}>
            <label
              id="mauticform_label_basesignupform_first_name"
              htmlFor="mauticform_input_basesignupform_first_name"
            >
              First Name <span className={FormStyles.required}>*</span>
            </label>
            <input
              id="mauticform_input_basesignupform_first_name"
              name="mauticform[first_name]"
              value={firstName}
              onChange={handleChange(setFirstName)}
              type="text"
              required
            />
            <span style={{ display: "none" }}></span>
          </div>

          <div id="mauticform_basesignupform_last_name" className={FormStyles.formField}>
            <label
              id="mauticform_label_basesignupform_last_name"
              htmlFor="mauticform_input_basesignupform_last_name"
            >
              Last Name
            </label>
            <input
              id="mauticform_input_basesignupform_last_name"
              name="mauticform[last_name]"
              value={lastName}
              onChange={handleChange(setLastName)}
              type="text"
            />
            <span style={{ display: "none" }}></span>
          </div>

          <div
            id="mauticform_basesignupform_email_address"
            data-validate="email_address"
            data-validation-type="email"
            className={FormStyles.formField}
            required
          >
            <label
              id="mauticform_label_basesignupform_email_address"
              htmlFor="mauticform_input_basesignupform_email_address"
            >
              Email Address <span className={FormStyles.required}>*</span>
            </label>
            <input
              id="mauticform_input_basesignupform_email_address"
              name="mauticform[email_address]"
              value={email}
              onChange={handleChange(setEmail)}
              type="email"
            />
            <span style={{ display: "none" }}>This is required.</span>
          </div>

          <div id="mauticform_basesignupform_what_demand_is_most_impor" className={FormStyles.formField}>
            <label
              id="mauticform_label_basesignupform_what_demand_is_most_impor"
              htmlFor="mauticform_input_basesignupform_what_demand_is_most_impor"
            >
              Which Demand is Most Important to You?
            </label>
            <select
              id="mauticform_input_basesignupform_what_demand_is_most_impor"
              name="mauticform[what_demand_is_most_impor]"
              value={demand}
              onChange={handleChange(setDemand)}
            >
              <option>Living Wage</option>
              <option>Paid Time Off</option>
              <option>Right to Unions</option>
              <option>Single-Payer Healthcare</option>
              <option>Tuition-Free Higher Ed</option>
            </select>
            <span style={{ display: "none" }}></span>
          </div>

          <div id="mauticform_basesignupform_submit">
            <button
              type="submit"
              name="mauticform[submit]"
              id="mauticform_input_basesignupform_submit"
              value=""
            >
              Submit
            </button>
          </div>
        </div>

        <input
          type="hidden"
          name="mauticform[formId]"
          id="mauticform_basesignupform_id"
          value="1"
        />
        <input
          type="hidden"
          name="mauticform[return]"
          id="mauticform_basesignupform_return"
          value=""
        />
        <input
          type="hidden"
          name="mauticform[formName]"
          id="mauticform_basesignupform_name"
          value="basesignupform"
        />
      </form>
    </div>
  )
}

export default SignupForm
