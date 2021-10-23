export function createAccount(info: any) {
  return `
    <div className="email" style="
      border: 1px solid black;
      padding: 20px;
      font-family: sans-serif;
      line-height: 2;
      font-size: 16px;
    ">
      <h2>Hello there!</h2>
      <p>New account created by ${info.firstName} ${info.lastName}</p>
      <div>
        <h3>Dear reader</h3></div>
        <p>First Name: ${info.firstName}</p>
        <p>Last Name: ${info.lastName}</p>
        <p>Email: ${info.email}</p>
        <p>Company: ${info.companyName}</p>
        <p>Phone: ${info.phone}</p>
    </div>
    <p>Frank</p>
    </div>
`;
}
