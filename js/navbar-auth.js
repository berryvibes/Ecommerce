document.addEventListener("DOMContentLoaded", function () {
  const token = localStorage.getItem("token");

  const guestElements = document.querySelectorAll(".guest-only");
  const authElements = document.querySelectorAll(".auth-required");

  if (token) {
    guestElements.forEach(el => el.classList.add("d-none"));
    authElements.forEach(el => el.classList.remove("d-none"));
  } else {
    guestElements.forEach(el => el.classList.remove("d-none"));
    authElements.forEach(el => el.classList.add("d-none"));
  }

  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("token");
      alert("Logged out successfully");
      window.location.href = "createacct.html"; // back to login page
    });
  }
});
