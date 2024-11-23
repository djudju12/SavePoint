import { Injectable } from "@angular/core";

export class Produto {
  constructor(
    public id: number,
    public preco: number,
    public nome: string,
    public categorias: string[],
    public img: string,
    public rating: number
  ) { }
}

export interface Page<T> {
  items: T[];
  totalItems: number;
  pageSize: number;
  page: number;
}

@Injectable({ providedIn: 'root' })
export class ProdutoService {

  categories(): Category[] {
    return MOST_POPULAR_CATEGORIES;
  }

  query(page: number = 0, pageSize: number = 10, categories: string[] | undefined = [], nome: string = ""): Page<Produto> {
    let games = categories && categories.length > 0 ? this.filterCategories(categories, PRODUTOS) : PRODUTOS;
    if (nome !== "") {
        games = games.filter(game => game.nome.toLocaleLowerCase().startsWith(nome));
    }

    return {
      items: games.slice(page*pageSize, (page + 1)*pageSize),
      page: page,
      pageSize: pageSize,
      totalItems: games.length
    }
  }

  private filterCategories(categories: string[], games: Produto[]) {
    return games.filter(game => {
      for (let category of categories) {
        if (category !== "" && !game.categorias.includes(category)) {
            return false;
        }
      }

      return true;
    });
  }
}

export interface Category {
    color: string;
    name: string
}

const MOST_POPULAR_CATEGORIES: Category[] = [
    {
        color: "sp-button-orange",
        name: "Ação"
    },
    {
        color: "sp-button-blue",
        name: "Indie"
    },
    {
        color: "sp-button-purple",
        name: "Aventura"
    },
    {
        color: "sp-button-red",
        name: "Simulação"
    },
    {
        color: "sp-button-orange",
        name: "RPG"
    },
    {
        color: "sp-button-yellow",
        name: "Estratégia"
    },
    {
        color: "sp-button-purple",
        name: "MMO"
    },
    {
        color: "sp-button-green",
        name: "Esportes"
    },
    {
        color: "sp-button-blue",
        name: "Casual"
    },
    {
        color: "sp-button-yellow",
        name: "Corrida"
    },
];

const PRODUTOS = [
    {
        "id": 1,
        "nome": "Far Cry\u00ae 5",
        "preco": 59.99,
        "img": "out/1.jpg",
        "rating": 0.7991676329960447,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 2,
        "nome": "Forza Horizon 4",
        "preco": 59.99,
        "img": "out/2.jpg",
        "rating": 0.8903250650275368,
        "categorias": [
            "Corrida"
        ]
    },
    {
        "id": 3,
        "nome": "Oxygen Not Included",
        "preco": 24.99,
        "img": "out/3.jpg",
        "rating": 0.9649192234275339,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 4,
        "nome": "DEVOUR",
        "preco": 3.99,
        "img": "out/4.jpg",
        "rating": 0.9185755150009979,
        "categorias": [
            "Indie"
        ]
    },
    {
        "id": 5,
        "nome": "Mafia: Definitive Edition",
        "preco": 39.99,
        "img": "out/5.jpg",
        "rating": 0.8675746823852581,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 6,
        "nome": "American Truck Simulator",
        "preco": 19.99,
        "img": "out/6.jpg",
        "rating": 0.964393799594021,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 7,
        "nome": "Fallout: New Vegas",
        "preco": 9.99,
        "img": "out/7.jpg",
        "rating": 0.9646942284688995,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG"
        ]
    },
    {
        "id": 8,
        "nome": "Car Mechanic Simulator 2021",
        "preco": 24.99,
        "img": "out/8.jpg",
        "rating": 0.9566162040930755,
        "categorias": [
            "Corrida",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 9,
        "nome": "Middle-earth\u2122: Shadow of War\u2122",
        "preco": 49.99,
        "img": "out/9.jpg",
        "rating": 0.8723811000025834,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 10,
        "nome": "Garry's Mod",
        "preco": 9.99,
        "img": "out/10.jpg",
        "rating": 0.9659309550937945,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 11,
        "nome": "SCUM",
        "preco": 34.99,
        "img": "out/11.jpg",
        "rating": 0.7450837483634989,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "MMO",
            "Early Access"
        ]
    },
    {
        "id": 12,
        "nome": "NARAKA: BLADEPOINT",
        "preco": 19.99,
        "img": "out/12.jpg",
        "rating": 0.782826872314165,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "MMO"
        ]
    },
    {
        "id": 13,
        "nome": "Sekiro\u2122: Shadows Die Twice - GOTY Edition",
        "preco": 59.99,
        "img": "out/13.jpg",
        "rating": 0.950544649618454,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 14,
        "nome": "Ori and the Will of the Wisps",
        "preco": 29.99,
        "img": "out/14.jpg",
        "rating": 0.9647672219922352,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 15,
        "nome": "Insurgency: Sandstorm",
        "preco": 14.99,
        "img": "out/15.jpg",
        "rating": 0.8506593577080209,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 16,
        "nome": "FINAL FANTASY X/X-2 HD Remaster",
        "preco": 29.99,
        "img": "out/16.jpg",
        "rating": 0.9080467722964091,
        "categorias": [
            "RPG"
        ]
    },
    {
        "id": 17,
        "nome": "Motorsport Manager",
        "preco": 19.99,
        "img": "out/17.jpg",
        "rating": 0.9165589173347125,
        "categorias": [
            "Corrida",
            "Simula\u00e7\u00e3o",
            "Esportes",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 18,
        "nome": "DRAGON BALL Z: KAKAROT",
        "preco": 59.99,
        "img": "out/18.jpg",
        "rating": 0.9312396195077759,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG"
        ]
    },
    {
        "id": 19,
        "nome": "Avorion",
        "preco": 24.99,
        "img": "out/19.jpg",
        "rating": 0.9044555860372718,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 20,
        "nome": "Blade and Sorcery",
        "preco": 19.99,
        "img": "out/20.jpg",
        "rating": 0.964989854326297,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 21,
        "nome": "Workers & Resources: Soviet Republic",
        "preco": 34.99,
        "img": "out/21.jpg",
        "rating": 0.9056603773584906,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 22,
        "nome": "\u9b3c\u8c37\u516b\u8352 Tale of Immortal",
        "preco": 19.99,
        "img": "out/22.jpg",
        "rating": 0.5041211222464063,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 23,
        "nome": "Geometry Dash",
        "preco": 3.99,
        "img": "out/23.jpg",
        "rating": 0.936523247103732,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie"
        ]
    },
    {
        "id": 24,
        "nome": "Foxhole",
        "preco": 29.99,
        "img": "out/24.jpg",
        "rating": 0.8359300200191487,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "MMO",
            "RPG",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 25,
        "nome": "Train Simulator Classic",
        "preco": 24.99,
        "img": "out/25.jpg",
        "rating": 0.6895566295440219,
        "categorias": [
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 26,
        "nome": "Cuphead",
        "preco": 19.99,
        "img": "out/26.jpg",
        "rating": 0.9653827226770456,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie"
        ]
    },
    {
        "id": 27,
        "nome": "Cookie Clicker",
        "preco": 4.99,
        "img": "out/27.jpg",
        "rating": 0.9746389471232239,
        "categorias": [
            "Casual",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 28,
        "nome": "Richman10",
        "preco": 13.99,
        "img": "out/28.jpg",
        "rating": 0.5222682119205299,
        "categorias": [
            "Casual",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 29,
        "nome": "FINAL FANTASY VII REMAKE INTERGRADE",
        "preco": 69.99,
        "img": "out/29.jpg",
        "rating": 0.8934652180963191,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 30,
        "nome": "Planet Zoo",
        "preco": 44.99,
        "img": "out/30.jpg",
        "rating": 0.902243207309174,
        "categorias": [
            "Casual",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 31,
        "nome": "ATLAS",
        "preco": 29.99,
        "img": "out/31.jpg",
        "rating": 0.47423138659093717,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "MMO",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 32,
        "nome": "My Summer Car",
        "preco": 14.99,
        "img": "out/32.jpg",
        "rating": 0.9376943452723713,
        "categorias": [
            "Indie",
            "Corrida",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 33,
        "nome": "BATTLETECH",
        "preco": 39.99,
        "img": "out/33.jpg",
        "rating": 0.826318999695029,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 34,
        "nome": "Library Of Ruina",
        "preco": 29.99,
        "img": "out/34.jpg",
        "rating": 0.930086519676249,
        "categorias": [
            "Indie",
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 35,
        "nome": "Beasts of Bermuda",
        "preco": 19.99,
        "img": "out/35.jpg",
        "rating": 0.7297441364605544,
        "categorias": [
            "Aventura",
            "Indie",
            "MMO",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 36,
        "nome": "DRAGON QUEST\u00ae XI S: Echoes of an Elusive Age\u2122 - Definitive Edition",
        "preco": 39.99,
        "img": "out/36.jpg",
        "rating": 0.9455026455026455,
        "categorias": [
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 37,
        "nome": "Skul: The Hero Slayer",
        "preco": 19.99,
        "img": "out/37.jpg",
        "rating": 0.9328810831009802,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie"
        ]
    },
    {
        "id": 38,
        "nome": "DRAGON BALL FighterZ",
        "preco": 59.99,
        "img": "out/38.jpg",
        "rating": 0.8993619544145602,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 39,
        "nome": "Persona 4 Golden",
        "preco": 19.99,
        "img": "out/39.jpg",
        "rating": 0.9718262351541834,
        "categorias": [
            "RPG"
        ]
    },
    {
        "id": 40,
        "nome": "Age of Mythology: Extended Edition",
        "preco": 29.99,
        "img": "out/40.jpg",
        "rating": 0.9190299085696575,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 41,
        "nome": "Green Hell",
        "preco": 24.99,
        "img": "out/41.jpg",
        "rating": 0.8707163156135072,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 42,
        "nome": "ARK: Survival Evolved",
        "preco": 29.99,
        "img": "out/42.jpg",
        "rating": 0.8238325230068467,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "MMO",
            "RPG"
        ]
    },
    {
        "id": 43,
        "nome": "WARRIORS OROCHI 3 Ultimate Definitive Edition",
        "preco": 39.99,
        "img": "out/43.jpg",
        "rating": 0.8790035587188612,
        "categorias": [
            "A\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 44,
        "nome": "Lobotomy Corporation | Monster Management Simulation",
        "preco": 24.99,
        "img": "out/44.jpg",
        "rating": 0.9406732752981433,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 45,
        "nome": "Age of Empires II (2013)",
        "preco": 19.99,
        "img": "out/45.jpg",
        "rating": 0.9566637768802994,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 46,
        "nome": "SPORE\u2122",
        "preco": 19.99,
        "img": "out/46.jpg",
        "rating": 0.9195468171398342,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Casual",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 47,
        "nome": "Barotrauma",
        "preco": 29.99,
        "img": "out/47.jpg",
        "rating": 0.9239583333333333,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 48,
        "nome": "Total War: ATTILA",
        "preco": 44.99,
        "img": "out/48.jpg",
        "rating": 0.8070815968036372,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 49,
        "nome": "STAR WARS\u2122 Empire at War - Gold Pack",
        "preco": 19.99,
        "img": "out/49.jpg",
        "rating": 0.9743849949259894,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 50,
        "nome": "PGA TOUR 2K21",
        "preco": 14.99,
        "img": "out/50.jpg",
        "rating": 0.8358831710709318,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 51,
        "nome": "New World",
        "preco": 39.99,
        "img": "out/51.jpg",
        "rating": 0.6770302516454413,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "MMO",
            "RPG"
        ]
    },
    {
        "id": 52,
        "nome": "Resident Evil Village",
        "preco": 39.99,
        "img": "out/52.jpg",
        "rating": 0.9591934709553529,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 53,
        "nome": "Total War: NAPOLEON \u2013 Definitive Edition",
        "preco": 24.99,
        "img": "out/53.jpg",
        "rating": 0.918832697034674,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 54,
        "nome": "Rocksmith\u00ae 2014 Edition - Remastered",
        "preco": 29.99,
        "img": "out/54.jpg",
        "rating": 0.9189050645888867,
        "categorias": [
            "Casual",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 55,
        "nome": "Dinkum",
        "preco": 19.99,
        "img": "out/55.jpg",
        "rating": 0.9489616332277367,
        "categorias": [
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 56,
        "nome": "Ready or Not",
        "preco": 39.99,
        "img": "out/56.jpg",
        "rating": 0.9254663543794953,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "Early Access"
        ]
    },
    {
        "id": 57,
        "nome": "The Sims\u2122 4",
        "preco": 19.99,
        "img": "out/57.jpg",
        "rating": 0.8748382543230209,
        "categorias": [
            "Casual",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 58,
        "nome": "Stronghold Crusader HD",
        "preco": 9.99,
        "img": "out/58.jpg",
        "rating": 0.9742173112338858,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 59,
        "nome": "Cyberpunk 2077",
        "preco": 59.99,
        "img": "out/59.jpg",
        "rating": 0.7508953770169949,
        "categorias": [
            "RPG"
        ]
    },
    {
        "id": 60,
        "nome": "Detroit: Become Human",
        "preco": 39.99,
        "img": "out/60.jpg",
        "rating": 0.9269397293527292,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 61,
        "nome": "Tom Clancy's Rainbow Six\u00ae Siege",
        "preco": 19.99,
        "img": "out/61.jpg",
        "rating": 0.8702783588756272,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 62,
        "nome": "Mafia III: Definitive Edition",
        "preco": 29.99,
        "img": "out/62.jpg",
        "rating": 0.560953488372093,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 63,
        "nome": "The Binding of Isaac: Rebirth",
        "preco": 14.99,
        "img": "out/63.jpg",
        "rating": 0.9769211704159437,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 64,
        "nome": "Wobbly Life",
        "preco": 13.99,
        "img": "out/64.jpg",
        "rating": 0.9685623003194889,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Casual",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 65,
        "nome": "FIFA 22",
        "preco": 59.99,
        "img": "out/65.jpg",
        "rating": 0.7956248780543791,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 66,
        "nome": "Clanfolk",
        "preco": 19.99,
        "img": "out/66.jpg",
        "rating": 0.8890977443609023,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 67,
        "nome": "DOOM",
        "preco": 19.99,
        "img": "out/67.jpg",
        "rating": 0.9526498930939277,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 68,
        "nome": "Squad",
        "preco": 49.99,
        "img": "out/68.jpg",
        "rating": 0.8793525179856115,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 69,
        "nome": "Microsoft Flight Simulator Game of the Year Edition",
        "preco": 59.99,
        "img": "out/69.jpg",
        "rating": 0.7612418317534932,
        "categorias": [
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 70,
        "nome": "METAL GEAR SOLID V: THE PHANTOM PAIN",
        "preco": 19.99,
        "img": "out/70.jpg",
        "rating": 0.9085754415168934,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 71,
        "nome": "LEGO\u00ae Star Wars\u2122: The Skywalker Saga",
        "preco": 49.99,
        "img": "out/71.jpg",
        "rating": 0.9232983113145393,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 72,
        "nome": "Mortal Online 2",
        "preco": 26.79,
        "img": "out/72.jpg",
        "rating": 0.6031464095407257,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "MMO",
            "RPG"
        ]
    },
    {
        "id": 73,
        "nome": "No Man's Sky",
        "preco": 29.99,
        "img": "out/73.jpg",
        "rating": 0.7610099750101508,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 74,
        "nome": "Jurassic World Evolution 2",
        "preco": 59.99,
        "img": "out/74.jpg",
        "rating": 0.8278282716323062,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 75,
        "nome": "Battlefield V",
        "preco": 14.99,
        "img": "out/75.jpg",
        "rating": 0.7069322627662566,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 76,
        "nome": "BeamNG.drive",
        "preco": 24.99,
        "img": "out/76.jpg",
        "rating": 0.9680817885152251,
        "categorias": [
            "Corrida",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 77,
        "nome": "Ravenfield",
        "preco": 14.99,
        "img": "out/77.jpg",
        "rating": 0.9705373978629792,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "Early Access"
        ]
    },
    {
        "id": 78,
        "nome": "Europa Universalis IV",
        "preco": 39.99,
        "img": "out/78.jpg",
        "rating": 0.864486675079801,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 79,
        "nome": "OUTRIDERS",
        "preco": 39.99,
        "img": "out/79.jpg",
        "rating": 0.6550899249170595,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 80,
        "nome": "NBA 2K22",
        "preco": 59.99,
        "img": "out/80.jpg",
        "rating": 0.5664630421502749,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 81,
        "nome": "MultiVersus",
        "preco": 39.99,
        "img": "out/81.jpg",
        "rating": 0.9194845460711172,
        "categorias": [
            "A\u00e7\u00e3o",
            "Gr\u00e1tis"
        ]
    },
    {
        "id": 82,
        "nome": "The Elder Scrolls V: Skyrim",
        "preco": 19.99,
        "img": "out/82.jpg",
        "rating": 0.9482696880050843,
        "categorias": [
            "RPG"
        ]
    },
    {
        "id": 83,
        "nome": "Medieval Dynasty",
        "preco": 34.99,
        "img": "out/83.jpg",
        "rating": 0.9065331968300914,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 84,
        "nome": "Scrap Mechanic",
        "preco": 19.99,
        "img": "out/84.jpg",
        "rating": 0.9280679377013964,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 85,
        "nome": "Stray",
        "preco": 29.99,
        "img": "out/85.jpg",
        "rating": 0.9773657955476137,
        "categorias": [
            "Aventura",
            "Indie"
        ]
    },
    {
        "id": 86,
        "nome": "My Time at Sandrock",
        "preco": 24.99,
        "img": "out/86.jpg",
        "rating": 0.8678812741312741,
        "categorias": [
            "Aventura",
            "Casual",
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 87,
        "nome": "F1\u00ae 2021",
        "preco": 59.99,
        "img": "out/87.jpg",
        "rating": 0.8529921683505709,
        "categorias": [
            "Corrida",
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 88,
        "nome": "Sid Meier's Civilization\u00ae V",
        "preco": 29.99,
        "img": "out/88.jpg",
        "rating": 0.9614478186944451,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 89,
        "nome": "State of Decay 2: Juggernaut Edition",
        "preco": 29.99,
        "img": "out/89.jpg",
        "rating": 0.8119704837387264,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 90,
        "nome": "Forza Horizon 5",
        "preco": 59.99,
        "img": "out/90.jpg",
        "rating": 0.8731237297681138,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Corrida",
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 91,
        "nome": "Dying Light",
        "preco": 29.99,
        "img": "out/91.jpg",
        "rating": 0.950255358627999,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG"
        ]
    },
    {
        "id": 92,
        "nome": "Titan Quest Anniversary Edition",
        "preco": 19.99,
        "img": "out/92.jpg",
        "rating": 0.9091940573697833,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG"
        ]
    },
    {
        "id": 93,
        "nome": "\u68a6\u6c5f\u6e56",
        "preco": 19.99,
        "img": "out/93.jpg",
        "rating": 0.5072463768115942,
        "categorias": [
            "Casual",
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 94,
        "nome": "Necrosmith",
        "preco": 2.99,
        "img": "out/94.jpg",
        "rating": 0.8570544554455446,
        "categorias": [
            "Aventura",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 95,
        "nome": "DRAGON BALL XENOVERSE 2",
        "preco": 49.99,
        "img": "out/95.jpg",
        "rating": 0.8844017282426594,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Casual",
            "MMO"
        ]
    },
    {
        "id": 96,
        "nome": "Need for Speed\u2122 Heat",
        "preco": 69.99,
        "img": "out/96.jpg",
        "rating": 0.8338037824105811,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Corrida",
            "Esportes"
        ]
    },
    {
        "id": 97,
        "nome": "DiRT Rally 2.0",
        "preco": 4.99,
        "img": "out/97.jpg",
        "rating": 0.8579434015130288,
        "categorias": [
            "Corrida",
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 98,
        "nome": "Metro Exodus",
        "preco": 29.99,
        "img": "out/98.jpg",
        "rating": 0.8877328785095775,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 99,
        "nome": "\u61d2\u4eba\u4fee\u4ed9\u4f202",
        "preco": 7.99,
        "img": "out/99.jpg",
        "rating": 0.8223844282238443,
        "categorias": [
            "Casual",
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 100,
        "nome": "Ultimate Admiral: Dreadnoughts",
        "preco": 34.99,
        "img": "out/100.jpg",
        "rating": 0.783288409703504,
        "categorias": [
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 101,
        "nome": "GUILTY GEAR -STRIVE-",
        "preco": 59.99,
        "img": "out/101.jpg",
        "rating": 0.9168116345417855,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 102,
        "nome": "The Forest",
        "preco": 19.99,
        "img": "out/102.jpg",
        "rating": 0.9520671477927459,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 103,
        "nome": "Hell Let Loose",
        "preco": 26.79,
        "img": "out/103.jpg",
        "rating": 0.8511754773347188,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "MMO",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 104,
        "nome": "X4: Foundations",
        "preco": 49.99,
        "img": "out/104.jpg",
        "rating": 0.7591522157996147,
        "categorias": [
            "A\u00e7\u00e3o",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 105,
        "nome": "FTL: Faster Than Light",
        "preco": 2.49,
        "img": "out/105.jpg",
        "rating": 0.9586427933064193,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 106,
        "nome": "Halo: The Master Chief Collection",
        "preco": 39.99,
        "img": "out/106.jpg",
        "rating": 0.9276835863005826,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 107,
        "nome": "Total War\u2122: ROME II - Emperor Edition",
        "preco": 59.99,
        "img": "out/107.jpg",
        "rating": 0.8099604678648572,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 108,
        "nome": "Brick Rigs",
        "preco": 14.99,
        "img": "out/108.jpg",
        "rating": 0.9270247102232493,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 109,
        "nome": "OVR Toolkit",
        "preco": 11.99,
        "img": "out/109.jpg",
        "rating": 0.8898172323759791,
        "categorias": [
            "Utilidades"
        ]
    },
    {
        "id": 110,
        "nome": "Call of Duty\u00ae: Black Ops III",
        "preco": 59.99,
        "img": "out/110.jpg",
        "rating": 0.8034861885580769,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 111,
        "nome": "The Long Dark",
        "preco": 34.99,
        "img": "out/111.jpg",
        "rating": 0.914912941384963,
        "categorias": [
            "Aventura",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 112,
        "nome": "Melvor Idle",
        "preco": 9.99,
        "img": "out/112.jpg",
        "rating": 0.9342126689464256,
        "categorias": [
            "Aventura",
            "Casual",
            "Indie",
            "RPG"
        ]
    },
    {
        "id": 113,
        "nome": "Red Dead Online",
        "preco": 9.99,
        "img": "out/113.jpg",
        "rating": 0.8437466463480071,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 114,
        "nome": "ICARUS",
        "preco": 34.99,
        "img": "out/114.jpg",
        "rating": 0.6513734899884164,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 115,
        "nome": "Assetto Corsa",
        "preco": 19.99,
        "img": "out/115.jpg",
        "rating": 0.9186072579515202,
        "categorias": [
            "Indie",
            "Corrida",
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 116,
        "nome": "Aseprite",
        "preco": 19.99,
        "img": "out/116.jpg",
        "rating": 0.9937821032711543,
        "categorias": [
            "Anima\u00e7\u00e3o",
            "Design"
        ]
    },
    {
        "id": 117,
        "nome": "Inscryption",
        "preco": 19.99,
        "img": "out/117.jpg",
        "rating": 0.971391329142283,
        "categorias": [
            "Aventura",
            "Indie",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 118,
        "nome": "Age of Empires III: Definitive Edition",
        "preco": 19.99,
        "img": "out/118.jpg",
        "rating": 0.7954913170100313,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 119,
        "nome": "Sword and Fairy Inn 2",
        "preco": 19.99,
        "img": "out/119.jpg",
        "rating": 0.45645645645645644,
        "categorias": [
            "Casual",
            "RPG",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 120,
        "nome": "Space Engineers",
        "preco": 19.99,
        "img": "out/120.jpg",
        "rating": 0.8806032823599398,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 121,
        "nome": "Empyrion - Galactic Survival",
        "preco": 19.99,
        "img": "out/121.jpg",
        "rating": 0.808290711398834,
        "categorias": [
            "Aventura",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 122,
        "nome": "Microsoft Flight Simulator X: Steam Edition",
        "preco": 24.99,
        "img": "out/122.jpg",
        "rating": 0.8586627492877493,
        "categorias": [
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 123,
        "nome": "Mount & Blade II: Bannerlord",
        "preco": 49.99,
        "img": "out/123.jpg",
        "rating": 0.8767904412149367,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 124,
        "nome": "Transport Fever 2",
        "preco": 39.99,
        "img": "out/124.jpg",
        "rating": 0.8836994752926253,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 125,
        "nome": "Soundpad",
        "preco": 4.99,
        "img": "out/125.jpg",
        "rating": 0.9665219941348974,
        "categorias": [
            "Utilidades"
        ]
    },
    {
        "id": 126,
        "nome": "The Riftbreaker",
        "preco": 29.99,
        "img": "out/126.jpg",
        "rating": 0.919015981325193,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 127,
        "nome": "Raft",
        "preco": 19.99,
        "img": "out/127.jpg",
        "rating": 0.9321317493499209,
        "categorias": [
            "Aventura",
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 128,
        "nome": "Teardown",
        "preco": 19.99,
        "img": "out/128.jpg",
        "rating": 0.9584468813359786,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 129,
        "nome": "Yakuza: Like a Dragon",
        "preco": 59.99,
        "img": "out/129.jpg",
        "rating": 0.9630974346765073,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 130,
        "nome": "Pillars of Eternity II: Deadfire",
        "preco": 39.99,
        "img": "out/130.jpg",
        "rating": 0.874806800618238,
        "categorias": [
            "RPG"
        ]
    },
    {
        "id": 131,
        "nome": "F1\u00ae 22",
        "preco": 59.99,
        "img": "out/131.jpg",
        "rating": 0.6627938764352105,
        "categorias": [
            "Corrida",
            "Esportes"
        ]
    },
    {
        "id": 132,
        "nome": "Kerbal Space Program",
        "preco": 9.99,
        "img": "out/132.jpg",
        "rating": 0.9492270992366412,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 133,
        "nome": "RPG Maker MV",
        "preco": 15.99,
        "img": "out/133.jpg",
        "rating": 0.9176041831722389,
        "categorias": [
            "Design",
            "Web"
        ]
    },
    {
        "id": 134,
        "nome": "Borderlands 3",
        "preco": 59.99,
        "img": "out/134.jpg",
        "rating": 0.8433191300230924,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG"
        ]
    },
    {
        "id": 135,
        "nome": "CarX Drift Racing Online",
        "preco": 14.99,
        "img": "out/135.jpg",
        "rating": 0.9530357066128131,
        "categorias": [
            "MMO",
            "Corrida",
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 136,
        "nome": "Elite Dangerous",
        "preco": 29.99,
        "img": "out/136.jpg",
        "rating": 0.7744945191738274,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "MMO",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 137,
        "nome": "OMSI 2: Steam Edition",
        "preco": 29.99,
        "img": "out/137.jpg",
        "rating": 0.840121171322787,
        "categorias": [
            "Casual",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 138,
        "nome": "\u518d\u5237\u4e00\u628a PlayAgain",
        "preco": 6.29,
        "img": "out/138.jpg",
        "rating": 0.7473637961335676,
        "categorias": [
            "Aventura",
            "Indie",
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 139,
        "nome": "DEATH STRANDING DIRECTOR'S CUT",
        "preco": 39.99,
        "img": "out/139.jpg",
        "rating": 0.9167604049493814,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 140,
        "nome": "Street Fighter V",
        "preco": 19.99,
        "img": "out/140.jpg",
        "rating": 0.6496034038976729,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 141,
        "nome": "Into the Breach",
        "preco": 10.04,
        "img": "out/141.jpg",
        "rating": 0.9447322970639033,
        "categorias": [
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 142,
        "nome": "Resident Evil 6",
        "preco": 7.49,
        "img": "out/142.jpg",
        "rating": 0.8015409208836709,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 143,
        "nome": "Men of War: Assault Squad 2",
        "preco": 29.99,
        "img": "out/143.jpg",
        "rating": 0.9080921680302987,
        "categorias": [
            "A\u00e7\u00e3o",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 144,
        "nome": "World War Z: Aftermath",
        "preco": 39.99,
        "img": "out/144.jpg",
        "rating": 0.8382917466410749,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 145,
        "nome": "Pathfinder: Wrath of the Righteous",
        "preco": 49.99,
        "img": "out/145.jpg",
        "rating": 0.8471526986172374,
        "categorias": [
            "Aventura",
            "Indie",
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 146,
        "nome": "Dragon Age: Origins - Ultimate Edition",
        "preco": 29.99,
        "img": "out/146.jpg",
        "rating": 0.90653382506743,
        "categorias": [
            "RPG"
        ]
    },
    {
        "id": 147,
        "nome": "Chivalry 2",
        "preco": 39.99,
        "img": "out/147.jpg",
        "rating": 0.8193803559657218,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 148,
        "nome": "Counter-Strike: Source",
        "preco": 9.99,
        "img": "out/148.jpg",
        "rating": 0.9619356721400152,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 149,
        "nome": "People Playground",
        "preco": 9.99,
        "img": "out/149.jpg",
        "rating": 0.9888830974848883,
        "categorias": [
            "A\u00e7\u00e3o",
            "Casual",
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 150,
        "nome": "Divinity: Original Sin 2 - Definitive Edition",
        "preco": 44.99,
        "img": "out/150.jpg",
        "rating": 0.9603606288652112,
        "categorias": [
            "Aventura",
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 151,
        "nome": "It Takes Two",
        "preco": 39.99,
        "img": "out/151.jpg",
        "rating": 0.9603196443691787,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 152,
        "nome": "TEKKEN 7",
        "preco": 39.99,
        "img": "out/152.jpg",
        "rating": 0.821934509986066,
        "categorias": [
            "A\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 153,
        "nome": "Tropico 6",
        "preco": 39.99,
        "img": "out/153.jpg",
        "rating": 0.8692549645556547,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 154,
        "nome": "Amazing Cultivation Simulator",
        "preco": 24.99,
        "img": "out/154.jpg",
        "rating": 0.8801931865392605,
        "categorias": [
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 155,
        "nome": "STAR WARS Jedi: Fallen Order\u2122",
        "preco": 14.99,
        "img": "out/155.jpg",
        "rating": 0.9004648591087812,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 156,
        "nome": "Pavlov VR",
        "preco": 24.99,
        "img": "out/156.jpg",
        "rating": 0.9449987831589195,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "Early Access"
        ]
    },
    {
        "id": 157,
        "nome": "Total War: WARHAMMER II",
        "preco": 59.99,
        "img": "out/157.jpg",
        "rating": 0.9293588126544223,
        "categorias": [
            "A\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 158,
        "nome": "Total War: EMPIRE \u2013 Definitive Edition",
        "preco": 24.99,
        "img": "out/158.jpg",
        "rating": 0.9087332256024732,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 159,
        "nome": "Neverwinter Nights: Enhanced Edition",
        "preco": 19.99,
        "img": "out/159.jpg",
        "rating": 0.8889433284337743,
        "categorias": [
            "RPG"
        ]
    },
    {
        "id": 160,
        "nome": "NBA 2K21",
        "preco": 59.99,
        "img": "out/160.jpg",
        "rating": 0.4154547092589256,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 161,
        "nome": "Warhammer: Vermintide 2",
        "preco": 29.99,
        "img": "out/161.jpg",
        "rating": 0.8347774937218615,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie"
        ]
    },
    {
        "id": 162,
        "nome": "Hunt: Showdown",
        "preco": 19.99,
        "img": "out/162.jpg",
        "rating": 0.8296489722833589,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 163,
        "nome": "Starbound",
        "preco": 14.99,
        "img": "out/163.jpg",
        "rating": 0.9279408771751297,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Casual",
            "Indie",
            "RPG"
        ]
    },
    {
        "id": 164,
        "nome": "Stormworks: Build and Rescue",
        "preco": 24.99,
        "img": "out/164.jpg",
        "rating": 0.9211494412438398,
        "categorias": [
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 165,
        "nome": "Hades",
        "preco": 24.99,
        "img": "out/165.jpg",
        "rating": 0.9862458794473551,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "RPG"
        ]
    },
    {
        "id": 166,
        "nome": "Risk of Rain 2",
        "preco": 24.99,
        "img": "out/166.jpg",
        "rating": 0.9643705002858499,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie"
        ]
    },
    {
        "id": 167,
        "nome": "Command & Conquer\u2122 Remastered Collection",
        "preco": 19.99,
        "img": "out/167.jpg",
        "rating": 0.9075886913618921,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 168,
        "nome": "WWE 2K22",
        "preco": 38.99,
        "img": "out/168.jpg",
        "rating": 0.7196277495769882,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 169,
        "nome": "Arma 3",
        "preco": 29.99,
        "img": "out/169.jpg",
        "rating": 0.9036557300438229,
        "categorias": [
            "A\u00e7\u00e3o",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 170,
        "nome": "\u89c5\u957f\u751f",
        "preco": 11.99,
        "img": "out/170.jpg",
        "rating": 0.9114663387642177,
        "categorias": [
            "Indie",
            "RPG",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 171,
        "nome": "ROMANCE OF THE THREE KINGDOMS XIV",
        "preco": 59.99,
        "img": "out/171.jpg",
        "rating": 0.586747387626472,
        "categorias": [
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 172,
        "nome": "Graveyard Keeper",
        "preco": 19.99,
        "img": "out/172.jpg",
        "rating": 0.8589330339357503,
        "categorias": [
            "Aventura",
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 173,
        "nome": "Draw & Guess",
        "preco": 2.99,
        "img": "out/173.jpg",
        "rating": 0.8470450600045286,
        "categorias": [
            "Casual",
            "Indie"
        ]
    },
    {
        "id": 174,
        "nome": "Hardspace: Shipbreaker",
        "preco": 26.24,
        "img": "out/174.jpg",
        "rating": 0.8882876204595997,
        "categorias": [
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 175,
        "nome": "Pillars of Eternity",
        "preco": 29.99,
        "img": "out/175.jpg",
        "rating": 0.8807409529265731,
        "categorias": [
            "RPG"
        ]
    },
    {
        "id": 176,
        "nome": "Satisfactory",
        "preco": 29.99,
        "img": "out/176.jpg",
        "rating": 0.9717827239951133,
        "categorias": [
            "Aventura",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 177,
        "nome": "Crusader Kings III",
        "preco": 49.99,
        "img": "out/177.jpg",
        "rating": 0.930088104581958,
        "categorias": [
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 178,
        "nome": "Wartales",
        "preco": 27.99,
        "img": "out/178.jpg",
        "rating": 0.9086692258477287,
        "categorias": [
            "Aventura",
            "Indie",
            "RPG",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 179,
        "nome": "Portal 2",
        "preco": 9.99,
        "img": "out/179.jpg",
        "rating": 0.9879511687829952,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 180,
        "nome": "The Crew\u2122 2",
        "preco": 49.99,
        "img": "out/180.jpg",
        "rating": 0.8060613044480295,
        "categorias": [
            "A\u00e7\u00e3o",
            "MMO",
            "Corrida"
        ]
    },
    {
        "id": 181,
        "nome": "Sniper Elite 5",
        "preco": 39.99,
        "img": "out/181.jpg",
        "rating": 0.7525569711107124,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 182,
        "nome": "Dread Hunger",
        "preco": 29.99,
        "img": "out/182.jpg",
        "rating": 0.6120965896086061,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie"
        ]
    },
    {
        "id": 183,
        "nome": "Cities: Skylines",
        "preco": 29.99,
        "img": "out/183.jpg",
        "rating": 0.9342088842964893,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 184,
        "nome": "Monster Hunter: World",
        "preco": 29.99,
        "img": "out/184.jpg",
        "rating": 0.8553756442383006,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 185,
        "nome": "Total War: ROME REMASTERED",
        "preco": 29.99,
        "img": "out/185.jpg",
        "rating": 0.7266816704176045,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 186,
        "nome": "Fear Surrounds",
        "preco": 7.99,
        "img": "out/186.jpg",
        "rating": 0.8773245659097915,
        "categorias": [
            "Casual",
            "Indie",
            "RPG"
        ]
    },
    {
        "id": 187,
        "nome": "Deadside",
        "preco": 19.99,
        "img": "out/187.jpg",
        "rating": 0.7868954273736511,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "MMO",
            "Early Access"
        ]
    },
    {
        "id": 188,
        "nome": "Slime Rancher",
        "preco": 19.99,
        "img": "out/188.jpg",
        "rating": 0.9787270803187699,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 189,
        "nome": "FOR HONOR\u2122",
        "preco": 14.99,
        "img": "out/189.jpg",
        "rating": 0.6833540341182733,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 190,
        "nome": "Core Keeper",
        "preco": 12.99,
        "img": "out/190.jpg",
        "rating": 0.903411544551605,
        "categorias": [
            "Aventura",
            "Casual",
            "Indie",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 191,
        "nome": "Bloons TD 6",
        "preco": 9.99,
        "img": "out/191.jpg",
        "rating": 0.9751900236932255,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 192,
        "nome": "Conan Exiles",
        "preco": 15.99,
        "img": "out/192.jpg",
        "rating": 0.791016827738749,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "MMO",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 193,
        "nome": "Dying Light 2 Stay Human",
        "preco": 40.19,
        "img": "out/193.jpg",
        "rating": 0.7848199752254789,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 194,
        "nome": "Tom Clancy's Ghost Recon\u00ae Wildlands",
        "preco": 49.99,
        "img": "out/194.jpg",
        "rating": 0.7883349979437165,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 195,
        "nome": "GTFO",
        "preco": 31.99,
        "img": "out/195.jpg",
        "rating": 0.845948973242066,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 196,
        "nome": "Borderlands 2",
        "preco": 19.99,
        "img": "out/196.jpg",
        "rating": 0.9372489845930431,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG"
        ]
    },
    {
        "id": 197,
        "nome": "Sniper Elite 4",
        "preco": 59.99,
        "img": "out/197.jpg",
        "rating": 0.9058834657586077,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 198,
        "nome": "Hero Siege",
        "preco": 6.99,
        "img": "out/198.jpg",
        "rating": 0.7534209415877992,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "MMO",
            "RPG"
        ]
    },
    {
        "id": 199,
        "nome": "The Outer Worlds",
        "preco": 19.79,
        "img": "out/199.jpg",
        "rating": 0.854107791683488,
        "categorias": [
            "RPG"
        ]
    },
    {
        "id": 200,
        "nome": "XCOM: Enemy Unknown",
        "preco": 7.49,
        "img": "out/200.jpg",
        "rating": 0.9444054752790749,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 201,
        "nome": "ELDEN RING",
        "preco": 59.99,
        "img": "out/201.jpg",
        "rating": 0.8999355531686358,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG"
        ]
    },
    {
        "id": 202,
        "nome": "Days Gone",
        "preco": 49.99,
        "img": "out/202.jpg",
        "rating": 0.9302520568044856,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 203,
        "nome": "Beat Saber",
        "preco": 29.99,
        "img": "out/203.jpg",
        "rating": 0.9600651741371476,
        "categorias": [
            "Indie"
        ]
    },
    {
        "id": 204,
        "nome": "Farm Together",
        "preco": 19.99,
        "img": "out/204.jpg",
        "rating": 0.9414938937801761,
        "categorias": [
            "Casual",
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 205,
        "nome": "Dyson Sphere Program",
        "preco": 19.99,
        "img": "out/205.jpg",
        "rating": 0.9776263522318694,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 206,
        "nome": "This War of Mine",
        "preco": 19.99,
        "img": "out/206.jpg",
        "rating": 0.9288171625158584,
        "categorias": [
            "Aventura",
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 207,
        "nome": "Valheim",
        "preco": 19.99,
        "img": "out/207.jpg",
        "rating": 0.9540459172990623,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 208,
        "nome": "Pummel Party",
        "preco": 14.99,
        "img": "out/208.jpg",
        "rating": 0.8931099084096586,
        "categorias": [
            "A\u00e7\u00e3o",
            "Casual",
            "Indie"
        ]
    },
    {
        "id": 209,
        "nome": "Rogue Legacy 2",
        "preco": 24.99,
        "img": "out/209.jpg",
        "rating": 0.8943356273160402,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "RPG"
        ]
    },
    {
        "id": 210,
        "nome": "Northgard",
        "preco": 29.99,
        "img": "out/210.jpg",
        "rating": 0.8813706886929344,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 211,
        "nome": "Craftopia",
        "preco": 24.99,
        "img": "out/211.jpg",
        "rating": 0.8088369070825211,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 212,
        "nome": "Among Us",
        "preco": 3.99,
        "img": "out/212.jpg",
        "rating": 0.9187737086961708,
        "categorias": [
            "Casual"
        ]
    },
    {
        "id": 213,
        "nome": "Hearts of Iron IV",
        "preco": 39.99,
        "img": "out/213.jpg",
        "rating": 0.9203935411348189,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 214,
        "nome": "Sid Meier's Civilization\u00ae III Complete",
        "preco": 4.99,
        "img": "out/214.jpg",
        "rating": 0.8910211267605633,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 215,
        "nome": "Slay the Spire",
        "preco": 24.99,
        "img": "out/215.jpg",
        "rating": 0.9788649025069638,
        "categorias": [
            "Indie",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 216,
        "nome": "Golf It!",
        "preco": 8.99,
        "img": "out/216.jpg",
        "rating": 0.8944961280598721,
        "categorias": [
            "Casual",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Esportes",
            "Early Access"
        ]
    },
    {
        "id": 217,
        "nome": "20 Minutes Till Dawn",
        "preco": 2.99,
        "img": "out/217.jpg",
        "rating": 0.9306056959486563,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Casual",
            "Indie",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 218,
        "nome": "Fallout 4",
        "preco": 19.99,
        "img": "out/218.jpg",
        "rating": 0.8119467852048996,
        "categorias": [
            "RPG"
        ]
    },
    {
        "id": 219,
        "nome": "Company of Heroes",
        "preco": 19.99,
        "img": "out/219.jpg",
        "rating": 0.9431075697211155,
        "categorias": [
            "A\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 220,
        "nome": "Spiritfarer\u00ae: Farewell Edition",
        "preco": 29.99,
        "img": "out/220.jpg",
        "rating": 0.9585735540264088,
        "categorias": [
            "Aventura",
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 221,
        "nome": "Rust",
        "preco": 39.99,
        "img": "out/221.jpg",
        "rating": 0.8667056693475877,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "MMO",
            "RPG"
        ]
    },
    {
        "id": 222,
        "nome": "ACE COMBAT\u2122 7: SKIES UNKNOWN",
        "preco": 39.99,
        "img": "out/222.jpg",
        "rating": 0.8635591969294361,
        "categorias": [
            "A\u00e7\u00e3o",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 223,
        "nome": "RimWorld",
        "preco": 34.99,
        "img": "out/223.jpg",
        "rating": 0.9829190830244571,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 224,
        "nome": "Batman\u2122: Arkham Knight",
        "preco": 19.99,
        "img": "out/224.jpg",
        "rating": 0.8372904000090576,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 225,
        "nome": "Phasmophobia",
        "preco": 13.99,
        "img": "out/225.jpg",
        "rating": 0.9701428543158626,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "Early Access"
        ]
    },
    {
        "id": 226,
        "nome": "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4",
        "preco": 29.99,
        "img": "out/226.jpg",
        "rating": 0.9079351672515983,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 227,
        "nome": "Subnautica",
        "preco": 29.99,
        "img": "out/227.jpg",
        "rating": 0.9636341712178382,
        "categorias": [
            "Aventura",
            "Indie"
        ]
    },
    {
        "id": 228,
        "nome": "Age of Empires II: Definitive Edition",
        "preco": 19.99,
        "img": "out/228.jpg",
        "rating": 0.9457612885988015,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 229,
        "nome": "The Planet Crafter",
        "preco": 19.99,
        "img": "out/229.jpg",
        "rating": 0.9629596731213359,
        "categorias": [
            "Aventura",
            "Early Access"
        ]
    },
    {
        "id": 230,
        "nome": "Battlefield 1 \u2122",
        "preco": 9.99,
        "img": "out/230.jpg",
        "rating": 0.8606305390839046,
        "categorias": [
            "A\u00e7\u00e3o",
            "MMO"
        ]
    },
    {
        "id": 231,
        "nome": "Dragon Age\u2122 Inquisition",
        "preco": 39.99,
        "img": "out/231.jpg",
        "rating": 0.7516778523489933,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 232,
        "nome": "HUMANKIND\u2122",
        "preco": 49.99,
        "img": "out/232.jpg",
        "rating": 0.6832832628952594,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 233,
        "nome": "Farming Simulator 19",
        "preco": 19.99,
        "img": "out/233.jpg",
        "rating": 0.939755195715925,
        "categorias": [
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 234,
        "nome": "Half-Life 2",
        "preco": 9.99,
        "img": "out/234.jpg",
        "rating": 0.9747560850364588,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 235,
        "nome": "Black Mesa",
        "preco": 19.99,
        "img": "out/235.jpg",
        "rating": 0.9551329350439149,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie"
        ]
    },
    {
        "id": 236,
        "nome": "Out of the Park Baseball 23",
        "preco": 39.99,
        "img": "out/236.jpg",
        "rating": 0.825,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Esportes",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 237,
        "nome": "Total War: WARHAMMER III",
        "preco": 59.99,
        "img": "out/237.jpg",
        "rating": 0.5811625526106245,
        "categorias": [
            "A\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 238,
        "nome": "Supreme Commander: Forged Alliance",
        "preco": 12.99,
        "img": "out/238.jpg",
        "rating": 0.9689980390325894,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 239,
        "nome": "Resident Evil 2",
        "preco": 39.99,
        "img": "out/239.jpg",
        "rating": 0.9713105866194384,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 240,
        "nome": "theHunter: Call of the Wild\u2122",
        "preco": 19.99,
        "img": "out/240.jpg",
        "rating": 0.8717354843862312,
        "categorias": [
            "Aventura",
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 241,
        "nome": "The Escapists 2",
        "preco": 19.99,
        "img": "out/241.jpg",
        "rating": 0.9021885521885522,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 242,
        "nome": "MyDockFinder",
        "preco": 3.99,
        "img": "out/242.jpg",
        "rating": 0.75,
        "categorias": [
            "Utilidades"
        ]
    },
    {
        "id": 243,
        "nome": "Gloomhaven",
        "preco": 34.99,
        "img": "out/243.jpg",
        "rating": 0.8718898385565053,
        "categorias": [
            "Aventura",
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 244,
        "nome": "Assassin's Creed\u00ae Origins",
        "preco": 59.99,
        "img": "out/244.jpg",
        "rating": 0.8655261612286468,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 245,
        "nome": "The Elder Scrolls\u00ae Online",
        "preco": 19.99,
        "img": "out/245.jpg",
        "rating": 0.8205438659642004,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "MMO",
            "RPG"
        ]
    },
    {
        "id": 246,
        "nome": "Battlefield 4\u2122",
        "preco": 9.99,
        "img": "out/246.jpg",
        "rating": 0.8694600586746691,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 247,
        "nome": "DNF Duel",
        "preco": 49.99,
        "img": "out/247.jpg",
        "rating": 0.6824109975326048,
        "categorias": [
            "A\u00e7\u00e3o",
            "Casual"
        ]
    },
    {
        "id": 248,
        "nome": "Darkness Ahead",
        "preco": 0.49,
        "img": "out/248.jpg",
        "rating": 0.6458333333333334,
        "categorias": [
            "Aventura",
            "Indie"
        ]
    },
    {
        "id": 249,
        "nome": "MONSTER HUNTER RISE",
        "preco": 59.99,
        "img": "out/249.jpg",
        "rating": 0.8660522486314185,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 250,
        "nome": "PAYDAY 2",
        "preco": 9.99,
        "img": "out/250.jpg",
        "rating": 0.8927425437092904,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG"
        ]
    },
    {
        "id": 251,
        "nome": "Mirror 2: Project X",
        "preco": 1.19,
        "img": "out/251.jpg",
        "rating": 0.9384846805478585,
        "categorias": [
            "Aventura",
            "Indie",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 252,
        "nome": "Legion TD 2 - Multiplayer Tower Defense",
        "preco": 19.99,
        "img": "out/252.jpg",
        "rating": 0.8564494600169882,
        "categorias": [
            "Casual",
            "Indie",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 253,
        "nome": "Counter-Strike",
        "preco": 9.99,
        "img": "out/253.jpg",
        "rating": 0.9747693124084865,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 254,
        "nome": "Warhammer\u00ae 40,000: Dawn of War\u00ae - Soulstorm",
        "preco": 12.99,
        "img": "out/254.jpg",
        "rating": 0.9545805654256141,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 255,
        "nome": "Left 4 Dead 2",
        "preco": 9.99,
        "img": "out/255.jpg",
        "rating": 0.9745084250882152,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 256,
        "nome": "Devil May Cry 5",
        "preco": 29.99,
        "img": "out/256.jpg",
        "rating": 0.9493084167157151,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 257,
        "nome": "Total War: THREE KINGDOMS",
        "preco": 59.99,
        "img": "out/257.jpg",
        "rating": 0.7070333910679442,
        "categorias": [
            "A\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 258,
        "nome": "Darkest Dungeon\u00ae",
        "preco": 24.99,
        "img": "out/258.jpg",
        "rating": 0.9118129686810763,
        "categorias": [
            "Indie",
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 259,
        "nome": "DARK SOULS\u2122: REMASTERED",
        "preco": 39.99,
        "img": "out/259.jpg",
        "rating": 0.8902376223055984,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 260,
        "nome": "V Rising",
        "preco": 19.99,
        "img": "out/260.jpg",
        "rating": 0.8852309516209931,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "MMO",
            "Early Access"
        ]
    },
    {
        "id": 261,
        "nome": "Dead by Daylight",
        "preco": 7.99,
        "img": "out/261.jpg",
        "rating": 0.8141389004101571,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 262,
        "nome": "Company of Heroes 2",
        "preco": 19.99,
        "img": "out/262.jpg",
        "rating": 0.7843128972988955,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 263,
        "nome": "Stellaris",
        "preco": 39.99,
        "img": "out/263.jpg",
        "rating": 0.879356970028391,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 264,
        "nome": "Kenshi",
        "preco": 29.99,
        "img": "out/264.jpg",
        "rating": 0.9506285074913897,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 265,
        "nome": "Planet Coaster",
        "preco": 11.24,
        "img": "out/265.jpg",
        "rating": 0.9126169332044712,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Casual",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 266,
        "nome": "Yakuza 0",
        "preco": 19.99,
        "img": "out/266.jpg",
        "rating": 0.9506737809627668,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 267,
        "nome": "Black Desert",
        "preco": 9.99,
        "img": "out/267.jpg",
        "rating": 0.7516314054128315,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "MMO",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 268,
        "nome": "DARK SOULS\u2122 II: Scholar of the First Sin",
        "preco": 39.99,
        "img": "out/268.jpg",
        "rating": 0.8486480598387839,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG"
        ]
    },
    {
        "id": 269,
        "nome": "Tabletop Simulator",
        "preco": 19.99,
        "img": "out/269.jpg",
        "rating": 0.9352941176470588,
        "categorias": [
            "Casual",
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 270,
        "nome": "Wargame: Red Dragon",
        "preco": 29.99,
        "img": "out/270.jpg",
        "rating": 0.891499782999566,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 271,
        "nome": "DayZ",
        "preco": 44.99,
        "img": "out/271.jpg",
        "rating": 0.711924610132846,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "MMO"
        ]
    },
    {
        "id": 272,
        "nome": "Total War: MEDIEVAL II \u2013 Definitive Edition",
        "preco": 24.99,
        "img": "out/272.jpg",
        "rating": 0.9584708470847084,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 273,
        "nome": "OMORI",
        "preco": 19.99,
        "img": "out/273.jpg",
        "rating": 0.9824124114796869,
        "categorias": [
            "Aventura",
            "Indie",
            "RPG"
        ]
    },
    {
        "id": 274,
        "nome": "Resident Evil 4",
        "preco": 19.99,
        "img": "out/274.jpg",
        "rating": 0.9116731678977509,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 275,
        "nome": "Red Dead Redemption 2",
        "preco": 29.99,
        "img": "out/275.jpg",
        "rating": 0.8854141397095274,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 276,
        "nome": "Madden NFL 22",
        "preco": 59.99,
        "img": "out/276.jpg",
        "rating": 0.5196125138955058,
        "categorias": [
            "Casual",
            "Simula\u00e7\u00e3o",
            "Esportes",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 277,
        "nome": "Human: Fall Flat",
        "preco": 5.99,
        "img": "out/277.jpg",
        "rating": 0.9464737403646739,
        "categorias": [
            "Aventura",
            "Casual",
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 278,
        "nome": "PowerWash Simulator",
        "preco": 24.99,
        "img": "out/278.jpg",
        "rating": 0.9769857691820447,
        "categorias": [
            "Casual",
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 279,
        "nome": "Rune Factory 5",
        "preco": 59.99,
        "img": "out/279.jpg",
        "rating": 0.8275193798449613,
        "categorias": [
            "Aventura",
            "RPG",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 280,
        "nome": "Solasta: Crown of the Magister",
        "preco": 15.99,
        "img": "out/280.jpg",
        "rating": 0.8921632653061224,
        "categorias": [
            "Aventura",
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 281,
        "nome": "Nioh 2 \u2013 The Complete Edition",
        "preco": 49.99,
        "img": "out/281.jpg",
        "rating": 0.8809654948971327,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG"
        ]
    },
    {
        "id": 282,
        "nome": "Enter the Gungeon",
        "preco": 14.99,
        "img": "out/282.jpg",
        "rating": 0.9610148054460234,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie"
        ]
    },
    {
        "id": 283,
        "nome": "xiuzhen idle",
        "preco": 3.59,
        "img": "out/283.jpg",
        "rating": 0.8629690048939641,
        "categorias": [
            "Casual",
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 284,
        "nome": "Back 4 Blood",
        "preco": 59.99,
        "img": "out/284.jpg",
        "rating": 0.6405472964083673,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 285,
        "nome": "Total War: SHOGUN 2",
        "preco": 29.99,
        "img": "out/285.jpg",
        "rating": 0.9065405578711125,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 286,
        "nome": "The Sims\u2122 3",
        "preco": 19.99,
        "img": "out/286.jpg",
        "rating": 0.8624326997033293,
        "categorias": [
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 287,
        "nome": "SnowRunner",
        "preco": 27.49,
        "img": "out/287.jpg",
        "rating": 0.8753050460521137,
        "categorias": [
            "Aventura",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 288,
        "nome": "FINAL FANTASY XIV Online",
        "preco": 19.99,
        "img": "out/288.jpg",
        "rating": 0.8888394309291058,
        "categorias": [
            "MMO",
            "RPG"
        ]
    },
    {
        "id": 289,
        "nome": "Disco Elysium - The Final Cut",
        "preco": 39.99,
        "img": "out/289.jpg",
        "rating": 0.9445413204773139,
        "categorias": [
            "RPG"
        ]
    },
    {
        "id": 290,
        "nome": "Vampire Survivors",
        "preco": 2.99,
        "img": "out/290.jpg",
        "rating": 0.9889935033538166,
        "categorias": [
            "A\u00e7\u00e3o",
            "Casual",
            "Indie",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 291,
        "nome": "Captain of Industry",
        "preco": 29.99,
        "img": "out/291.jpg",
        "rating": 0.9231658001155402,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 292,
        "nome": "Battle Brothers",
        "preco": 29.99,
        "img": "out/292.jpg",
        "rating": 0.8818734865040458,
        "categorias": [
            "Indie",
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 293,
        "nome": "Just Cause\u2122 3",
        "preco": 19.99,
        "img": "out/293.jpg",
        "rating": 0.8223378842904585,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 294,
        "nome": "YoloMouse",
        "preco": 3.99,
        "img": "out/294.jpg",
        "rating": 0.9308565531475749,
        "categorias": [
            "Anima\u00e7\u00e3o",
            "Design",
            "Educativo",
            "Treinamento de Software",
            "Utilidades"
        ]
    },
    {
        "id": 295,
        "nome": "Eco",
        "preco": 29.99,
        "img": "out/295.jpg",
        "rating": 0.8233323180018276,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 296,
        "nome": "Heroes\u00ae of Might & Magic\u00ae III - HD Edition",
        "preco": 14.99,
        "img": "out/296.jpg",
        "rating": 0.7757448089076135,
        "categorias": [
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 297,
        "nome": "Left 4 Dead",
        "preco": 9.99,
        "img": "out/297.jpg",
        "rating": 0.9615329478663927,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 298,
        "nome": "Terraria",
        "preco": 9.99,
        "img": "out/298.jpg",
        "rating": 0.9786577852330616,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "RPG"
        ]
    },
    {
        "id": 299,
        "nome": "\u6696\u96ea Warm Snow",
        "preco": 17.99,
        "img": "out/299.jpg",
        "rating": 0.9020567499854338,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "RPG"
        ]
    },
    {
        "id": 300,
        "nome": "Muse Dash",
        "preco": 2.99,
        "img": "out/300.jpg",
        "rating": 0.9375415188477901,
        "categorias": [
            "A\u00e7\u00e3o",
            "Casual",
            "Indie"
        ]
    },
    {
        "id": 301,
        "nome": "Celeste",
        "preco": 19.99,
        "img": "out/301.jpg",
        "rating": 0.9777153324915077,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie"
        ]
    },
    {
        "id": 302,
        "nome": "Tales of Arise",
        "preco": 59.99,
        "img": "out/302.jpg",
        "rating": 0.9055957051414413,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG"
        ]
    },
    {
        "id": 303,
        "nome": "Mass Effect\u2122 Legendary Edition",
        "preco": 59.99,
        "img": "out/303.jpg",
        "rating": 0.9334411117226197,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG"
        ]
    },
    {
        "id": 304,
        "nome": "Grim Dawn",
        "preco": 24.99,
        "img": "out/304.jpg",
        "rating": 0.9349888719690758,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "RPG"
        ]
    },
    {
        "id": 305,
        "nome": "Rubber Bandits",
        "preco": 7.99,
        "img": "out/305.jpg",
        "rating": 0.7887179487179488,
        "categorias": [
            "A\u00e7\u00e3o",
            "Casual",
            "Indie"
        ]
    },
    {
        "id": 306,
        "nome": "Sea of Thieves",
        "preco": 39.99,
        "img": "out/306.jpg",
        "rating": 0.9031609367898398,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 307,
        "nome": "DARK SOULS\u2122 III",
        "preco": 59.99,
        "img": "out/307.jpg",
        "rating": 0.936297605617659,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 308,
        "nome": "Nomad Survival",
        "preco": 2.99,
        "img": "out/308.jpg",
        "rating": 0.9265850945494994,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "Early Access"
        ]
    },
    {
        "id": 309,
        "nome": "Project Zomboid",
        "preco": 19.99,
        "img": "out/309.jpg",
        "rating": 0.9238072588906776,
        "categorias": [
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 310,
        "nome": "Surviving Mars",
        "preco": 29.99,
        "img": "out/310.jpg",
        "rating": 0.8450817475207719,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 311,
        "nome": "The Elder Scrolls V: Skyrim Special Edition",
        "preco": 39.99,
        "img": "out/311.jpg",
        "rating": 0.9095462175623985,
        "categorias": [
            "RPG"
        ]
    },
    {
        "id": 312,
        "nome": "My Time At Portia",
        "preco": 7.49,
        "img": "out/312.jpg",
        "rating": 0.9271798401185876,
        "categorias": [
            "Aventura",
            "Casual",
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 313,
        "nome": "Pathfinder: Kingmaker - Enhanced Plus Edition",
        "preco": 8.99,
        "img": "out/313.jpg",
        "rating": 0.7843306379155436,
        "categorias": [
            "RPG"
        ]
    },
    {
        "id": 314,
        "nome": "Horizon Zero Dawn\u2122 Complete Edition",
        "preco": 49.99,
        "img": "out/314.jpg",
        "rating": 0.8618767617759977,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 315,
        "nome": "STAR WARS\u2122 Battlefront\u2122 II",
        "preco": 15.99,
        "img": "out/315.jpg",
        "rating": 0.8709743642382407,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 316,
        "nome": "Kingdom Come: Deliverance",
        "preco": 29.99,
        "img": "out/316.jpg",
        "rating": 0.8242345316954123,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 317,
        "nome": "The Isle",
        "preco": 19.99,
        "img": "out/317.jpg",
        "rating": 0.8310050916686872,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "MMO",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 318,
        "nome": "Age of Empires IV",
        "preco": 59.99,
        "img": "out/318.jpg",
        "rating": 0.86519023282226,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 319,
        "nome": "SAO Utils: Beta",
        "preco": 3.99,
        "img": "out/319.jpg",
        "rating": 0.8728432108027007,
        "categorias": [
            "Utilidades",
            "Early Access"
        ]
    },
    {
        "id": 320,
        "nome": "Sid Meier\u2019s Civilization\u00ae VI",
        "preco": 59.99,
        "img": "out/320.jpg",
        "rating": 0.8364012678800722,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 321,
        "nome": "X-Plane 11",
        "preco": 59.99,
        "img": "out/321.jpg",
        "rating": 0.9232791077644384,
        "categorias": [
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 322,
        "nome": "Cossacks 3",
        "preco": 19.99,
        "img": "out/322.jpg",
        "rating": 0.8077142314269428,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 323,
        "nome": "They Are Billions",
        "preco": 29.99,
        "img": "out/323.jpg",
        "rating": 0.8503713467339231,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 324,
        "nome": "F1\u00ae 2020",
        "preco": 59.99,
        "img": "out/324.jpg",
        "rating": 0.9343166983604873,
        "categorias": [
            "Corrida",
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 325,
        "nome": "METAL GEAR RISING: REVENGEANCE",
        "preco": 29.99,
        "img": "out/325.jpg",
        "rating": 0.9553156180212665,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 326,
        "nome": "Neon Abyss",
        "preco": 19.99,
        "img": "out/326.jpg",
        "rating": 0.8895897292771421,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "RPG"
        ]
    },
    {
        "id": 327,
        "nome": "Hollow Knight",
        "preco": 14.99,
        "img": "out/327.jpg",
        "rating": 0.9712437935494639,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie"
        ]
    },
    {
        "id": 328,
        "nome": "Football Manager 2022",
        "preco": 54.99,
        "img": "out/328.jpg",
        "rating": 0.9229711963666786,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 329,
        "nome": "Going Medieval",
        "preco": 24.99,
        "img": "out/329.jpg",
        "rating": 0.8982657040909469,
        "categorias": [
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 330,
        "nome": "Victoria II",
        "preco": 19.99,
        "img": "out/330.jpg",
        "rating": 0.923342226849743,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 331,
        "nome": "Titanfall\u00ae 2",
        "preco": 29.99,
        "img": "out/331.jpg",
        "rating": 0.9469947281686331,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 332,
        "nome": "Civilization IV: Beyond the Sword",
        "preco": 9.99,
        "img": "out/332.jpg",
        "rating": 0.9631938260611458,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 333,
        "nome": "HITMAN 3",
        "preco": 59.99,
        "img": "out/333.jpg",
        "rating": 0.6970640569395018,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 334,
        "nome": "Baldur's Gate 3",
        "preco": 59.99,
        "img": "out/334.jpg",
        "rating": 0.8720275525801521,
        "categorias": [
            "Aventura",
            "RPG",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 335,
        "nome": "ASTRONEER",
        "preco": 29.99,
        "img": "out/335.jpg",
        "rating": 0.9140486445401571,
        "categorias": [
            "Aventura",
            "Indie"
        ]
    },
    {
        "id": 336,
        "nome": "Path Of Wuxia",
        "preco": 34.99,
        "img": "out/336.jpg",
        "rating": 0.7981356477017036,
        "categorias": [
            "Indie",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 337,
        "nome": "Prison Architect",
        "preco": 29.99,
        "img": "out/337.jpg",
        "rating": 0.9050470214430554,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 338,
        "nome": "MX Bikes",
        "preco": 34.99,
        "img": "out/338.jpg",
        "rating": 0.9387920551276855,
        "categorias": [
            "Corrida",
            "Simula\u00e7\u00e3o",
            "Esportes",
            "Early Access"
        ]
    },
    {
        "id": 339,
        "nome": "MechWarrior 5: Mercenaries",
        "preco": 29.99,
        "img": "out/339.jpg",
        "rating": 0.8400355871886122,
        "categorias": [
            "A\u00e7\u00e3o",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 340,
        "nome": "Factorio",
        "preco": 30.0,
        "img": "out/340.jpg",
        "rating": 0.9653196101115676,
        "categorias": [
            "Casual",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 341,
        "nome": "Killing Floor 2",
        "preco": 29.99,
        "img": "out/341.jpg",
        "rating": 0.8753588951481011,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 342,
        "nome": "Tiny Tina's Wonderlands",
        "preco": 59.99,
        "img": "out/342.jpg",
        "rating": 0.754601226993865,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 343,
        "nome": "WorldBox - God Simulator",
        "preco": 19.99,
        "img": "out/343.jpg",
        "rating": 0.939297385620915,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 344,
        "nome": "The Witcher\u00ae 3: Wild Hunt",
        "preco": 39.99,
        "img": "out/344.jpg",
        "rating": 0.9610739967452758,
        "categorias": [
            "RPG"
        ]
    },
    {
        "id": 345,
        "nome": "Pro Cycling Manager 2022",
        "preco": 39.99,
        "img": "out/345.jpg",
        "rating": 0.7971014492753623,
        "categorias": [
            "Casual",
            "Corrida",
            "Esportes",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 346,
        "nome": "Grand Theft Auto IV: The Complete Edition",
        "preco": 5.99,
        "img": "out/346.jpg",
        "rating": 0.7748419919592997,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 347,
        "nome": "Assassin's Creed\u00ae Odyssey",
        "preco": 59.99,
        "img": "out/347.jpg",
        "rating": 0.8916619079407719,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 348,
        "nome": "Totally Accurate Battle Simulator",
        "preco": 19.99,
        "img": "out/348.jpg",
        "rating": 0.9793701293662495,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 349,
        "nome": "Timberborn",
        "preco": 24.99,
        "img": "out/349.jpg",
        "rating": 0.9421797981378609,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 350,
        "nome": "7 Days to Die",
        "preco": 24.99,
        "img": "out/350.jpg",
        "rating": 0.8825305228286714,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 351,
        "nome": "Grounded",
        "preco": 29.99,
        "img": "out/351.jpg",
        "rating": 0.8670120898100173,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Early Access"
        ]
    },
    {
        "id": 352,
        "nome": "Deep Rock Galactic",
        "preco": 29.99,
        "img": "out/352.jpg",
        "rating": 0.9672274675706721,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 353,
        "nome": "Mortal Kombat\u00a011",
        "preco": 49.99,
        "img": "out/353.jpg",
        "rating": 0.8664242424242424,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 354,
        "nome": "Dragon's Dogma: Dark Arisen",
        "preco": 29.99,
        "img": "out/354.jpg",
        "rating": 0.8987937027192803,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 355,
        "nome": "Banished",
        "preco": 19.99,
        "img": "out/355.jpg",
        "rating": 0.9023797706434001,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 356,
        "nome": "MORDHAU",
        "preco": 29.99,
        "img": "out/356.jpg",
        "rating": 0.8118229802654902,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie"
        ]
    },
    {
        "id": 357,
        "nome": "Don't Starve Together",
        "preco": 14.99,
        "img": "out/357.jpg",
        "rating": 0.9611759786419634,
        "categorias": [
            "Aventura",
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 358,
        "nome": "KovaaK's",
        "preco": 12.99,
        "img": "out/358.jpg",
        "rating": 0.9293489016425885,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 359,
        "nome": "Golf With Your Friends",
        "preco": 14.99,
        "img": "out/359.jpg",
        "rating": 0.8957482726130653,
        "categorias": [
            "Casual",
            "Indie",
            "Esportes"
        ]
    },
    {
        "id": 360,
        "nome": "Frostpunk",
        "preco": 29.99,
        "img": "out/360.jpg",
        "rating": 0.9147593914933251,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 361,
        "nome": "Wallpaper Engine",
        "preco": 3.99,
        "img": "out/361.jpg",
        "rating": 0.9805572172517192,
        "categorias": [
            "Casual",
            "Indie",
            "Anima\u00e7\u00e3o",
            "Design",
            "Edi\u00e7\u00e3o de Foto",
            "Utilidades"
        ]
    },
    {
        "id": 362,
        "nome": "Dead Cells",
        "preco": 24.99,
        "img": "out/362.jpg",
        "rating": 0.9707131658584607,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie"
        ]
    },
    {
        "id": 363,
        "nome": "Overcooked! 2",
        "preco": 24.99,
        "img": "out/363.jpg",
        "rating": 0.9034995732227777,
        "categorias": [
            "A\u00e7\u00e3o",
            "Casual",
            "Indie"
        ]
    },
    {
        "id": 364,
        "nome": "House Flipper",
        "preco": 12.49,
        "img": "out/364.jpg",
        "rating": 0.934176173673634,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 365,
        "nome": "Subnautica: Below Zero",
        "preco": 29.99,
        "img": "out/365.jpg",
        "rating": 0.9130918641401926,
        "categorias": [
            "Aventura",
            "Indie"
        ]
    },
    {
        "id": 366,
        "nome": "Stream Avatars",
        "preco": 14.99,
        "img": "out/366.jpg",
        "rating": 0.9537784299339692,
        "categorias": [
            "Anima\u00e7\u00e3o",
            "Design",
            "Utilidades",
            "Web"
        ]
    },
    {
        "id": 367,
        "nome": "Assetto Corsa Competizione",
        "preco": 13.59,
        "img": "out/367.jpg",
        "rating": 0.9098262707969482,
        "categorias": [
            "Corrida",
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 368,
        "nome": "A Dance of Fire and Ice",
        "preco": 5.99,
        "img": "out/368.jpg",
        "rating": 0.9373622250363491,
        "categorias": [
            "Indie"
        ]
    },
    {
        "id": 369,
        "nome": "Noita",
        "preco": 19.99,
        "img": "out/369.jpg",
        "rating": 0.9542886151944555,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 370,
        "nome": "Two Point Hospital",
        "preco": 34.99,
        "img": "out/370.jpg",
        "rating": 0.914672622212769,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 371,
        "nome": "Age of History II",
        "preco": 4.99,
        "img": "out/371.jpg",
        "rating": 0.8724639987270268,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 372,
        "nome": "XCOM\u00ae 2",
        "preco": 8.99,
        "img": "out/372.jpg",
        "rating": 0.8384616334036855,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 373,
        "nome": "Farming Simulator 22",
        "preco": 49.99,
        "img": "out/373.jpg",
        "rating": 0.8904332582018533,
        "categorias": [
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 374,
        "nome": "Stacklands",
        "preco": 4.99,
        "img": "out/374.jpg",
        "rating": 0,
        "categorias": [
            "Casual",
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 375,
        "nome": "Mount & Blade: Warband",
        "preco": 19.99,
        "img": "out/375.jpg",
        "rating": 0.9775246391378396,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG"
        ]
    },
    {
        "id": 376,
        "nome": "The Elder Scrolls IV: Oblivion\u00ae Game of the Year Edition",
        "preco": 14.99,
        "img": "out/376.jpg",
        "rating": 0.9555952187787333,
        "categorias": [
            "RPG"
        ]
    },
    {
        "id": 377,
        "nome": "Euro Truck Simulator 2",
        "preco": 19.99,
        "img": "out/377.jpg",
        "rating": 0.9731708443131211,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 378,
        "nome": "The Guild 3",
        "preco": 29.99,
        "img": "out/378.jpg",
        "rating": 0.6103302881236824,
        "categorias": [
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 379,
        "nome": "Stardew Valley",
        "preco": 14.99,
        "img": "out/379.jpg",
        "rating": 0.9814694864347482,
        "categorias": [
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 380,
        "nome": "God of War",
        "preco": 49.99,
        "img": "out/380.jpg",
        "rating": 0.969610048743907,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 381,
        "nome": "Plants vs. Zombies GOTY Edition",
        "preco": 4.99,
        "img": "out/381.jpg",
        "rating": 0.9716722000621014,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 382,
        "nome": "Fallout 76",
        "preco": 39.99,
        "img": "out/382.jpg",
        "rating": 0.7240418215097898,
        "categorias": [
            "RPG"
        ]
    },
    {
        "id": 383,
        "nome": "DOOM Eternal",
        "preco": 39.99,
        "img": "out/383.jpg",
        "rating": 0.9107606060804057,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 384,
        "nome": "Battlefield\u2122 2042",
        "preco": 29.99,
        "img": "out/384.jpg",
        "rating": 0.2695044744039295,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Casual"
        ]
    },
    {
        "id": 385,
        "nome": "Gunfire Reborn",
        "preco": 19.99,
        "img": "out/385.jpg",
        "rating": 0.945710950393817,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "RPG"
        ]
    },
    {
        "id": 386,
        "nome": "Crosshair X",
        "preco": 3.99,
        "img": "out/386.jpg",
        "rating": 0.9041353383458647,
        "categorias": [
            "A\u00e7\u00e3o",
            "Utilidades"
        ]
    },
    {
        "id": 387,
        "nome": "Sapiens",
        "preco": 22.49,
        "img": "out/387.jpg",
        "rating": 0.8474114441416893,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 388,
        "nome": "Richman 4",
        "preco": 5.09,
        "img": "out/388.jpg",
        "rating": 0.5377574370709383,
        "categorias": [
            "Casual"
        ]
    },
    {
        "id": 389,
        "nome": "Digimon Survive",
        "preco": 59.99,
        "img": "out/389.jpg",
        "rating": 0.788135593220339,
        "categorias": [
            "RPG"
        ]
    },
    {
        "id": 390,
        "nome": "Ghost Watchers",
        "preco": 11.99,
        "img": "out/390.jpg",
        "rating": 0.7609756097560976,
        "categorias": [
            "Aventura",
            "Early Access"
        ]
    },
    {
        "id": 391,
        "nome": "Sweet Transit",
        "preco": 19.79,
        "img": "out/391.jpg",
        "rating": 0.7677419354838709,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 392,
        "nome": "The Mortuary Assistant",
        "preco": 22.49,
        "img": "out/392.jpg",
        "rating": 0.8646232439335888,
        "categorias": [
            "Aventura",
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 393,
        "nome": "Hard West 2",
        "preco": 26.99,
        "img": "out/393.jpg",
        "rating": 0.7389380530973452,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 394,
        "nome": "PlateUp!",
        "preco": 14.39,
        "img": "out/394.jpg",
        "rating": 0.9502262443438914,
        "categorias": [
            "A\u00e7\u00e3o",
            "Casual",
            "Indie",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 395,
        "nome": "Love, Money, Rock'n'Roll",
        "preco": 19.99,
        "img": "out/395.jpg",
        "rating": 0.8349814585908529,
        "categorias": [
            "Aventura",
            "Casual",
            "Indie"
        ]
    },
    {
        "id": 396,
        "nome": "Hooked on You: A Dead by Daylight Dating Sim\u2122",
        "preco": 9.99,
        "img": "out/396.jpg",
        "rating": 0.9028985507246376,
        "categorias": [
            "Casual"
        ]
    },
    {
        "id": 397,
        "nome": "Cult of the Lamb",
        "preco": 24.99,
        "img": "out/397.jpg",
        "rating": 0.8846604215456675,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 398,
        "nome": "Farthest Frontier",
        "preco": 29.99,
        "img": "out/398.jpg",
        "rating": 0.8352524357838795,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 399,
        "nome": "Two Point Campus",
        "preco": 39.99,
        "img": "out/399.jpg",
        "rating": 0.8586387434554974,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 400,
        "nome": "Marvel\u2019s Spider-Man Remastered",
        "preco": 59.99,
        "img": "out/400.jpg",
        "rating": 0.9621382775948709,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Casual"
        ]
    },
    {
        "id": 401,
        "nome": "Way of the Hunter",
        "preco": 39.99,
        "img": "out/401.jpg",
        "rating": 0.6941671045717288,
        "categorias": [
            "Aventura",
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 402,
        "nome": "FreshWomen - Season 1",
        "preco": 12.59,
        "img": "out/402.jpg",
        "rating": 0,
        "categorias": [
            "Aventura",
            "Indie"
        ]
    },
    {
        "id": 403,
        "nome": "Backpack Hero",
        "preco": 15.29,
        "img": "out/403.jpg",
        "rating": 0.9249363867684478,
        "categorias": [
            "Early Access"
        ]
    },
    {
        "id": 404,
        "nome": "\u5927\u6c5f\u6e56\u4e4b\u82cd\u9f99\u4e0e\u767d\u9e1f",
        "preco": 17.99,
        "img": "out/404.jpg",
        "rating": 0.5323435843054083,
        "categorias": [
            "Indie",
            "RPG",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 405,
        "nome": "Thymesia",
        "preco": 22.49,
        "img": "out/405.jpg",
        "rating": 0.835421888053467,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 406,
        "nome": "Regiments",
        "preco": 25.49,
        "img": "out/406.jpg",
        "rating": 0.8962585034013606,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 407,
        "nome": "Soul Hackers 2",
        "preco": 59.99,
        "img": "out/407.jpg",
        "rating": 0.7910112359550562,
        "categorias": [
            "RPG"
        ]
    },
    {
        "id": 408,
        "nome": "Earthling's Undertaking",
        "preco": 14.39,
        "img": "out/408.jpg",
        "rating": 0.8240343347639485,
        "categorias": [
            "Casual",
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 409,
        "nome": "SD GUNDAM BATTLE ALLIANCE",
        "preco": 59.99,
        "img": "out/409.jpg",
        "rating": 0.5895075931891395,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG"
        ]
    },
    {
        "id": 410,
        "nome": "Warriors of the Nile 2",
        "preco": 13.49,
        "img": "out/410.jpg",
        "rating": 0.7636363636363637,
        "categorias": [
            "Indie",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 411,
        "nome": "JoJo's Bizarre Adventure: All-Star Battle R",
        "preco": 49.99,
        "img": "out/411.jpg",
        "rating": 0.8368560105680317,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 412,
        "nome": "Call of the Wild: The Angler\u2122",
        "preco": 29.99,
        "img": "out/412.jpg",
        "rating": 0.4205723766072169,
        "categorias": [
            "Aventura",
            "Casual",
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 413,
        "nome": "Destroy All Humans! 2 - Reprobed",
        "preco": 39.99,
        "img": "out/413.jpg",
        "rating": 0.8431001890359168,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 414,
        "nome": "Made in Abyss: Binary Star Falling into Darkness",
        "preco": 59.99,
        "img": "out/414.jpg",
        "rating": 0.550314465408805,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 415,
        "nome": "F1\u00ae Manager 2022",
        "preco": 54.99,
        "img": "out/415.jpg",
        "rating": 0.7077727952167414,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 416,
        "nome": "Train Sim World\u00ae 3",
        "preco": 39.99,
        "img": "out/416.jpg",
        "rating": 0.8123324396782842,
        "categorias": [
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 417,
        "nome": "NBA 2K23",
        "preco": 59.99,
        "img": "out/417.jpg",
        "rating": 0.4062717770034843,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 418,
        "nome": "Steelrising",
        "preco": 49.99,
        "img": "out/418.jpg",
        "rating": 0.7097560975609756,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 419,
        "nome": "Disney Dreamlight Valley",
        "preco": 29.99,
        "img": "out/419.jpg",
        "rating": 0.9361888111888111,
        "categorias": [
            "Aventura",
            "Casual",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 420,
        "nome": "Judgment",
        "preco": 39.99,
        "img": "out/420.jpg",
        "rating": 0.9534534534534534,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 421,
        "nome": "Metal: Hellsinger",
        "preco": 29.99,
        "img": "out/421.jpg",
        "rating": 0.9757194244604317,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 422,
        "nome": "Isonzo",
        "preco": 26.99,
        "img": "out/422.jpg",
        "rating": 0.8092202059833251,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "MMO",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 423,
        "nome": "The Wandering Village",
        "preco": 22.49,
        "img": "out/423.jpg",
        "rating": 0.9039735099337748,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 424,
        "nome": "Return to Monkey Island",
        "preco": 24.99,
        "img": "out/424.jpg",
        "rating": 0.9354612416695897,
        "categorias": [
            "Aventura",
            "Casual"
        ]
    },
    {
        "id": 425,
        "nome": "SpiderHeck",
        "preco": 13.49,
        "img": "out/425.jpg",
        "rating": 0.901060070671378,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie"
        ]
    },
    {
        "id": 426,
        "nome": "Rogue : Genesia",
        "preco": 2.69,
        "img": "out/426.jpg",
        "rating": 0.9539078156312625,
        "categorias": [
            "A\u00e7\u00e3o",
            "Casual",
            "RPG",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 427,
        "nome": "Potion Permit",
        "preco": 19.99,
        "img": "out/427.jpg",
        "rating": 0.7173524150268337,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Casual",
            "RPG"
        ]
    },
    {
        "id": 428,
        "nome": "The DioField Chronicle",
        "preco": 59.99,
        "img": "out/428.jpg",
        "rating": 0.515748031496063,
        "categorias": [
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 429,
        "nome": "Construction Simulator",
        "preco": 34.99,
        "img": "out/429.jpg",
        "rating": 0.7752675386444708,
        "categorias": [
            "Casual",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 430,
        "nome": "Slime Rancher 2",
        "preco": 29.99,
        "img": "out/430.jpg",
        "rating": 0.9595705418553934,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Casual",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 431,
        "nome": "BONELAB",
        "preco": 39.99,
        "img": "out/431.jpg",
        "rating": 0.7721203892283321,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 432,
        "nome": "Mystwood Manor",
        "preco": 19.99,
        "img": "out/432.jpg",
        "rating": 0,
        "categorias": [
            "Aventura",
            "Casual",
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 433,
        "nome": "EA SPORTS\u2122 FIFA 23",
        "preco": 69.99,
        "img": "out/433.jpg",
        "rating": 0.3367054459618951,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 434,
        "nome": "Kena: Bridge of Spirits",
        "preco": 29.99,
        "img": "out/434.jpg",
        "rating": 0.9143576826196473,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie"
        ]
    },
    {
        "id": 435,
        "nome": "Brotato",
        "preco": 4.99,
        "img": "out/435.jpg",
        "rating": 0.9636135508155583,
        "categorias": [
            "A\u00e7\u00e3o",
            "Casual",
            "Indie",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 436,
        "nome": "Dome Keeper",
        "preco": 16.19,
        "img": "out/436.jpg",
        "rating": 0.8677474402730375,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie"
        ]
    },
    {
        "id": 437,
        "nome": "Terra Invicta",
        "preco": 35.99,
        "img": "out/437.jpg",
        "rating": 0.8408862034239678,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 438,
        "nome": "Marauders",
        "preco": 29.99,
        "img": "out/438.jpg",
        "rating": 0.7972275074748573,
        "categorias": [
            "A\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 439,
        "nome": "Stardeus",
        "preco": 29.99,
        "img": "out/439.jpg",
        "rating": 0.9308510638297872,
        "categorias": [
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 440,
        "nome": "DRAGON BALL: THE BREAKERS",
        "preco": 19.99,
        "img": "out/440.jpg",
        "rating": 0.6636455186304129,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Casual"
        ]
    },
    {
        "id": 441,
        "nome": "Scorn",
        "preco": 35.99,
        "img": "out/441.jpg",
        "rating": 0.7025238912031365,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie"
        ]
    },
    {
        "id": 442,
        "nome": "Coral Island",
        "preco": 24.99,
        "img": "out/442.jpg",
        "rating": 0.8915094339622641,
        "categorias": [
            "Aventura",
            "Casual",
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 443,
        "nome": "Stranded: Alien Dawn",
        "preco": 29.99,
        "img": "out/443.jpg",
        "rating": 0.8404907975460123,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 444,
        "nome": "Asterigos: Curse of the Stars",
        "preco": 31.49,
        "img": "out/444.jpg",
        "rating": 0.7978947368421052,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 445,
        "nome": "Lost Eidolons",
        "preco": 34.99,
        "img": "out/445.jpg",
        "rating": 0.7966101694915254,
        "categorias": [
            "Indie",
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 446,
        "nome": "TRIANGLE STRATEGY",
        "preco": 59.99,
        "img": "out/446.jpg",
        "rating": 0.856353591160221,
        "categorias": [
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 447,
        "nome": "UNCHARTED\u2122: Legacy of Thieves Collection",
        "preco": 49.99,
        "img": "out/447.jpg",
        "rating": 0.9013414106447425,
        "categorias": [
            "Aventura"
        ]
    },
    {
        "id": 448,
        "nome": "Potionomics",
        "preco": 22.49,
        "img": "out/448.jpg",
        "rating": 0.852962692026335,
        "categorias": [
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 449,
        "nome": "Richman 11",
        "preco": 17.09,
        "img": "out/449.jpg",
        "rating": 0.4845814977973568,
        "categorias": [
            "Casual",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 450,
        "nome": "Persona 5 Royal",
        "preco": 59.99,
        "img": "out/450.jpg",
        "rating": 0.9723577235772358,
        "categorias": [
            "RPG"
        ]
    },
    {
        "id": 451,
        "nome": "Gotham Knights",
        "preco": 59.99,
        "img": "out/451.jpg",
        "rating": 0.6475491830610204,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 452,
        "nome": "A Plague Tale: Requiem",
        "preco": 49.99,
        "img": "out/452.jpg",
        "rating": 0.8813241723922548,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 453,
        "nome": "Monster Prom 3: Monster Roadtrip",
        "preco": 10.79,
        "img": "out/453.jpg",
        "rating": 0.9947643979057592,
        "categorias": [
            "Casual",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 454,
        "nome": "DAVE THE DIVER",
        "preco": 17.99,
        "img": "out/454.jpg",
        "rating": 0.9537671232876712,
        "categorias": [
            "Aventura",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 455,
        "nome": "Call of Duty\u00ae: Modern Warfare\u00ae II",
        "preco": 69.99,
        "img": "out/455.jpg",
        "rating": 0.5569153744524025,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 456,
        "nome": "Ghost of Dragon",
        "preco": 17.99,
        "img": "out/456.jpg",
        "rating": 0.6098360655737705,
        "categorias": [
            "Aventura",
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 457,
        "nome": "Football Manager 2023",
        "preco": 47.99,
        "img": "out/457.jpg",
        "rating": 0.8668238067177372,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 458,
        "nome": "Cosmoteer: Starship Architect & Commander",
        "preco": 17.99,
        "img": "out/458.jpg",
        "rating": 0.96875,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 459,
        "nome": "STAR OCEAN THE DIVINE FORCE",
        "preco": 59.99,
        "img": "out/459.jpg",
        "rating": 0.6907020872865275,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG"
        ]
    },
    {
        "id": 460,
        "nome": "Victoria 3",
        "preco": 49.99,
        "img": "out/460.jpg",
        "rating": 0.6191536748329621,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 461,
        "nome": "\u9547\u90aa",
        "preco": 13.49,
        "img": "out/461.jpg",
        "rating": 0.8315789473684211,
        "categorias": [
            "Aventura",
            "Indie",
            "RPG"
        ]
    },
    {
        "id": 462,
        "nome": "Against the Storm",
        "preco": 16.99,
        "img": "out/462.jpg",
        "rating": 0.9765886287625418,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 463,
        "nome": "The Past Within",
        "preco": 3.59,
        "img": "out/463.jpg",
        "rating": 0.9246651785714286,
        "categorias": [
            "Aventura",
            "Indie"
        ]
    },
    {
        "id": 464,
        "nome": "HARVESTELLA",
        "preco": 59.99,
        "img": "out/464.jpg",
        "rating": 0.6354166666666666,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 465,
        "nome": "Tactics Ogre: Reborn",
        "preco": 49.99,
        "img": "out/465.jpg",
        "rating": 0.827354260089686,
        "categorias": [
            "RPG",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 466,
        "nome": "Astro Colony",
        "preco": 17.99,
        "img": "out/466.jpg",
        "rating": 0.8191126279863481,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Casual",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 467,
        "nome": "Sonic Frontiers",
        "preco": 59.99,
        "img": "out/467.jpg",
        "rating": 0.9453073364177131,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 468,
        "nome": "Soulstone Survivors",
        "preco": 9.99,
        "img": "out/468.jpg",
        "rating": 0.8822624086186995,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 469,
        "nome": "The Dark Pictures Anthology: The Devil in Me",
        "preco": 39.99,
        "img": "out/469.jpg",
        "rating": 0.518783542039356,
        "categorias": [
            "Aventura"
        ]
    },
    {
        "id": 470,
        "nome": "Warhammer 40,000: Darktide",
        "preco": 39.99,
        "img": "out/470.jpg",
        "rating": 0.6807283763277694,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie"
        ]
    },
    {
        "id": 471,
        "nome": "Frozen Flame",
        "preco": 25.49,
        "img": "out/471.jpg",
        "rating": 0.6120879120879121,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 472,
        "nome": "Cardfight!! Vanguard Dear Days",
        "preco": 69.99,
        "img": "out/472.jpg",
        "rating": 0.903954802259887,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 473,
        "nome": "Pentiment",
        "preco": 19.99,
        "img": "out/473.jpg",
        "rating": 0.9573863636363636,
        "categorias": [
            "Aventura",
            "Casual"
        ]
    },
    {
        "id": 474,
        "nome": "ZERO Sievert",
        "preco": 17.99,
        "img": "out/474.jpg",
        "rating": 0.8860958366064414,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Early Access"
        ]
    },
    {
        "id": 475,
        "nome": "\u8700\u5c71\uff1a\u521d\u7ae0",
        "preco": 24.99,
        "img": "out/475.jpg",
        "rating": 0.8136752136752137,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "MMO",
            "RPG"
        ]
    },
    {
        "id": 476,
        "nome": "Marvel\u2019s Spider-Man: Miles Morales",
        "preco": 49.99,
        "img": "out/476.jpg",
        "rating": 0.9467168998923574,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 477,
        "nome": "We Who Are About To Die",
        "preco": 19.79,
        "img": "out/477.jpg",
        "rating": 0.8822784810126583,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 478,
        "nome": "Sexy Mystic Survivors",
        "preco": 8.99,
        "img": "out/478.jpg",
        "rating": 0,
        "categorias": [
            "A\u00e7\u00e3o",
            "Casual",
            "Indie",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 479,
        "nome": "Ship of Fools",
        "preco": 13.49,
        "img": "out/479.jpg",
        "rating": 0.8723021582733813,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie"
        ]
    },
    {
        "id": 480,
        "nome": "Evil West",
        "preco": 49.99,
        "img": "out/480.jpg",
        "rating": 0.790808999521302,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 481,
        "nome": "Need for Speed\u2122 Unbound",
        "preco": 69.99,
        "img": "out/481.jpg",
        "rating": 0.7737665463297232,
        "categorias": [
            "A\u00e7\u00e3o",
            "Corrida"
        ]
    },
    {
        "id": 482,
        "nome": "\u8f6e\u56de\u4fee\u4ed9\u8def",
        "preco": 11.89,
        "img": "out/482.jpg",
        "rating": 0.8602150537634409,
        "categorias": [
            "Aventura",
            "Indie",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 483,
        "nome": "Marvel's Midnight Suns",
        "preco": 59.99,
        "img": "out/483.jpg",
        "rating": 0.6904047976011994,
        "categorias": [
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 484,
        "nome": "The Callisto Protocol\u2122",
        "preco": 59.99,
        "img": "out/484.jpg",
        "rating": 0.5098446456758329,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 485,
        "nome": "Assassin's Creed Valhalla",
        "preco": 19.8,
        "img": "out/485.jpg",
        "rating": 0.6151560178306092,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 486,
        "nome": "Chained Echoes",
        "preco": 21.24,
        "img": "out/486.jpg",
        "rating": 0.8938356164383562,
        "categorias": [
            "Indie",
            "RPG"
        ]
    },
    {
        "id": 487,
        "nome": "Choo-Choo Charles",
        "preco": 19.99,
        "img": "out/487.jpg",
        "rating": 0.9145183175033921,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie"
        ]
    },
    {
        "id": 488,
        "nome": "Knights of Honor II: Sovereign",
        "preco": 39.59,
        "img": "out/488.jpg",
        "rating": 0.7264231096006797,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 489,
        "nome": "Dwarf Fortress",
        "preco": 29.99,
        "img": "out/489.jpg",
        "rating": 0.9670152855993563,
        "categorias": [
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 490,
        "nome": "Yi Xian: The Cultivation Card Game",
        "preco": 7.99,
        "img": "out/490.jpg",
        "rating": 0.7898909811694748,
        "categorias": [
            "Casual",
            "Indie",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 491,
        "nome": "IXION",
        "preco": 31.49,
        "img": "out/491.jpg",
        "rating": 0.6212164889017008,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 492,
        "nome": "High On Life",
        "preco": 59.99,
        "img": "out/492.jpg",
        "rating": 0.8881846989588049,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 493,
        "nome": "CRISIS CORE \u2013FINAL FANTASY VII\u2013 REUNION",
        "preco": 49.99,
        "img": "out/493.jpg",
        "rating": 0.8961218836565097,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG"
        ]
    },
    {
        "id": 494,
        "nome": "Depersonalization",
        "preco": 17.99,
        "img": "out/494.jpg",
        "rating": 0.9049429657794676,
        "categorias": [
            "Aventura",
            "Casual",
            "Indie",
            "RPG",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 495,
        "nome": "\u5929\u5916\u6b66\u6797 (Traveler of Wuxia)",
        "preco": 22.49,
        "img": "out/495.jpg",
        "rating": 0.8096885813148789,
        "categorias": [
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 496,
        "nome": "ONE PIECE ODYSSEY",
        "preco": 59.99,
        "img": "out/496.jpg",
        "rating": 0.8556566970091027,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Casual",
            "RPG"
        ]
    },
    {
        "id": 497,
        "nome": "SimRail - The Railway Simulator",
        "preco": 31.49,
        "img": "out/497.jpg",
        "rating": 0.8294573643410853,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 498,
        "nome": "\u6c5f\u6e56\u5341\u4e00",
        "preco": 17.99,
        "img": "out/498.jpg",
        "rating": 0.34333420297417167,
        "categorias": [
            "Indie",
            "RPG"
        ]
    },
    {
        "id": 499,
        "nome": "Sailing Era",
        "preco": 22.49,
        "img": "out/499.jpg",
        "rating": 0.7508650519031141,
        "categorias": [
            "Aventura",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 500,
        "nome": "Tom Clancy\u2019s The Division\u00ae 2",
        "preco": 9.0,
        "img": "out/500.jpg",
        "rating": 0.5605095541401274,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 501,
        "nome": "Surviving the Abyss",
        "preco": 17.99,
        "img": "out/501.jpg",
        "rating": 0.7389380530973452,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 502,
        "nome": "Persona 3 Portable",
        "preco": 19.99,
        "img": "out/502.jpg",
        "rating": 0.7277913610431948,
        "categorias": [
            "Aventura",
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 503,
        "nome": "Grand Theft Auto: San Andreas \u2013 The Definitive Edition",
        "preco": 29.99,
        "img": "out/503.jpg",
        "rating": 0.698051948051948,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 504,
        "nome": "Dead Space",
        "preco": 59.99,
        "img": "out/504.jpg",
        "rating": 0.8744385862136301,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 505,
        "nome": "Pizza Tower",
        "preco": 19.99,
        "img": "out/505.jpg",
        "rating": 0.9949348769898697,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie"
        ]
    },
    {
        "id": 506,
        "nome": "Forspoken",
        "preco": 69.99,
        "img": "out/506.jpg",
        "rating": 0.535924617196702,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 507,
        "nome": "Watch Dogs\u00ae: Legion",
        "preco": 12.0,
        "img": "out/507.jpg",
        "rating": 0.5396825396825397,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 508,
        "nome": "Hi-Fi RUSH",
        "preco": 29.99,
        "img": "out/508.jpg",
        "rating": 0.9851912793089264,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 509,
        "nome": "Tom Clancy's Ghost Recon\u00ae Breakpoint",
        "preco": 12.0,
        "img": "out/509.jpg",
        "rating": 0.5118483412322274,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 510,
        "nome": "SpellForce: Conquest of Eo",
        "preco": 23.99,
        "img": "out/510.jpg",
        "rating": 0.7818696883852692,
        "categorias": [
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 511,
        "nome": "Your Only Move Is HUSTLE",
        "preco": 4.99,
        "img": "out/511.jpg",
        "rating": 0.9719696969696969,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 512,
        "nome": "Undisputed",
        "preco": 29.99,
        "img": "out/512.jpg",
        "rating": 0.8168817579351239,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Esportes",
            "Early Access"
        ]
    },
    {
        "id": 513,
        "nome": "Don't Starve",
        "preco": 9.99,
        "img": "out/513.jpg",
        "rating": 0.9678024819544143,
        "categorias": [
            "Aventura",
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 514,
        "nome": "Hogwarts Legacy",
        "preco": 59.99,
        "img": "out/514.jpg",
        "rating": 0.9436952788491315,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 515,
        "nome": "Returnal\u2122",
        "preco": 59.99,
        "img": "out/515.jpg",
        "rating": 0.8081023454157783,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 516,
        "nome": "Pharaoh: A New Era",
        "preco": 19.54,
        "img": "out/516.jpg",
        "rating": 0.6883468834688347,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 517,
        "nome": "WILD HEARTS\u2122",
        "preco": 69.99,
        "img": "out/517.jpg",
        "rating": 0.41443435908789017,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 518,
        "nome": "Plan B: Terraform",
        "preco": 8.99,
        "img": "out/518.jpg",
        "rating": 0.9,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 519,
        "nome": "Noobs Want to Live",
        "preco": 4.24,
        "img": "out/519.jpg",
        "rating": 0.9209270620313565,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Casual",
            "Indie"
        ]
    },
    {
        "id": 520,
        "nome": "OCTOPATH TRAVELER II",
        "preco": 59.99,
        "img": "out/520.jpg",
        "rating": 0.9362637362637363,
        "categorias": [
            "RPG"
        ]
    },
    {
        "id": 521,
        "nome": "Like a Dragon: Ishin!",
        "preco": 59.99,
        "img": "out/521.jpg",
        "rating": 0.8443067389620449,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 522,
        "nome": "Atomic Heart",
        "preco": 59.99,
        "img": "out/522.jpg",
        "rating": 0.8741702459976571,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 523,
        "nome": "Sons Of The Forest",
        "preco": 29.99,
        "img": "out/523.jpg",
        "rating": 0.8389069264069264,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 524,
        "nome": "Blood Bowl 3",
        "preco": 29.99,
        "img": "out/524.jpg",
        "rating": 0.2619626926196269,
        "categorias": [
            "Esportes",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 525,
        "nome": "Kerbal Space Program 2",
        "preco": 49.99,
        "img": "out/525.jpg",
        "rating": 0.49682587666263606,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 526,
        "nome": "Company of Heroes 3",
        "preco": 59.99,
        "img": "out/526.jpg",
        "rating": 0.5957167011083975,
        "categorias": [
            "A\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 527,
        "nome": "Phantom Brigade",
        "preco": 23.99,
        "img": "out/527.jpg",
        "rating": 0.8504016064257028,
        "categorias": [
            "Indie",
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 528,
        "nome": "Wo Long: Fallen Dynasty",
        "preco": 59.99,
        "img": "out/528.jpg",
        "rating": 0.3807987443320544,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 529,
        "nome": "Garten of Banban 2",
        "preco": 4.99,
        "img": "out/529.jpg",
        "rating": 0.5880503144654088,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Casual",
            "Indie"
        ]
    },
    {
        "id": 530,
        "nome": "Hero's Adventure",
        "preco": 15.83,
        "img": "out/530.jpg",
        "rating": 0.8166666666666667,
        "categorias": [
            "Aventura",
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 531,
        "nome": "Contraband Police",
        "preco": 17.59,
        "img": "out/531.jpg",
        "rating": 0.9407979407979408,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 532,
        "nome": "FATAL FRAME / PROJECT ZERO: Mask of the Lunar Eclipse",
        "preco": 49.99,
        "img": "out/532.jpg",
        "rating": 0.8839907192575406,
        "categorias": [
            "Aventura"
        ]
    },
    {
        "id": 533,
        "nome": "Call of Duty\u00ae: Black Ops Cold War",
        "preco": 29.99,
        "img": "out/533.jpg",
        "rating": 0.7476923076923077,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 534,
        "nome": "Big Ambitions",
        "preco": 20.69,
        "img": "out/534.jpg",
        "rating": 0.9576271186440678,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 535,
        "nome": "Hotel Renovator",
        "preco": 19.99,
        "img": "out/535.jpg",
        "rating": 0.7803571428571429,
        "categorias": [
            "Aventura",
            "Casual",
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 536,
        "nome": "WWE 2K23",
        "preco": 59.99,
        "img": "out/536.jpg",
        "rating": 0.8401639344262295,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 537,
        "nome": "Resident Evil 4",
        "preco": 59.99,
        "img": "out/537.jpg",
        "rating": 0.9670675047827275,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 538,
        "nome": "Atelier Ryza 3: Alchemist of the End & the Secret Key",
        "preco": 59.99,
        "img": "out/538.jpg",
        "rating": 0.9532967032967034,
        "categorias": [
            "Aventura",
            "Casual",
            "RPG",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 539,
        "nome": "Terra Nil",
        "preco": 24.99,
        "img": "out/539.jpg",
        "rating": 0.8408450704225352,
        "categorias": [
            "Casual",
            "Indie",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 540,
        "nome": "ZED ZONE",
        "preco": 10.19,
        "img": "out/540.jpg",
        "rating": 0.8974358974358975,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 541,
        "nome": "The Great War: Western Front\u2122",
        "preco": 34.99,
        "img": "out/541.jpg",
        "rating": 0.78719723183391,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 542,
        "nome": "Smalland: Survive the Wilds",
        "preco": 22.49,
        "img": "out/542.jpg",
        "rating": 0.8259649122807018,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 543,
        "nome": "Sifu",
        "preco": 35.99,
        "img": "out/543.jpg",
        "rating": 0.936897458369851,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie"
        ]
    },
    {
        "id": 544,
        "nome": "Crab Champions",
        "preco": 8.49,
        "img": "out/544.jpg",
        "rating": 0.9845528455284552,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Casual",
            "Indie",
            "Corrida",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 545,
        "nome": "DREDGE",
        "preco": 24.99,
        "img": "out/545.jpg",
        "rating": 0.9575757575757575,
        "categorias": [
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 546,
        "nome": "The Last of Us\u2122 Part I",
        "preco": 59.99,
        "img": "out/546.jpg",
        "rating": 0.4296749123305848,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 547,
        "nome": "Ravenswatch",
        "preco": 17.99,
        "img": "out/547.jpg",
        "rating": 0.670755326016785,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Early Access"
        ]
    },
    {
        "id": 548,
        "nome": "\u6211\u5728\u5730\u7403\u4fee\u4ed9\u6709\u7cfb\u7edf",
        "preco": 13.49,
        "img": "out/548.jpg",
        "rating": 0.753880266075388,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 549,
        "nome": "Meet Your Maker",
        "preco": 29.99,
        "img": "out/549.jpg",
        "rating": 0.8256285482562855,
        "categorias": [
            "A\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 550,
        "nome": "Minecraft Legends",
        "preco": 39.99,
        "img": "out/550.jpg",
        "rating": 0.6102564102564103,
        "categorias": [
            "A\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 551,
        "nome": "Wildfrost",
        "preco": 19.99,
        "img": "out/551.jpg",
        "rating": 0.7333903621328771,
        "categorias": [
            "Indie",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 552,
        "nome": "Neon Echo",
        "preco": 14.99,
        "img": "out/552.jpg",
        "rating": 0.900523560209424,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 553,
        "nome": "Havendock",
        "preco": 15.29,
        "img": "out/553.jpg",
        "rating": 0.956140350877193,
        "categorias": [
            "Casual",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 554,
        "nome": "Volcano Princess",
        "preco": 9.34,
        "img": "out/554.jpg",
        "rating": 0.9857224443175329,
        "categorias": [
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 555,
        "nome": "Mega Man Battle Network Legacy Collection Vol. 1",
        "preco": 39.99,
        "img": "out/555.jpg",
        "rating": 0.9230769230769231,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG"
        ]
    },
    {
        "id": 556,
        "nome": "The Mageseeker: A League of Legends Story\u2122",
        "preco": 29.99,
        "img": "out/556.jpg",
        "rating": 0.8335233751425314,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "RPG"
        ]
    },
    {
        "id": 557,
        "nome": "Boundary",
        "preco": 22.49,
        "img": "out/557.jpg",
        "rating": 0.740270380991397,
        "categorias": [
            "A\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 558,
        "nome": "Cassette Beasts",
        "preco": 17.99,
        "img": "out/558.jpg",
        "rating": 0.960377358490566,
        "categorias": [
            "Indie",
            "RPG"
        ]
    },
    {
        "id": 559,
        "nome": "Shadows of Doubt",
        "preco": 17.99,
        "img": "out/559.jpg",
        "rating": 0.9041198501872659,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 560,
        "nome": "Amanda the Adventurer",
        "preco": 8.09,
        "img": "out/560.jpg",
        "rating": 0.9551282051282052,
        "categorias": [
            "Indie"
        ]
    },
    {
        "id": 561,
        "nome": "STAR WARS Jedi: Survivor\u2122",
        "preco": 69.99,
        "img": "out/561.jpg",
        "rating": 0.4936874183717893,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 562,
        "nome": "Afterimage",
        "preco": 24.99,
        "img": "out/562.jpg",
        "rating": 0.7625272331154684,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie"
        ]
    },
    {
        "id": 563,
        "nome": "Roots of Pacha",
        "preco": 22.49,
        "img": "out/563.jpg",
        "rating": 0.9302721088435374,
        "categorias": [
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 564,
        "nome": "KAKU: Ancient Seal",
        "preco": 22.24,
        "img": "out/564.jpg",
        "rating": 0.8789808917197452,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 565,
        "nome": "Garten of Banban 3",
        "preco": 4.99,
        "img": "out/565.jpg",
        "rating": 0.6344086021505376,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Casual",
            "Indie"
        ]
    },
    {
        "id": 566,
        "nome": "Redfall",
        "preco": 69.99,
        "img": "out/566.jpg",
        "rating": 0.28328050713153724,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 567,
        "nome": "Tape to Tape",
        "preco": 17.99,
        "img": "out/567.jpg",
        "rating": 0.8713235294117647,
        "categorias": [
            "A\u00e7\u00e3o",
            "Esportes",
            "Early Access"
        ]
    },
    {
        "id": 568,
        "nome": "Age of Wonders 4",
        "preco": 49.99,
        "img": "out/568.jpg",
        "rating": 0.8383771929824562,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 569,
        "nome": "Occupy Mars: The Game",
        "preco": 21.24,
        "img": "out/569.jpg",
        "rating": 0.7213438735177866,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 570,
        "nome": "Darkest Dungeon\u00ae II",
        "preco": 39.99,
        "img": "out/570.jpg",
        "rating": 0.7552625491556789,
        "categorias": [
            "Indie",
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 571,
        "nome": "Mechabellum",
        "preco": 11.99,
        "img": "out/571.jpg",
        "rating": 0.9269406392694064,
        "categorias": [
            "A\u00e7\u00e3o",
            "MMO",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 572,
        "nome": "Far Cry\u00ae 6",
        "preco": 15.0,
        "img": "out/572.jpg",
        "rating": 0.7293291731669267,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 573,
        "nome": "Voidtrain",
        "preco": 26.99,
        "img": "out/573.jpg",
        "rating": 0.6677768526228143,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 574,
        "nome": "Starship Troopers: Extermination",
        "preco": 24.99,
        "img": "out/574.jpg",
        "rating": 0.927640872704442,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "Early Access"
        ]
    },
    {
        "id": 575,
        "nome": "The Outlast Trials",
        "preco": 29.99,
        "img": "out/575.jpg",
        "rating": 0.9446478254502856,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "Early Access"
        ]
    },
    {
        "id": 576,
        "nome": "Warhammer 40,000: Boltgun",
        "preco": 19.79,
        "img": "out/576.jpg",
        "rating": 0.9457291175082586,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie"
        ]
    },
    {
        "id": 577,
        "nome": "Above Snakes",
        "preco": 22.49,
        "img": "out/577.jpg",
        "rating": 0.6992481203007519,
        "categorias": [
            "Aventura",
            "RPG",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 578,
        "nome": "Railway Empire 2",
        "preco": 49.99,
        "img": "out/578.jpg",
        "rating": 0.624633431085044,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 579,
        "nome": "Miasma Chronicles",
        "preco": 49.99,
        "img": "out/579.jpg",
        "rating": 0.7111111111111111,
        "categorias": [
            "A\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 580,
        "nome": "Inkbound",
        "preco": 19.99,
        "img": "out/580.jpg",
        "rating": 0.8279158699808795,
        "categorias": [
            "RPG",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 581,
        "nome": "System Shock",
        "preco": 39.99,
        "img": "out/581.jpg",
        "rating": 0.9290375203915171,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 582,
        "nome": "Etrian Odyssey HD",
        "preco": 39.99,
        "img": "out/582.jpg",
        "rating": 0.9693251533742331,
        "categorias": [
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 583,
        "nome": "Street Fighter\u2122 6",
        "preco": 59.99,
        "img": "out/583.jpg",
        "rating": 0.9035323280313985,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 584,
        "nome": "Etrian Odyssey III HD",
        "preco": 39.99,
        "img": "out/584.jpg",
        "rating": 0.9375,
        "categorias": [
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 585,
        "nome": "Friends vs Friends",
        "preco": 5.99,
        "img": "out/585.jpg",
        "rating": 0.8056455344747802,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie"
        ]
    },
    {
        "id": 586,
        "nome": "Amnesia: The Bunker",
        "preco": 24.99,
        "img": "out/586.jpg",
        "rating": 0.9065606361829026,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie"
        ]
    },
    {
        "id": 587,
        "nome": "Riders Republic",
        "preco": 15.0,
        "img": "out/587.jpg",
        "rating": 0.6755793226381461,
        "categorias": [
            "MMO",
            "Esportes"
        ]
    },
    {
        "id": 588,
        "nome": "F1\u00ae 23",
        "preco": 69.99,
        "img": "out/588.jpg",
        "rating": 0.8700564971751412,
        "categorias": [
            "Corrida",
            "Esportes"
        ]
    },
    {
        "id": 589,
        "nome": "BattleBit Remastered",
        "preco": 14.99,
        "img": "out/589.jpg",
        "rating": 0.8981446893288507,
        "categorias": [
            "A\u00e7\u00e3o",
            "MMO",
            "Early Access"
        ]
    },
    {
        "id": 590,
        "nome": "Tom Clancy\u2019s Rainbow Six\u00ae Extraction",
        "preco": 10.0,
        "img": "out/590.jpg",
        "rating": 0.6286472148541115,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 591,
        "nome": "Aliens: Dark Descent",
        "preco": 39.99,
        "img": "out/591.jpg",
        "rating": 0.8890328151986183,
        "categorias": [
            "A\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 592,
        "nome": "Six Days in Fallujah",
        "preco": 39.99,
        "img": "out/592.jpg",
        "rating": 0.8155680224403927,
        "categorias": [
            "A\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 593,
        "nome": "Forever Skies",
        "preco": 23.99,
        "img": "out/593.jpg",
        "rating": 0.8895705521472392,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 594,
        "nome": "Nova Lands",
        "preco": 17.99,
        "img": "out/594.jpg",
        "rating": 0.9301587301587302,
        "categorias": [
            "Aventura",
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 595,
        "nome": "Trepang2",
        "preco": 29.99,
        "img": "out/595.jpg",
        "rating": 0.9570909090909091,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie"
        ]
    },
    {
        "id": 596,
        "nome": "Take Me To The Dungeon!!",
        "preco": 9.89,
        "img": "out/596.jpg",
        "rating": 0,
        "categorias": [
            "Aventura",
            "Casual",
            "Indie",
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 597,
        "nome": "Ghost Trick: Phantom Detective",
        "preco": 29.99,
        "img": "out/597.jpg",
        "rating": 0.9487179487179487,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 598,
        "nome": "STORY OF SEASONS: A Wonderful Life",
        "preco": 49.99,
        "img": "out/598.jpg",
        "rating": 0.7515337423312883,
        "categorias": [
            "Casual",
            "RPG",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 599,
        "nome": "Jagged Alliance 3",
        "preco": 44.99,
        "img": "out/599.jpg",
        "rating": 0.8110552763819096,
        "categorias": [
            "A\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 600,
        "nome": "Exoprimal",
        "preco": 59.99,
        "img": "out/600.jpg",
        "rating": 0.6958041958041958,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 601,
        "nome": "Xenonauts 2",
        "preco": 29.99,
        "img": "out/601.jpg",
        "rating": 0.7428087986463621,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 602,
        "nome": "Techtonica",
        "preco": 25.49,
        "img": "out/602.jpg",
        "rating": 0.8033980582524272,
        "categorias": [
            "Aventura",
            "Casual",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 603,
        "nome": "Lakeburg Legacies",
        "preco": 19.54,
        "img": "out/603.jpg",
        "rating": 0.5880281690140845,
        "categorias": [
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 604,
        "nome": "Punch Club 2: Fast Forward",
        "preco": 19.99,
        "img": "out/604.jpg",
        "rating": 0.8352941176470589,
        "categorias": [
            "Aventura",
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Esportes",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 605,
        "nome": "Gunsmith Simulator",
        "preco": 17.99,
        "img": "out/605.jpg",
        "rating": 0.8293413173652695,
        "categorias": [
            "A\u00e7\u00e3o",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 606,
        "nome": "Ratchet & Clank: Rift Apart",
        "preco": 59.99,
        "img": "out/606.jpg",
        "rating": 0.8450238707308116,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 607,
        "nome": "Let's School",
        "preco": 17.99,
        "img": "out/607.jpg",
        "rating": 0.8989547038327527,
        "categorias": [
            "Casual",
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 608,
        "nome": "Remnant II",
        "preco": 49.99,
        "img": "out/608.jpg",
        "rating": 0.79669152309934,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 609,
        "nome": "Sanfu",
        "preco": 9.89,
        "img": "out/609.jpg",
        "rating": 0.8495082355729352,
        "categorias": [
            "Aventura",
            "Indie",
            "RPG"
        ]
    },
    {
        "id": 610,
        "nome": "Thronefall",
        "preco": 6.29,
        "img": "out/610.jpg",
        "rating": 0.968408262454435,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 611,
        "nome": "The Texas Chain Saw Massacre",
        "preco": 39.99,
        "img": "out/611.jpg",
        "rating": 0.8267191038016923,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie"
        ]
    },
    {
        "id": 612,
        "nome": "Blasphemous 2",
        "preco": 29.99,
        "img": "out/612.jpg",
        "rating": 0.936153544849197,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie"
        ]
    },
    {
        "id": 613,
        "nome": "ARMORED CORE\u2122 VI FIRES OF RUBICON\u2122",
        "preco": 59.99,
        "img": "out/613.jpg",
        "rating": 0.8497312791114296,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 614,
        "nome": "Madden NFL 24",
        "preco": 69.99,
        "img": "out/614.jpg",
        "rating": 0.30154071900220103,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Esportes",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 615,
        "nome": "Sengoku Dynasty",
        "preco": 29.99,
        "img": "out/615.jpg",
        "rating": 0.7142857142857143,
        "categorias": [
            "Aventura",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 616,
        "nome": "Shadow Gambit: The Cursed Crew",
        "preco": 39.99,
        "img": "out/616.jpg",
        "rating": 0.9516331658291457,
        "categorias": [
            "Aventura",
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 617,
        "nome": "BOOK OF HOURS",
        "preco": 24.99,
        "img": "out/617.jpg",
        "rating": 0.9410131852879945,
        "categorias": [
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 618,
        "nome": "Sunkenland",
        "preco": 19.99,
        "img": "out/618.jpg",
        "rating": 0.7279815189142362,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "Early Access"
        ]
    },
    {
        "id": 619,
        "nome": "The Matchless Kungfu",
        "preco": 14.99,
        "img": "out/619.jpg",
        "rating": 0.8379254457050244,
        "categorias": [
            "Indie",
            "RPG",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 620,
        "nome": "Bomb Rush Cyberfunk",
        "preco": 39.99,
        "img": "out/620.jpg",
        "rating": 0.9818438216111405,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie"
        ]
    },
    {
        "id": 621,
        "nome": "To The Core",
        "preco": 7.99,
        "img": "out/621.jpg",
        "rating": 0.9355495251017639,
        "categorias": [
            "Aventura",
            "Casual",
            "Indie"
        ]
    },
    {
        "id": 622,
        "nome": "Wayfinder",
        "preco": 19.99,
        "img": "out/622.jpg",
        "rating": 0.45195296661711043,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Casual",
            "MMO",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 623,
        "nome": "Sea of Stars",
        "preco": 31.49,
        "img": "out/623.jpg",
        "rating": 0.8799414348462665,
        "categorias": [
            "Aventura",
            "Indie",
            "RPG"
        ]
    },
    {
        "id": 624,
        "nome": "Trine 5: A Clockwork Conspiracy",
        "preco": 29.99,
        "img": "out/624.jpg",
        "rating": 0.952054794520548,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "RPG"
        ]
    },
    {
        "id": 625,
        "nome": "EA SPORTS\u2122 WRC",
        "preco": 49.99,
        "img": "out/625.jpg",
        "rating": 0.7295825771324864,
        "categorias": [
            "Corrida",
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 626,
        "nome": "ARK: Survival Ascended",
        "preco": 44.99,
        "img": "out/626.jpg",
        "rating": 0.5911189846949148,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "MMO",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 627,
        "nome": "Lies of P",
        "preco": 59.99,
        "img": "out/627.jpg",
        "rating": 0.9238999059940015,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 628,
        "nome": "For The King II",
        "preco": 24.99,
        "img": "out/628.jpg",
        "rating": 0.701274822260358,
        "categorias": [
            "Aventura",
            "Indie",
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 629,
        "nome": "Lords of the Fallen",
        "preco": 59.99,
        "img": "out/629.jpg",
        "rating": 0.6214724646757211,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 630,
        "nome": "Starfield",
        "preco": 69.99,
        "img": "out/630.jpg",
        "rating": 0.6688907957944712,
        "categorias": [
            "RPG"
        ]
    },
    {
        "id": 631,
        "nome": "Party Animals",
        "preco": 19.99,
        "img": "out/631.jpg",
        "rating": 0.7258703481392557,
        "categorias": [
            "A\u00e7\u00e3o",
            "Casual",
            "Indie"
        ]
    },
    {
        "id": 632,
        "nome": "Like a Dragon Gaiden: The Man Who Erased His Name",
        "preco": 49.99,
        "img": "out/632.jpg",
        "rating": 0.9753041583439259,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 633,
        "nome": "The Talos Principle 2",
        "preco": 29.99,
        "img": "out/633.jpg",
        "rating": 0.9651856126178111,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura"
        ]
    },
    {
        "id": 634,
        "nome": "Death Must Die",
        "preco": 6.99,
        "img": "out/634.jpg",
        "rating": 0.9199096158674366,
        "categorias": [
            "A\u00e7\u00e3o",
            "Casual",
            "Indie",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 635,
        "nome": "Magicraft",
        "preco": 9.99,
        "img": "out/635.jpg",
        "rating": 0.8957483983692487,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "RPG",
            "Early Access"
        ]
    },
    {
        "id": 636,
        "nome": "EA SPORTS FC\u2122 24",
        "preco": 69.99,
        "img": "out/636.jpg",
        "rating": 0.5781717534410533,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 637,
        "nome": "My Suika - Watermelon Game",
        "preco": 0.89,
        "img": "out/637.jpg",
        "rating": 0,
        "categorias": [
            "Casual",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 638,
        "nome": "Last Train Home",
        "preco": 33.99,
        "img": "out/638.jpg",
        "rating": 0.8582089552238806,
        "categorias": [
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 639,
        "nome": "Risk of Rain Returns",
        "preco": 14.99,
        "img": "out/639.jpg",
        "rating": 0.9055352143010984,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 640,
        "nome": "Diablo\u00ae IV",
        "preco": 69.99,
        "img": "out/640.jpg",
        "rating": 0.5787965616045845,
        "categorias": [
            "A\u00e7\u00e3o",
            "RPG"
        ]
    },
    {
        "id": 641,
        "nome": "Love Is All Around",
        "preco": 9.99,
        "img": "out/641.jpg",
        "rating": 0.9537791978845306,
        "categorias": [
            "Aventura",
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 642,
        "nome": "Ratopia",
        "preco": 19.99,
        "img": "out/642.jpg",
        "rating": 0.8881535407015222,
        "categorias": [
            "Aventura",
            "Casual",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 643,
        "nome": "Mortal Kombat 1",
        "preco": 69.99,
        "img": "out/643.jpg",
        "rating": 0.7383908548925231,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 644,
        "nome": "Lethal Company",
        "preco": 9.99,
        "img": "out/644.jpg",
        "rating": 0.9879661761672899,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "Indie",
            "Early Access"
        ]
    },
    {
        "id": 645,
        "nome": "Wandering Sword",
        "preco": 24.99,
        "img": "out/645.jpg",
        "rating": 0.9221494102228047,
        "categorias": [
            "Aventura",
            "Indie",
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 646,
        "nome": "NBA 2K24",
        "preco": 26.99,
        "img": "out/646.jpg",
        "rating": 0.156155691402925,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Esportes"
        ]
    },
    {
        "id": 647,
        "nome": "Yog-Sothoth\u2019s Yard",
        "preco": 10.99,
        "img": "out/647.jpg",
        "rating": 0.9377057482907065,
        "categorias": [
            "Indie",
            "RPG",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 648,
        "nome": "Cities: Skylines II",
        "preco": 49.99,
        "img": "out/648.jpg",
        "rating": 0.6075063613231552,
        "categorias": [
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 649,
        "nome": "Football Manager 2024",
        "preco": 59.99,
        "img": "out/649.jpg",
        "rating": 0.8741088180112571,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Esportes",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 650,
        "nome": "Stronghold: Definitive Edition",
        "preco": 14.99,
        "img": "out/650.jpg",
        "rating": 0.8751677852348994,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 651,
        "nome": "PAYDAY 3",
        "preco": 39.99,
        "img": "out/651.jpg",
        "rating": 0.42447464397360196,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "RPG"
        ]
    },
    {
        "id": 652,
        "nome": "The Front",
        "preco": 19.99,
        "img": "out/652.jpg",
        "rating": 0.721072226358898,
        "categorias": [
            "A\u00e7\u00e3o",
            "Indie",
            "MMO",
            "Simula\u00e7\u00e3o",
            "Early Access"
        ]
    },
    {
        "id": 653,
        "nome": "SteamWorld Build",
        "preco": 26.99,
        "img": "out/653.jpg",
        "rating": 0.8275862068965517,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 654,
        "nome": "Warhammer 40,000: Rogue Trader",
        "preco": 49.99,
        "img": "out/654.jpg",
        "rating": 0.8514238547255468,
        "categorias": [
            "Aventura",
            "Indie",
            "RPG",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 655,
        "nome": "The Day Before",
        "preco": 39.99,
        "img": "out/655.jpg",
        "rating": 0.1993971449695729,
        "categorias": [
            "A\u00e7\u00e3o",
            "Aventura",
            "MMO",
            "Early Access"
        ]
    },
    {
        "id": 656,
        "nome": "Railroader",
        "preco": 29.99,
        "img": "out/656.jpg",
        "rating": 0,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 657,
        "nome": "House Flipper 2",
        "preco": 35.99,
        "img": "out/657.jpg",
        "rating": 0.8343982960596379,
        "categorias": [
            "Casual",
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 658,
        "nome": "(the) Gnorp Apologue",
        "preco": 6.29,
        "img": "out/658.jpg",
        "rating": 0.9816176470588235,
        "categorias": [
            "Casual",
            "Indie",
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia"
        ]
    },
    {
        "id": 659,
        "nome": "Pioneers of Pagonia",
        "preco": 25.49,
        "img": "out/659.jpg",
        "rating": 0.8896940418679549,
        "categorias": [
            "Simula\u00e7\u00e3o",
            "Estrat\u00e9gia",
            "Early Access"
        ]
    },
    {
        "id": 660,
        "nome": "Granblue Fantasy Versus: Rising",
        "preco": 49.99,
        "img": "out/660.jpg",
        "rating": 0.8063555114200596,
        "categorias": [
            "A\u00e7\u00e3o"
        ]
    },
    {
        "id": 661,
        "nome": "Five Nights at Freddy's: Help Wanted 2",
        "preco": 39.99,
        "img": "out/661.jpg",
        "rating": 0.9112050739957717,
        "categorias": [
            "Indie",
            "Simula\u00e7\u00e3o"
        ]
    },
    {
        "id": 662,
        "nome": "The Arrogant Kaiju Princess and The Detective Servant",
        "preco": 13.49,
        "img": "out/662.jpg",
        "rating": 0,
        "categorias": [
            "Casual",
            "Indie",
            "RPG"
        ]
    }
]