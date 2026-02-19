
"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Vendor(){
  const [name,setName]=useState("");
  const [service,setService]=useState("");

  async function register(){
    await supabase.from("vendors").insert({name,service});
    alert("Vendor Registered Successfully");
  }

  return (
    <main style={{padding:'40px'}}>
      <h2>Vendor Registration</h2>
      <input placeholder="Name" onChange={e=>setName(e.target.value)}/><br/>
      <input placeholder="Service" onChange={e=>setService(e.target.value)}/><br/>
      <button onClick={register}>Register</button>
    </main>
  );
}
