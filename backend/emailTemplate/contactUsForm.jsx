const React = require('react');

module.exports = ({ info }) => {
  info.iam.split(",").map(it => {
    console.log(it);
  })
  return(
    <html>
      <body>
        <div><h3>Dear reader</h3></div>
        <p>First Name: {info.firstName}</p>
        <p>Last Name: {info.lastName}</p>
        <p>Email: {info.email}</p>
        <p>Phone: {info.phone}</p>
        <p>Company: {info.company}</p>
        <p>Address: {info.address}</p>
        <p>City: {info.city}</p>
        <p>Province: {info.province}</p>
        <p>Postal: {info.postal}</p>
        <p>Country: {info.country}</p>
        <p>Comments: {info.comments}</p>
        <p>I am:</p>
        <ul>
        {info.iam.split(",").map((it, index) => {
          return(

            <li key={index}>{it}</li>
          )
        })}
        </ul>
        <p>I need:</p>
        <ul>
        {info.ineed.split(",").map((it, index) => {
          return(
            <li key={index}>{it}</li>

          )
        })}
        </ul>
      </body>
    </html>
  )};

