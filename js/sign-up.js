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






// document.addEventListener("DOMContentLoaded", () => {
//   const countrySelect = document.getElementById("country");
//   const phoneInput = document.getElementById("phone");
//   const stateSelect = document.getElementById("state");
//   const lgaSelect = document.getElementById("lga");

//   // Load countries
//   fetch("https://restcountries.com/v3.1/all")
//     .then(res => res.json())
//     .then(countries => {
//       countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
//       countries.forEach(country => {
//         const name = country.name.common;
//         const code = country.idd?.root ? `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ""}` : "";
//         const opt = document.createElement("option");
//         opt.value = name;
//         opt.textContent = name;
//         opt.setAttribute("data-code", code);
//         countrySelect.appendChild(opt);
//       });
//     });

//   // When country changes
//   countrySelect.addEventListener("change", () => {
//     const selected = countrySelect.options[countrySelect.selectedIndex];
//     const code = selected.getAttribute("data-code") || "";
//     phoneInput.value = code;

//     // Load states only for Nigeria
//     if (selected.value === "Nigeria") {
//         fetch("/static/data/nigeria.json")
        
//             .then(res => res.json())
//             .then(states => {
//             stateSelect.innerHTML = "<option value=''>Select state</option>";
//             lgaSelect.innerHTML = "<option value=''>Select LGA</option>";

//             states.forEach(state => {
//                 const opt = document.createElement("option");
//                 opt.value = state.name;
//                 opt.textContent = state.name;
//                 stateSelect.appendChild(opt);
//             });

//             // Save states for later use
//             window._nigeriaStates = states;
//             })
//             .catch(err => {
//             console.error("Failed to load states:", err);
//             alert("Failed to load Nigerian states.");
//             });
//         } else {
//         stateSelect.innerHTML = "<option>N/A</option>";
//         lgaSelect.innerHTML = "<option>N/A</option>";
//         }
//     });

//   // When state is selected → load LGAs
//     stateSelect.addEventListener("change", () => {
//     const stateName = stateSelect.value;
//     if (!stateName || countrySelect.value !== "Nigeria") return;

//     const state = (window._nigeriaStates || []).find(s => s.name === stateName);
//     lgaSelect.innerHTML = "<option value=''>Select LGA</option>";

//     if (state && state.lgas) {
//         state.lgas.forEach(lga => {
//         const opt = document.createElement("option");
//         opt.value = lga;
//         opt.textContent = lga;
//         lgaSelect.appendChild(opt);
//         });
//     }
//     });
// });



  document.addEventListener("DOMContentLoaded", () => {
    const countrySelect = document.getElementById("country");
    const phoneInput = document.getElementById("phone");
    const stateSelect = document.getElementById("state");
    const lgaSelect = document.getElementById("lga");

    // Load countries
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(countries => {
        countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
        countries.forEach(country => {
          const name = country.name.common;
          const code = country.idd?.root ? `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ""}` : "";
          const opt = document.createElement("option");
          opt.value = name;
          opt.textContent = name;
          opt.setAttribute("data-code", code);
          countrySelect.appendChild(opt);
        });
      });

    // When country changes
    countrySelect.addEventListener("change", () => {
      const selected = countrySelect.options[countrySelect.selectedIndex];
      const code = selected.getAttribute("data-code") || "";
      phoneInput.value = code;

      if (selected.value === "Nigeria") {
        fetch("/static/data/nigeria.json")
          .then(res => res.json())
          .then(states => {
            stateSelect.innerHTML = "<option value=''>Select state</option>";
            lgaSelect.innerHTML = "<option value=''>Select LGA</option>";
            states.forEach(state => {
              const opt = document.createElement("option");
              opt.value = state.name;
              opt.textContent = state.name;
              stateSelect.appendChild(opt);
            });
            window._nigeriaStates = states;
          })
          .catch(err => {
            console.error("Failed to load states:", err);
            alert("Failed to load Nigerian states.");
          });
      } else {
        stateSelect.innerHTML = "<option>N/A</option>";
        lgaSelect.innerHTML = "<option>N/A</option>";
      }
    });

    // When state changes
    stateSelect.addEventListener("change", () => {
      const stateName = stateSelect.value;
      if (!stateName || countrySelect.value !== "Nigeria") return;

      const state = (window._nigeriaStates || []).find(s => s.name === stateName);
      lgaSelect.innerHTML = "<option value=''>Select LGA</option>";

      if (state && state.lgas) {
        state.lgas.forEach(lga => {
          const opt = document.createElement("option");
          opt.value = lga;
          opt.textContent = lga;
          lgaSelect.appendChild(opt);
        });
      }
    });
  });