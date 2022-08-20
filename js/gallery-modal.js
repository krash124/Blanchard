document.addEventListener("DOMContentLoaded", function () {


  // Filters

  function checked() {
    const check = document.querySelector('.check-input');
    if (!check.checked) check.checked = true;
  }
  checked();


  // Модалка от Макса

  const modal = new GraphModal({
    isOpen: (modal) => {
    },
    isClose: () => {
    }
  });


});
