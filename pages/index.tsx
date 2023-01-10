import Link from 'next/link'
import Layout from '../components/Layout'
import styled from "styled-components";
import profilePicture from '../public/images/nik-flatirons.jpg'
import Image from 'next/image'

const StyledHeaderText = styled.h1`
  min-width: 8em;
  border: 5px solid #00ffba;
  border-radius: 75px;
  padding: 1em;
  background-color: white;
  height: fit-content;
`

const StyledImage = styled(Image)`
  border-radius: 30%;
  align-self: center;
  width: stretch;
  height: auto;
  box-sizing: border-box;
`

const HeaderFlexbox = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`
const AboutMeContent = styled.div`
  background-color: white;
  border: 5px solid #00ffba;
  border-radius: 20px;
  padding: 1em;
`

const IndexPage = () => (
  <Layout title="Home">
      <HeaderFlexbox>
          <StyledHeaderText>Hi! My name is Nik and I am a web developer and rock climber.</StyledHeaderText>
          <StyledImage src={profilePicture} alt="A picture of me from when I still had hair" width="437" height="480"></StyledImage>
      </HeaderFlexbox>
      <br/>
      <AboutMeContent>
          <h3>About Me</h3>
          <p>
              I have a passion for all things tech and love the
              challenge of solving complex problems. In my free time, you can find me at the climbing gym, in the
              mountains, or setting up the latest silly home automation. In a former life, I was a senior hardware
              engineer designing server motherboards, but I gave that all up so I could build websites!
          </p>

          <p>
              As a frontend developer, I've worked professionally with React and Angular, and while I don't favor one or
              the other, I strongly prefer Typescript in whatever web project I am working on. I excel when working on
              teams with a strong collaborative culture, and I get the most joy working with others. I enjoy understanding
              the low level details of how the web actually works, and my goal is to eventually be able to lead teams in
              building scalable, reliable, and usable websites. I also have a strong passion for web accessibility, and
              believe it is paramount to build inclusive and usable websites for all.
          </p>

          <p>
              Thank you for visiting my website. I hope you find it informative and look forward to connecting with
              you.
          </p>
      </AboutMeContent>

  </Layout>
)

export default IndexPage
