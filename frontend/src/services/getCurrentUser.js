async function getCurrentUser() {
   const endpoint = "http://localhost:3001/api/v1/auth/me";
   const options = {
      method: "GET",
      credentials: "include",
   };

   const response = await fetch(endpoint, options);

   if (!response.ok) {
      return null;
   }

   const data = await response.json();
   return data;
}

export default getCurrentUser;
