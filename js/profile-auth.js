document.addEventListener("DOMContentLoaded", async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("You are not logged in.");
        window.location.href = "createacct.html";
        return;
      }

      try {
        const response = await fetch("http://127.0.0.1:8000/api/auth/profile/", {
          method: "GET",
          headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          throw new Error("Failed to load profile.");
        }

        const data = await response.json();
        console.log("Profile data:", data);

        document.getElementById("welcome-message").textContent = `Welcome, ${data.first_name}`;
        document.getElementById("email-display").textContent = data.email;
        document.getElementById("fullname").textContent = `${data.first_name} ${data.last_name}`;
        document.getElementById("phone").textContent = data.phone;
        document.getElementById("city").textContent = data.city;
        document.getElementById("lga").textContent = data.lga;
        document.getElementById("country").textContent = data.country;

      } catch (error) {
        console.error("Error loading profile:", error);
        alert("Something went wrong. Please log in again.");
        localStorage.removeItem("token");
        window.location.href = "createacct.html";
      }
    });