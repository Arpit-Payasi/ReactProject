import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import app from "./Config/FirebaseConfig";

const firestore = getFirestore(app);

function Events() {
    const params=useParams()
    console.log(params)
  const [data, setData] = useState([]);
  async function readData() {
    const ref = collection(firestore, "events");
    const q = query(ref, where("isPublished", "==", true));
    const snapshot = await getDocs(q);

    const events = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setData(events);
  }

  return (
    <div>
      <button onClick={readData}>Load Events</button>

      {data.map((event) => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.venue}</p>
          <p>
            {event.registeredCount} / {event.capacity}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Events;
