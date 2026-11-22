/*
  ===== LIENS DU SITE : le seul fichier à modifier =====
  Collez entre les guillemets l'adresse Payhip de chaque produit.
  Tant qu'un lien produit est vide, le bouton renvoie vers la boutique.
  Tant qu'un lien newsletter est vide, le bouton correspondant reste caché.
*/
window.LIENS = {
  boutique:      "https://payhip.com/GoldenMenu",

  // Produits en français
  cahier1:       "",   // Cahier 1 d’écriture : à recopier depuis votre ancien fichier
  cahier2:       "",   // Cahier 2 d’écriture : à recopier depuis votre ancien fichier
  cahier3:       "https://payhip.com/b/Ai5OT",
  dessin:        "https://payhip.com/b/SeXsb",
  graphisme:     "https://payhip.com/b/od6t3",
  points:        "",   // Points à relier chiffres et lettres : à recopier depuis votre ancien fichier
  noel:          "https://payhip.com/b/lCh2R",

  // Products in English
  cahier1_en:    "",   // Workbook 1: copy from your old file
  cahier2_en:    "",   // Workbook 2: copy from your old file
  cahier3_en:    "https://payhip.com/b/inVdX",
  dessin_en:     "https://payhip.com/b/ibl8r",
  graphisme_en:  "https://payhip.com/b/n6t7q",
  dots_en:       "",   // Dot to dot: copy from your old file
  noel_en:       "https://payhip.com/b/GoENu",

  // Newsletters
  newsletter_fr: "",   // à recopier depuis votre ancien fichier
  newsletter_en: ""    // copy from your old file
};

document.querySelectorAll("[data-lien]").forEach(function (a) {
  var url = window.LIENS[a.dataset.lien];
  if (url) { a.href = url; }
  else if (a.hasAttribute("data-masquer")) { a.hidden = true; }
});
