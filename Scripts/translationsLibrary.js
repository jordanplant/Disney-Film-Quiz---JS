const movieTranslations = {
  "The Lion King": {
    en: "The Lion King", // English
    es: "El Rey León", // Spanish
    fr: "Le Roi Lion", // French
    de: "Der König der Löwen", // German
    it: "Il Re Leone", // Italian
    pt: "O Rei Leão", // Portuguese
    // ja: "ライオン・キング", // Japanese
    // ko: "라이온 킹", // Korean
    // zh: "獅子王", // Chinese (Simplified)
    // ru: "Король Лев", // Russian
    // ar: "الأسد الملك", // Arabic
    // hi: "द लायन किंग", // Hindi
    nl: "De Leeuwenkoning", // Dutch
    sv: "Lejonkungen", // Swedish
  },
  "The Little Mermaid": {
    en: "The Little Mermaid", // English
    es: "La Sirenita", // Spanish
    fr: "La Petite Sirène", // French
    de: "Die kleine Meerjungfrau", // German
    it: "La Sirenetta", // Italian
    pt: "A Pequena Sereia", // Portuguese
    // ja: "リトル・マーメイド", // Japanese
    // ko: "인어공주", // Korean
    // zh: "小美人鱼", // Chinese (Simplified)
    // ru: "Русалочка", // Russian
    // ar: "الحورية الصغيرة", // Arabic
    // hi: "छोटी मत्स्यकन्या", // Hindi
    nl: "De Kleine Zeemeermin", // Dutch
    sv: "Den lilla sjöjungfrun", // Swedish
  },
  "Beauty and the Beast": {
    en: "Beauty and the Beast", // English
    es: "La Bella y la Bestia", // Spanish
    fr: "La Belle et la Bête", // French
    de: "Die Schöne und das Biest", // German
    it: "La Bella e la Bestia", // Italian
    pt: "A Bela e a Fera", // Portuguese
    // ja: "美女と野獣", // Japanese
    // ko: "미녀와 야수", // Korean
    // zh: "美女与野兽", // Chinese (Simplified)
    // ru: "Красавица и чудовище", // Russian
    // ar: "جمال والوحش", // Arabic
    // hi: "सुंदर और जानवर", // Hindi
    nl: "Belle en het Beest", // Dutch
    sv: "Skönheten och odjuret", // Swedish
  },

  "Finding Nemo": {
    en: "Finding Nemo", // English
    es: "Buscando a Nemo", // Spanish
    fr: "Le Monde de Nemo", // French
    de: "Findet Nemo", // German
    it: "Alla Ricerca di Nemo", // Italian
    pt: "À Procura de Nemo", // Portuguese
    // ja: "ファインディング・ニモ", // Japanese
    // ko: "니모를 찾아서", // Korean
    // zh: "寻找尼莫", // Chinese (Simplified)
    // ru: "В поисках Немо", // Russian
    // ar: "البحث عن نيمو", // Arabic
    // hi: "नीमो को ढूंढो", // Hindi
    nl: "Op Zoek naar Nemo", // Dutch
    sv: "Hitta Nemo", // Swedish
  },

  "The Jungle Book": {
    en: "The Jungle Book", // English
    es: "El Libro de la Selva", // Spanish
    fr: "Le Livre de la Jungle", // French
    de: "Das Dschungelbuch", // German
    it: "Il Libro della Giungla", // Italian
    pt: "O Livro da Selva", // Portuguese
    // ja: "ジャングル・ブック", // Japanese
    // ko: "정글북", // Korean
    // zh: "丛林之书", // Chinese (Simplified)
    // ru: "Книга джунглей", // Russian
    // ar: "كتاب الأدغال", // Arabic
    // hi: "द जंगल बुक", // Hindi
    nl: "Het Jungle Boek", // Dutch
    sv: "Djungelboken", // Swedish
  },
  "The Princess and the Frog": {
    en: "The Princess and the Frog", // English
    es: "La Princesa y el Sapo", // Spanish
    fr: "La Princesse et la Grenouille", // French
    de: "Küss den Frosch: Die Tiana Story", // German
    it: "La Principessa e il Ranocchio", // Italian
    pt: "A Princesa e o Sapo", // Portuguese
    // ja: "プリンセスと魔法のキス", // Japanese
    // ko: "공주와 개구리", // Korean
    // zh: "公主与青蛙", // Chinese (Simplified)
    // ru: "Принцесса и лягушка", // Russian
    // ar: "الأميرة والضفدع", // Arabic
    // hi: "राजकुमारी और मेंढ़क", // Hindi
    nl: "De Prinses en de Kikker", // Dutch
    sv: "Prinsessan och grodan", // Swedish
  },

  "Lady and the Tramp": {
    en: "Lady and the Tramp", // English
    es: "La Dama y el Vagabundo", // Spanish
    fr: "La Belle et le Clochard", // French
    de: "Susi und Strolch", // German
    it: "Lilli e il Vagabondo", // Italian
    pt: "A Dama e o Vagabundo", // Portuguese
    // ja: "わんわん物語", // Japanese
    // ko: "레이디와 트램프", // Korean
    // zh: "小姐与流浪汉", // Chinese (Simplified)
    // ru: "Леди и Бродяга", // Russian
    // ar: "السيدة والمتسكع", // Arabic
    // hi: "लेडी और द ट्रैम्प", // Hindi
    nl: "Lady en de Vagebond", // Dutch
    sv: "Lady och Lufsen", // Swedish
  },

  Moana: {
    en: "Moana", // English
    es: "Vaiana", // Spanish
    fr: "Vaiana, la légende du bout du monde", // French
    de: "Vaiana - Das Paradies hat einen Haken", // German
    it: "Oceania", // Italian
    pt: "Moana: Um Mar de Aventuras", // Portuguese
    // ja: "モアナと伝説の海", // Japanese
    // ko: "모아나", // Korean
    // zh: "海洋奇缘", // Chinese (Simplified)
    // ru: "Моана", // Russian
    // ar: "موانا", // Arabic
    // hi: "मोआना", // Hindi
    nl: "Vaiana", // Dutch
    sv: "Moana - En havsprinsessas äventyr", // Swedish
  },
  "A Goofy Movie": {
    en: "A Goofy Movie", // English
    es: "Goofy e Hijo", // Spanish
    fr: "Dingo et Max", // French
    de: "Goofy – Der Film", // German
    it: "Sottozero", // Italian
    pt: "Pateta: O Filme", // Portuguese
    // ja: "グーフィー・ムービー 海賊島の大冒険", // Japanese
    // ko: "구피 무비", // Korean
    // zh: "古飛奇緣", // Chinese (Simplified)
    // ru: "Гуфи и его сын", // Russian
    // ar: "فيلم جوفي", // Arabic
    // hi: "गूफी मूवी", // Hindi
    nl: "Een Goofy film", // Dutch
    sv: "En Goofy-film", // Swedish
  },

  "The Emperor's New Groove": {
    en: "The Emperor's New Groove", // English
    es: "El Emperador y sus Locuras", // Spanish
    fr: "Kuzco, l'Empereur Mégalo", // French
    de: "Ein Königreich für ein Lama", // German
    it: "Le follie dell'Imperatore", // Italian
    pt: "A Nova Onda do Imperador", // Portuguese
    // ja: "エンペラーの新しいグルーヴ", // Japanese
    // ko: "새로운 쿠스코의 만리장성", // Korean
    // zh: "新鼠小弟2：大开心", // Chinese (Simplified)
    // ru: "Новая Грув-Империя", // Russian
    // ar: "الإمبراطور الجديد غروف", // Arabic
    // hi: "सम्राट का नया ग्रूव", // Hindi
    nl: "De Nieuwe Keizer", // Dutch
    sv: "Kejsarens nya stil", // Swedish
  },

  Tangled: {
    en: "Tangled", // English
    es: "Enredados", // Spanish
    fr: "Raiponce", // French
    de: "Rapunzel - Neu verföhnt", // German
    it: "Rapunzel - L'intreccio della torre", // Italian
    pt: "Entrelaçados", // Portuguese
    // ja: "魔法の毛糸", // Japanese
    // ko: "라푼젤", // Korean
    // zh: "魔髮奇緣", // Chinese (Simplified)
    // ru: "Рапунцель: Запутанная история", // Russian
    // ar: "تنكلد", // Arabic
    // hi: "टैंगल्ड", // Hindi
    nl: "Rapunzel", // Dutch
    sv: "Trassel", // Swedish
  },
};

function getMovieTranslation(movie, language) {
  const translations = movieTranslations[movie];
  if (translations && translations[language]) {
    return translations[language];
  }
  return "Translation not available";
}

export default {
  getMovieTranslation,
};
