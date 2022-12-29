import SectionHeading from '../section-heading/section-heading.component';

const SubscribeSection = ({ idTag, lines }) => {
  return (
    <section id={idTag} className={`section__${idTag}`}>
      <SectionHeading lines={lines} />
      <form className="subscribe-form">
        <label htmlFor="subscribe-email">Email</label>
        <input type="email" id="subscribe-email" placeholder="handle@client.com" />
        <input type="button" id="subscribe-button" value="Sign Up" />
      </form>
    </section>
  )
}

export default SubscribeSection;