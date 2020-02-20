import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
    >
      <Link to={`/`}>
        {/* <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            margin: 0 auto;
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3> */}
      </Link>
      {children}
    </div>
  )
}