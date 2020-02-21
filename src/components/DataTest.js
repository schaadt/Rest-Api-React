import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RestApiHooksComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://us-central1-rest-api-1a444.cloudfunctions.net/app/api/read")
      .then(result => setData(result.data));
  }, []);

  


  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name}: {item.price}<br />
  
          </li>
        ))}
      </ul>
    </div>
  );
}