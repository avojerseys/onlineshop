let products = [
    { id: 1, name: 'Tricou Real Madrid Home', price: '170 RON/35 EUR/ 40USD', image: 'images/rma.png' , sizes: ['S', 'M', 'L', 'XL'], description: 'Tricou oficial Real Madrid Home KIT sezon 24/25 1:1 ', specifications: 'Material: 100% poliester, Culoare: alb, 15UCL Patch , HP Patch ' },
    { id: 2, name: 'Tricou FC Barcelona Home', price: '170 RON/35 EUR/ 40USD', image: 'images/barca.png', sizes: ['S', 'M', 'L', 'XL'], description: 'Tricou oficial FC Barcelona Home KIT sezon 24/25 1:1', specifications: 'Material: 100% poliester, Culoare: albastru-rosu, 5UCL Patch' },
    { id: 3, name: 'Tricou Real Madrid Away', price: '170 RON/35 EUR/ 40USD', image: 'images/rma2.png', sizes: ['S', 'M', 'L', 'XL'], description: 'Tricou oficial Real Madrid Away KIT sezon 24/25 1:1', specifications: 'Material: 100% poliester, Culoare: portocaliu, 15UCL Patch, HP Patch' },
    { id: 4, name: 'Tricou FC Barcelona Away', price: '170 RON/35 EUR/ 40USD', image: 'images/barca2.png', sizes: ['S', 'M', 'L', 'XL'], description: 'Tricou oficial FC Barcelona Away KIT sezon 24/25 1:1', specifications: 'Material: 100% poliester, Culoare: negru, 5UCL Patch' },
    { id: 5, name: 'Tricou Chelsea', price: '170 RON/35 EUR/ 40USD', image: 'images/chelsea.png', sizes: ['S', 'M', 'L', 'XL'], description: 'Tricou oficial Chelsea KIT sezon 24/25 1:1 ', specifications: 'Material: 100% poliester, Culoare: albastru' },
    { id: 6, name: 'Tricou Man. City', price: '170 RON/35 EUR/ 40USD', image: 'images/city.png', sizes: ['S', 'M', 'L', 'XL'], description: 'Tricou oficial Manchester City KIT sezon 24/25 1:1', specifications: 'Material: 100% poliester, Culoare: albastru deschis' },
    { id: 7, name: 'Tricou Inter Miami', price: '170 RON/35 EUR/ 40USD', image: 'images/messi.png', sizes: ['S', 'M', 'L', 'XL'], description: 'Tricou oficial Inter Miami KIT sezon 24/25 1:1', specifications: 'Material: 100% poliester'  },
    { id: 8, name: 'Mistery Box', price: '170 RON/35 EUR/ 40USD', image: 'images/mistery.jfif', sizes: ['S', 'M', 'L', 'XL'], description: 'Mistery Box cu un tricou surpriza ales de noi', specifications: 'Tricou surpriza'  },
    { id: 9, name: 'Tricou Brazil', price: '170 RON/35 EUR/ 40USD', image: 'images/brazil.jpg', sizes: ['S', 'M', 'L', 'XL'], description: 'Tricou LTD Brazil 1:1', specifications: 'Limited Edition, Fan Version, ALL PLAYERS, No Patches'  },
    { id: 9, name: 'Tricou Portugalia', price: '170 RON/35 EUR/ 40USD', image: 'images/portugalia.png', sizes: ['S', 'M', 'L', 'XL'], description: 'Tricou Euro 24 1:1', specifications: 'Material 100% poliester, ALL PLAYERS, Euro Patch'  },
    { id: 10, name: 'Tricou PSG', price: '170 RON/35 EUR/ 40USD', image: 'images/psg.png', sizes: ['S', 'M', 'L', 'XL'], description: 'Tricou Paris 24/25 Oficial 1:1 KIT ', specifications: 'Material 100% poliester, ALL PLAYERS, ALL Patches'  },
    { id: 11, name: 'Tricou AC Milan', price: '170 RON/35 EUR/ 40USD', image: 'images/milan.png', sizes: ['S', 'M', 'L', 'XL'], description: 'Tricou Milan 1:1 KIT', specifications: 'Material 100% poliester, ALL Patches'  },
    { id: 12, name: 'Tricou Argentina', price: '170 RON/35 EUR/ 40USD', image: 'images/argentina.jpg', sizes: ['S', 'M', 'L', 'XL'], description: 'Tricou Argentina 1:1 KIT', specifications: 'Material 100% poliester, ALL Patches, Customizare variata'  },
    { id: 13, name: 'Tricou Inter', price: '170 RON/35 EUR/ 40USD', image: 'images/inter.png', sizes: ['S', 'M', 'L', 'XL'], description: 'Tricou Inter Milan 24/25 1:1 KIT', specifications: 'Material 100% poliester, ALL players, UCL Patch'  },
    { id: 14, name: 'Tricou Arsenal', price: '170 RON/35 EUR/ 40USD', image: 'images/arsenal.jpg', sizes: ['S', 'M', 'L', 'XL'], description: 'Tricou Arsenal 1:1 KIT', specifications: 'Material 100% poliester, UCL Patch, '  },
    { id: 15, name: 'Tricou Bayern', price: '170 RON/35 EUR/ 40USD', image: 'images/bayern.png', sizes: ['S', 'M', 'L', 'XL'], description: 'Tricou Bayern 1:1 KIT', specifications: 'Material 100% poliester, ALL Patches'  },
  ];

 


// Încarcă coșul și comenzile din localStorage la încărcarea paginii
window.onload = function () {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartSummary(); // Actualizează sumarul coșului
  }


  const savedOrders = localStorage.getItem('orders');
  if (savedOrders) {
    orders = JSON.parse(savedOrders);
  }
};

  let cart = [];
  let reviews = [];
  let orders = [];
  let orderNumber = 1;
  
  function navigateTo(section) {
    const content = document.getElementById('content');
  
    if (section === 'homepage') {
      footer.style.display = 'block';
      content.innerHTML = `
        <div class="welcome-section">
    <h1 class="gradient-text">Bine ai venit la Magazinul de Tricouri de Fotbal</h1>
    <p class="gradient-text-subtitle">Descoperă cele mai bune tricouri pentru echipa ta preferată!</p>
    <a href="recenzi.html" class="elegant-button">Vezi Recenzi!</a>
</div>









<div id="exotic-overlay">
  <div class="overlay-content">
    <h1>Drop nou de tricouri!</h1>
    <p>A apărut noua colecție LTD. Nu rata ediția limitată!</p>
    <div class="overlay-btns">
      <button class="overlay-btn" onclick="toDrop()">Vezi Drop-ul</button>
      <button class="overlay-btn" id="close-overlay-btn">Închide</button>
    </div>
  </div>
</div>
<script>
  // Asigură-te că apare DOAR pe index.html
  if (window.location.pathname.endsWith('index.html') || window.location.pathname === "/" ) {
    document.getElementById('exotic-overlay').style.display = 'flex';
  } else {
    document.getElementById('exotic-overlay').style.display = 'none';
  }
  document.getElementById('close-overlay-btn').onclick = function() {
    document.getElementById('exotic-overlay').style.display = 'none';
  }
  function toDrop() {
    window.location.href = 'drop.html';
  }
</script>









<!-- Imaginea logo-ului sub buton -->
<!-- Secțiunea cu gradient RGB animat -->
<div class="gradient-section">
    <div class="logo-container">
        <img src="images/avo.jpg  " alt="Logo Tricouri Fotbal" class="animated-logo-image">
    </div>
</div>
<!-- Adaugă acest stil în secțiunea <style> a fișierului tău index.html -->

<style>
/* Gradient RGB animat pentru secțiunea indicată */
.gradient-section {
    text-align: center;
    padding: 40px 20px;
    background: linear-gradient(90deg, #ff0000,rgb(0, 217, 255),rgb(119, 0, 255));
    background-size: 300% 300%;
    animation: gradientAnimation 6s ease infinite;
    color: white;
}

/* Stiluri pentru titlu și descriere */
.gradient-section h1 {
    font-size: 2.5rem;
    background: linear-gradient(90deg, #ffcc00, #66ff66, #0066ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientText 3s infinite;
}

.gradient-section p {
    font-size: 1.2rem;
    color: #ffffff;
    margin-bottom: 20px;
}

/* Imaginea logo-ului */
.logo-container {
    margin-top: 40px;
    text-align: center;
}

.animated-logo-image {
    width: 150px;
    height: auto;
    border-radius: 20px; /* Colțuri rotunjite */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    animation: rotateLogo 4s infinite ease-in-out;
}

/* Animații */
@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

@keyframes gradientText {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

@keyframes rotateLogo {
    0% {
        transform: rotate(0deg) scale(1);
    }
    50% {
        transform: rotate(360deg) scale(1.1);
    }
    100% {
        transform: rotate(720deg) scale(1);
    }
}
</style>





<!-- Cod de pus în <head> (doar o singură dată) -->
<link href="https://fonts.googleapis.com/css2?family=Monoton&family=Orbitron:wght@900&display=swap" rel="stylesheet">
<style>
    .exotic-title {
        font-family: 'Monoton', 'Orbitron', cursive, sans-serif;
        font-size: 3.3rem;
        font-weight: 900;
        letter-spacing: 3px;
        background: linear-gradient(90deg, #ff512f 0%, #f9d423 40%, #43cea2 70%, #1e90ff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        text-align: center;
        margin: 42px 0 0 0;
        filter: drop-shadow(0 4px 25px #43cea288);
        animation: pulseTitle 1.5s infinite alternate cubic-bezier(.4,0,.2,1);
        transition: all .3s cubic-bezier(.4,0,.2,1);
    }
    @keyframes pulseTitle {
        0% { filter: drop-shadow(0 4px 25px #43cea288); transform: scale(1);}
        100% { filter: drop-shadow(0 8px 45px #ff4e50cc); transform: scale(1.05);}
    }
    .exotic-btn {
        padding: 10px 50px;
        margin: 10px;
        font-size: 1.5rem;
        font-weight: 700;
        color: #fff;
        background: linear-gradient(90deg, #ff512f 0%, #dd2476 70%, #1e90ff 100%);
        border: none;
        border-radius: 50px;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
        cursor: pointer;
        position: relative;
        overflow: hidden;
        margin-top: 36px;
        transition: transform 0.15s, box-shadow 0.15s;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .exotic-btn:before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%);
        transition: opacity 0.3s;
        opacity: 0;
    }
    .exotic-btn:hover:before {
        opacity: 1;
        animation: shine 0.75s forwards;
    }
    .exotic-btn:hover {
        transform: scale(1.07) rotate(-2deg);
        box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.30);
    }
    @keyframes shine {
        0% { left: -50%; top: -50%; }
        100% { left: 100%; top: 100%; }
    }
</style>

<!-- Cod de pus în <body>, unde vrei să apară secțiunea -->
<div class="exotic-title">DROP TRICOURI LTD</div>
<button class="exotic-btn" onclick="window.location.href='drop.html'">Vezi Drop-ul</button>






<div class="faq-section">
    <h2>Întrebări frecvente</h2>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            Ce este magazinul nostru? <span class="arrow">+</span>
        </button>
        <div class="faq-answer">
            Magazinul nostru oferă tricouri de fotbal de calitate 1:1.
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            Cât durează livrarea? <span class="arrow">+</span>
        </button>
        <div class="faq-answer">
            Livrarea durează între 1-3 zile (tricouri în stock). Dacă produsele nu sunt în stock, se efectuează PRECOMENZI, iar livrarea durează între 9 și 12 zile lucrătoare.
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            Cum plătesc? <span class="arrow">+</span>
        </button>
        <div class="faq-answer">
            Produsele pot fi plătite cu cardul sau ramburs la livrare. În cazul precomenzilor, produsul trebuie plătit în avans pentru a garanta livrarea și a evita răzgândirile. Pentru a verifica că echipa noastră este de încredere, vă rugăm să consultați recenziile noastre.
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
           Se pot customiza produsele? <span class="arrow">+</span>
        </button>
        <div class="faq-answer">
            Da, doar cu precomanda . Cum am precizat mai sus, trebuie sa se faca plata in avans!
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            Ce mărimi sunt disponibile? <span class="arrow">+</span>
        </button>
        <div class="faq-answer">
            Avem disponibile mărimi de la S la XXL ,in stock de obicei doar L, XL , de asemenea se face rost de orice marime la precomanda.
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            Oferim reduceri? <span class="arrow">+</span>
        </button>
        <div class="faq-answer">
            Da, oferim reduceri sezoniere și codul nostru de reducere pentru 10%  la prima comanda, avem chiar si o roata de noroc unde puteti castiga diferite premii +10% reducere la comanda.
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            Ce inseamna In stoc furnizor? <span class="arrow">+</span>
        </button>
        <div class="faq-answer">
            In stoc furnizor inseamna ca produsul va fi doar cu precomanda asa ca va dura transportul mai mult pana se fabrica si se aduce de la furnizor.
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            Cum pot urmări comanda mea? <span class="arrow">+</span>
        </button>
        <div class="faq-answer">
            După plasarea comenzii, veți primi un email de confirmare a comenzii , iar dupa ce produsul este predat curierului se trimite si AWB. Acesta poate fi utilizat pe site-ul curierului pentru a monitoriza statusul livrării.
        </div>
    </div>
</div>



<!-- Adaugă acest stil în secțiunea <style> a fișierului tău index.html -->

<style>
/* Stil pentru imaginea logo-ului */
.logo-container {
    margin-top: 40px;
    text-align: center;
}

.animated-logo-image {
    width: 150px;
    height: auto;
    border-radius: 20px; /* Rotunjire colțuri */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Adaugă un efect de umbră */
    animation: rotateLogo 4s infinite ease-in-out;
}

/* Animația logo-ului */
@keyframes rotateLogo {
    0% {
        transform: rotate(0deg) scale(1);
    }
    50% {
        transform: rotate(360deg) scale(1.1);
    }
    100% {
        transform: rotate(720deg) scale(1);
    }
}
</style>


      `;
    } else if (section === 'tricouri') {
      footer.style.display = 'none';
      showProducts();
    } else if (section === 'faq') {
      footer.style.display = 'none';
      showFAQ();
    } else if (section === 'reviews') {
      footer.style.display = 'none';
      showReviews();
    } else if (section === 'orders') {
      footer.style.display = 'none';
      showOrders();
    }
  }
  
  function showProducts() {
    const content = document.getElementById('content');
    let html = '<div class="products">';
    products.forEach(product => {
      html += `
        <div class="product" onclick="viewProduct(${product.id})">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
        </div>
      `;
    });
    html += '</div>';
    content.innerHTML = html;
  }
  
  function viewProduct(id) {
    const product = products.find(p => p.id === id);
    const recommendedProducts = products.filter(p => p.id !== id); // Produse recomandate (toate, mai puțin cel curent)
  
    const content = document.getElementById('content');
    content.innerHTML = `
      <div style="display: flex; gap: 20px;">
        <!-- Secțiunea produsului -->
        <div class="product-details" style="flex: 2;">
          <img src="${product.image}" alt="${product.name}" style="max-width: 100%; border-radius: 10px;">
          <h2>${product.name}</h2>
                  <p style="color: green; font-size: 1.2em; display: flex; align-items: center;">
          <span style="margin-right: 8px;">✔️</span> In stoc furnizor
        </p>
          <p>${product.price}</p>
          <h2>Descriere</h2>
          <p>${product.description}</p> <!-- Afișează descrierea produsului -->
          <h3>Specificații:</h3>
          <ul>
            ${product.specifications
              .split(', ') // Împarte specificațiile după virgulă
              .map(spec => `<li>${spec}</li>`) // Creează o listă ordonată
              .join('')}
          </ul>

          <label for="size">Alege mărimea:</label>
          <select id="size">
            ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
          </select>
          <!-- ... restul codului paginii produsului ... -->

<!-- Select versiune SUB select-ul de mărime -->
<label for="versionSelect" style="font-weight: bold; display:block; margin-top: 10px;">Alege versiunea:</label>
<select id="versionSelect" style="width: 200px; height: 40px; font-size: 18px; border-radius: 8px; margin-bottom: 16px; border: 2px solid #222;">
  <option value="fan">Fan version</option>
  <option value="player">Player version</option>
</select>


          <button onclick="addToCart(${product.id})">Adaugă în coș</button>
        </div>
        
  









        
        <!-- Secțiunea "Clienți au mai comandat" -->
        <div class="recommended-products" style="flex: 1; display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px;">
          <h3 style="text-align: center;">Clienți au mai comandat</h3>
          ${recommendedProducts.map(p => `
            <div class="recommended-product" style="text-align: center; border: 1px solid #ddd; border-radius: 10px; padding: 10px; background-color: #fff;">
              <img src="${p.image}" alt="${p.name}" style="width: 100%; height: auto; border-radius: 5px; margin-bottom: 10px;">
              <p style="font-size: 14px; font-weight: bold; margin: 5px 0;">${p.name}</p>
              <p style="font-size: 14px; color: #555;">${p.price}</p>
              <button onclick="viewProduct(${p.id})" style="padding: 5px 10px; background-color:rgb(0, 0, 0); color: white; border: none; border-radius: 5px; cursor: pointer;">Vezi detalii</button>
            </div>
          `).join('')}
        </div>
      </div>



    `;
  }
  
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    const size = document.getElementById('size').value;
    cart.push({ ...product, size });
    const button = document.querySelector(`button[onclick="addToCart(${id})"]`);
    button.innerText = '✔️ Adăugat în coș';
    button.style.backgroundColor = 'green';
    button.style.color = 'white';
    button.disabled = true;
  }
  
  function openCart() {
    const content = document.getElementById('content');
  
    if (cart.length === 0) {
      content.innerHTML = '<h2>Coșul este gol!</h2>';
      return;
    }
  
    let totalItems = 0;
    let totalCost = 0;
  
    // Calculează numărul total de produse și costul total
    cart.forEach(item => {
      totalItems += item.quantity;
      totalCost += parseFloat(item.price.replace(' RON', '')) * item.quantity;
    });
  
    let html = `
      <h2>Coș de cumpărături</h2>
      <p><strong>Număr total de produse:</strong> ${totalItems}</p>
      <p><strong>Cost total:</strong> ${totalCost.toFixed(2)} RON</p>
      <div class="cart-items">
    `;
  
    // Afișează fiecare produs din coș
    cart.forEach((item, index) => {
      html += `
        <div class="cart-item" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
          <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; border-radius: 5px;">
          <p>${item.name} - ${item.size} - ${item.price} x ${item.quantity}</p>
          <button onclick="removeFromCart(${index})" style="background: none; border: none; color: red; font-size: 20px; cursor: pointer;">X</button>
        </div>
      `;
    });
  




    
    html += `
      </div>
      <button onclick="openCheckoutOverlay()" style="margin-top: 20px; padding: 10px 20px; background-color:rgb(0, 0, 0); color: white; border: none; border-radius: 5px; cursor: pointer;">Checkout</button>
      <button id="reservation-button" style="margin-top: 10px; padding: 10px 20px; background-color:rgb(0, 0, 0); color: white; border: none; border-radius: 5px; cursor: pointer;">Rezervare</button>
      <div id="reservation-form" style="display: none; margin-top: 20px; border: 1px solid #ddd; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
        <h3>Formular de rezervare</h3>
        <form id="reservation-form-content">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required><br><br>
  
          <label for="phone">Telefon:</label>
          <input type="tel" id="phone" name="phone" required><br><br>
  
          <label for="product">Produs:</label>
          <select id="product" name="product">
            ${cart.map(item => `<option value="${item.name}">${item.name}</option>`).join('')}
          </select><br><br>
  
          <label for="date">Data:</label>
          <input type="date" id="date" name="date" required><br><br>
  
          <button type="button" id="send-whatsapp" style="background-color:rgb(21, 139, 31); color: white; padding: 10px 15px; border: none; border-radius: 4px; cursor: pointer;">Trimite pe WhatsApp</button>
        </form>
      </div>
    `;
  
    content.innerHTML = html;
  
    // Adaugă eveniment pentru butonul Rezervare
    document.getElementById('reservation-button').addEventListener('click', function () {
      const reservationForm = document.getElementById('reservation-form');
      reservationForm.style.display = reservationForm.style.display === 'none' ? 'block' : 'none';
    });
  
    // Adaugă eveniment pentru trimiterea pe WhatsApp
    document.getElementById('send-whatsapp').addEventListener('click', function () {
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const product = document.getElementById('product').value;
      const date = document.getElementById('date').value;
    
      // Formatarea mesajului pentru WhatsApp
      const message = `Rezervare produs:
    Email: ${email}
    Telefon: ${phone}
    Produs: ${product}
    Data: ${date}`;
    
      // Înlocuiește cu numărul tău de telefon complet, inclusiv codul de țară (exemplu: 40771234567 pentru România)
      const yourPhoneNumber = "40771214794";
      const whatsappURL = `https://wa.me/${yourPhoneNumber}?text=${encodeURIComponent(message)}`;
      
      // Deschide WhatsApp cu mesajul
      window.open(whatsappURL, '_blank');
    });
  }
  
  
  
  function submitOrderWithWhatsApp() {
    // Preia valorile din câmpurile formularului
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const county = document.getElementById('county').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const postalCode = document.getElementById('postal-code').value;
    const deliveryMethod = document.getElementById('delivery-method').value;

    // Verifică dacă toate câmpurile sunt completate
    if (!email || !address || !phone || !county || !street || !city) {
        alert('Te rugăm să completezi toate câmpurile!');
        return;
    }

    // Calculează costurile
    const deliveryCost = deliveryMethod === 'fan' ? 20 : 10;
    const totalCost = cart.reduce((total, item) => total + parseFloat(item.price.replace(' RON', '')) * item.quantity, 0) + deliveryCost;

    // Creează mesajul pentru WhatsApp
    const message = `
        Comandă nouă:
        - Email: ${email}
        - Telefon: ${phone}
        - Adresă: ${address}, ${street}, ${city}, ${county}
        - Metodă livrare: ${deliveryMethod === 'fan' ? 'Fan Courier' : 'Poșta Română'}
        - Cod postal: ${document.getElementById('postal-code').value}
        - Cost total: ${totalCost.toFixed(2)} RON
        - Produse:
        ${cart.map(item => `   * ${item.quantity} x ${item.name} (${item.size}) - ${item.price}`).join('\n')}
    `;

    // Numărul tău de telefon (înlocuiește cu numărul tău real)
    const myPhoneNumber = '40771214794'; // Include codul de țară (ex: +40 pentru România)

    // Creează link-ul WhatsApp
    const whatsappLink = `https://wa.me/${myPhoneNumber}?text=${encodeURIComponent(message)}`;

    // Deschide WhatsApp
    window.open(whatsappLink, '_blank');
}
  function showOrders() {
    const email = prompt("Introduceți emailul pentru acces:");
    if (email !== "aztenea093@gmail.com") {
      alert("Nu aveți acces la această secțiune.");
      return;
    }
  
    const content = document.getElementById('content');
    let html = '<h2>Comenzi plasate</h2>';
    orders.forEach(order => {
      html += `
        <div class="order-item">
          <h3>Comanda #${order.id}</h3>
          <p>Email: ${order.email}</p>
          <p>Adresa: ${order.address}</p>
          <p>Telefon: ${order.phone}</p>
          <p>Județ: ${order.county}</p>
          <p>Strada: ${order.street}</p>
          <p>Oraș/Sat: ${order.city}</p>
          <p>Metoda de livrare: ${order.deliveryMethod}</p>
          <p>Total: ${order.totalCost} RON</p>
          <ul>
            ${order.items.map(item => `<li>${item.name} - ${item.size} - ${item.price}</li>`).join('')}
          </ul>
        </div>
      `;
    });
    content.innerHTML = html;
  }
  
  function removeFromCart(index) {
    cart.splice(index, 1);
    openCart();
  }
  
  function placeOrder() {
    if (cart.length === 0) return;
    orders.push({ id: orderNumber++, items: [...cart] });
    cart = [];
    alert('Comanda a fost plasată cu succes!');
    openCart();
  }
  
  function showFAQ() {
    const content = document.getElementById('content');
    content.innerHTML = `
      <div class="faq">
        <div class="faq-item">
          <button onclick="toggleFAQ(this)">Ce este magazinul nostru? <span>+</span></button>
          <div class="answer">Magazinul nostru oferă tricouri de fotbal de calitate.</div>
        </div>
        <div class="faq-item">
          <button onclick="toggleFAQ(this)">Cât durează livrarea? <span>+</span></button>
          <div class="answer">Livrarea durează între 2 și 5 zile lucrătoare.</div>
        </div>
      </div>
    `;
  }
  
  function toggleFAQ(button) {
    const faqItem = button.parentElement;
    faqItem.classList.toggle('active');
  }
  
  function showReviews() {
    const content = document.getElementById('content');
    content.innerHTML = `
      <div class="review-form">
        <textarea id="review-text" placeholder="Scrie o recenzie..." rows="4"></textarea>
        <div class="stars">
          ${[1, 2, 3, 4, 5].map(star => `<span class="star" onclick="setRating(${star})">&#9733;</span>`).join('')}
        </div>
        <button onclick="submitReview()">Trimite recenzia</button>
      </div>
      <div class="review-list">
        ${reviews.map(review => `
          <div class="review-item">
            <p>${review.text}</p>
            <div class="stars">
              ${[1, 2, 3, 4, 5].map(star => `<span class="star ${star <= review.rating ? 'checked' : ''}">&#9733;</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  function setRating(rating) {
    document.querySelectorAll('.star').forEach((star, index) => {
      star.classList.toggle('checked', index < rating);
    });
    document.getElementById('review-text').dataset.rating = rating;
  }
  
  function submitReview() {
    const text = document.getElementById('review-text').value;
    const rating = document.getElementById('review-text').dataset.rating || 0;
    if (text.trim()) {
      reviews.push({ text, rating });
      showReviews();
    } else {
      alert('Te rugăm să scrii o recenzie.');
    }
  }
  

  



  
  function openCheckoutOverlay() {
    const overlay = document.getElementById('order-overlay');
    const summary = document.getElementById('order-summary');
    const deliveryMethod = document.getElementById('delivery-method');
    const deliveryCost = deliveryMethod && deliveryMethod.value === 'fan' ? 20 : 10; // 20 lei pentru Fan Courier, 10 lei pentru EasyBox
  
    const totalCost = cart.reduce((total, item) => total + parseFloat(item.price.replace(' RON', '')), 0) + deliveryCost;
  
    summary.innerHTML = `
      <h3>Sumar comandă:</h3>
      <ul>
        ${cart.map(item => `<li>${item.name} - ${item.size} - ${item.price}</li>`).join('')}
      </ul>
      <p>Cost livrare: ${deliveryCost} RON</p>
      <p><strong>Total: ${totalCost} RON</strong></p>
    `;
    overlay.style.display = 'flex';
  }
  

  
  function toggleFAQ(button) {
    const faqItem = button.parentElement;
    faqItem.classList.toggle('active');
  }

  function searchProduct(query) {
    const content = document.getElementById('content');
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  
    if (filteredProducts.length === 0) {
      content.innerHTML = '<h2>Nu s-au găsit produse!</h2>';
      return;
    }
  
    let html = '<h2>Rezultatele căutării:</h2><div class="products">';
    filteredProducts.forEach(product => {
      html += `
        <div class="product">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <button onclick="viewProduct(${product.id})">Vezi detalii</button>
        </div>
      `;
    });
    html += '</div>';
    content.innerHTML = html;
  }
  
  function showReviews() {
    const content = document.getElementById('content');
    content.innerHTML = `
      <div class="review-section">
        <h2>Lasă o recenzie</h2>
        <textarea id="review-text" placeholder="Scrie o recenzie..." rows="6"></textarea>
        <div class="stars">
          ${[1, 2, 3, 4, 5].map(star => `<span class="star" onclick="setRating(${star})">&#9733;</span>`).join('')}
        </div>
        <button onclick="submitReview()">Trimite recenzia</button>
        <h2>Recenzii acordate</h2>
        <div class="review-list" id="review-list">
          ${reviews.map(review => `
            <div class="review-item">
              <p><strong>${review.username}</strong>: ${review.text}</p>
              <div class="stars">
                ${[1, 2, 3, 4, 5].map(star => `<span class="star ${star <= review.rating ? 'checked' : ''}">&#9733;</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  function toggleFAQ(button) {
    const faqItem = button.parentElement;
    faqItem.classList.toggle('active');
  }
  
  function showFAQ() {
    const content = document.getElementById('content');
    content.innerHTML = `
      <div class="faq-section">
        <h2>Întrebări frecvente</h2>
        <div class="faq-item">
          <button onclick="toggleFAQ(this)">Ce este magazinul nostru? <span>+</span></button>
          <div class="answer">Magazinul nostru oferă tricouri de fotbal de calitate.</div>
        </div>
        <div class="faq-item">
          <button onclick="toggleFAQ(this)">Cât durează livrarea? <span>+</span></button>
          <div class="answer">Livrarea durează între 2 și 5 zile lucrătoare.</div>
        </div>
        <div class="faq-item">
          <button onclick="toggleFAQ(this)">Cum pot returna un produs? <span>+</span></button>
          <div class="answer">Produsele pot fi returnate în termen de 14 zile de la primire.</div>
        </div>
      </div>
    `;
  }
  
  function showOrders() {
    const email = prompt("Introduceți emailul pentru acces:");
    if (email !== "aztenea093@gmail.com") {
      alert("Nu aveți acces la această secțiune.");
      return;
    }
  
    const content = document.getElementById('content');
    let html = '<h2>Comenzi plasate</h2>';
    orders.forEach(order => {
      html += `
       <div class="order-item">
        <h3>Comanda #${order.id}</h3>
        <p><strong>Email:</strong> ${order.email}</p>
        <p><strong>Adresă:</strong> ${order.address}, ${order.street}, ${order.city}, ${order.county}</p>
        <p><strong>Telefon:</strong> ${order.phone}</p>
        <p><strong>Metoda de livrare:</strong> ${order.deliveryMethod}</p>
        <p><strong>Total:</strong> ${order.totalCost} RON</p>
        <h4>Produse:</h4>
        <ul>
          ${order.items.map(item => `
            <li>
              <strong>${item.name}</strong> - ${item.size} - ${item.price} - Cantitate: ${item.quantity}
            </li>
          `).join('')}
        </ul>
      </div>
      `;
    });
    content.innerHTML = html;
  }

  function addToCart(id) {
    const product = products.find(p => p.id === id);
    const size = document.getElementById('size').value;
  
    // Verifică dacă produsul există deja în coș
    const existingProduct = cart.find(item => item.id === id && item.size === size);
    if (existingProduct) {
      existingProduct.quantity += 1; // Crește cantitatea
    } else {
      cart.push({ ...product, size, quantity: 1 }); // Adaugă produsul cu cantitatea 1
    }
  
    const button = document.querySelector(`button[onclick="addToCart(${id})"]`);
    button.innerText = '✔️ Adăugat în coș';
    button.style.backgroundColor = 'green';
    button.style.color = 'white';
    button.disabled = true;
  }
  
  
  
  function closeOverlay() {
    const overlay = document.getElementById('order-overlay');
    overlay.style.display = 'none';
  }
  

  function showMessage() {
    const messageElement = document.getElementById('message');
    messageElement.style.display = 'block';

  }





  let discountApplied = false; // Variabilă pentru a verifica dacă reducerea a fost aplicată

  function applyDiscount() {
    const discountCodeInput = document.getElementById('discount-code').value.trim().toUpperCase();
    const deliveryMethod = document.getElementById('delivery-method');
    const deliveryCost = deliveryMethod && deliveryMethod.value === 'fan' ? 20 : 10; // 20 lei pentru Fan Courier, 10 lei pentru EasyBox
  
    let productTotal = 0; // Totalul produselor
    let discountAmount = 0;
  
    // Calculează totalul produselor
    cart.forEach(item => {
      productTotal += parseFloat(item.price.replace(' RON', '')) * item.quantity;
    });
  
    if (discountCodeInput === 'AVO10' && !discountApplied) {
      discountAmount = productTotal * 0.10; // Reducere de 10% doar pentru produse
      productTotal -= discountAmount;
      discountApplied = true;
  
      alert(`Reducerea de ${discountAmount.toFixed(2)} RON a fost aplicată!`);
    } else if (discountApplied) {
      alert('Reducerea a fost deja aplicată!');
    } else {
      alert('Codul de reducere este invalid!');
    }
  
    // Calculează costul total (produse + transport)
    const totalCost = productTotal + deliveryCost;
  
    // Actualizează sumarul comenzii
    updateOrderSummary(totalCost, discountAmount, deliveryCost);
  }

function updateOrderSummary(totalCost, discountAmount) {
  const summary = document.getElementById('order-summary');
  let html = '<h3>Sumar comandă:</h3>';
  cart.forEach(item => {
    html += `
      <div>
        <p>${item.name} - ${item.quantity} x ${item.price}</p>
      </div>
    `;
  });

  html += `
    <p>Cost livrare: ${discountAmount > 0 ? totalCost + discountAmount - totalCost : totalCost} RON</p>
    <p>Reducere aplicată: ${discountAmount.toFixed(2)} RON</p>
    <p><strong>Total: ${totalCost.toFixed(2)} RON</strong></p>
  `;

  summary.innerHTML = html;
}



function deleteOrder(orderId) {
  const email = prompt('Introduceți emailul pentru a confirma ștergerea comenzii:');
  if (email === 'aztenea093@gmail.com') {
    orders = orders.filter(order => order.id !== orderId);
    localStorage.setItem('orders', JSON.stringify(orders));
    alert('Comanda a fost ștearsă cu succes!');
    showOrders();
  } else {
    alert('Nu aveți permisiunea de a șterge această comandă.');
  }
}






// Funcție care afișează secțiunile site-ului
function showSection(section) {
  const footer = document.querySelector('footer'); // Selectează footer-ul
  const content = document.querySelector('#content'); // Selectează div-ul pentru conținut

  // Resetează conținutul
  content.innerHTML = '';
  footer.style.display = 'none'; // Ascunde footer-ul implicit

  if (section === 'homepage') {
      // Afișează pagina homepage
      footer.style.display = 'block'; // Afișează footer-ul
      content.innerHTML = `
        <div class="welcome-section">
    <h1 class="gradient-text">Bine ai venit la Magazinul de Tricouri de Fotbal</h1>
    <p class="gradient-text-subtitle">Descoperă cele mai bune tricouri pentru echipa ta preferată!</p>
    <a href="recenzi.html" class="elegant-button">Vezi Recenzi!</a>
</div>






<div id="exotic-overlay">
  <div class="overlay-content">
    <h1>Drop nou de tricouri!</h1>
    <p>A apărut noua colecție LTD. Nu rata ediția limitată!</p>
    <div class="overlay-btns">
      <button class="overlay-btn" onclick="toDrop()">Vezi Drop-ul</button>
      <button class="overlay-btn" id="close-overlay-btn">Închide</button>
    </div>
  </div>
</div>
<script>
  // Asigură-te că apare DOAR pe index.html
  if (window.location.pathname.endsWith('index.html') || window.location.pathname === "/" ) {
    document.getElementById('exotic-overlay').style.display = 'flex';
  } else {
    document.getElementById('exotic-overlay').style.display = 'none';
  }
  document.getElementById('close-overlay-btn').onclick = function() {
    document.getElementById('exotic-overlay').style.display = 'none';
  }
  function toDrop() {
    window.location.href = 'drop.html';
  }
</script>






<!-- Adaugă acest cod în fișierul tău index.html -->

<!-- Secțiunea cu gradient RGB animat -->
<div class="gradient-section">
    <div class="logo-container">
        <img src="images/avo.jpg  " alt="Logo Tricouri Fotbal" class="animated-logo-image">
    </div>
</div>
<!-- Adaugă acest stil în secțiunea <style> a fișierului tău index.html -->







<!-- Cod de pus în <head> (doar o singură dată) -->
<link href="https://fonts.googleapis.com/css2?family=Monoton&family=Orbitron:wght@900&display=swap" rel="stylesheet">
<style>
    .exotic-title {
        font-family: 'Monoton', 'Orbitron', cursive, sans-serif;
        font-size: 3.3rem;
        font-weight: 900;
        letter-spacing: 3px;
        background: linear-gradient(90deg, #ff512f 0%, #f9d423 40%, #43cea2 70%, #1e90ff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        text-align: center;
        margin: 42px 0 0 0;
        filter: drop-shadow(0 4px 25px #43cea288);
        animation: pulseTitle 1.5s infinite alternate cubic-bezier(.4,0,.2,1);
        transition: all .3s cubic-bezier(.4,0,.2,1);
    }
    @keyframes pulseTitle {
        0% { filter: drop-shadow(0 4px 25px #43cea288); transform: scale(1);}
        100% { filter: drop-shadow(0 8px 45px #ff4e50cc); transform: scale(1.05);}
    }
    .exotic-btn {
        padding: 10px 50px;
        margin: 10px;
        font-size: 1.5rem;
        font-weight: 700;
        color: #fff;
        background: linear-gradient(90deg, #ff512f 0%, #dd2476 70%, #1e90ff 100%);
        border: none;
        border-radius: 50px;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
        cursor: pointer;
        position: relative;
        overflow: hidden;
        margin-top: 36px;
        transition: transform 0.15s, box-shadow 0.15s;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .exotic-btn:before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%);
        transition: opacity 0.3s;
        opacity: 0;
    }
    .exotic-btn:hover:before {
        opacity: 1;
        animation: shine 0.75s forwards;
    }
    .exotic-btn:hover {
        transform: scale(1.07) rotate(-2deg);
        box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.30);
    }
    @keyframes shine {
        0% { left: -50%; top: -50%; }
        100% { left: 100%; top: 100%; }
    }
</style>

<!-- Cod de pus în <body>, unde vrei să apară secțiunea -->
<div class="exotic-title">DROP TRICOURI LTD</div>
<button class="exotic-btn" onclick="window.location.href='drop.html'">Vezi Drop-ul</button>







<div class="faq-section">
    <h2>Întrebări frecvente</h2>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            Ce este magazinul nostru? <span class="arrow">+</span>
        </button>
        <div class="faq-answer">
            Magazinul nostru oferă tricouri de fotbal de calitate 1:1.
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            Cât durează livrarea? <span class="arrow">+</span>
        </button>
        <div class="faq-answer">
            Livrarea durează între 1-3 zile (tricouri în stock). Dacă produsele nu sunt în stock, se efectuează PRECOMENZI, iar livrarea durează între 9 și 12 zile lucrătoare.
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            Cum plătesc? <span class="arrow">+</span>
        </button>
        <div class="faq-answer">
            Produsele pot fi plătite cu cardul sau ramburs la livrare. În cazul precomenzilor, produsul trebuie plătit în avans pentru a garanta livrarea și a evita răzgândirile. Pentru a verifica că echipa noastră este de încredere, vă rugăm să consultați recenziile noastre.
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
           Se pot customiza produsele? <span class="arrow">+</span>
        </button>
        <div class="faq-answer">
            Da, doar cu precomanda . Cum am precizat mai sus, trebuie sa se faca plata in avans!
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            Ce mărimi sunt disponibile? <span class="arrow">+</span>
        </button>
        <div class="faq-answer">
            Avem disponibile mărimi de la S la XXL ,in stock de obicei doar L, XL , de asemenea se face rost de orice marime la precomanda.
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            Oferim reduceri? <span class="arrow">+</span>
        </button>
        <div class="faq-answer">
            Da, oferim reduceri sezoniere și codul nostru de reducere pentru 10%  la prima comanda, avem chiar si o roata de noroc unde puteti castiga diferite premii +10% reducere la comanda.
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            Ce inseamna In stoc furnizor? <span class="arrow">+</span>
        </button>
        <div class="faq-answer">
            In stoc furnizor inseamna ca produsul va fi doar cu precomanda asa ca va dura transportul mai mult pana se fabrica si se aduce de la furnizor.
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            Cum pot urmări comanda mea? <span class="arrow">+</span>
        </button>
        <div class="faq-answer">
            După plasarea comenzii, veți primi un email de confirmare a comenzii , iar dupa ce produsul este predat curierului se trimite si AWB. Acesta poate fi utilizat pe site-ul curierului pentru a monitoriza statusul livrării.
        </div>
    </div>
</div>


<style>
/* Gradient RGB animat pentru secțiunea indicată */
.gradient-section {
    text-align: center;
    padding: 40px 20px;
    background: linear-gradient(90deg, #ff0000,rgb(0, 217, 255),rgb(119, 0, 255));
    background-size: 300% 300%;
    animation: gradientAnimation 6s ease infinite;
    color: white;
}

/* Stiluri pentru titlu și descriere */
.gradient-section h1 {
    font-size: 2.5rem;
    background: linear-gradient(90deg, #ffcc00, #66ff66, #0066ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientText 3s infinite;
}

.gradient-section p {
    font-size: 1.2rem;
    color: #ffffff;
    margin-bottom: 20px;
}

/* Imaginea logo-ului */
.logo-container {
    margin-top: 40px;
    text-align: center;
}

.animated-logo-image {
    width: 150px;
    height: auto;
    border-radius: 20px; /* Colțuri rotunjite */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    animation: rotateLogo 4s infinite ease-in-out;
}

/* Animații */
@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

@keyframes gradientText {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

@keyframes rotateLogo {
    0% {
        transform: rotate(0deg) scale(1);
    }
    50% {
        transform: rotate(360deg) scale(1.1);
    }
    100% {
        transform: rotate(720deg) scale(1);
    }
}
</style>

      `;
  } else if (section === 'tricouri') {
      // Afișează pagina tricouri folosind logica existentă
      footer.style.display = 'block'; // Afișează footer-ul
      showProducts(); // Funcția care generează produsele (există deja în codul tău)
  } else if (section === 'faq') {
      footer.style.display = 'block'; // Afișează footer-ul
      showFAQ(); // Funcție deja configurată pentru FAQ
  } else if (section === 'reviews') {
      footer.style.display = 'block'; // Afișează footer-ul
      showReviews(); // Funcție deja configurată pentru recenzii
  } else if (section === 'orders') {
      footer.style.display = 'block'; // Afișează footer-ul
      showOrders(); // Funcție deja configurată pentru comenzi
  } else {
      // Secțiune implicită dacă secțiunea nu este găsită
      footer.style.display = 'block';
      content.innerHTML = `
          <div style="text-align: center; padding: 20px; background-color: white;">
              <h1 style="color: red;">Eroare: Secțiunea nu a fost găsită!</h1>
          </div>
      `;
  }
}

// Inițializează site-ul pe secțiunea „homepage” la încărcarea paginii
window.onload = function () {
  showSection('homepage');
};




document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.next-btn');
  const prevButton = document.querySelector('.prev-btn');

  const slideWidth = slides[0].getBoundingClientRect().width;

  // Setează poziția fiecărui slide
  slides.forEach((slide, index) => {
      slide.style.left = slideWidth * index + 'px';
  });

  const moveToSlide = (track, currentSlide, targetSlide) => {
      track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
      currentSlide.classList.remove('current-slide');
      targetSlide.classList.add('current-slide');
  };

  // Funcționalitate pentru butonul "Next"
  nextButton.addEventListener('click', () => {
      const currentSlide = track.querySelector('.current-slide') || slides[0];
      const nextSlide = currentSlide.nextElementSibling || slides[0];
      moveToSlide(track, currentSlide, nextSlide);
  });

  // Funcționalitate pentru butonul "Prev"
  prevButton.addEventListener('click', () => {
      const currentSlide = track.querySelector('.current-slide') || slides[0];
      const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
      moveToSlide(track, currentSlide, prevSlide);
  });
});




function toggleFAQ(button) {
  const faqItem = button.parentElement;
  const answer = faqItem.querySelector('.faq-answer');
  const arrow = button.querySelector('.arrow');
  
  if (answer.style.display === 'block') {
      answer.style.display = 'none';
      arrow.classList.remove('open');
  } else {
      answer.style.display = 'block';
      arrow.classList.add('open');
  }
}




