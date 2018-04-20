function register (props) {
  return (
    <div>
      <span>Email:</span>
      <input type='text' onChange={props.onChangeEmail} value={props.email} />
      <span>Password:</span>
      <input type='text' onChange={props.onChangePassword} value={props.password} />
      <button onClick={props.submit}>Submit</button>
    </div>
  )
}

//refactor 1:
function register (props) {
  var onChangeEmail = props.onChangeEmail;
  var email = props.email;
  var onChangePassword = props.onChangePassword;
  var password = props.password;
  var submit = props.submit;
  return (
    <div>
      <span>Email:</span>
      <input type='text' onChange={onChangeEmail} value={email} />
      <span>Password:</span>
      <input type='text' onChange={onChangePassword} value={password} />
      <button onClick={submit}>Submit</button>
    </div>
  )
}

//refactor 2:

function register (props) {
  var { onChangeEmail, email, onChangePassword, password, submit }  = props;
  return (
    <div>
      <span>Email:</span>
      <input type='text' onChange={onChangeEmail} value={email} />
      <span>Password:</span>
      <input type='text' onChange={onChangePassword} value={password} />
      <button onClick={submit}>Submit</button>
    </div>
  )
}
