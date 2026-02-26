export async function userRegistration(username, password) {
   const endpoint = `${import.meta.env.VITE_API_URL}/auth/register`;
   const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
      cache: "no-store",
      credentials: "include",
   };

   const result = await fetch(endpoint, options);

   if (!result.ok) {
      throw new Error("User couldn´t be registred");
   }

   return result.json();
}
