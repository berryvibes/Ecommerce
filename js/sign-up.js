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






document.addEventListener("DOMContentLoaded", () => {
  const countrySelect = document.getElementById("country");
  const phoneInput = document.getElementById("phone");
  const stateSelect = document.getElementById("state");
  const lgaSelect = document.getElementById("lga");

  // Load country names and phone codes
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

  // Set phone prefix and load states if Nigeria
  countrySelect.addEventListener("change", () => {
    const selected = countrySelect.options[countrySelect.selectedIndex];
    const code = selected.getAttribute("data-code") || "";
    phoneInput.value = code;

    if (selected.value === "Nigeria") {
      fetch("https://locationsng-api.herokuapp.com/api/v1/states")
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
        });
    } else {
      stateSelect.innerHTML = "<option value='N/A'>N/A</option>";
      lgaSelect.innerHTML = "<option value='N/A'>N/A</option>";
    }
  });

  // Load LGAs when state is selected
  stateSelect.addEventListener("change", () => {
    const selectedState = stateSelect.value;
    fetch(`https://locationsng-api.herokuapp.com/api/v1/states/${selectedState}/lgas`)
      .then(res => res.json())
      .then(lgas => {
        lgaSelect.innerHTML = "<option value=''>Select LGA</option>";
        lgas.forEach(lga => {
          const opt = document.createElement("option");
          opt.value = lga;
          opt.textContent = lga;
          lgaSelect.appendChild(opt);
        });
      });
  });
});