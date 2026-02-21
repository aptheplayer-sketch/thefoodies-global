
const SUPABASE_URL = "https://azcgvkoxlxmmtcfpgslx.supabase.co";
const SUPABASE_KEY = "sb_publishable_RxFG-lYWYZGt8PftYvtaIg_e12jKNvk";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Register
async function registerPartner(e){
e.preventDefault();
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
const {error} = await supabaseClient.auth.signUp({email,password});
if(error) alert(error.message);
else alert("Registered successfully");
}

// Login
async function loginPartner(e){
e.preventDefault();
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
const {error} = await supabaseClient.auth.signInWithPassword({email,password});
if(error) alert(error.message);
else window.location="dashboard.html";
}

// Logout
async function logout(){
await supabaseClient.auth.signOut();
window.location="../index.html";
}

// Load partners in admin dashboard
async function loadPartners(){
const {data,error} = await supabaseClient.from("partners").select("*");
if(error){console.log(error);return;}
let html="";
data.forEach(p=>{
html+=`<div class="card">
Email: ${p.email || 'N/A'}<br>
Phone: ${p.phone || 'N/A'}<br>
</div>`;
});
document.getElementById("partnersList").innerHTML=html;
}
