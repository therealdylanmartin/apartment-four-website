import './subscribe-form.styles.scss';

const SubscribeForm = () => {
  return (
    <form className="subscribe-form">
      <div className="subscribe-field">
        <label htmlFor="subscribe-email">Email</label>
        <input type="email" id="subscribe-email" placeholder="handle@client.com" />
      </div>
      <input className="button" type="submit" id="subscribe-button" value="Sign Up" />
    </form>
  )
}

export default SubscribeForm;