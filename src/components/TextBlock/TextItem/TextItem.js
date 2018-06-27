import React from 'react'

import Icon from '../../UI/Icon/Icon'
import Text from '../../UI/Text/Text'

const textItem = props => (
  <div class='is-inline-flex subtitle is-4'>
    <Icon icon={props.icon} />
    <Text text={props.text} />
  </div>
)

export default textItem
