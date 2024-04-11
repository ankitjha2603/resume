switch (new URLSearchParams(window.location.search).get("page-number")) {
  case "1":
    document.querySelector('page[page-number="2"]').style.display = "none";
    break;
  case "2":
    document.querySelector('page[page-number="1"]').style.display = "none";
    break;
  default:
    console.log("all page");
    break;
}
