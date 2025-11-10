// ✅ Ajusta automaticamente o caminho das imagens
const withBase = (path) => {
  const base = `${window.location.origin}/cardapio_online/`;
  return `${base}${path}`;
};

export const restaurants = [
  // 🍔 HAMBURGUERIA
  {
    id: "neon-burger",
    type: "Hamburgueria",
    name: "Neon Burger",
    banner: withBase("assets/restaurants/neon-burger/banner.jpg"),
    logo: withBase("assets/restaurants/neon-burger/logo.jpg"),
    address: "Av. Central, 123 - Centro",
    phone: "(88) 98882-3886",
    instagram: "@neonburger",
    categories: [
      {
        id: "burguers",
        title: "Burguers",
        subtitle: "Clássicos e especiais",
        count: 5,
        items: [
          { id: "nb-classico", name: "Clássico da Casa", price: 29.9, img: withBase("assets/restaurants/neon-burger/items/classico.jpg") },
          { id: "nb-bacon", name: "Bacon Supreme", price: 34.9, img: withBase("assets/restaurants/neon-burger/items/bacon.jpg") },
          { id: "nb-duplo", name: "Duplo Smash", price: 36.9, img: withBase("assets/restaurants/neon-burger/items/duplo.jpg") },
          { id: "nb-cheddar", name: "Cheddar Melt", price: 33.9, img: withBase("assets/restaurants/neon-burger/items/cheddar.jpg") },
          { id: "nb-veggie", name: "Veggie Burger", price: 31.9, img: withBase("assets/restaurants/neon-burger/items/veggie.jpg") }
        ]
      },
      {
        id: "bebidas",
        title: "Bebidas",
        subtitle: "Refrigerantes e shakes",
        count: 2,
        items: [
          { id: "refri-lata", name: "Refrigerante Lata", price: 6.0, img: withBase("assets/restaurants/neon-burger/items/refri.jpg") },
          { id: "milkshake-oreo", name: "Milkshake Oreo", price: 18.0, img: withBase("assets/restaurants/neon-burger/items/milkshake.jpg") }
        ]
      }
    ]
  },

  // 🍕 PIZZARIA
  {
    id: "bella-pizza",
    type: "Pizzaria",
    name: "Bella Pizza",
    banner: withBase("assets/restaurants/bella-pizza/banner.jpg"),
    logo: withBase("assets/restaurants/bella-pizza/logo.jpg"),
    address: "Rua Itália, 450 - Centro",
    phone: "(88) 90000-1111",
    instagram: "@bellapizza",
    categories: [
      {
        id: "pizza-p",
        title: "Pizza P",
        subtitle: "4 fatias / 1 sabor",
        count: 3,
        items: [
          { id: "pz-p-mussarela", name: "Mussarela", price: 24.0, img: withBase("assets/restaurants/bella-pizza/items/mussarela.jpg") },
          { id: "pz-p-calabresa", name: "Calabresa", price: 26.0, img: withBase("assets/restaurants/bella-pizza/items/calabresa.jpg") },
          { id: "pz-p-frango", name: "Frango", price: 27.0, img: withBase("assets/restaurants/bella-pizza/items/frango.jpg") }
        ]
      },
      {
        id: "pizza-m",
        title: "Pizza M",
        subtitle: "6 fatias / até 2 sabores",
        count: 3,
        items: [
          { id: "pz-m-mussarela", name: "Mussarela", price: 32.0, img: withBase("assets/restaurants/bella-pizza/items/mussarela.jpg") },
          { id: "pz-m-calabresa", name: "Calabresa", price: 34.0, img: withBase("assets/restaurants/bella-pizza/items/calabresa.jpg") },
          { id: "pz-m-frango", name: "Frango c/ Catupiry", price: 36.0, img: withBase("assets/restaurants/bella-pizza/items/frango.jpg") }
        ]
      },
      {
        id: "pizza-g",
        title: "Pizza G",
        subtitle: "8 fatias / até 3 sabores",
        count: 3,
        items: [
          { id: "pz-g-marg", name: "Marguerita", price: 44.0, img: withBase("assets/restaurants/bella-pizza/items/marguerita.jpg") },
          { id: "pz-g-quatroqueijos", name: "Quatro Queijos", price: 46.0, img: withBase("assets/restaurants/bella-pizza/items/quatroqueijos.jpg") },
          { id: "pz-g-portuguesa", name: "Portuguesa", price: 46.0, img: withBase("assets/restaurants/bella-pizza/items/portuguesa.jpg") }
        ]
      },
      {
        id: "bebidas",
        title: "Bebidas",
        subtitle: "Sucos e refris",
        count: 2,
        items: [
          { id: "suco-laranja", name: "Suco de Laranja 300ml", price: 8.0, img: withBase("assets/restaurants/bella-pizza/items/suco.jpg") },
          { id: "refri-1l", name: "Refrigerante 1L", price: 10.0, img: withBase("assets/restaurants/bella-pizza/items/refri.jpg") }
        ]
      }
    ]
  },

  // 🍣 SUSHI BAR
  {
    id: "sushinova",
    type: "Sushi Bar",
    name: "Sushinova",
    banner: withBase("assets/restaurants/sushinova/banner.jpg"),
    logo: withBase("assets/restaurants/sushinova/logo.jpg"),
    address: "Rua do Sol, 77 - Fátima",
    phone: "(88) 90000-0000",
    instagram: "@sushinova",
    categories: [
      {
        id: "combos",
        title: "Combos",
        subtitle: "Perfeitos para compartilhar",
        count: 2,
        items: [
          { id: "combo20", name: "Combo 20 peças", price: 42.0, img: withBase("assets/restaurants/sushinova/items/combo20.jpg") },
          { id: "combo40", name: "Combo 40 peças", price: 79.0, img: withBase("assets/restaurants/sushinova/items/combo40.jpg") }
        ]
      },
      {
        id: "temakis",
        title: "Temakis",
        subtitle: "Grandes e saborosos",
        count: 1,
        items: [
          { id: "temaki-salmao", name: "Temaki de Salmão", price: 28.0, img: withBase("assets/restaurants/sushinova/items/temaki.jpg") }
        ]
      }
    ]
  },

  // 🥩 CHURRASCARIA
  {
    id: "fogo-bravo",
    type: "Churrascaria",
    name: "Fogo Bravo",
    banner: withBase("assets/restaurants/fogo-bravo/banner.jpg"),
    logo: withBase("assets/restaurants/fogo-bravo/logo.jpg"),
    address: "Av. Brasil, 900",
    phone: "(88) 98888-7777",
    instagram: "@fogobravo",
    categories: [
      {
        id: "carnes",
        title: "Cortes",
        subtitle: "Picanha, maminha e mais",
        count: 2,
        items: [
          { id: "picanha", name: "Picanha 400g", price: 79.9, img: withBase("assets/restaurants/fogo-bravo/items/picanha.jpg") },
          { id: "fraldinha", name: "Fraldinha 400g", price: 64.9, img: withBase("assets/restaurants/fogo-bravo/items/fraldinha.jpg") }
        ]
      },
      {
        id: "acompanhamentos",
        title: "Acompanhamentos",
        subtitle: "Os queridinhos da casa",
        count: 1,
        items: [
          { id: "arroz", name: "Arroz branco", price: 10.0, img: withBase("assets/restaurants/fogo-bravo/items/arroz.jpg") }
        ]
      }
    ]
  },

  // 🍝 ITALIANO
  {
    id: "mama-mia",
    type: "Italiano",
    name: "Mama Mia Trattoria",
    banner: withBase("assets/restaurants/mama-mia/banner.jpg"),
    logo: withBase("assets/restaurants/mama-mia/logo.jpg"),
    address: "Praça Itália, 12",
    phone: "(88) 92222-3333",
    instagram: "@mamamiatrattoria",
    categories: [
      {
        id: "massas",
        title: "Massas",
        subtitle: "Frescas e artesanais",
        count: 2,
        items: [
          { id: "fettuccine", name: "Fettuccine Alfredo", price: 44.0, img: withBase("assets/restaurants/mama-mia/items/fettuccine.jpg") },
          { id: "lasanha", name: "Lasanha Bolonhesa", price: 49.0, img: withBase("assets/restaurants/mama-mia/items/lasanha.jpg") }
        ]
      },
      {
        id: "vinhos",
        title: "Vinhos",
        subtitle: "Seleção especial",
        count: 1,
        items: [
          { id: "chianti", name: "Chianti", price: 79.0, img: withBase("assets/restaurants/mama-mia/items/chianti.jpg") }
        ]
      }
    ]
  },

  // 🥐 PADARIA
  {
    id: "pao-quente",
    type: "Padaria",
    name: "Pão Quente",
    banner: withBase("assets/restaurants/pao-quente/banner.jpg"),
    logo: withBase("assets/restaurants/pao-quente/logo.jpg"),
    address: "Rua das Flores, 50",
    phone: "(88) 95555-1212",
    instagram: "@paoquente",
    categories: [
      {
        id: "salgados",
        title: "Salgados",
        subtitle: "Assados na hora",
        count: 1,
        items: [
          { id: "coxinha", name: "Coxinha de frango", price: 6.0, img: withBase("assets/restaurants/pao-quente/items/coxinha.jpg") }
        ]
      },
      {
        id: "cafes",
        title: "Cafés",
        subtitle: "Bebidas quentinhas",
        count: 1,
        items: [
          { id: "cafe-expresso", name: "Café Expresso", price: 5.0, img: withBase("assets/restaurants/pao-quente/items/cafe.jpg") }
        ]
      }
    ]
  },

  // 🍨 SORVETERIA
  {
    id: "gelato-art",
    type: "Sorveteria",
    name: "Gelato Art",
    banner: withBase("assets/restaurants/gelato-art/banner.jpg"),
    logo: withBase("assets/restaurants/gelato-art/logo.jpg"),
    address: "Av. Praia, 300",
    phone: "(88) 96666-8888",
    instagram: "@gelatoart",
    categories: [
      {
        id: "gelatos",
        title: "Gelatos",
        subtitle: "Sabores artesanais",
        count: 2,
        items: [
          { id: "pistache", name: "Pistache", price: 14.0, img: withBase("assets/restaurants/gelato-art/items/pistache.jpg") },
          { id: "chocolate", name: "Chocolate 70%", price: 14.0, img: withBase("assets/restaurants/gelato-art/items/chocolate.jpg") }
        ]
      }
    ]
  }
];
