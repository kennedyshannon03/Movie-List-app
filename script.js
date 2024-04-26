	const title = document.getElementById("title");
	const year = document.getElementById("year");
	const service = document.getElementById("service");
	const btn = document.querySelector(".btn");
	const movielist = document.getElementById("movie-list");
	
	btn.addEventListener("click", function (e) {
  	e.preventDefault();

  if (title.value == "" && year.value == "" && service.value == "") {
    alert("Fill The Form");
  } else {
    const newRow = document.createElement("section");

    // Creating new Title
    const newTitle = document.createElement("div");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    // Creating new Author
    const newYear = document.createElement("div");
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    // Creating new Year
    const newService = document.createElement("div");
    newService.innerHTML = service.value;
    newRow.appendChild(newService);

    movielist.appendChild(newRow);

    title.value = '';
    year.value = '';
    service.value = '';
  }
});

    