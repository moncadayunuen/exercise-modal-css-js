const modal = () => {
  let modalBtn = document.querySelector("#btn-modal");
  let modal = document.querySelector(".modal");
  let closeBtn = document.querySelector(".close-btn");

  modalBtn.onclick = function(){
    modal.style.display = "block";
  }
  closeBtn.onclick = function(){
    modal.style.display = "none";
  }
  window.onclick = function(event){
    if(event.target == modal){
      modal.style.display = "none";
    }
  }
}

modal()