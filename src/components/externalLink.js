import React from "react"

import PropTypes from "prop-types"

export default function ExternalLink(props) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  )
}

ExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.isRequired,
}
