import { Footer } from '../components'

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Call 1-234-456-7890</Footer.Title>
      <Footer.Links>
        <Footer.Link to="/faqs">FAQs</Footer.Link>
        <Footer.Link to="/help-center">Help Center</Footer.Link>
        <Footer.Link to="/account">Account</Footer.Link>
        <Footer.Link to="/media-center">Media Center</Footer.Link>
        <Footer.Link to="/ir">Investor Relations</Footer.Link>

        <Footer.Link to="/jobs">Jobs</Footer.Link>
        <Footer.Link to="/redeem">Redeem Gift Cards</Footer.Link>
        <Footer.Link to="/gift-cards">Buy Gift Cards</Footer.Link>
        <Footer.Link to="/watch">Ways to Watch</Footer.Link>

        <Footer.Link to="/terms">Terms of Use</Footer.Link>
        <Footer.Link to="/privacy">Privacy</Footer.Link>
        <Footer.Link to="/cookies">Cookie Preferences</Footer.Link>
        <Footer.Link to="/corporate">Corporate Information</Footer.Link>

        <Footer.Link to="/contact">Contact Us</Footer.Link>
        <Footer.Link to="/speedtest">Speed Test</Footer.Link>
        <Footer.Link to="/legal">Legal Notices</Footer.Link>
        <Footer.Link to="/originals">Netflix Originals</Footer.Link>
      </Footer.Links>
      <Footer.Text>Netflix - United States</Footer.Text>
    </Footer>
  )
}