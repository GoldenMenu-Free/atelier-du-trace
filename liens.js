/*
  ===== LIENS DU SITE : le seul fichier à modifier =====
  Collez entre les guillemets l'adresse Payhip de chaque produit.
  Tant qu'un lien produit est vide, le bouton renvoie vers la boutique.
  Tant qu'un lien newsletter est vide, le bouton correspondant reste caché.
*/
window.LIENS = {
  boutique:      "https://payhip.com/GoldenMenu",

  // Produits en français
  cahier1:       "https://payhip.com/b/v7IWs",
  cahier2:       "https://payhip.com/b/yVxUK",
  cahier3:       "https://payhip.com/b/Ai5OT",
  dessin:        "https://payhip.com/b/SeXsb",
  graphisme:     "https://payhip.com/b/od6t3",
  points:        "https://payhip.com/b/45Hq3",
  noel:          "https://payhip.com/b/lCh2R",

  // Products in English
  cahier1_en:    "https://payhip.com/b/TZndl",
  cahier2_en:    "https://payhip.com/b/5BtSr",
  cahier3_en:    "https://payhip.com/b/inVdX",
  dessin_en:     "https://payhip.com/b/ibl8r",
  graphisme_en:  "https://payhip.com/b/n6t7q",
  dots_en:       "https://payhip.com/b/eZKcN",
  noel_en:       "https://payhip.com/b/GoENu",

  // Pages offertes : lien du produit gratuit sur Payhip (sinon, téléchargement direct du PDF)
  offert:        "https://payhip.com/b/CZ1lv",
  offert_en:     "https://payhip.com/b/D7xyk",

  // Newsletters
  newsletter_fr: "",   // votre page Beehiiv
  newsletter_en: ""    // your Substack page
};

document.querySelectorAll("[data-lien]").forEach(function (a) {
  var url = window.LIENS[a.dataset.lien];
  if (url) { a.href = url; }
  else if (a.hasAttribute("data-masquer")) { a.hidden = true; }
});
