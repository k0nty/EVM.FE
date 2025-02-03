export const registrationUser = async (user: {
    userName: string;
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await fetch("https://localhost:7034/identity/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
        credentials: "include",
      });
  
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error(data?.message || "Registration failed");
      }
  
      return data.json();
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
