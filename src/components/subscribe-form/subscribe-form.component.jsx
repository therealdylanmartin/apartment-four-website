import './subscribe-form.styles.scss';

const SubscribeForm = () => {
  return (
    <form className="subscribe-form">
      <label htmlFor="subscribe-email">Email</label>
      <input type="email" id="subscribe-email" placeholder="handle@client.com" />
      <input className="button" type="button" id="subscribe-button" value="Sign Up" />
    </form>
  )
}

export default SubscribeForm;