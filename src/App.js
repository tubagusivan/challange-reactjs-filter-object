import React from 'react';

const data =  [
{
"adminfee": "0.0",
"billid": "8",
"currency": "360",
"title": "TELKOMSEL 50rb - 50.149",
"totalamount": "50149.00",
"descriptions": null,
"body": [
"DENOM : 50000"
]
},
{
"adminfee": "0.0",
"billid": "9",
"currency": "360",
"title": "TELKOMSEL 75rb - 74.050",
"totalamount": "74050.00",
"descriptions": null,
"body": [
"DENOM : 75000"
]
},
{
"adminfee": "0.0",
"billid": "10",
"currency": "360",
"title": "TELKOMSEL 100rb - 98.264",
"totalamount": "98264.00",
"descriptions": null,
"body": [
"DENOM : 100000"
]
},
{
"adminfee": "0.0",
"billid": "11",
"currency": "360",
"title": "TELKOMSEL 150rb - 146.600",
"totalamount": "146600.00",
"descriptions": null,
"body": [
"DENOM : 150000"
]
},
{
"adminfee": "0.0",
"billid": "12",
"currency": "360",
"title": "TELKOMSEL 200rb - 194.900",
"totalamount": "194900.00",
"descriptions": null,
"body": [
"DENOM : 200000"
]
}
];

function App() {
  return (
    <div>
      {data.filter(item => item.body >= "100000").map(filteredItem => (
        <li>
          {filteredItem.title}
          <ol>{filteredItem.body}</ol>
        </li>
      ))}
    </div>
  );
}

export default App;
