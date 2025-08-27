const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️';
  } else {
    darkModeToggle.textContent = '🌙';
  }
});

const btnUp = document.getElementById('btnUp');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    btnUp.style.display = 'block';
  } else {
    btnUp.style.display = 'none';
  }
});

const registrationForm = document.getElementById('registrationForm');
const formMessage = document.getElementById('formMessage');

registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const fullname = registrationForm.fullname.value.trim();
  const email = registrationForm.email.value.trim();
  const phone = registrationForm.phone.value.trim();
  const address = registrationForm.address.value.trim();
  const jurusan = registrationForm.jurusan.value;

  if (!fullname || !email || !phone || !address || !jurusan) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Semua kolom harus diisi!';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Email tidak valid!';
    return;
  }

  formMessage.style.color = 'green';
  formMessage.textContent = `Terima kasih, ${fullname}! Pendaftaran jurusan "${jurusan}" berhasil dikirim.`;

  registrationForm.reset();
});
