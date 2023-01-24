document.addEventListener('DOMContentLoaded', () => {
    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
  
      $delete.addEventListener('click', () => {
        document.querySelector('.notification')
    .classList.add('is-invisible')
      });
    });
  });