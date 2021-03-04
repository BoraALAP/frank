export function contactUsForm(info: any) {
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
      <div><h3>Dear reader</h3></div>
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
        <ul>
        // info.iam.split(',').map((it, index) => {
        //   return <li key={index}>{it}</li>;
        // })}
        </ul>
        <p>I need:</p>
        <ul>
        // info.ineed.split(',').map((it, index) => {
        //   return <li key={index}>{it}</li>;
        // })}
        </ul>
      <p>Frank</p>
    </div>
  `;
}
