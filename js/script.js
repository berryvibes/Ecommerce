document.addEventListener("DOMContentLoaded", function () {
  const getButton = document.getElementById("myBtn");
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    console.log("scrolling...");
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scroll");
    } else {
      navbar.classList.remove("navbar-scroll");
    }

    if (window.scrollY > 20) {
      getButton.style.display = "block";
    } else {
      getButton.style.display = "none";
    }
  });

  getButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});



// document.getElementById("signup-form").addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const data = {
//       username: document.querySelector('input[name="email"]').value,
//       first_name: document.querySelector('input[name="Firstname"]').value,
//       last_name: document.querySelector('input[name="Lastname"]').value,
//       email: document.querySelector('input[name="email"]').value,
//       password: document.querySelector('input[name="pswd"]').value,
//       phone: document.querySelector('input[placeholder="Enter Phone"]').value,
//       city: document.querySelector('input[placeholder="City"]').value,
//       lga: document.querySelector('input[placeholder="Enter LGA"]').value,
//       country: document.querySelector("select").value,
//     };

//     const res = await fetch("http://127.0.0.1:8000/api/auth/signup/", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     const result = await res.json();
//     if (res.ok) {
//       alert("Signup successful!");
//       window.location.href = "createacct.html";
//     } else {
//       alert("Signup failed: " + JSON.stringify(result));
//     }
//   });



// document
//   .getElementById("login-form")
//   .addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const email = document.querySelector('input[name="email"]').value;
//     const password = document.querySelector('input[name="pswd"]').value;

//     const res = await fetch("http://127.0.0.1:8000/api/auth/login/", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       localStorage.setItem("token", data.token);
//       window.location.href = "Shop.html";
//     } else {
//       alert("Login failed: " + data.detail || "Check your credentials");
//     }
//   });


//   document.addEventListener( function () {
//   const loginForm = document.getElementById("login-form");

//   if (loginForm) {
//     loginForm.addEventListener("submit", async function (e) {
//       e.preventDefault();

//       const email = document.querySelector('input[name="email"]').value;
//       const password = document.querySelector('input[name="pswd"]').value;

//       try {
//         const res = await fetch("http://127.0.0.1:8000/api/auth/login/", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email, password }),
//         });

//         const data = await res.json();

//         console.log("Login response:", data); // ✅ For debugging

//         if (res.ok) {
//           localStorage.setItem("token", data.token);
//           window.location.href = "shop.html";
//         } else {
//           alert("Login failed: " + (data.detail || JSON.stringify(data)));
//         }
//       } catch (error) {
//         console.error("Login error:", error);
//         alert("Something went wrong. Check console for details.");
//       }
//     });
//   }
// });




document.addEventListener("DOMContentLoaded", function () {
  // SIGNUP logic
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const data = {
        first_name: document.querySelector('input[name="Firstname"]').value,
        last_name: document.querySelector('input[name="Lastname"]').value,
        email: document.querySelector('input[name="email"]').value,
        password: document.querySelector('input[name="pswd"]').value,
        phone: document.querySelector('input[placeholder="Enter Phone"]').value,
        city: document.querySelector('input[placeholder="City"]').value,
        lga: document.querySelector('input[placeholder="Enter LGA"]').value,
        country: document.querySelector("select").value,
      };

      try {
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
      } catch (err) {
        alert("Signup error occurred");
        console.error(err);
      }
    });
  }
});


    //     const data = {
//       username: document.querySelector('input[name="email"]').value,
//       first_name: document.querySelector('input[name="Firstname"]').value,
//       last_name: document.querySelector('input[name="Lastname"]').value,
//       email: document.querySelector('input[name="email"]').value,
//       password: document.querySelector('input[name="pswd"]').value,
//       phone: document.querySelector('input[placeholder="Enter Phone"]').value,
//       city: document.querySelector('input[placeholder="City"]').value,
//       lga: document.querySelector('input[placeholder="Enter LGA"]').value,
//       country: document.querySelector("select").value,
//     };

//     const res = await fetch("http://127.0.0.1:8000/api/auth/signup/", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     const result = await res.json();
//     if (res.ok) {
//       alert("Signup successful!");
//       window.location.href = "createacct.html";
//     } else {
//       alert("Signup failed: " + JSON.stringify(result));
//     }
//   });


  // LOGIN logic
  
  
  
  
 const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="pswd"]').value;

    try {
      const res = await fetch("http://127.0.0.1:8000/api/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Login response:", data); // Add this to inspect the response

      if (res.ok) {
        localStorage.setItem("token", data.access); // ✅ store the right token
        window.location.href = "Shop.html";
      } else {
        alert("Login failed: " + (data.detail || "Invalid credentials"));
      }
    } catch (error) {
      alert("Login error occurred");
      console.error(error);
    }
  });
}


  
// const token = localStorage.getItem("token");

// // console.log("Token in storage:", localStorage.getItem("token"));

// console.log("Token from storage:", token);

// fetch("http://127.0.0.1:8000/api/auth/profile/", {
//   method: "GET",
//   headers: {
//     "Authorization": `Bearer ${token}`,
//     "Content-Type": "application/json"
//   }
// })
// .then(response => {
//     if (!response.ok) throw new Error("Not authorized");
//     return response.json();
// })

// .then(data => {
//     document.getElementById("firstname").innerText = data.first_name;
//     document.getElementById("lastname").innerText = data.last_name;
//     document.getElementById("email").innerText = data.email;
//     document.getElementById("phone").innerText = data.phone;
//     document.getElementById("city").innerText = data.city;
//     document.getElementById("lga").innerText = data.lga;
//     document.getElementById("country").innerText = data.country;
// })

// .catch( error => {
//     alert("Error loading profile. Please log in again.");
//     window.location.href = "createacct.html";
// });


document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  console.log("Token from storage:", token);

    fetch("http://127.0.0.1:8000/api/auth/profile/", {
        method: "GET",
        headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) throw new Error("Not authorized");
        return response.json();
    })
    .then(data => {
        document.getElementById("firstname").innerText = data.first_name;
        document.getElementById("lastname").innerText = data.last_name;
        document.getElementById("email").innerText = data.email;
        document.getElementById("phone").innerText = data.phone;
        document.getElementById("city").innerText = data.city;
        document.getElementById("lga").innerText = data.lga;
        document.getElementById("country").innerText = data.country;
    })

    .catch(error => {
        console.error("Profile fetch error:", error);
        alert("Error loading profile. Please log in again.");
        window.location.href = "createacct.html";
    });
});


// async function getProfile() {
//   const res = await fetch("http://127.0.0.1:8000/api/auth/profile/", {
//     headers: {
//       "Authorization": `Bearer ${localStorage.getItem("token")}`,
//     },
//   });

//   const data = await res.json();
//   console.log(data);
// }