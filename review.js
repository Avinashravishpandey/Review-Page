document.addEventListener('DOMContentLoaded', () => {
    const safetyStars = document.querySelectorAll('#safety-stars .star');
    const communicationStars = document.querySelectorAll('#communication-stars .star');
    const recommendYes = document.getElementById('recommend-yes');
    const recommendNo = document.getElementById('recommend-no');
    const Submit=document.getElementById("Submit");
  


    const handleStarClick = (stars, rating) => {
      stars.forEach((star, index) => {
        if (index < rating) {
          star.classList.add('filled');
        } else {
          star.classList.remove('filled');
        }
      });
    };
  
    safetyStars.forEach(star => {
      star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        handleStarClick(safetyStars, rating);
      });
    });
  
    communicationStars.forEach(star => {
      star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        handleStarClick(communicationStars, rating);
      });
    });
  
    recommendYes.addEventListener('click', () => {
      recommendYes.classList.add('selected');
      recommendNo.classList.remove('selected');
    });
  
    recommendNo.addEventListener('click', () => {
      recommendNo.classList.add('selected');
      recommendYes.classList.remove('selected');

    });
    Submit.addEventListener('click',()=>{
      alert("Successful");
      location.reload();
 } );
  }); 