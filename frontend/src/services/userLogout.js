export async function userLogout() {
   const endpoint = `${import.meta.env.VITE_API_URL}/auth/logout`;

   const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
   };

   const result = await fetch(endpoint, options);

   if (!result.ok) return null;

   return result.json();
}

export default userLogout;
