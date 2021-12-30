// selecting all required elements

const gallery = document.querySelectorAll(".gallery .image"),
  previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".icon");

window.onload = () => {
  /*  once window loaded */
  for (let i = 0; i < gallery.length; i++) {
    /* const element = array[index]; */
    let newIndex = i;
    gallery[i].onclick = () => {
      console.log(i);
      function preview() {
        let selectedImgUrl = gallery[newIndex].querySelector("img").src; //getting user clicked image url
        previewImg.src = selectedImgUrl; //passing user clicked img url to previewImg source
        console.log(selectedImgUrl);
      }

      // let's work on previous and next button

      preview(); // calling above function
      previewBox.classList.add("show");

      closeIcon.onclick = () => {
        previewBox.classList.remove("show");
      };
    };
  }
};
