
"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Admin() {
  const [partners,setPartners]=useState([]);

  useEffect(()=>{
    supabase.from("partners").select("*").then(res=>{
      if(res.data) setPartners(res.data);
    });
  },[]);

  return (
    <main style={{padding:'40px'}}>
      <h2>Admin Dashboard</h2>
      <h3>Partners</h3>
      {partners.map(p=>(
        <div key={p.id}>{p.name} - {p.city}</div>
      ))}
    </main>
  );
}
