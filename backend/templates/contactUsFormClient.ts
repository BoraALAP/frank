export function contactUsFormClient(info: any) {
  return `
    <div className="email" style="
      border: 1px solid black;
      padding: 20px;
      font-family: sans-serif;
      line-height: 2;
      font-size: 16px;
    ">
      <h2>Hello there!</h2>
      <p>The form is filled by ${info.firstName} ${info.lastName}</p>
      <div>
        <h3>Dear reader</h3></div>
        <p>First Name: ${info.firstName}</p>
        <p>Last Name: ${info.lastName}</p>
        <p>Email: ${info.email}</p>
        <p>Phone: ${info.phone}</p>
        <p>Company: ${info.company}</p>
        <p>Address: ${info.address}</p>
        <p>City: ${info.city}</p>
        <p>Province: ${info.province}</p>
        <p>Postal: ${info.postal}</p>
        <p>Country: ${info.country}</p>
        <p>Comments: ${info.comments}</p>
        <p>I am:</p>
        <p>
        ${info.iam}
        </p>
        <p>I need:</p>
        <p>
        ${info.ineed}
        </p>
      
    </div>
    <p>Frank</p>
    </div>
`;
}
