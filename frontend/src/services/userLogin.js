export async function userLogin(username, password) {
   const endpoint = `${import.meta.env.VITE_API_URL}/auth/login`;

   const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      cache: "no-store",
      body: JSON.stringify({ username: username, password: password }),
   };

   const result = await fetch(endpoint, options);

   if (!result.ok) return null;

   return result.json();
}
