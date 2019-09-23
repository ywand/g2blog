import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
const Title = styled.h1`
  margin-bottom: 1vh;
  margin-top: 0vh;
  fontFamily: Montserrat, sans-serif;
`;

const Container = styled.div`
  margin: 2vh auto;
  padding: 0;
  Width: 80vw;
  height: 95vh;
`

const TitleLink = styled(Link)`
  box-Shadow: none;
  text-Decoration: none;
  color: inherit;
`


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <Title>
          <TitleLink to={`/`}>
            {title}
          </TitleLink>
        </Title>
      )
    } else {
      header = (
        <Title>
          <TitleLink to={`/`}>
            {title}
          </TitleLink>
        </Title>
      )
    }
    return (
      <Container>
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} ywand, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    )
  }
}

export default Layout
