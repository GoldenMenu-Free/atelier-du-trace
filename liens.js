/*
  ===== LIENS DU SITE : le seul fichier à modifier =====
  Collez entre les guillemets l'adresse Payhip de chaque produit.
  Tant qu'un lien produit est vide, le bouton renvoie vers la boutique.
  Tant qu'un lien newsletter est vide, le bouton correspondant reste caché.
*/
window.LIENS = {
  boutique:      "https://payhip.com/atelierdutrace",

  // Produits en français
  cahier1:       "https://payhip.com/b/v7IWs",
  cahier2:       "https://payhip.com/b/yVxUK",
  cahier3:       "https://payhip.com/b/Ai5OT",
  dessin:        "https://payhip.com/b/SeXsb",
  graphisme:     "https://payhip.com/b/od6t3",
  points:        "https://payhip.com/b/45Hq3",
  noel:          "https://payhip.com/b/lCh2R",
  cursive_enfants: "https://payhip.com/b/VUsL3",

  // Products in English
  cahier1_en:    "https://payhip.com/b/TZndl",
  cahier2_en:    "https://payhip.com/b/5BtSr",
  cahier3_en:    "https://payhip.com/b/inVdX",
  dessin_en:     "https://payhip.com/b/ibl8r",
  graphisme_en:  "https://payhip.com/b/n6t7q",
  dots_en:       "https://payhip.com/b/eZKcN",
  noel_en:       "https://payhip.com/b/GoENu",
  cursive_kids_en: "https://payhip.com/b/rCHKg",

  dessin2:         "https://payhip.com/b/paC4x",
  dessin2_en:      "https://payhip.com/b/dJKmr",

  cursive_gaucher:     "https://payhip.com/b/A4Z7T",
  c2_gaucher:          "https://payhip.com/b/gr1Py",
  cursive_lefty_en:    "https://payhip.com/b/lNoqB",
  pack_gaucher_enfant: "https://payhip.com/b/CXE5s",
  pack_gaucher_adulte: "https://payhip.com/b/eZ1cL",
  fiche_gauchers:      "https://payhip.com/b/gaFJ5",
  fiche_gauchers_en:   "https://payhip.com/b/mi5Lh",
  fiche_crayon:        "https://payhip.com/b/whXR2",

  // Packs
  pack_ecriture:       "https://payhip.com/b/S0Mqy",
  pack_enfants:        "https://payhip.com/b/IeGXJ",
  pack_atelier:        "https://payhip.com/b/WD8pC",
  pack_handwriting_en: "https://payhip.com/b/6IvVL",
  pack_kids_en:        "https://payhip.com/b/pWI9R",
  pack_studio_en:      "https://payhip.com/b/FnE0t",

  // Pages offertes : lien du produit gratuit sur Payhip (sinon, téléchargement direct du PDF)
  offert:        "https://payhip.com/b/CZ1lv",
  offert_en:     "https://payhip.com/b/D7xyk",

  // Newsletters
  newsletter_fr: "https://goldens-newsletter-eaf0a3.beehiiv.com/subscribe",   // votre page Beehiiv
  newsletter_en: "https://goldenmenu.substack.com/subscribe"    // your Substack page
};

document.querySelectorAll("[data-lien]").forEach(function (a) {
  var url = window.LIENS[a.dataset.lien];
  if (url) { a.href = url; }
  else if (a.hasAttribute("data-masquer")) { a.hidden = true; }
});
