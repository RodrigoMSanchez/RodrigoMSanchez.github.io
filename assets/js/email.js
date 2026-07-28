// Restores the email addresses that are stored obfuscated in the page source
// (see _includes/email.liquid) and turns them into clickable mailto: links.
// Bots that only read the HTML never see an address; they would have to run
// this script to get one.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".obfuscated-email").forEach(function (el) {
    var payload = el.getAttribute("data-e");
    if (!payload) return;
    var address = payload.split("").reverse().join("").replace("|", "@");
    var link = document.createElement("a");
    link.href = "mailto:" + address;
    link.textContent = address;
    el.replaceWith(link);
  });
});
