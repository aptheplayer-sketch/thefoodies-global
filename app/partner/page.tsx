
"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Partner(){
  const [name,setName]=useState("");
  const [city,setCity]=useState("");

  async function register(){
    await supabase.from("partners").insert({name,city});
    alert("Partner Registered Successfully");
  }

  return (
    <main style={{padding:'40px'}}>
      <h2>Partner Registration</h2>
      <input placeholder="Name" onChange={e=>setName(e.target.value)}/><br/>
      <input placeholder="City" onChange={e=>setCity(e.target.value)}/><br/>
      <button onClick={register}>Register</button>
    </main>
  );
}
