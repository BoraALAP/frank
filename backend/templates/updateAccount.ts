export function updateAccount(info: any) {
  return `
    <div className="email" style="
      border: 1px solid black;
      padding: 20px;
      font-family: sans-serif;
      line-height: 2;
      font-size: 16px;
    ">
      <h2>Hello there!</h2>
      <p>Your Account is updated ${info.firstName} ${info.lastName}</p>
      
    <p>Frank</p>
    </div>
`;
}
