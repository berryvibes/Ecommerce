document.getElementById("signup-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
      username: document.querySelector('input[name="email"]').value,
      first_name: document.querySelector('input[name="Firstname"]').value,
      last_name: document.querySelector('input[name="Lastname"]').value,
      email: document.querySelector('input[name="email"]').value,
      password: document.querySelector('input[name="pswd"]').value,
      phone: document.querySelector('input[placeholder="Enter Phone"]').value,
      city: document.querySelector('input[placeholder="City"]').value,
      lga: document.querySelector('input[placeholder="Enter LGA"]').value,
      country: document.querySelector("select").value,
    };

    const res = await fetch("http://127.0.0.1:8000/api/auth/signup/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (res.ok) {
      alert("Signup successful!");
      window.location.href = "createacct.html";
    } else {
      alert("Signup failed: " + JSON.stringify(result));
    }
  });
