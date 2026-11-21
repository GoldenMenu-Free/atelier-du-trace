/*
  ===== LIENS DU SITE : le seul fichier à modifier =====
  Collez entre les guillemets l'adresse Payhip de chaque produit
  (sur Payhip : ouvrez le produit, puis copiez son lien, du type https://payhip.com/b/XXXXX).
  Tant qu'un lien produit est vide, le bouton renvoie vers la boutique.
  Tant qu'un lien newsletter est vide, le bouton correspondant reste caché.
*/
window.LIENS = {
  boutique:      "https://payhip.com/GoldenMenu",

  // Produits en français
  cahier1:       "https://payhip.com/b/v7IWs",
  cahier2:       "https://payhip.com/b/yVxUK",
  points:        "https://payhip.com/b/45Hq3",
  noel:          "https://payhip.com/b/lCh2R",

  // Products in English
  cahier1_en:    "https://payhip.com/b/TZndl",
  cahier2_en:    "https://payhip.com/b/5BtSr",
  dots_en:       "https://payhip.com/b/eZKcN",

  // Newsletters
  newsletter_fr: "",   // votre page Beehiiv
  newsletter_en: ""    // your Substack page
};

document.querySelectorAll("[data-lien]").forEach(function (a) {
  var url = window.LIENS[a.dataset.lien];
  if (url) { a.href = url; }
  else if (a.hasAttribute("data-masquer")) { a.hidden = true; }
});
