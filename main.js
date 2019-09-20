const modal = () => {
  let modalBtn = document.querySelector("#btn-modal");
  let modal = document.querySelector(".modal");
  let closeBtn = document.querySelector(".close-btn");

  modalBtn.addEventListener('click', () => {
    modal.style.display = "block";
  });
  closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
  });
  window.addEventListener('click', function(event) {
    if(event.target == modal){
      modal.style.display = "none";
    }
  });
}

modal()