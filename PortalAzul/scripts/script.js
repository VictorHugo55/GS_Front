//WEBCHAT FIXO - CODIGO QUE VEM NO IBM PARA COPIAR 
window.watsonAssistantChatOptions = {
  integrationID: "d6340925-af7a-4958-87d8-3b1e3dd9ee63", // The ID of this integration.
  region: "us-south", // The region your integration is hosted in.
  serviceInstanceID: "a0a3219a-2770-4fae-baf2-60645cbba268", // The ID of your service instance.
  onLoad: async (instance) => {
    await instance.render();
  },
};
setTimeout(function () {
  const t = document.createElement("script");
  t.src =
    "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
    (window.watsonAssistantChatOptions.clientVersion || "latest") +
    "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});

// MENU RESPONSIVO

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    // Elementos do menu
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active"; // Classe para mostrar/ocultar o menu

    this.handleClick = this.handleClick.bind(this);
  }

  // Animação dos links de navegação
  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  // Manipula o clique no menu móvel
  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();

    // Exibe ou oculta o logotipo
    const logoElement = document.querySelector("img");
    if (logoElement) {
      logoElement.style.display =
        logoElement.style.display === "none" ? "block" : "none";
    }
  }

  // Adiciona evento de clique ao menu móvel
  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  // Inicializa o menu móvel
  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".menu-hambuguer",
  ".lista-menu",
  ".lista-menu li"
);
mobileNavbar.init();

var DandoLike = "";
