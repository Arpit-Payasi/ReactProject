import React from "react";
import { useState } from "react";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import app from "../../Config/FirebaseConfig";

const firestore = getFirestore(app);
const auth = getAuth(app);

function Form() {
  const [title, setTitle] = useState("");
  function store(e) {
    setTitle(e.target.value);
  }

  const [description, setDescription] = useState("");
  function storeDesc(e) {
    setDescription(e.target.value);
  }

  const [venue, setVenue] = useState("");
  function storeVenue(e) {
    setVenue(e.target.value);
  }

  const [dateTime, setDateTime] = useState("");
  function storeDateTime(e) {
    setDateTime(e.target.value);
  }

  const [capacity, setCapacity] = useState("");
  function storeCapacity(e) {
    setCapacity(e.target.value);
  }

  async function doSubmit(e) {
    e.preventDefault();

    const user = auth.currentUser;
    await addDoc(collection(firestore, "events"), {
      title: title,
      description: description,
      venue: venue,
      startAt: dateTime,
      capacity: capacity,
      organizerId: user.uid,        
      registeredCount: 0,
      isPublished: true,
      createdAt: serverTimestamp(),
    });

    console.log("Event created successfully");
  }

  return (
    <form>
      <input onChange={store} type="text" placeholder="Event Title" />
      <textarea onChange={storeDesc} placeholder="Event Description"></textarea>
      <input onChange={storeVenue} type="text" placeholder="Venue" />
      <input onChange={storeDateTime} type="datetime-local" />
      <input onChange={storeCapacity} type="number" placeholder="Capacity" />
      <button onClick={doSubmit}>Create Event</button>
    </form>
  );
}

export default Form;
