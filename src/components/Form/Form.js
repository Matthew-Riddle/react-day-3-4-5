import React from 'react'

import FormHeader from './FormHeader/FormHeader'
import Input from '../UI/Input/Input'
import FormSubmit from './FormSubmit/FormSubmit'

const form = props => (
  <div className='card has-background-info has-rounded-corners'>
    <div className='card-content'>
      <div className='has-padding-4 has-text-white has-text-centered'>
        <FormHeader />
      </div>
      <form>
        {Object.entries(props.inputs).map(([name, input]) => (
          <Input
            key={name}
            input={input}
            changed={value => props.changed(name, value)}
          />
        ))}
        <FormSubmit />
      </form>
    </div>
  </div>
)

export default form
