export async function userLogin(username, password) {
   const endpoint = "http://localhost:3001/api/v1/auth/login";

   const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ username: username, password: password }),
   };

   const result = await fetch(endpoint, options);

   if (!result.ok) return null;

   return result.json();
}
