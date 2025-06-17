import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Templates from '../components/Templates'
import Packages from '../components/Packages'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Templates />
      <Packages />
      <ContactForm />
    </>
  )
}
