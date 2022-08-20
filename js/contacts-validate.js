document.addEventListener("DOMContentLoaded", function () {

  // Input-Tel


  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  // Validate

  const validation = new JustValidate('#contacts-validate', {
    errorLabelStyle: {
      color: 'var(--red)',
      textDecoration: 'underlined',
    },
  });
  

  validation

  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Не менее 3-х сиволов',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Не больше 30 символов',
    },
    {
      rule: 'required',
      errorMessage: 'Обязательно для заполнения',
    },
    {
      rule: 'customRegexp',
      value: /^[а-яА-ЯёЁa-zA-Z]+$/,
      errorMessage: 'Недопустимый формат'
    },
  ])

  .addField('#phone', [
    {
      rule: 'required',
      errorMessage: 'Обязательно для заполнения',
    },
    {   
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Не достаточное количество символов',
    },

    // PHP mailer
    
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });



})