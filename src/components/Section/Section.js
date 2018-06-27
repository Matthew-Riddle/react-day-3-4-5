import React from 'react'

import './Section.css'

import SectionHeader from './SectionHeader/SectionHeader'
import SectionContent from './SectionContent/SectionContent'

const section = props => (
  <section
    id={props.section.title}
    class='Section section is-paddingless is-fullheight'
  >
    <SectionHeader
      title={props.section.title}
      subtitle={props.section.subtitle}
      buttonText={props.section.buttonText}
    />
    <SectionContent
      image={props.section.image}
      header={props.section.header}
      items={props.section.items}
    />
  </section>
)

export default section
