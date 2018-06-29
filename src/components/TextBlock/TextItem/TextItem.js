import React from 'react'

import Icon from '../../UI/Icon/Icon'
import Text from '../../UI/Text/Text'

const textItem = props => (
  <div className='is-inline-flex subtitle is-4'>
    <Icon icon={props.icon} textColor={props.textColor} />
    <Text text={props.text} textColor={props.textColor} />
  </div>
)

export default textItem
