// ✅ Detecta automaticamente o base path (mesmo no GitHub Pages)
const withBase = (path) => {
  const base = window.location.pathname.includes("/cardapio_online/")
    ? "/cardapio_online/"
    : "/";
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
  }
];
