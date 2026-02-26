async function getCurrentUser() {
   const endpoint = `${import.meta.env.VITE_API_URL}/auth/me`;
   const options = {
      method: "GET",
      cache: "no-store",
      credentials: "include",
   };

   const response = await fetch(endpoint, options);

   if (!response.ok) {
      throw new Error("Error trying to restore session");
   }

   const data = await response.json();
   return data;
}

export default getCurrentUser;
