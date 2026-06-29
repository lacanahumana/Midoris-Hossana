const WHATSAPP_NUMBER = "5492284309444";

// ===============================
// PRODUCTOS
// ===============================

const products = [
  {
    id: "midori-a5",
    name: "Midori A5",
    type: "midori",
    basePrice: 35000,
    image: "img/productos/midori-a5.jpg",
    shortDescription: "Ideal para journaling, estudio, trabajo o para tener todas tus ideas en un solo lugar.",
    description: `
      <br><br>

      Confeccionada artesanalmente en ecocuero PU. Gracias a sus 3 elásticos, podés cambiar, sacar o agregar libretas cuando quieras.<br><br>

      <strong>Incluye:</strong><br>
      • Personalización con iniciales.<br>
      • 3 libretas con hojas lisas.<br>
      • Elástico y dije del frente + costado a elección.<br><br>

      <strong>Medidas:</strong> 15 × 22 cm (cerrada)
    `
  },
  {
    id: "midori-a6",
    name: "Midori A6",
    type: "midori",
    basePrice: 27000,
    image: "img/productos/midori-a6.jpg",
    shortDescription: "Compacta, práctica y fácil de llevar a todos lados.",
    description: `
      Ideal para journaling, notas rápidas o para acompañarte todos los días.<br><br>

      Confeccionada artesanalmente en ecocuero PU. Gracias a sus 3 elásticos, podés cambiar, sacar o agregar libretas cuando quieras.<br><br>

      <strong>Incluye:</strong><br>
      • Personalización con iniciales.<br>
      • 2 libretas con hojas lisas.<br>
      • Elástico, 1 dije del frente y 1 al costado a elección.<br><br>

      <strong>Medidas:</strong> 11 × 15 cm (cerrada)
    `
  },
  {
    id: "midori-regular",
    name: "Midori Regular",
    type: "midori",
    basePrice: 28000,
    image: "img/productos/midori-regular.jpg",
    shortDescription: "El equilibrio perfecto entre espacio y practicidad.",
    description: `
      Ideal para organizarte, escribir o llevar todo en un solo lugar.<br><br>

      Confeccionada artesanalmente en ecocuero PU. Gracias a sus 3 elásticos, podés cambiar, sacar o agregar libretas cuando quieras.<br><br>

      <strong>Incluye:</strong><br>
      • Personalización con iniciales.<br>
      • 2 libretas con hojas lisas.<br>
      • Elástico, 1 dije del frente y 1 al costado a elección.<br><br>

      <strong>Medidas:</strong> 11 × 22 cm (cerrada)
    `
  },
  {
    id: "cuaderno-cocido",
    name: "Cuaderno Cosido",
    type: "cuaderno",
    basePrice: 26500,
    image: "img/productos/cuaderno-cocido.jpg",
    shortDescription: "Cuaderno artesanal cosido, elegante y resistente para uso diario.",
    description: `
      Ideal para journaling, estudio, trabajo o para tener todas tus ideas en un solo lugar.<br><br>

      Confeccionado artesanalmente en ecocuero PU. Podés elegir el cierre con broche o con elástico y personalizarlo a tu gusto.<br><br>

      <strong>Incluye:</strong><br>
      • Personalización con iniciales.<br>
      • 120 hojas lisas.<br>
      • Elástico y dije a elección.<br><br>

      <strong>Medidas:</strong> 15 × 22 cm (cerrado)
    `
  },
  {
    id: "marcapaginas",
    name: "Marcapáginas",
    type: "accesorio",
    basePrice: 0,
    image: "img/productos/marcapagina-arbolrojo.jpg",
    shortDescription: "Ideal para marcar tu libro favorito o tu cuaderno de journaling.",
    description: `
      <br><br>

      Confeccionado artesanalmente en plástico PLA. Podés elegir entre los modelos disponibles.<br><br>

      <strong>Incluye:</strong><br>
      • Marcapáginas a elección.<br><br>

      <strong>Medidas:</strong> 6 × 18 cm aproximadamente, variable entre modelos.
    `
  },
  {
    id: "Combo-a5",
    name: "Combo A5",
    type: "Combo",
    basePrice: 48000,
    image: "img/productos/combo-A5.jpg",
    shortDescription: "El combo más completo para journaling, estudio y organización, con accesorios incluidos.",
    description: `
      
		Ideal para quienes buscan una experiencia de escritura completa, con todos los accesorios esenciales incluidos para organizar, crear y acompañarte en cada proyecto.<br><br>

		Confeccionada artesanalmente en ecocuero PU. Gracias a sus 3 elásticos, podés cambiar, sacar o agregar libretas cuando quieras, adaptándola a tus necesidades día a día.<br><br>

		<strong>Incluye:</strong><br>
		• Midori A5 personalizada con iniciales.<br>
		• 3 libretas recargables con hojas lisas.<br>
		• Hasta 3 dijes a elección.<br>
		• Funda o estuche con bolsillo.<br>
		• 2 marcapáginas a elección.<br>
		• 1 portalápicera incluida.<br><br>

		<strong>Medidas:</strong> 15 × 22 cm (cerrada)

    `
  },
  {
    id: "Combo-a6",
    name: "Combo A6",
    type: "Combo",
    basePrice: 35000,
    image: "img/productos/combo-A6.jpg",
    shortDescription: "l combo ideal para llevar tus ideas, apuntes y proyectos a todos lados, con accesorios seleccionados incluidos para una experiencia completa.",
    description: `
      
		Compacta, práctica y totalmente personalizable. El combo perfecto para llevar tus ideas, apuntes y proyectos a todos lados con estilo y funcionalidad.<br><br>

		Confeccionada artesanalmente en ecocuero PU. Su sistema de elásticos permite reemplazar o agregar libretas cuando lo necesites para acompañar tu rutina diaria.<br><br>

		<strong>Incluye:</strong><br>
		• Midori A6 personalizada con iniciales.<br>
		• 2 libretas recargables con hojas lisas.<br>
		• Hasta 3 dijes a elección.<br>
		• 2 marcapáginas a elección.<br>
		• 1 portalápicera incluida.<br><br>

		<strong>Medidas:</strong> 11 × 15 cm (cerrada)

    `
  },
  {
    id: "Combo-regular",
    name: "Combo Regular",
    type: "Combo",
    basePrice: 35500,
    image: "img/productos/combo-regular.jpg",
    shortDescription: "El equilibrio perfecto entre espacio y funcionalidad, con accesorios seleccionados incluidos.",
    description: `
      
		El equilibrio ideal entre espacio y portabilidad. Diseñada para acompañarte en el estudio, el trabajo o tus momentos de creatividad, con accesorios seleccionados para una experiencia completa.<br><br>

		Confeccionada artesanalmente en ecocuero PU. Su formato Regular permite transportar cómodamente todas tus notas y proyectos, manteniendo la flexibilidad característica de las Midori.<br><br>

		<strong>Incluye:</strong><br>
		• Midori Regular personalizada con iniciales.<br>
		• 2 libretas recargables con hojas lisas.<br>
		• Hasta 3 dijes a elección.<br>
		• 2 marcapáginas a elección.<br>
		• 1 portalápicera incluida.<br><br>

		<strong>Medidas:</strong> 11 × 22 cm (cerrada)

    `
  }
];

// ===============================
// OPCIONES
// ===============================

const options = {
  fundas: [
    { name: "Negro", price: 0, image: "img/fundas/funda-negro.jpg" },
    { name: "Croco Negro", price: 0, image: "img/fundas/funda-croco-negro.jpg" },
    { name: "Croco Rosa", price: 0, image: "img/fundas/funda-croco-rosa.jpg" },
    { name: "Naranja", price: 0, image: "img/fundas/funda-naranja.jpg" },
    { name: "Vaca", price: 0, image: "img/fundas/funda-vaca.jpg" }
  ],

  coloresCuaderno: [
    { name: "Naranja", price: 0 },
    { name: "Negro", price: 0 }
  ],

  elasticos: [
    { name: "Rosa", price: 0, image: "img/elasticos/Rosa.jpg" },
    { name: "Verde Oliva", price: 0, image: "img/elasticos/Verde Oliva.jpg" },
    { name: "Negro", price: 0, image: "img/elasticos/Negro.jpg" },
    { name: "Rojo", price: 0, image: "img/elasticos/Rojo.jpg" }
  ],

  cierres: [
    { name: "Broche imantado", price: 0 },
    { name: "Elástico", price: 0 }
  ],

  dijes: {
    dorado: [
      { name: "Estrella de Mar", price: 0 },
      { name: "Concha de Mar", price: 0 },
      { name: "Caracola", price: 0 },
      { name: "Tortuga", price: 0 },
      { name: "Delfín", price: 0 },
      { name: "Caballo de Mar", price: 0 },
      { name: "Pulpo", price: 0 },
      { name: "Sirena", price: 0 },
      { name: "Cangrejo", price: 0 }
    ],
    negro: [
      { name: "Corazón", price: 0 },
      { name: "Estrella", price: 0 },
      { name: "Conejo", price: 0 },
      { name: "Moño", price: 0 },
      { name: "Flor", price: 0 },
      { name: "Luna y Estrella", price: 0 },
      { name: "Chupetín", price: 0 },
      { name: "Mariposa", price: 0 },
      { name: "Anteojo", price: 0 },
      { name: "Llave Corazón", price: 0 },
      { name: "Pescado", price: 0 },
      { name: "Hombre de Jengibre", price: 0 },
      { name: "Unicornio", price: 0 },
      { name: "Carita sonrisa", price: 0 }
    ],
    colores: [
      { name: "Estrella de mar", price: 0 },
      { name: "Concha de Mar", price: 0 },
      { name: "Caracola", price: 0 }
    ]
  },

  accesorios: {
    "Portalápicera": [
      { name: "Portalápicera Corazon Rojo", price: 0, image: "img/productos/portalapicera-rojo-Corazon.jpg", tipo:"portalapicera" },
      { name: "Portalápicera Corazon Rosa", price: 0,image: "img/productos/portalapicera-Rosa-Corazon.jpg", tipo:"portalapicera"  },
	  { name: "Portalápicera Rosa", price: 0,image: "img/productos/portalapicera-rosa.jpg", tipo:"portalapicera"  },
	  { name: "Portalápicera Rojo", price: 0,image: "img/productos/portalapicera-rojo.jpg", tipo:"portalapicera"  },
    ],
    "Estuche A5": [
      { name: "Estuche A5", price: 6000, tipo: "estuche" }
    ],
    "Marcapáginas": [
      { name: "Árbol rojo", price: 6000, image: "img/productos/marcapagina-arbolrojo.jpg", tipo: "marcapagina" },
      { name: "Árbol rosa", price: 6000, image: "img/productos/marcapagina-arbolrosa.jpg", tipo: "marcapagina" },
      { name: "Bambú", price: 5000, image: "img/productos/Marcapagina-azulceleste.jpg", tipo: "marcapagina" },
      { name: "Dragón", price: 5000, image: "img/productos/marcapagina-dragon.jpg", tipo: "marcapagina" },
      { name: "Flor roja", price: 5000, image: "img/productos/Marcapagina-floresyblanco.jpg", tipo: "marcapagina" },
      { name: "Ola de mar", price: 6000, image: "img/productos/marcapagina-ola.jpg", tipo: "marcapagina" },
      { name: "Pez koi", price: 6000, image: "img/productos/PescadoKoy.jpg", tipo: "marcapagina" }
    ]
  },

  marcapaginas: [
    { name: "Árbol rojo", price: 6000, image: "img/productos/marcapagina-arbolrojo.jpg",  },
    { name: "Árbol rosa", price: 6000, image: "img/productos/marcapagina-arbolrosa.jpg" },
    { name: "Bambú", price: 5000, image: "img/productos/Marcapagina-azulceleste.jpg" },
    { name: "Dragón", price: 5000, image: "img/productos/marcapagina-dragon.jpg" },
    { name: "Flor roja", price: 5000, image: "img/productos/Marcapagina-floresyblanco.jpg" },
    { name: "Ola de mar", price: 6000, image: "img/productos/marcapagina-ola.jpg" },
    { name: "Pez koi", price: 6000, image: "img/productos/PescadoKoy.jpg" }
  ]
};

// ===============================
// ESTADO GENERAL
// ===============================

let selectedProduct = null;
let cart = JSON.parse(localStorage.getItem("midoriCart")) || [];

let productPreviewSlideIndex = 0;
let heroSlideIndex = 0;
let heroCarouselInterval = null;

// ===============================
// ELEMENTOS DEL DOM
// ===============================

const categoriesContainer = document.getElementById("categorias");
const customizerSection = document.getElementById("customizerSection");
const stepsContainer = document.getElementById("stepsContainer");
const customizerForm = document.getElementById("customizerForm");

const productTitle = document.getElementById("productTitle");
const productDescription = document.getElementById("productDescription");
const productPreview = document.getElementById("productPreview");
const previewName = document.getElementById("previewName");
const previewSummary = document.getElementById("previewSummary");
const finalPrice = document.getElementById("finalPrice");

const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
const toast = document.getElementById("toast");

// ===============================
// INICIO
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  updateCartUI();
  initHeroCarousel();
});

// ===============================
// UTILIDADES
// ===============================

function formatPrice(value) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(value);
}

function flattenOptions(collection) {
  if (!collection) return [];
  if (Array.isArray(collection)) return collection;
  return Object.values(collection).flat();
}

function findOptionByValue(collection, value) {
  const flatOptions = flattenOptions(collection);
  return flatOptions.find(option => option.name === value);
}

function formatCategoryName(name) {
  const names = {
    dorado: "Dorado",
    negro: "Negro",
    colores: "Colores"
  };

  return names[name] || name;
}

// ===============================
// CATEGORÍAS / PRODUCTOS
// ===============================

function renderCategories() {
  categoriesContainer.innerHTML = products.map(product => `
    <article class="category-card">

      <img src="${product.image}" alt="${product.name}">

      <div class="category-content">

        <h3>${product.name}</h3>

        <div class="product-text">
          <p class="short-text">${product.shortDescription || ""}</p>

          <div class="full-text hidden" id="full-${product.id}">
            ${product.description}
          </div>
        </div>

        <button class="ver-mas-btn" onclick="toggleDescripcion('${product.id}')">
          Ver más
        </button>

        <button class="primary-button" onclick="selectProduct('${product.id}')">
          Personalizar
        </button>

      </div>
    </article>
  `).join("");
}
function toggleDescripcion(productId) {
  const fullText = document.getElementById(`full-${productId}`);
  const button = document.querySelector(`button[onclick="toggleDescripcion('${productId}')"]`);

  if (!fullText || !button) return;

  fullText.classList.toggle("hidden");

  if (fullText.classList.contains("hidden")) {
    button.textContent = "Ver más";
  } else {
    button.textContent = "Ver menos";
  }
}

function verDetalle(productId) {
  const product = products.find(p => p.id === productId);

  if (!product) return;

  alert(product.description.replace(/<br>/g, '\n'));
}

function selectProduct(productId) {
  selectedProduct = products.find(product => product.id === productId);

  if (!selectedProduct) return;

  productTitle.textContent = selectedProduct.name;

  if (productDescription) {
    productDescription.innerHTML = "";
    productDescription.style.display = "none";
  }

  productPreview.src = selectedProduct.image;
  productPreview.alt = selectedProduct.name;

  previewName.textContent = selectedProduct.name;
  previewSummary.textContent = "Configurá cada detalle para crear una pieza única.";

  renderCustomizerSteps();
  updatePrice();
  updateProductPreviewCarousel(true);

  customizerSection.classList.remove("hidden");
  document.getElementById("categorias").classList.add("hidden");
  document.querySelector(".intro").classList.add("hidden");

  customizerSection.scrollIntoView({ behavior: "smooth" });
}

function goHome() {
  selectedProduct = null;

  if (productDescription) {
    productDescription.style.display = "block";
  }

  customizerSection.classList.add("hidden");
  document.getElementById("categorias").classList.remove("hidden");
  document.querySelector(".intro").classList.remove("hidden");

  const section = document.getElementById("seccionProductos");

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

// ===============================
// PERSONALIZADOR
// ===============================

function renderCustomizerSteps() {
  if (!selectedProduct) return;

  let html = "";

  if (selectedProduct.type === "midori" || selectedProduct.type === "Combo") {
    html = `
      ${renderRadioStep("Elegí la funda", "funda", options.fundas, true)}
      ${renderTextStep("Iniciales personalizadas", "iniciales", "Ej: TC, ML, Ana", "Opcional. Podés dejarlo vacío si no querés iniciales.")}
      ${renderRadioStep("Elegí el color del elástico", "elastico", options.elasticos, true)}
      ${renderDijesStep()}
      ${renderAccesoriosStep()}
    `;
  }

  if (selectedProduct.type === "cuaderno") {
    html = `
      ${renderRadioStep("Elegí el color del cuaderno", "colorCuaderno", options.coloresCuaderno, true)}
      ${renderRadioStep("Elegí el tipo de cierre", "cierre", options.cierres, true)}
      ${renderRadioStep("Si elegiste elástico, seleccioná el color", "elastico", options.elasticos, true)}
      ${renderTextStep("Iniciales personalizadas", "iniciales", "Ej: TC, ML, Ana", "Opcional. Podés dejarlo vacío si no querés iniciales.")}
      ${renderAccesoriosStep()}
    `;
  }

  if (selectedProduct.type === "accesorio") {
    html = `
      ${renderRadioStep("Elegí tu marcapáginas", "marcapaginas", options.marcapaginas, true)}
    `;
  }

  stepsContainer.innerHTML = html;

  customizerForm.querySelectorAll("input").forEach(input => {
    input.addEventListener("change", updatePrice);
    input.addEventListener("input", updatePrice);
  });
}

function getComboRules(productId) {
  const rules = {
    "Combo-a5": {
      maxDijes: 3,
      maxMarcapaginas: 2,
      maxPortalapicera: 1
    },
    "Combo-a6": {
      maxDijes: 3,
      maxMarcapaginas: 2,
      maxPortalapicera: 1
    },
    "Combo-regular": {
      maxDijes: 3,
      maxMarcapaginas: 2,
      maxPortalapicera: 1
    }
  };

  return rules[productId] || null;
}


function renderRadioStep(title, name, items, required = false) {
  return `
    <section class="step">
      <h3>${title}</h3>

      <div class="option-grid">
        ${items.map((item, index) => `
          <div class="option-card">
            <input
              type="radio"
              id="${name}-${index}"
              name="${name}"
              value="${item.name}"
              data-price="${item.price}"
              ${required && index === 0 ? "checked" : ""}
            >

            <label for="${name}-${index}">
              ${item.image ? `
                <img class="option-image" src="${item.image}" alt="${item.name}">
              ` : ""}

              <span class="option-title">${item.name}</span>

              <span class="option-price">
                ${
  selectedProduct?.type === "Combo" && item.tipo === "marcapagina"
    ? "Incluido"
    : item.price > 0
      ? `+ ${formatPrice(item.price)}`
      : "Incluido"
}
              </span>
            </label>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTextStep(title, name, placeholder, helpText) {
  return `
    <section class="step">
      <h3>${title}</h3>

      <input
        class="form-control"
        type="text"
        name="${name}"
        maxlength="12"
        placeholder="${placeholder}"
      >

      <p class="help-text">${helpText}</p>
    </section>
  `;
}

function renderDijesStep() {
  return `
    <section class="step">
      <h3>Elegí dijes opcionales</h3>
      <p class="help-text">Podés elegir hasta 3 dijes por producto.</p>

      ${Object.entries(options.dijes).map(([categoria, items]) => `
        <div class="dije-group">
          <h4>${formatCategoryName(categoria)}</h4>

          <div class="check-list grouped-check-list">
            ${items.map((item, index) => `
              <div class="check-item">
                <label>
                  <input
                    type="checkbox"
                    name="dijes"
                    value="${item.name}"
                    data-price="${item.price}"
                    onchange="limitarDijes(event)"
                  >
                  ${item.name}
                </label>

                <span>${item.price > 0 ? `+ ${formatPrice(item.price)}` : "Incluido"}</span>
              </div>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </section>
  `;
}

function renderAccesoriosStep() {
  return `
    <section class="step">
      <h3>Agregá accesorios opcionales</h3>

      ${Object.entries(options.accesorios)
  .filter(([categoria]) => {

    // Ocultar Estuche A5 en Combo A6 y Combo Regular
    if (
      categoria === "Estuche A5" &&
      (
        selectedProduct?.id === "Combo-a6" ||
        selectedProduct?.id === "Combo-regular"
      )
    ) {
      return false;
    }

    return true;
  })
  .map(([categoria, items]) => `
        <div class="dije-group">
          <h4>${categoria}</h4>

          <div class="option-grid">
            ${items.map((item, index) => `
              <div class="option-card">
                <input
                  type="checkbox"
                  id="accesorio-${categoria}-${index}"
                  name="accesorios"
                  value="${item.name}"
                  data-price="${item.price}"
				  data-tipo="${item.tipo || ""}"
				  onchange="limitarAccesorios(event)"
                >

                <label for="accesorio-${categoria}-${index}">

                  ${item.image ? `
                    <img class="option-image" src="${item.image}" alt="${item.name}">
                  ` : ""}

                  <span class="option-title">${item.name}</span>

                  <span class="option-price">
  ${
    selectedProduct?.type === "Combo"
      ? "Incluido"
      : item.tipo === "portalapicera"
        ? "1° incluida · adicionales +$500"
        : item.price > 0
          ? `+ ${formatPrice(item.price)}`
          : "Incluido"
  }
</span>

                </label>
              </div>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </section>
  `;
}

function limitarDijes(event) {
  const checkboxes = document.querySelectorAll("input[name='dijes']");
  const seleccionados = Array.from(checkboxes).filter(cb => cb.checked);

  let limite = 3;

  // ✅ Midori A6
  if (selectedProduct?.id === "midori-a6") {
    limite = 2;
  }

  // ✅ Cuaderno Cosido
  if (selectedProduct?.id === "cuaderno-cocido") {
    limite = 1;
  }

  // ✅ Midori Regular
  if (selectedProduct?.id === "midori-regular") {
    limite = 2;
  }

  // ✅ Combo A6
  if (selectedProduct?.id === "Combo-a6") {
    limite = 2;
  }

  // ✅ Combo Regular
  if (selectedProduct?.id === "Combo-regular") {
    limite = 2;
  }

  // ✅ A5 y Combo A5 mantienen 3
  if (
    selectedProduct?.id === "midori-a5" ||
    selectedProduct?.id === "Combo-a5"
  ) {
    limite = 3;
  }

  if (seleccionados.length > limite) {
    event.target.checked = false;
    showToast(`Máximo ${limite} dijes por producto`);
  }
}


function limitarAccesorios(event) {
  if (!selectedProduct || selectedProduct.type !== "Combo") return;

  const checkboxes = document.querySelectorAll("input[name='accesorios']");
  const seleccionados = Array.from(checkboxes).filter(cb => cb.checked);

  const marcapaginas = seleccionados.filter(
    cb => cb.dataset.tipo === "marcapagina"
  );

  const portalapiceras = seleccionados.filter(
    cb => cb.dataset.tipo === "portalapicera"
  );

  // Máximo 2 marcapáginas
  if (marcapaginas.length > 2) {
    event.target.checked = false;
    showToast("Máximo 2 marcapáginas incluidos en el combo");
    return;
  }

  // Máximo 1 portalápicera
  if (portalapiceras.length > 1) {
    event.target.checked = false;
    showToast("Máximo 1 portalápicera incluida en el combo");
    return;
  }
}

// ===============================
// DATOS SELECCIONADOS / PRECIO
// ===============================

function getSelectedData() {
  const formData = new FormData(customizerForm);

  return {
    product: selectedProduct.name,
    basePrice: selectedProduct.basePrice,
    funda: formData.get("funda") || "",
    colorCuaderno: formData.get("colorCuaderno") || "",
    cierre: formData.get("cierre") || "",
    elastico: formData.get("elastico") || "",
    iniciales: formData.get("iniciales")?.trim() || "Sin iniciales",
    dijes: formData.getAll("dijes"),
    accesorios: formData.getAll("accesorios"),
    marcapaginas: formData.get("marcapaginas") || "",
    price: calculatePrice()
  };
}

function calculatePrice() {
  if (!selectedProduct) return 0;

  let total = selectedProduct.basePrice;

  const selectedInputs = customizerForm.querySelectorAll("input:checked");

  let cantidadPortalapiceras = 0;

  selectedInputs.forEach(input => {

    let price = Number(input.dataset.price || 0);

    // ===============================
    // COMBOS
    // ===============================
    if (selectedProduct.type === "Combo") {

      // Todo incluido en los combos
      price = 0;
    }

    // ===============================
    // MIDORI / CUADERNO
    // ===============================
    else {

      if (input.dataset.tipo === "portalapicera") {

        cantidadPortalapiceras++;

        // La primera es gratis
        if (cantidadPortalapiceras === 1) {
          price = 0;
        }

        // Desde la segunda en adelante +500
        if (cantidadPortalapiceras >= 2) {
          price = 500;
        }
      }
    }

    total += price;
  });

  return total;
}    

 


function updatePrice() {
  if (!selectedProduct) return;

  const total = calculatePrice();
  finalPrice.textContent = formatPrice(total);

  const data = getSelectedData();

  const summaryParts = [];

  if (data.funda) summaryParts.push(`Funda: ${data.funda}`);
  if (data.colorCuaderno) summaryParts.push(`Color: ${data.colorCuaderno}`);
  if (data.cierre) summaryParts.push(`Cierre: ${data.cierre}`);
  if (data.elastico) summaryParts.push(`Elástico: ${data.elastico}`);
  if (data.iniciales !== "Sin iniciales") summaryParts.push(`Iniciales: ${data.iniciales}`);
  if (data.dijes.length) summaryParts.push(`Dijes: ${data.dijes.join(", ")}`);
  if (data.accesorios.length) summaryParts.push(`Accesorios: ${data.accesorios.join(", ")}`);
  if (data.marcapaginas) summaryParts.push(`Modelo: ${data.marcapaginas}`);

  previewSummary.textContent = summaryParts.length
    ? summaryParts.join(" · ")
    : "Configurá cada detalle para crear una pieza única.";

  updateProductPreviewCarousel(false);
}

// ===============================
// CARRUSEL DE VISTA PREVIA
// ===============================

function getProductPreviewSlides() {
  if (!selectedProduct) return [];

  const formData = new FormData(customizerForm);

  if (selectedProduct.type === "accesorio") {
    const selectedMarcapaginas = formData.get("marcapaginas");
    const marcapaginasOption = findOptionByValue(options.marcapaginas, selectedMarcapaginas);

    return [
      {
        image: marcapaginasOption?.image || selectedProduct.image,
        title: marcapaginasOption?.name || selectedProduct.name
      }
    ];
  }

  const slides = [
    {
      image: selectedProduct.image,
      title: selectedProduct.name
    }
  ];

  const previewSources = [
    { field: "funda", collection: options.fundas, prefix: "Funda" },
    { field: "colorCuaderno", collection: options.coloresCuaderno, prefix: "Color" },
    { field: "cierre", collection: options.cierres, prefix: "Cierre" },
    { field: "elastico", collection: options.elasticos, prefix: "Elástico" }
  ];
  // ✅ AGREGAR ACCESORIOS AL PREVIEW
	const accesoriosSeleccionados = formData.getAll("accesorios");

	accesoriosSeleccionados.forEach(nombre => {
	const accesorio = findOptionByValue(options.accesorios, nombre);

	if (accesorio?.image) {
		slides.push({
		image: accesorio.image,
		title: `Accesorio: ${accesorio.name}`
		});
	}
	});

  previewSources.forEach(source => {
    const selectedValue = formData.get(source.field);
    const selectedOption = findOptionByValue(source.collection, selectedValue);

    if (selectedOption?.image) {
      slides.push({
        image: selectedOption.image,
        title: `${source.prefix}: ${selectedOption.name}`
      });
    }
  });

  return slides.filter((slide, index, array) => {
    return array.findIndex(item => item.image === slide.image) === index;
  });
}

function updateProductPreviewCarousel(resetIndex = false) {
  const carousel = document.querySelector(".product-preview-carousel");

  const imageDesktop = document.getElementById("productPreview");
  const dotsDesktop = document.getElementById("productPreviewDots");

  const imageMobile = document.getElementById("productPreviewMobile");
  const dotsMobile = document.getElementById("productPreviewDotsMobile");

  // ✅ CORREGIDO
  if (!carousel || (!imageDesktop && !imageMobile)) return;

  const slides = getProductPreviewSlides();

  if (!slides.length) return;

  if (resetIndex) {
    productPreviewSlideIndex = 0;
  }

  if (productPreviewSlideIndex >= slides.length) {
    productPreviewSlideIndex = 0;
  }

  const currentSlide = slides[productPreviewSlideIndex];

  // ✅ actualizar ambas vistas
  if (imageDesktop) {
    imageDesktop.src = currentSlide.image;
    imageDesktop.alt = currentSlide.title;
  }

  if (imageMobile) {
    imageMobile.src = currentSlide.image;
    imageMobile.alt = currentSlide.title;
  }

  carousel.classList.toggle("single-slide", slides.length <= 1);

  const dotsHTML = slides.map((slide, index) => `
    <button
      type="button"
      class="preview-carousel-dot ${index === productPreviewSlideIndex ? "active" : ""}"
      onclick="goToProductPreviewSlide(${index})"
    ></button>
  `).join("");

  // ✅ actualizar ambos dots
  if (dotsDesktop) dotsDesktop.innerHTML = dotsHTML;
  if (dotsMobile) dotsMobile.innerHTML = dotsHTML;
}

function changeProductPreviewSlide(direction) {
  const slides = getProductPreviewSlides();

  if (!slides.length) return;

  productPreviewSlideIndex += direction;

  if (productPreviewSlideIndex < 0) {
    productPreviewSlideIndex = slides.length - 1;
  }

  if (productPreviewSlideIndex >= slides.length) {
    productPreviewSlideIndex = 0;
  }

  updateProductPreviewCarousel(false);
}

function goToProductPreviewSlide(index) {
  productPreviewSlideIndex = index;
  updateProductPreviewCarousel(false);
}

// ===============================
// CARRITO
// ===============================

customizerForm.addEventListener("submit", event => {
  event.preventDefault();

  if (!selectedProduct) return;

  const item = {
    id: Date.now(),
    ...getSelectedData()
  };

  cart.push(item);
  saveCart();
  updateCartUI();
  showToast("Producto agregado al carrito");
  openCart();
});

function saveCart() {
  localStorage.setItem("midoriCart", JSON.stringify(cart));
}

function updateCartUI() {
  cartCount.textContent = cart.length;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <p class="empty-cart">
        Tu carrito está vacío. Personalizá una Midori, cuaderno o accesorio para comenzar tu pedido.
      </p>
    `;

    cartTotal.textContent = formatPrice(0);
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <article class="cart-item">
      <h3>${item.product}</h3>
      <p>${buildItemSummary(item)}</p>

      <div class="cart-item-footer">
        <strong>${formatPrice(item.price)}</strong>

        <button class="remove-button" onclick="removeFromCart(${item.id})">
          Eliminar
        </button>
      </div>
    </article>
  `).join("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = formatPrice(total);
}

function buildItemSummary(item) {
  const details = [];

  if (item.funda) details.push(`Funda: ${item.funda}`);
  if (item.colorCuaderno) details.push(`Color: ${item.colorCuaderno}`);
  if (item.cierre) details.push(`Cierre: ${item.cierre}`);
  if (item.elastico) details.push(`Elástico: ${item.elastico}`);
  if (item.iniciales) details.push(`Iniciales: ${item.iniciales}`);
  if (item.dijes?.length) details.push(`Dijes: ${item.dijes.join(", ")}`);
  if (item.accesorios?.length) details.push(`Accesorios: ${item.accesorios.join(", ")}`);
  if (item.marcapaginas) details.push(`Modelo: ${item.marcapaginas}`);

  return details.join(" · ");
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

function openCart() {
  cartDrawer.classList.add("open");
  overlay.classList.add("show");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  overlay.classList.remove("show");
}

// ===============================
// WHATSAPP
// ===============================

function sendWhatsAppOrder() {
  if (cart.length === 0) {
    showToast("Agregá al menos un producto al carrito");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  let message = "Hola! Quiero realizar el siguiente pedido:%0A%0A";

  cart.forEach((item, index) => {
    message += `Producto ${index + 1}: ${item.product}%0A`;
    message += `${encodeURIComponent(buildItemSummary(item))}%0A`;
    message += `Precio: ${encodeURIComponent(formatPrice(item.price))}%0A%0A`;
  });

  message += `Total del pedido: ${encodeURIComponent(formatPrice(total))}%0A%0A`;
  message += "Quedo atenta/o para coordinar detalles, disponibilidad y forma de entrega.";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.open(whatsappUrl, "_blank");
}

// ===============================
// UI
// ===============================

function showToast(text) {
  toast.textContent = text;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

// ===============================
// CARRUSEL HERO
// ===============================

function getHeroSlides() {
  return products.map(product => ({
    image: product.image,
    title: product.name,
    label: "Producto personalizado"
  }));
}

function initHeroCarousel() {
  const slides = getHeroSlides();
  const dotsContainer = document.getElementById("heroCarouselDots");

  if (!slides.length || !dotsContainer) return;

  dotsContainer.innerHTML = slides.map((_, index) => `
    <button
      class="carousel-dot ${index === 0 ? "active" : ""}"
      type="button"
      onclick="goToHeroSlide(${index})"
      aria-label="Ver producto ${index + 1}"
    ></button>
  `).join("");

  updateHeroCarousel();

  heroCarouselInterval = setInterval(() => {
    changeHeroSlide(1);
  }, 4000);
}

function updateHeroCarousel() {
  const slides = getHeroSlides();

  const image = document.getElementById("heroCarouselImage");
  const label = document.getElementById("heroCarouselLabel");
  const title = document.getElementById("heroCarouselTitle");
  const dots = document.querySelectorAll(".carousel-dot");

  if (!image || !label || !title || !slides.length) return;

  const currentSlide = slides[heroSlideIndex];

  image.classList.add("fade-out");

  setTimeout(() => {
    image.src = currentSlide.image;
    image.alt = currentSlide.title;

    label.textContent = currentSlide.label;
    title.textContent = currentSlide.title;

    image.classList.remove("fade-out");

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === heroSlideIndex);
    });
  }, 220);
}

function changeHeroSlide(direction) {
  const slides = getHeroSlides();

  if (!slides.length) return;

  heroSlideIndex += direction;

  if (heroSlideIndex < 0) {
    heroSlideIndex = slides.length - 1;
  }

  if (heroSlideIndex >= slides.length) {
    heroSlideIndex = 0;
  }

  updateHeroCarousel();
  restartHeroCarousel();
}

function goToHeroSlide(index) {
  heroSlideIndex = index;
  updateHeroCarousel();
  restartHeroCarousel();
}

function restartHeroCarousel() {
  if (heroCarouselInterval) {
    clearInterval(heroCarouselInterval);
  }

  heroCarouselInterval = setInterval(() => {
    changeHeroSlide(1);
  }, 4000);
}