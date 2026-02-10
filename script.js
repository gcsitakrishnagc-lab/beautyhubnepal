document.addEventListener('DOMContentLoaded',function(){
  const btn=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav');
  if(btn && nav){
    btn.addEventListener('click',()=>{
      const shown = nav.style.display === 'flex';
      nav.style.display = shown ? '' : 'flex';
    });
  }
  // Contact form handling (client-side only)
  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(contactForm);
      const entry = {name: data.get('name'), email: data.get('email'), message: data.get('message'), time: new Date().toISOString()};
      const saved = JSON.parse(localStorage.getItem('bh_contact')||'[]');
      saved.push(entry);
      localStorage.setItem('bh_contact', JSON.stringify(saved));
      document.getElementById('contact-result').textContent = 'Thanks — we received your message.';
      contactForm.reset();
    });
  }

  // Booking form handling (client-side only)
  const bookingForm = document.getElementById('booking-form');
  if(bookingForm){
    bookingForm.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(bookingForm);
      const entry = {name: data.get('name'), email: data.get('email'), phone: data.get('phone'), service: data.get('service'), datetime: data.get('datetime'), time: new Date().toISOString()};
      const saved = JSON.parse(localStorage.getItem('bh_bookings')||'[]');
      saved.push(entry);
      localStorage.setItem('bh_bookings', JSON.stringify(saved));
      document.getElementById('booking-result').textContent = 'Booking requested — we will contact you to confirm.';
      bookingForm.reset();
    });
  }
});
