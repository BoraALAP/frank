export function forgotPassword(token: string) {
  return `
    <div className="email" style="
      border: 1px solid black;
      padding: 20px;
      font-family: sans-serif;
      line-height: 2;
      font-size: 20px;
    ">
      <h2>Hello there!</h2>
      <p>Your Password Reset Token is here!
      <a href="https://${process.env.FRONTEND_URL}/reset-password?token=${token}">Click Here to reset</a></p>
      <p>Frank</p>
    </div>
  `;
}
