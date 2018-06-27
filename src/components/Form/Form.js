import React from 'react'

import FormHeader from './FormHeader/FormHeader'
import Input from '../UI/Input/Input'
import FormSubmit from './FormSubmit/FormSubmit'

const form = props => (
  <div class='card has-background-info has-rounded-corners'>
    <div class='card-content'>
      <div class='has-padding-4 has-text-white has-text-centered'>
        <FormHeader />
      </div>
      <form>
        {Object.keys(props.inputs).map(input => (
          <Input
            key={props.inputs[input].placeholder}
            icon={props.inputs[input].icon}
            placeholder={props.inputs[input].placeholder}
            value={props.inputs[input].value}
            changed={value => props.changed(input, value)}
          />
        ))}
        <FormSubmit />
      </form>
    </div>
  </div>
)

export default form
