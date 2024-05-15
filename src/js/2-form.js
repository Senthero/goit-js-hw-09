const formData = {
  email: "",
  message: ""
};

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]')
};

refs.form.addEventListener('input', (event) => {
  const { name, value } = event.target;
  
  if (name === 'email' || name === 'message') {
    formData[name] = value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

window.addEventListener('load', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    
    refs.email.value = formData.email;
    refs.message.value = formData.message;
  }
});

refs.form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = "";
    formData.message = "";
    refs.form.reset();
  }
});