import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const Title = styled.h1`
  margin-bottom: 1vh;
  margin-top: 0vh;
  fontFamily: Montserrat, sans-serif;
`;

const Container = styled.div`
  fontFamily: sans-serif;
  margin: 2vh auto 2vh auto;
  padding: 0;
  width: 80vw;
  height: 96vh;
`

const TitleLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const FloatMenu = styled.div`
  display: block;
  width: 80vw;
  height: 5vh;
  background-color: #888888;
  opacity: 0.8;
  bottom: 0;
  text-align: center;
  position: fixed;
`

const Footer = styled.footer`
  height: 4vh;
  margin: 0 0 4vh 0;
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
        <Footer>
          © {new Date().getFullYear()} ywand, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Container>
    )
  }
}

export default Layout
