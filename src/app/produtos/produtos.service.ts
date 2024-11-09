import { Injectable } from "@angular/core";
import { Produto } from "./produtos.model";

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  private readonly PRODUTOS_STORAGE_KEY = "SAVE_POINT_PRODUTOS";

  findAll(): Produto[] {
    const produtsStr = window.localStorage.getItem(this.PRODUTOS_STORAGE_KEY) || '';
    return JSON.parse(produtsStr).splice(0, 10);
  }

  createAllProducts() {
    const produtsStr = window.localStorage.getItem(this.PRODUTOS_STORAGE_KEY) || '';
    if (produtsStr === '') {
      window.localStorage.setItem(this.PRODUTOS_STORAGE_KEY, JSON.stringify(PRODUTOS));
    }
  }
}

const PRODUTOS = [
  {
    "nome": "Far Cry\u00ae 5",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/552520/header.jpg?t=1628209646",
    "rating": 0.7991676329960447,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Forza Horizon 4",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1622068013",
    "rating": 0.8903250650275368,
    "categorias": [
      "Racing"
    ]
  },
  {
    "nome": "Oxygen Not Included",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/457140/header_alt_assets_6.jpg?t=1654189805",
    "rating": 0.9649192234275339,
    "categorias": [
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "DEVOUR",
    "preco": 3.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1274570/header.jpg?t=1658167349",
    "rating": 0.9185755150009979,
    "categorias": [
      "Indie"
    ]
  },
  {
    "nome": "Mafia: Definitive Edition",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1030840/header.jpg?t=1632420251",
    "rating": 0.8675746823852581,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "American Truck Simulator",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/270880/header.jpg?t=1657337326",
    "rating": 0.964393799594021,
    "categorias": [
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "Fallout: New Vegas",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/22380/header.jpg?t=1586905021",
    "rating": 0.9646942284688995,
    "categorias": [
      "Action",
      "RPG"
    ]
  },
  {
    "nome": "Car Mechanic Simulator 2021",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1190000/header.jpg?t=1658480261",
    "rating": 0.9566162040930755,
    "categorias": [
      "Racing",
      "Simulation"
    ]
  },
  {
    "nome": "Middle-earth\u2122: Shadow of War\u2122",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/356190/header.jpg?t=1575317164",
    "rating": 0.8723811000025834,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Garry's Mod",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/4000/header.jpg?t=1617307042",
    "rating": 0.9659309550937945,
    "categorias": [
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "SCUM",
    "preco": 34.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/513710/header.jpg?t=1656592082",
    "rating": 0.7450837483634989,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "Massively Multiplayer",
      "Early Access"
    ]
  },
  {
    "nome": "NARAKA: BLADEPOINT",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1203220/header.jpg?t=1655953882",
    "rating": 0.782826872314165,
    "categorias": [
      "Action",
      "Adventure",
      "Massively Multiplayer"
    ]
  },
  {
    "nome": "Sekiro\u2122: Shadows Die Twice - GOTY Edition",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/814380/header.jpg?t=1603904569",
    "rating": 0.950544649618454,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Ori and the Will of the Wisps",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1057090/header.jpg?t=1612897638",
    "rating": 0.9647672219922352,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Insurgency: Sandstorm",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/581320/header.jpg?t=1657215131",
    "rating": 0.8506593577080209,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "FINAL FANTASY X/X-2 HD Remaster",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/359870/header.jpg?t=1646911512",
    "rating": 0.9080467722964091,
    "categorias": [
      "RPG"
    ]
  },
  {
    "nome": "Motorsport Manager",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/415200/header.jpg?t=1603128727",
    "rating": 0.9165589173347125,
    "categorias": [
      "Racing",
      "Simulation",
      "Sports",
      "Strategy"
    ]
  },
  {
    "nome": "DRAGON BALL Z: KAKAROT",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/851850/header.jpg?t=1658451413",
    "rating": 0.9312396195077759,
    "categorias": [
      "Action",
      "RPG"
    ]
  },
  {
    "nome": "Avorion",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/445220/header.jpg?t=1631020795",
    "rating": 0.9044555860372718,
    "categorias": [
      "Action",
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "Blade and Sorcery",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/629730/header.jpg?t=1635526484",
    "rating": 0.964989854326297,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "RPG",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "Workers & Resources: Soviet Republic",
    "preco": 34.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/784150/header.jpg?t=1652709822",
    "rating": 0.9056603773584906,
    "categorias": [
      "Indie",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "\u9b3c\u8c37\u516b\u8352 Tale of Immortal",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1468810/header.jpg?t=1656671880",
    "rating": 0.5041211222464063,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "RPG",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "Geometry Dash",
    "preco": 3.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/322170/header.jpg?t=1624472273",
    "rating": 0.936523247103732,
    "categorias": [
      "Action",
      "Indie"
    ]
  },
  {
    "nome": "Foxhole",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/505460/header.jpg?t=1656858811",
    "rating": 0.8359300200191487,
    "categorias": [
      "Action",
      "Indie",
      "Massively Multiplayer",
      "RPG",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Train Simulator Classic",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/24010/header.jpg?t=1658409119",
    "rating": 0.6895566295440219,
    "categorias": [
      "Simulation"
    ]
  },
  {
    "nome": "Cuphead",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/268910/header.jpg?t=1658257946",
    "rating": 0.9653827226770456,
    "categorias": [
      "Action",
      "Indie"
    ]
  },
  {
    "nome": "Cookie Clicker",
    "preco": 4.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1454400/header.jpg?t=1654840309",
    "rating": 0.9746389471232239,
    "categorias": [
      "Casual",
      "Indie",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Richman10",
    "preco": 13.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1162520/header.jpg?t=1627366684",
    "rating": 0.5222682119205299,
    "categorias": [
      "Casual",
      "Strategy"
    ]
  },
  {
    "nome": "FINAL FANTASY VII REMAKE INTERGRADE",
    "preco": 69.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1462040/header.jpg?t=1655449232",
    "rating": 0.8934652180963191,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Planet Zoo",
    "preco": 44.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/703080/header.jpg?t=1655824420",
    "rating": 0.902243207309174,
    "categorias": [
      "Casual",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "ATLAS",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/834910/header.jpg?t=1628208672",
    "rating": 0.47423138659093717,
    "categorias": [
      "Action",
      "Adventure",
      "Massively Multiplayer",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "My Summer Car",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/516750/header.jpg?t=1603195332",
    "rating": 0.9376943452723713,
    "categorias": [
      "Indie",
      "Racing",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "BATTLETECH",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/637090/header.jpg?t=1615972925",
    "rating": 0.826318999695029,
    "categorias": [
      "Action",
      "Adventure",
      "Strategy"
    ]
  },
  {
    "nome": "Library Of Ruina",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1256670/header.jpg?t=1631308649",
    "rating": 0.930086519676249,
    "categorias": [
      "Indie",
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "Beasts of Bermuda",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/719890/header.jpg?t=1652434628",
    "rating": 0.7297441364605544,
    "categorias": [
      "Adventure",
      "Indie",
      "Massively Multiplayer",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "DRAGON QUEST\u00ae XI S: Echoes of an Elusive Age\u2122 - Definitive Edition",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1295510/header.jpg?t=1622131694",
    "rating": 0.9455026455026455,
    "categorias": [
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Skul: The Hero Slayer",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1147560/header.jpg?t=1656292935",
    "rating": 0.9328810831009802,
    "categorias": [
      "Action",
      "Indie"
    ]
  },
  {
    "nome": "DRAGON BALL FighterZ",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/678950/header.jpg?t=1653936849",
    "rating": 0.8993619544145602,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Persona 4 Golden",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1113000/header.jpg?t=1626689322",
    "rating": 0.9718262351541834,
    "categorias": [
      "RPG"
    ]
  },
  {
    "nome": "Age of Mythology: Extended Edition",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/266840/header.jpg?t=1620145994",
    "rating": 0.9190299085696575,
    "categorias": [
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Green Hell",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/815370/header.jpg?t=1658331014",
    "rating": 0.8707163156135072,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "ARK: Survival Evolved",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/346110/header.jpg?t=1655137924",
    "rating": 0.8238325230068467,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "Massively Multiplayer",
      "RPG"
    ]
  },
  {
    "nome": "WARRIORS OROCHI 3 Ultimate Definitive Edition",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1879330/header.jpg?t=1657674001",
    "rating": 0.8790035587188612,
    "categorias": [
      "Action",
      "Strategy"
    ]
  },
  {
    "nome": "Lobotomy Corporation | Monster Management Simulation",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/568220/header.jpg?t=1636694188",
    "rating": 0.9406732752981433,
    "categorias": [
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "Age of Empires II (2013)",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/221380/header.jpg?t=1620144521",
    "rating": 0.9566637768802994,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "SPORE\u2122",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/17390/header.jpg?t=1642702281",
    "rating": 0.9195468171398342,
    "categorias": [
      "Action",
      "Adventure",
      "Casual",
      "RPG",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Barotrauma",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/602960/header.jpg?t=1651768316",
    "rating": 0.9239583333333333,
    "categorias": [
      "Action",
      "Indie",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Total War: ATTILA",
    "preco": 44.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/325610/header.jpg?t=1610534671",
    "rating": 0.8070815968036372,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "STAR WARS\u2122 Empire at War - Gold Pack",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/32470/header.jpg?t=1586462434",
    "rating": 0.9743849949259894,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "PGA TOUR 2K21",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1016120/header.jpg?t=1644357004",
    "rating": 0.8358831710709318,
    "categorias": [
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "New World",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1063730/header.jpg?t=1653580979",
    "rating": 0.6770302516454413,
    "categorias": [
      "Action",
      "Adventure",
      "Massively Multiplayer",
      "RPG"
    ]
  },
  {
    "nome": "Resident Evil Village",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1196590/header.jpg?t=1655156871",
    "rating": 0.9591934709553529,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Total War: NAPOLEON \u2013 Definitive Edition",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/34030/header.jpg?t=1603132402",
    "rating": 0.918832697034674,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "Rocksmith\u00ae 2014 Edition - Remastered",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/221680/header.jpg?t=1576502446",
    "rating": 0.9189050645888867,
    "categorias": [
      "Casual",
      "Simulation"
    ]
  },
  {
    "nome": "Dinkum",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1062520/header.jpg?t=1657785140",
    "rating": 0.9489616332277367,
    "categorias": [
      "Indie",
      "RPG",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "Ready or Not",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1144200/header.jpg?t=1656646890",
    "rating": 0.9254663543794953,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "Early Access"
    ]
  },
  {
    "nome": "The Sims\u2122 4",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1222670/header.jpg?t=1657912698",
    "rating": 0.8748382543230209,
    "categorias": [
      "Casual",
      "Simulation"
    ]
  },
  {
    "nome": "Stronghold Crusader HD",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/40970/header.jpg?t=1628503448",
    "rating": 0.9742173112338858,
    "categorias": [
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Cyberpunk 2077",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg?t=1649065890",
    "rating": 0.7508953770169949,
    "categorias": [
      "RPG"
    ]
  },
  {
    "nome": "Detroit: Become Human",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1222140/header.jpg?t=1625648054",
    "rating": 0.9269397293527292,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Tom Clancy's Rainbow Six\u00ae Siege",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/359550/header.jpg?t=1655223333",
    "rating": 0.8702783588756272,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Mafia III: Definitive Edition",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/360430/header.jpg?t=1602775991",
    "rating": 0.560953488372093,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "The Binding of Isaac: Rebirth",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/250900/header.jpg?t=1617174663",
    "rating": 0.9769211704159437,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Wobbly Life",
    "preco": 13.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1211020/header.jpg?t=1656085991",
    "rating": 0.9685623003194889,
    "categorias": [
      "Action",
      "Adventure",
      "Casual",
      "Indie",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "FIFA 22",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1506830/header.jpg?t=1653581021",
    "rating": 0.7956248780543791,
    "categorias": [
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "Clanfolk",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1700870/header.jpg?t=1658197701",
    "rating": 0.8890977443609023,
    "categorias": [
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "DOOM",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/379720/header.jpg?t=1593395083",
    "rating": 0.9526498930939277,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Squad",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/393380/header.jpg?t=1656008014",
    "rating": 0.8793525179856115,
    "categorias": [
      "Action",
      "Indie",
      "Strategy"
    ]
  },
  {
    "nome": "Microsoft Flight Simulator Game of the Year Edition",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1250410/header.jpg?t=1655148097",
    "rating": 0.7612418317534932,
    "categorias": [
      "Simulation"
    ]
  },
  {
    "nome": "METAL GEAR SOLID V: THE PHANTOM PAIN",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/287700/header.jpg?t=1653977206",
    "rating": 0.9085754415168934,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "LEGO\u00ae Star Wars\u2122: The Skywalker Saga",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/920210/header.jpg?t=1652462340",
    "rating": 0.9232983113145393,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Mortal Online 2",
    "preco": 26.79,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1170950/header.jpg?t=1651856135",
    "rating": 0.6031464095407257,
    "categorias": [
      "Action",
      "Indie",
      "Massively Multiplayer",
      "RPG"
    ]
  },
  {
    "nome": "No Man's Sky",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/275850/header_alt_assets_12.jpg?t=1658387858",
    "rating": 0.7610099750101508,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Jurassic World Evolution 2",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1244460/header.jpg?t=1656322536",
    "rating": 0.8278282716323062,
    "categorias": [
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Battlefield V",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1238810/header.jpg?t=1641312066",
    "rating": 0.7069322627662566,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "BeamNG.drive",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/284160/header.jpg?t=1655290741",
    "rating": 0.9680817885152251,
    "categorias": [
      "Racing",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "Ravenfield",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/636480/header.jpg?t=1625750153",
    "rating": 0.9705373978629792,
    "categorias": [
      "Action",
      "Indie",
      "Early Access"
    ]
  },
  {
    "nome": "Europa Universalis IV",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/236850/header.jpg?t=1653383580",
    "rating": 0.864486675079801,
    "categorias": [
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "OUTRIDERS",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/680420/header_alt_assets_2.jpg?t=1657806851",
    "rating": 0.6550899249170595,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "NBA 2K22",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1644960/header.jpg?t=1656687987",
    "rating": 0.5664630421502749,
    "categorias": [
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "MultiVersus",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1818750/header.jpg?t=1658442975",
    "rating": 0.9194845460711172,
    "categorias": [
      "Action",
      "Free to Play"
    ]
  },
  {
    "nome": "The Elder Scrolls V: Skyrim",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/72850/header.jpg?t=1647357402",
    "rating": 0.9482696880050843,
    "categorias": [
      "RPG"
    ]
  },
  {
    "nome": "Medieval Dynasty",
    "preco": 34.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1129580/header.jpg?t=1656927198",
    "rating": 0.9065331968300914,
    "categorias": [
      "Action",
      "Adventure",
      "RPG",
      "Simulation"
    ]
  },
  {
    "nome": "Scrap Mechanic",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/387990/header.jpg?t=1593703247",
    "rating": 0.9280679377013964,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "Stray",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1332010/header.jpg?t=1658671406",
    "rating": 0.9773657955476137,
    "categorias": [
      "Adventure",
      "Indie"
    ]
  },
  {
    "nome": "My Time at Sandrock",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1084600/header.jpg?t=1657680474",
    "rating": 0.8678812741312741,
    "categorias": [
      "Adventure",
      "Casual",
      "Indie",
      "RPG",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "F1\u00ae 2021",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1134570/header.jpg?t=1647533893",
    "rating": 0.8529921683505709,
    "categorias": [
      "Racing",
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "Sid Meier's Civilization\u00ae V",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/8930/header.jpg?t=1579731804",
    "rating": 0.9614478186944451,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "State of Decay 2: Juggernaut Edition",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/495420/header.jpg?t=1656875548",
    "rating": 0.8119704837387264,
    "categorias": [
      "Action",
      "RPG",
      "Simulation"
    ]
  },
  {
    "nome": "Forza Horizon 5",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1658260306",
    "rating": 0.8731237297681138,
    "categorias": [
      "Action",
      "Adventure",
      "Racing",
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "Dying Light",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/239140/header.jpg?t=1657116172",
    "rating": 0.950255358627999,
    "categorias": [
      "Action",
      "RPG"
    ]
  },
  {
    "nome": "Titan Quest Anniversary Edition",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/475150/header.jpg?t=1638867197",
    "rating": 0.9091940573697833,
    "categorias": [
      "Action",
      "RPG"
    ]
  },
  {
    "nome": "\u68a6\u6c5f\u6e56",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1471180/header.jpg?t=1658282148",
    "rating": 0.5072463768115942,
    "categorias": [
      "Casual",
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "Necrosmith",
    "preco": 2.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1949190/header_alt_assets_4.jpg?t=1658404609",
    "rating": 0.8570544554455446,
    "categorias": [
      "Adventure",
      "Indie",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "DRAGON BALL XENOVERSE 2",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/454650/header.jpg?t=1653935262",
    "rating": 0.8844017282426594,
    "categorias": [
      "Action",
      "Adventure",
      "Casual",
      "Massively Multiplayer"
    ]
  },
  {
    "nome": "Need for Speed\u2122 Heat",
    "preco": 69.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1222680/header.jpg?t=1649949359",
    "rating": 0.8338037824105811,
    "categorias": [
      "Action",
      "Adventure",
      "Racing",
      "Sports"
    ]
  },
  {
    "nome": "DiRT Rally 2.0",
    "preco": 4.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/690790/header.jpg?t=1626343640",
    "rating": 0.8579434015130288,
    "categorias": [
      "Racing",
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "Metro Exodus",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/412020/header.jpg?t=1649065184",
    "rating": 0.8877328785095775,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "\u61d2\u4eba\u4fee\u4ed9\u4f202",
    "preco": 7.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1266630/header.jpg?t=1655848955",
    "rating": 0.8223844282238443,
    "categorias": [
      "Casual",
      "Indie",
      "RPG",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "Ultimate Admiral: Dreadnoughts",
    "preco": 34.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1069660/header.jpg?t=1650992145",
    "rating": 0.783288409703504,
    "categorias": [
      "Indie",
      "RPG",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "GUILTY GEAR -STRIVE-",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/header.jpg?t=1655197051",
    "rating": 0.9168116345417855,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "The Forest",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/242760/header.jpg?t=1590522045",
    "rating": 0.9520671477927459,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "Hell Let Loose",
    "preco": 26.79,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/686810/header.jpg?t=1658392444",
    "rating": 0.8511754773347188,
    "categorias": [
      "Action",
      "Indie",
      "Massively Multiplayer",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "X4: Foundations",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/392160/header.jpg?t=1651672910",
    "rating": 0.7591522157996147,
    "categorias": [
      "Action",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "FTL: Faster Than Light",
    "preco": 2.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/212680/header.jpg?t=1589331228",
    "rating": 0.9586427933064193,
    "categorias": [
      "Indie",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Halo: The Master Chief Collection",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/976730/header.jpg?t=1649955774",
    "rating": 0.9276835863005826,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Total War\u2122: ROME II - Emperor Edition",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/214950/header.jpg?t=1610468283",
    "rating": 0.8099604678648572,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "Brick Rigs",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/552100/header.jpg?t=1657345335",
    "rating": 0.9270247102232493,
    "categorias": [
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "OVR Toolkit",
    "preco": 11.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1068820/header.jpg?t=1643053241",
    "rating": 0.8898172323759791,
    "categorias": [
      "Utilities"
    ]
  },
  {
    "nome": "Call of Duty\u00ae: Black Ops III",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/311210/header.jpg?t=1646763462",
    "rating": 0.8034861885580769,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "The Long Dark",
    "preco": 34.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/305620/header.jpg?t=1657906166",
    "rating": 0.914912941384963,
    "categorias": [
      "Adventure",
      "Indie",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Melvor Idle",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1267910/header.jpg?t=1657552251",
    "rating": 0.9342126689464256,
    "categorias": [
      "Adventure",
      "Casual",
      "Indie",
      "RPG"
    ]
  },
  {
    "nome": "Red Dead Online",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1404210/header.jpg?t=1656615218",
    "rating": 0.8437466463480071,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "ICARUS",
    "preco": 34.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1149460/header.jpg?t=1657770710",
    "rating": 0.6513734899884164,
    "categorias": [
      "Action",
      "Adventure",
      "Simulation"
    ]
  },
  {
    "nome": "Assetto Corsa",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/244210/header.jpg?t=1651677274",
    "rating": 0.9186072579515202,
    "categorias": [
      "Indie",
      "Racing",
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "Aseprite",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/431730/header.jpg?t=1654097228",
    "rating": 0.9937821032711543,
    "categorias": [
      "Animation & Modeling",
      "Design & Illustration",
      "Game Development"
    ]
  },
  {
    "nome": "Inscryption",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1092790/header.jpg?t=1656867621",
    "rating": 0.971391329142283,
    "categorias": [
      "Adventure",
      "Indie",
      "Strategy"
    ]
  },
  {
    "nome": "Age of Empires III: Definitive Edition",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/933110/header.jpg?t=1657168033",
    "rating": 0.7954913170100313,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "Sword and Fairy Inn 2",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1918680/header.jpg?t=1657710679",
    "rating": 0.45645645645645644,
    "categorias": [
      "Casual",
      "RPG",
      "Simulation"
    ]
  },
  {
    "nome": "Space Engineers",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/244850/header.jpg?t=1651568388",
    "rating": 0.8806032823599398,
    "categorias": [
      "Action",
      "Indie",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Empyrion - Galactic Survival",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/383120/header.jpg?t=1626770358",
    "rating": 0.808290711398834,
    "categorias": [
      "Adventure",
      "Indie",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Microsoft Flight Simulator X: Steam Edition",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/314160/header.jpg?t=1570632379",
    "rating": 0.8586627492877493,
    "categorias": [
      "Simulation"
    ]
  },
  {
    "nome": "Mount & Blade II: Bannerlord",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/261550/header.jpg?t=1641803125",
    "rating": 0.8767904412149367,
    "categorias": [
      "Action",
      "RPG",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Transport Fever 2",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1066780/header.jpg?t=1648670217",
    "rating": 0.8836994752926253,
    "categorias": [
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Soundpad",
    "preco": 4.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/629520/header.jpg?t=1577013777",
    "rating": 0.9665219941348974,
    "categorias": [
      "Audio Production",
      "Utilities"
    ]
  },
  {
    "nome": "The Riftbreaker",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/780310/header.jpg?t=1649847486",
    "rating": 0.919015981325193,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "RPG",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Raft",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/648800/header.jpg?t=1655744208",
    "rating": 0.9321317493499209,
    "categorias": [
      "Adventure",
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "Teardown",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1167630/header.jpg?t=1656046119",
    "rating": 0.9584468813359786,
    "categorias": [
      "Action",
      "Indie",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Yakuza: Like a Dragon",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1235140/header.jpg?t=1632304741",
    "rating": 0.9630974346765073,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Pillars of Eternity II: Deadfire",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/560130/header.jpg?t=1651025588",
    "rating": 0.874806800618238,
    "categorias": [
      "RPG"
    ]
  },
  {
    "nome": "F1\u00ae 22",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1692250/header.jpg?t=1658338038",
    "rating": 0.6627938764352105,
    "categorias": [
      "Racing",
      "Sports"
    ]
  },
  {
    "nome": "Kerbal Space Program",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/220200/header.jpg?t=1624555019",
    "rating": 0.9492270992366412,
    "categorias": [
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "RPG Maker MV",
    "preco": 15.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/363890/header.jpg?t=1657157949",
    "rating": 0.9176041831722389,
    "categorias": [
      "Design & Illustration",
      "Web Publishing"
    ]
  },
  {
    "nome": "Borderlands 3",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/397540/header.jpg?t=1657214217",
    "rating": 0.8433191300230924,
    "categorias": [
      "Action",
      "RPG"
    ]
  },
  {
    "nome": "CarX Drift Racing Online",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/635260/header.jpg?t=1656514798",
    "rating": 0.9530357066128131,
    "categorias": [
      "Massively Multiplayer",
      "Racing",
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "Elite Dangerous",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/359320/header.jpg?t=1654873588",
    "rating": 0.7744945191738274,
    "categorias": [
      "Action",
      "Adventure",
      "Massively Multiplayer",
      "RPG",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "OMSI 2: Steam Edition",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/252530/header.jpg?t=1650531539",
    "rating": 0.840121171322787,
    "categorias": [
      "Casual",
      "Simulation"
    ]
  },
  {
    "nome": "\u518d\u5237\u4e00\u628a PlayAgain",
    "preco": 6.29,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2059790/header.jpg?t=1658549010",
    "rating": 0.7473637961335676,
    "categorias": [
      "Adventure",
      "Indie",
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "DEATH STRANDING DIRECTOR'S CUT",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1850570/header.jpg?t=1649438096",
    "rating": 0.9167604049493814,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Street Fighter V",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1650011214",
    "rating": 0.6496034038976729,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Into the Breach",
    "preco": 10.04,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/590380/header.jpg?t=1658236736",
    "rating": 0.9447322970639033,
    "categorias": [
      "Indie",
      "RPG",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Resident Evil 6",
    "preco": 7.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/221040/header.jpg?t=1650849821",
    "rating": 0.8015409208836709,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Men of War: Assault Squad 2",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/244450/header.jpg?t=1656590933",
    "rating": 0.9080921680302987,
    "categorias": [
      "Action",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "World War Z: Aftermath",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/699130/header.jpg?t=1635246255",
    "rating": 0.8382917466410749,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Pathfinder: Wrath of the Righteous",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1184370/header.jpg?t=1658242001",
    "rating": 0.8471526986172374,
    "categorias": [
      "Adventure",
      "Indie",
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "Dragon Age: Origins - Ultimate Edition",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/47810/header.jpg?t=1615244558",
    "rating": 0.90653382506743,
    "categorias": [
      "RPG"
    ]
  },
  {
    "nome": "Chivalry 2",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1824220/header.jpg?t=1655477182",
    "rating": 0.8193803559657218,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Counter-Strike: Source",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/240/header.jpg?t=1602536047",
    "rating": 0.9619356721400152,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "People Playground",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1118200/header.jpg?t=1649350842",
    "rating": 0.9888830974848883,
    "categorias": [
      "Action",
      "Casual",
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "Divinity: Original Sin 2 - Definitive Edition",
    "preco": 44.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/435150/header.jpg?t=1631177562",
    "rating": 0.9603606288652112,
    "categorias": [
      "Adventure",
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "It Takes Two",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1426210/header.jpg?t=1654700680",
    "rating": 0.9603196443691787,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "TEKKEN 7",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/389730/header.jpg?t=1638999755",
    "rating": 0.821934509986066,
    "categorias": [
      "Action",
      "Sports"
    ]
  },
  {
    "nome": "Tropico 6",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/492720/header.jpg?t=1657213799",
    "rating": 0.8692549645556547,
    "categorias": [
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Amazing Cultivation Simulator",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/955900/header.jpg?t=1656299765",
    "rating": 0.8801931865392605,
    "categorias": [
      "Indie",
      "RPG",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "STAR WARS Jedi: Fallen Order\u2122",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1172380/header.jpg?t=1651767465",
    "rating": 0.9004648591087812,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Pavlov VR",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/555160/header.jpg?t=1650560876",
    "rating": 0.9449987831589195,
    "categorias": [
      "Action",
      "Indie",
      "Early Access"
    ]
  },
  {
    "nome": "Total War: WARHAMMER II",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/594570/header.jpg?t=1644489785",
    "rating": 0.9293588126544223,
    "categorias": [
      "Action",
      "Strategy"
    ]
  },
  {
    "nome": "Total War: EMPIRE \u2013 Definitive Edition",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/10500/header.jpg?t=1603130998",
    "rating": 0.9087332256024732,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "Neverwinter Nights: Enhanced Edition",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/704450/header.jpg?t=1608058656",
    "rating": 0.8889433284337743,
    "categorias": [
      "RPG"
    ]
  },
  {
    "nome": "NBA 2K21",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1225330/header.jpg?t=1614622937",
    "rating": 0.4154547092589256,
    "categorias": [
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "Warhammer: Vermintide 2",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/552500/header.jpg?t=1658157875",
    "rating": 0.8347774937218615,
    "categorias": [
      "Action",
      "Indie"
    ]
  },
  {
    "nome": "Hunt: Showdown",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/594650/header.jpg?t=1658736563",
    "rating": 0.8296489722833589,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Starbound",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/211820/header.jpg?t=1611668796",
    "rating": 0.9279408771751297,
    "categorias": [
      "Action",
      "Adventure",
      "Casual",
      "Indie",
      "RPG"
    ]
  },
  {
    "nome": "Stormworks: Build and Rescue",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/573090/header_alt_assets_2.jpg?t=1654186079",
    "rating": 0.9211494412438398,
    "categorias": [
      "Simulation"
    ]
  },
  {
    "nome": "Hades",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg?t=1624463563",
    "rating": 0.9862458794473551,
    "categorias": [
      "Action",
      "Indie",
      "RPG"
    ]
  },
  {
    "nome": "Risk of Rain 2",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/632360/header.jpg?t=1657821925",
    "rating": 0.9643705002858499,
    "categorias": [
      "Action",
      "Indie"
    ]
  },
  {
    "nome": "Command & Conquer\u2122 Remastered Collection",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1213210/header.jpg?t=1627333457",
    "rating": 0.9075886913618921,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "WWE 2K22",
    "preco": 38.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1255630/header.jpg?t=1658250415",
    "rating": 0.7196277495769882,
    "categorias": [
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "Arma 3",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/107410/header.jpg?t=1655998601",
    "rating": 0.9036557300438229,
    "categorias": [
      "Action",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "\u89c5\u957f\u751f",
    "preco": 11.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1189490/header.jpg?t=1656682312",
    "rating": 0.9114663387642177,
    "categorias": [
      "Indie",
      "RPG",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "ROMANCE OF THE THREE KINGDOMS XIV",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/872410/header.jpg?t=1646804909",
    "rating": 0.586747387626472,
    "categorias": [
      "Simulation"
    ]
  },
  {
    "nome": "Graveyard Keeper",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/599140/header.jpg?t=1642506760",
    "rating": 0.8589330339357503,
    "categorias": [
      "Adventure",
      "Indie",
      "RPG",
      "Simulation"
    ]
  },
  {
    "nome": "Draw & Guess",
    "preco": 2.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1483870/header.jpg?t=1635011093",
    "rating": 0.8470450600045286,
    "categorias": [
      "Casual",
      "Indie"
    ]
  },
  {
    "nome": "Hardspace: Shipbreaker",
    "preco": 26.24,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1161580/header.jpg?t=1655278510",
    "rating": 0.8882876204595997,
    "categorias": [
      "Simulation"
    ]
  },
  {
    "nome": "Pillars of Eternity",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/291650/header.jpg?t=1615973823",
    "rating": 0.8807409529265731,
    "categorias": [
      "RPG"
    ]
  },
  {
    "nome": "Satisfactory",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/526870/header.jpg?t=1657895195",
    "rating": 0.9717827239951133,
    "categorias": [
      "Adventure",
      "Indie",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Crusader Kings III",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1158310/header.jpg?t=1655466184",
    "rating": 0.930088104581958,
    "categorias": [
      "RPG",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Wartales",
    "preco": 27.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1527950/header.jpg?t=1658424141",
    "rating": 0.9086692258477287,
    "categorias": [
      "Adventure",
      "Indie",
      "RPG",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Portal 2",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/620/header.jpg?t=1610490805",
    "rating": 0.9879511687829952,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "The Crew\u2122 2",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/646910/header.jpg?t=1657123216",
    "rating": 0.8060613044480295,
    "categorias": [
      "Action",
      "Massively Multiplayer",
      "Racing"
    ]
  },
  {
    "nome": "Sniper Elite 5",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1029690/header.jpg?t=1658840310",
    "rating": 0.7525569711107124,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Dread Hunger",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1418630/header.jpg?t=1656500054",
    "rating": 0.6120965896086061,
    "categorias": [
      "Action",
      "Adventure",
      "Indie"
    ]
  },
  {
    "nome": "Cities: Skylines",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/255710/header.jpg?t=1654076112",
    "rating": 0.9342088842964893,
    "categorias": [
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Monster Hunter: World",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/582010/header.jpg?t=1644281885",
    "rating": 0.8553756442383006,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Total War: ROME REMASTERED",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/885970/header.jpg?t=1622505859",
    "rating": 0.7266816704176045,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "Fear Surrounds",
    "preco": 7.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1526490/header.jpg?t=1645063941",
    "rating": 0.8773245659097915,
    "categorias": [
      "Casual",
      "Indie",
      "RPG"
    ]
  },
  {
    "nome": "Deadside",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/895400/header.jpg?t=1655916741",
    "rating": 0.7868954273736511,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "Massively Multiplayer",
      "Early Access"
    ]
  },
  {
    "nome": "Slime Rancher",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/433340/header.jpg?t=1651003375",
    "rating": 0.9787270803187699,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "FOR HONOR\u2122",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/304390/header.jpg?t=1655384405",
    "rating": 0.6833540341182733,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Core Keeper",
    "preco": 12.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1621690/header_alt_assets_4.jpg?t=1655385001",
    "rating": 0.903411544551605,
    "categorias": [
      "Adventure",
      "Casual",
      "Indie",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "Bloons TD 6",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/960090/header.jpg?t=1634303522",
    "rating": 0.9751900236932255,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "Conan Exiles",
    "preco": 15.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/440900/header.jpg?t=1658346555",
    "rating": 0.791016827738749,
    "categorias": [
      "Action",
      "Adventure",
      "Massively Multiplayer",
      "RPG",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Dying Light 2 Stay Human",
    "preco": 40.19,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/534380/header.jpg?t=1657817399",
    "rating": 0.7848199752254789,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Tom Clancy's Ghost Recon\u00ae Wildlands",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/460930/header.jpg?t=1602605434",
    "rating": 0.7883349979437165,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "GTFO",
    "preco": 31.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/493520/header.jpg?t=1655906937",
    "rating": 0.845948973242066,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Borderlands 2",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/49520/header.jpg?t=1645058069",
    "rating": 0.9372489845930431,
    "categorias": [
      "Action",
      "RPG"
    ]
  },
  {
    "nome": "Sniper Elite 4",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/312660/header.jpg?t=1636393785",
    "rating": 0.9058834657586077,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Hero Siege",
    "preco": 6.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/269210/header.jpg?t=1628765735",
    "rating": 0.7534209415877992,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "Massively Multiplayer",
      "RPG"
    ]
  },
  {
    "nome": "The Outer Worlds",
    "preco": 19.79,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/578650/header.jpg?t=1644602201",
    "rating": 0.854107791683488,
    "categorias": [
      "RPG"
    ]
  },
  {
    "nome": "XCOM: Enemy Unknown",
    "preco": 7.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/200510/header.jpg?t=1587584126",
    "rating": 0.9444054752790749,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "ELDEN RING",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg?t=1654259241",
    "rating": 0.8999355531686358,
    "categorias": [
      "Action",
      "RPG"
    ]
  },
  {
    "nome": "Days Gone",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1259420/header.jpg?t=1635476187",
    "rating": 0.9302520568044856,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Beat Saber",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/620980/header.jpg?t=1622461922",
    "rating": 0.9600651741371476,
    "categorias": [
      "Indie"
    ]
  },
  {
    "nome": "Farm Together",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/673950/header.jpg?t=1633947837",
    "rating": 0.9414938937801761,
    "categorias": [
      "Casual",
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "Dyson Sphere Program",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1366540/header.jpg?t=1656474588",
    "rating": 0.9776263522318694,
    "categorias": [
      "Indie",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "This War of Mine",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/282070/header.jpg?t=1656003833",
    "rating": 0.9288171625158584,
    "categorias": [
      "Adventure",
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "Valheim",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/892970/header.jpg?t=1647939640",
    "rating": 0.9540459172990623,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "Pummel Party",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/880940/header.jpg?t=1585242250",
    "rating": 0.8931099084096586,
    "categorias": [
      "Action",
      "Casual",
      "Indie"
    ]
  },
  {
    "nome": "Rogue Legacy 2",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1253920/header.jpg?t=1652116054",
    "rating": 0.8943356273160402,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "RPG"
    ]
  },
  {
    "nome": "Northgard",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/466560/header.jpg?t=1658513488",
    "rating": 0.8813706886929344,
    "categorias": [
      "Indie",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Craftopia",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1307550/header.jpg?t=1653137097",
    "rating": 0.8088369070825211,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "Among Us",
    "preco": 3.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/945360/header.jpg?t=1646296970",
    "rating": 0.9187737086961708,
    "categorias": [
      "Casual"
    ]
  },
  {
    "nome": "Hearts of Iron IV",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/394360/header.jpg?t=1654610466",
    "rating": 0.9203935411348189,
    "categorias": [
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Sid Meier's Civilization\u00ae III Complete",
    "preco": 4.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/3910/header.jpg?t=1569013660",
    "rating": 0.8910211267605633,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "Slay the Spire",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/646570/header.jpg?t=1592339399",
    "rating": 0.9788649025069638,
    "categorias": [
      "Indie",
      "Strategy"
    ]
  },
  {
    "nome": "Golf It!",
    "preco": 8.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/571740/header.jpg?t=1645821869",
    "rating": 0.8944961280598721,
    "categorias": [
      "Casual",
      "Indie",
      "Simulation",
      "Sports",
      "Early Access"
    ]
  },
  {
    "nome": "20 Minutes Till Dawn",
    "preco": 2.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1966900/header.jpg?t=1655976863",
    "rating": 0.9306056959486563,
    "categorias": [
      "Action",
      "Adventure",
      "Casual",
      "Indie",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Fallout 4",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/377160/header.jpg?t=1650909928",
    "rating": 0.8119467852048996,
    "categorias": [
      "RPG"
    ]
  },
  {
    "nome": "Company of Heroes",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/228200/header.jpg?t=1632304482",
    "rating": 0.9431075697211155,
    "categorias": [
      "Action",
      "Strategy"
    ]
  },
  {
    "nome": "Spiritfarer\u00ae: Farewell Edition",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/972660/header.jpg?t=1654696374",
    "rating": 0.9585735540264088,
    "categorias": [
      "Adventure",
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "Rust",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/252490/header.jpg?t=1656003795",
    "rating": 0.8667056693475877,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "Massively Multiplayer",
      "RPG"
    ]
  },
  {
    "nome": "ACE COMBAT\u2122 7: SKIES UNKNOWN",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/502500/header.jpg?t=1653601579",
    "rating": 0.8635591969294361,
    "categorias": [
      "Action",
      "Simulation"
    ]
  },
  {
    "nome": "RimWorld",
    "preco": 34.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/294100/header.jpg?t=1650485223",
    "rating": 0.9829190830244571,
    "categorias": [
      "Indie",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Batman\u2122: Arkham Knight",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/208650/header.jpg?t=1634156452",
    "rating": 0.8372904000090576,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Phasmophobia",
    "preco": 13.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/739630/header.jpg?t=1654873567",
    "rating": 0.9701428543158626,
    "categorias": [
      "Action",
      "Indie",
      "Early Access"
    ]
  },
  {
    "nome": "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/349040/header.jpg?t=1611701005",
    "rating": 0.9079351672515983,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Subnautica",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/264710/header.jpg?t=1652393192",
    "rating": 0.9636341712178382,
    "categorias": [
      "Adventure",
      "Indie"
    ]
  },
  {
    "nome": "Age of Empires II: Definitive Edition",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/813780/header.jpg?t=1655752709",
    "rating": 0.9457612885988015,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "The Planet Crafter",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1284190/header.jpg?t=1653162258",
    "rating": 0.9629596731213359,
    "categorias": [
      "Adventure",
      "Early Access"
    ]
  },
  {
    "nome": "Battlefield 1 \u2122",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1238840/header.jpg?t=1633006806",
    "rating": 0.8606305390839046,
    "categorias": [
      "Action",
      "Massively Multiplayer"
    ]
  },
  {
    "nome": "Dragon Age\u2122 Inquisition",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1222690/header.jpg?t=1633006819",
    "rating": 0.7516778523489933,
    "categorias": [
      "Action",
      "Adventure",
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "HUMANKIND\u2122",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1124300/header.jpg?t=1658836296",
    "rating": 0.6832832628952594,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "Farming Simulator 19",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/787860/header.jpg?t=1658488719",
    "rating": 0.939755195715925,
    "categorias": [
      "Simulation"
    ]
  },
  {
    "nome": "Half-Life 2",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/220/header.jpg?t=1591063154",
    "rating": 0.9747560850364588,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Black Mesa",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/362890/header.jpg?t=1658203317",
    "rating": 0.9551329350439149,
    "categorias": [
      "Action",
      "Adventure",
      "Indie"
    ]
  },
  {
    "nome": "Out of the Park Baseball 23",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1739010/header.jpg?t=1651159196",
    "rating": 0.825,
    "categorias": [
      "Indie",
      "Simulation",
      "Sports",
      "Strategy"
    ]
  },
  {
    "nome": "Total War: WARHAMMER III",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1142710/header.jpg?t=1655373508",
    "rating": 0.5811625526106245,
    "categorias": [
      "Action",
      "Strategy"
    ]
  },
  {
    "nome": "Supreme Commander: Forged Alliance",
    "preco": 12.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/9420/header.jpg?t=1592488757",
    "rating": 0.9689980390325894,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "Resident Evil 2",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/883710/header.jpg?t=1656986293",
    "rating": 0.9713105866194384,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "theHunter: Call of the Wild\u2122",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/518790/header.jpg?t=1656406952",
    "rating": 0.8717354843862312,
    "categorias": [
      "Adventure",
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "The Escapists 2",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/641990/header.jpg?t=1643290783",
    "rating": 0.9021885521885522,
    "categorias": [
      "Indie",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "MyDockFinder",
    "preco": 3.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1787090/header.jpg?t=1658667039",
    "rating": 0.75,
    "categorias": [
      "Utilities"
    ]
  },
  {
    "nome": "Gloomhaven",
    "preco": 34.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/780290/header.jpg?t=1657882237",
    "rating": 0.8718898385565053,
    "categorias": [
      "Adventure",
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "Assassin's Creed\u00ae Origins",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/582160/header.jpg?t=1603213581",
    "rating": 0.8655261612286468,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "The Elder Scrolls\u00ae Online",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/306130/header.jpg?t=1655833559",
    "rating": 0.8205438659642004,
    "categorias": [
      "Action",
      "Adventure",
      "Massively Multiplayer",
      "RPG"
    ]
  },
  {
    "nome": "Battlefield 4\u2122",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1238860/header.jpg?t=1641312061",
    "rating": 0.8694600586746691,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "DNF Duel",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1216060/header.jpg?t=1655859559",
    "rating": 0.6824109975326048,
    "categorias": [
      "Action",
      "Casual"
    ]
  },
  {
    "nome": "Darkness Ahead",
    "preco": 0.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/547710/header.jpg?t=1637951514",
    "rating": 0.6458333333333334,
    "categorias": [
      "Adventure",
      "Indie"
    ]
  },
  {
    "nome": "MONSTER HUNTER RISE",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1446780/header.jpg?t=1656665891",
    "rating": 0.8660522486314185,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "PAYDAY 2",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/218620/header.jpg?t=1657731026",
    "rating": 0.8927425437092904,
    "categorias": [
      "Action",
      "RPG"
    ]
  },
  {
    "nome": "Mirror 2: Project X",
    "preco": 1.19,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1832640/header.jpg?t=1658138122",
    "rating": 0.9384846805478585,
    "categorias": [
      "Adventure",
      "Indie",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "Legion TD 2 - Multiplayer Tower Defense",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/469600/header.jpg?t=1658760653",
    "rating": 0.8564494600169882,
    "categorias": [
      "Casual",
      "Indie",
      "Strategy"
    ]
  },
  {
    "nome": "Counter-Strike",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/10/header.jpg?t=1602535893",
    "rating": 0.9747693124084865,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Warhammer\u00ae 40,000: Dawn of War\u00ae - Soulstorm",
    "preco": 12.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/9450/header.jpg?t=1603128237",
    "rating": 0.9545805654256141,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "Left 4 Dead 2",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/550/header.jpg?t=1657220736",
    "rating": 0.9745084250882152,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Devil May Cry 5",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/601150/header.jpg?t=1643243335",
    "rating": 0.9493084167157151,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Total War: THREE KINGDOMS",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/779340/header.jpg?t=1653315123",
    "rating": 0.7070333910679442,
    "categorias": [
      "Action",
      "Strategy"
    ]
  },
  {
    "nome": "Darkest Dungeon\u00ae",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/262060/header.jpg?t=1655946236",
    "rating": 0.9118129686810763,
    "categorias": [
      "Indie",
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "DARK SOULS\u2122: REMASTERED",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/570940/header.jpg?t=1653584492",
    "rating": 0.8902376223055984,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "V Rising",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1604030/header.jpg?t=1658807402",
    "rating": 0.8852309516209931,
    "categorias": [
      "Action",
      "Adventure",
      "Massively Multiplayer",
      "Early Access"
    ]
  },
  {
    "nome": "Dead by Daylight",
    "preco": 7.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/381210/header.jpg?t=1658761787",
    "rating": 0.8141389004101571,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Company of Heroes 2",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/231430/header.jpg?t=1655744009",
    "rating": 0.7843128972988955,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "Stellaris",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/281990/header.jpg?t=1656004728",
    "rating": 0.879356970028391,
    "categorias": [
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Kenshi",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/233860/header.jpg?t=1652436681",
    "rating": 0.9506285074913897,
    "categorias": [
      "Action",
      "Indie",
      "RPG",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Planet Coaster",
    "preco": 11.24,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/493340/header.jpg?t=1654873696",
    "rating": 0.9126169332044712,
    "categorias": [
      "Action",
      "Adventure",
      "Casual",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Yakuza 0",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/638970/header.jpg?t=1633021581",
    "rating": 0.9506737809627668,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Black Desert",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/582660/header.jpg?t=1658233501",
    "rating": 0.7516314054128315,
    "categorias": [
      "Action",
      "Adventure",
      "Massively Multiplayer",
      "RPG",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "DARK SOULS\u2122 II: Scholar of the First Sin",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/335300/header.jpg?t=1653584488",
    "rating": 0.8486480598387839,
    "categorias": [
      "Action",
      "RPG"
    ]
  },
  {
    "nome": "Tabletop Simulator",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/286160/header.jpg?t=1620412025",
    "rating": 0.9352941176470588,
    "categorias": [
      "Casual",
      "Indie",
      "RPG",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Wargame: Red Dragon",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/251060/header.jpg?t=1639786925",
    "rating": 0.891499782999566,
    "categorias": [
      "Indie",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "DayZ",
    "preco": 44.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/221100/header.jpg?t=1658234476",
    "rating": 0.711924610132846,
    "categorias": [
      "Action",
      "Adventure",
      "Massively Multiplayer"
    ]
  },
  {
    "nome": "Total War: MEDIEVAL II \u2013 Definitive Edition",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/4700/header.jpg?t=1603131082",
    "rating": 0.9584708470847084,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "OMORI",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1150690/header.jpg?t=1655277094",
    "rating": 0.9824124114796869,
    "categorias": [
      "Adventure",
      "Indie",
      "RPG"
    ]
  },
  {
    "nome": "Resident Evil 4",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/254700/header.jpg?t=1650860610",
    "rating": 0.9116731678977509,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Red Dead Redemption 2",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1656615305",
    "rating": 0.8854141397095274,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Madden NFL 22",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1519350/header.jpg?t=1646323223",
    "rating": 0.5196125138955058,
    "categorias": [
      "Casual",
      "Simulation",
      "Sports",
      "Strategy"
    ]
  },
  {
    "nome": "Human: Fall Flat",
    "preco": 5.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/477160/header.jpg?t=1657213165",
    "rating": 0.9464737403646739,
    "categorias": [
      "Adventure",
      "Casual",
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "PowerWash Simulator",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1290000/header.jpg?t=1658154399",
    "rating": 0.9769857691820447,
    "categorias": [
      "Casual",
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "Rune Factory 5",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1702330/header.jpg?t=1657748567",
    "rating": 0.8275193798449613,
    "categorias": [
      "Adventure",
      "RPG",
      "Simulation"
    ]
  },
  {
    "nome": "Solasta: Crown of the Magister",
    "preco": 15.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1096530/header.jpg?t=1650563049",
    "rating": 0.8921632653061224,
    "categorias": [
      "Adventure",
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "Nioh 2 \u2013 The Complete Edition",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1325200/header.jpg?t=1655226034",
    "rating": 0.8809654948971327,
    "categorias": [
      "Action",
      "RPG"
    ]
  },
  {
    "nome": "Enter the Gungeon",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/311690/header.jpg?t=1651689180",
    "rating": 0.9610148054460234,
    "categorias": [
      "Action",
      "Adventure",
      "Indie"
    ]
  },
  {
    "nome": "xiuzhen idle",
    "preco": 3.59,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1649730/header.jpg?t=1657418289",
    "rating": 0.8629690048939641,
    "categorias": [
      "Casual",
      "Indie",
      "RPG",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Back 4 Blood",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/924970/header.jpg?t=1649358821",
    "rating": 0.6405472964083673,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Total War: SHOGUN 2",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/201270/header.jpg?t=1603131194",
    "rating": 0.9065405578711125,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "The Sims\u2122 3",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/47890/header.jpg?t=1615894474",
    "rating": 0.8624326997033293,
    "categorias": [
      "Simulation"
    ]
  },
  {
    "nome": "SnowRunner",
    "preco": 27.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1465360/header.jpg?t=1653986838",
    "rating": 0.8753050460521137,
    "categorias": [
      "Adventure",
      "Simulation"
    ]
  },
  {
    "nome": "FINAL FANTASY XIV Online",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/39210/header.jpg?t=1646695302",
    "rating": 0.8888394309291058,
    "categorias": [
      "Massively Multiplayer",
      "RPG"
    ]
  },
  {
    "nome": "Disco Elysium - The Final Cut",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/632470/header.jpg?t=1658854930",
    "rating": 0.9445413204773139,
    "categorias": [
      "RPG"
    ]
  },
  {
    "nome": "Vampire Survivors",
    "preco": 2.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1794680/header.jpg?t=1657145362",
    "rating": 0.9889935033538166,
    "categorias": [
      "Action",
      "Casual",
      "Indie",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "Captain of Industry",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1594320/header.jpg?t=1655345396",
    "rating": 0.9231658001155402,
    "categorias": [
      "Indie",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Battle Brothers",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/365360/header.jpg?t=1645794092",
    "rating": 0.8818734865040458,
    "categorias": [
      "Indie",
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "Just Cause\u2122 3",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/225540/header.jpg?t=1655057287",
    "rating": 0.8223378842904585,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "YoloMouse",
    "preco": 3.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1283970/header.jpg?t=1655489584",
    "rating": 0.9308565531475749,
    "categorias": [
      "Animation & Modeling",
      "Design & Illustration",
      "Education",
      "Software Training",
      "Utilities"
    ]
  },
  {
    "nome": "Eco",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/382310/header.jpg?t=1656424007",
    "rating": 0.8233323180018276,
    "categorias": [
      "Indie",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "Heroes\u00ae of Might & Magic\u00ae III - HD Edition",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/297000/header.jpg?t=1602603275",
    "rating": 0.7757448089076135,
    "categorias": [
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "Left 4 Dead",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/500/header.jpg?t=1623087651",
    "rating": 0.9615329478663927,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Terraria",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg?t=1590092560",
    "rating": 0.9786577852330616,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "RPG"
    ]
  },
  {
    "nome": "\u6696\u96ea Warm Snow",
    "preco": 17.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1296830/header.jpg?t=1657708758",
    "rating": 0.9020567499854338,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "RPG"
    ]
  },
  {
    "nome": "Muse Dash",
    "preco": 2.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/774171/header.jpg?t=1655707604",
    "rating": 0.9375415188477901,
    "categorias": [
      "Action",
      "Casual",
      "Indie"
    ]
  },
  {
    "nome": "Celeste",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/504230/header.jpg?t=1617130992",
    "rating": 0.9777153324915077,
    "categorias": [
      "Action",
      "Adventure",
      "Indie"
    ]
  },
  {
    "nome": "Tales of Arise",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/740130/header.jpg?t=1657182128",
    "rating": 0.9055957051414413,
    "categorias": [
      "Action",
      "RPG"
    ]
  },
  {
    "nome": "Mass Effect\u2122 Legendary Edition",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1328670/header.jpg?t=1654700678",
    "rating": 0.9334411117226197,
    "categorias": [
      "Action",
      "RPG"
    ]
  },
  {
    "nome": "Grim Dawn",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/219990/header.jpg?t=1639672339",
    "rating": 0.9349888719690758,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "RPG"
    ]
  },
  {
    "nome": "Rubber Bandits",
    "preco": 7.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1206610/header.jpg?t=1657190548",
    "rating": 0.7887179487179488,
    "categorias": [
      "Action",
      "Casual",
      "Indie"
    ]
  },
  {
    "nome": "Sea of Thieves",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1172620/header.jpg?t=1656604686",
    "rating": 0.9031609367898398,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "DARK SOULS\u2122 III",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/374320/header.jpg?t=1653584490",
    "rating": 0.936297605617659,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Nomad Survival",
    "preco": 2.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1929870/header.jpg?t=1654459294",
    "rating": 0.9265850945494994,
    "categorias": [
      "Action",
      "Indie",
      "Early Access"
    ]
  },
  {
    "nome": "Project Zomboid",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/108600/header.jpg?t=1655867638",
    "rating": 0.9238072588906776,
    "categorias": [
      "Indie",
      "RPG",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "Surviving Mars",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/464920/header.jpg?t=1651168053",
    "rating": 0.8450817475207719,
    "categorias": [
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "The Elder Scrolls V: Skyrim Special Edition",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/489830/header.jpg?t=1650909796",
    "rating": 0.9095462175623985,
    "categorias": [
      "RPG"
    ]
  },
  {
    "nome": "My Time At Portia",
    "preco": 7.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/666140/header.jpg?t=1656057573",
    "rating": 0.9271798401185876,
    "categorias": [
      "Adventure",
      "Casual",
      "Indie",
      "RPG",
      "Simulation"
    ]
  },
  {
    "nome": "Pathfinder: Kingmaker - Enhanced Plus Edition",
    "preco": 8.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/640820/header.jpg?t=1643207896",
    "rating": 0.7843306379155436,
    "categorias": [
      "RPG"
    ]
  },
  {
    "nome": "Horizon Zero Dawn\u2122 Complete Edition",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1151640/header.jpg?t=1635442187",
    "rating": 0.8618767617759977,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "STAR WARS\u2122 Battlefront\u2122 II",
    "preco": 15.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1237950/header.jpg?t=1651767512",
    "rating": 0.8709743642382407,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Kingdom Come: Deliverance",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/379430/header.jpg?t=1650617966",
    "rating": 0.8242345316954123,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "The Isle",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/376210/header.jpg?t=1653237914",
    "rating": 0.8310050916686872,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "Massively Multiplayer",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "Age of Empires IV",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1466860/header_alt_assets_1.jpg?t=1657908738",
    "rating": 0.86519023282226,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "SAO Utils: Beta",
    "preco": 3.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/786520/header.jpg?t=1645821948",
    "rating": 0.8728432108027007,
    "categorias": [
      "Utilities",
      "Early Access"
    ]
  },
  {
    "nome": "Sid Meier\u2019s Civilization\u00ae VI",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/289070/header.jpg?t=1658335453",
    "rating": 0.8364012678800722,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "X-Plane 11",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/269950/header.jpg?t=1654677478",
    "rating": 0.9232791077644384,
    "categorias": [
      "Simulation"
    ]
  },
  {
    "nome": "Cossacks 3",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/333420/header.jpg?t=1655977209",
    "rating": 0.8077142314269428,
    "categorias": [
      "Action",
      "Adventure",
      "Strategy"
    ]
  },
  {
    "nome": "They Are Billions",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/644930/header.jpg?t=1595631876",
    "rating": 0.8503713467339231,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "F1\u00ae 2020",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1080110/header.jpg?t=1625582774",
    "rating": 0.9343166983604873,
    "categorias": [
      "Racing",
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "METAL GEAR RISING: REVENGEANCE",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/235460/header.jpg?t=1581382081",
    "rating": 0.9553156180212665,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Neon Abyss",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/788100/header.jpg?t=1655721653",
    "rating": 0.8895897292771421,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "RPG"
    ]
  },
  {
    "nome": "Hollow Knight",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg?t=1625363925",
    "rating": 0.9712437935494639,
    "categorias": [
      "Action",
      "Adventure",
      "Indie"
    ]
  },
  {
    "nome": "Football Manager 2022",
    "preco": 54.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1569040/header.jpg?t=1649351903",
    "rating": 0.9229711963666786,
    "categorias": [
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "Going Medieval",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1029780/header.jpg?t=1654080734",
    "rating": 0.8982657040909469,
    "categorias": [
      "Indie",
      "RPG",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Victoria II",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/42960/header.jpg?t=1622805098",
    "rating": 0.923342226849743,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "Titanfall\u00ae 2",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1237970/header.jpg?t=1619804815",
    "rating": 0.9469947281686331,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Civilization IV: Beyond the Sword",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/8800/header.jpg?t=1573063843",
    "rating": 0.9631938260611458,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "HITMAN 3",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1659040/header.jpg?t=1656492975",
    "rating": 0.6970640569395018,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Baldur's Gate 3",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg?t=1657252325",
    "rating": 0.8720275525801521,
    "categorias": [
      "Adventure",
      "RPG",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "ASTRONEER",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/361420/header.jpg?t=1656698434",
    "rating": 0.9140486445401571,
    "categorias": [
      "Adventure",
      "Indie"
    ]
  },
  {
    "nome": "Path Of Wuxia",
    "preco": 34.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1189630/header.jpg?t=1648784962",
    "rating": 0.7981356477017036,
    "categorias": [
      "Indie",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "Prison Architect",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/233450/header.jpg?t=1654092372",
    "rating": 0.9050470214430554,
    "categorias": [
      "Indie",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "MX Bikes",
    "preco": 34.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/655500/header.jpg?t=1645550702",
    "rating": 0.9387920551276855,
    "categorias": [
      "Racing",
      "Simulation",
      "Sports",
      "Early Access"
    ]
  },
  {
    "nome": "MechWarrior 5: Mercenaries",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/784080/header.jpg?t=1657106132",
    "rating": 0.8400355871886122,
    "categorias": [
      "Action",
      "Simulation"
    ]
  },
  {
    "nome": "Factorio",
    "preco": 30.0,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/427520/header.jpg?t=1620730652",
    "rating": 0.9653196101115676,
    "categorias": [
      "Casual",
      "Indie",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Killing Floor 2",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/232090/header.jpg?t=1655328266",
    "rating": 0.8753588951481011,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Tiny Tina's Wonderlands",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1286680/header.jpg?t=1657214620",
    "rating": 0.754601226993865,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "WorldBox - God Simulator",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1206560/header.jpg?t=1656072725",
    "rating": 0.939297385620915,
    "categorias": [
      "Indie",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "The Witcher\u00ae 3: Wild Hunt",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1646996408",
    "rating": 0.9610739967452758,
    "categorias": [
      "RPG"
    ]
  },
  {
    "nome": "Pro Cycling Manager 2022",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1767560/header.jpg?t=1658824912",
    "rating": 0.7971014492753623,
    "categorias": [
      "Casual",
      "Racing",
      "Sports",
      "Strategy"
    ]
  },
  {
    "nome": "Grand Theft Auto IV: The Complete Edition",
    "preco": 5.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/12210/header.jpg?t=1618853493",
    "rating": 0.7748419919592997,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Assassin's Creed\u00ae Odyssey",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/812140/header.jpg?t=1646425720",
    "rating": 0.8916619079407719,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Totally Accurate Battle Simulator",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/508440/header.jpg?t=1649752352",
    "rating": 0.9793701293662495,
    "categorias": [
      "Indie",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Timberborn",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1062090/header.jpg?t=1653990559",
    "rating": 0.9421797981378609,
    "categorias": [
      "Indie",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "7 Days to Die",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/251570/header.jpg?t=1650477344",
    "rating": 0.8825305228286714,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "RPG",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Grounded",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/962130/header.jpg?t=1655064810",
    "rating": 0.8670120898100173,
    "categorias": [
      "Action",
      "Adventure",
      "Early Access"
    ]
  },
  {
    "nome": "Deep Rock Galactic",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/548430/header_alt_assets_13.jpg?t=1657021307",
    "rating": 0.9672274675706721,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Mortal Kombat\u00a011",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/976310/header.jpg?t=1654216426",
    "rating": 0.8664242424242424,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Dragon's Dogma: Dark Arisen",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/367500/header.jpg?t=1644282366",
    "rating": 0.8987937027192803,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Banished",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/242920/header.jpg?t=1584654657",
    "rating": 0.9023797706434001,
    "categorias": [
      "Indie",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "MORDHAU",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/629760/header.jpg?t=1655998210",
    "rating": 0.8118229802654902,
    "categorias": [
      "Action",
      "Indie"
    ]
  },
  {
    "nome": "Don't Starve Together",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/322330/header_alt_assets_31.jpg?t=1656607265",
    "rating": 0.9611759786419634,
    "categorias": [
      "Adventure",
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "KovaaK's",
    "preco": 12.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/824270/header.jpg?t=1653944400",
    "rating": 0.9293489016425885,
    "categorias": [
      "Action",
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "Golf With Your Friends",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/431240/header.jpg?t=1655819113",
    "rating": 0.8957482726130653,
    "categorias": [
      "Casual",
      "Indie",
      "Sports"
    ]
  },
  {
    "nome": "Frostpunk",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/323190/header.jpg?t=1655979223",
    "rating": 0.9147593914933251,
    "categorias": [
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Wallpaper Engine",
    "preco": 3.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/431960/header.jpg?t=1637933048",
    "rating": 0.9805572172517192,
    "categorias": [
      "Casual",
      "Indie",
      "Animation & Modeling",
      "Design & Illustration",
      "Photo Editing",
      "Utilities"
    ]
  },
  {
    "nome": "Dead Cells",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/588650/header.jpg?t=1658329626",
    "rating": 0.9707131658584607,
    "categorias": [
      "Action",
      "Indie"
    ]
  },
  {
    "nome": "Overcooked! 2",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/728880/header.jpg?t=1643298085",
    "rating": 0.9034995732227777,
    "categorias": [
      "Action",
      "Casual",
      "Indie"
    ]
  },
  {
    "nome": "House Flipper",
    "preco": 12.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/613100/header.jpg?t=1658175656",
    "rating": 0.934176173673634,
    "categorias": [
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "Subnautica: Below Zero",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/848450/header.jpg?t=1652770430",
    "rating": 0.9130918641401926,
    "categorias": [
      "Adventure",
      "Indie"
    ]
  },
  {
    "nome": "Stream Avatars",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/665300/header.jpg?t=1644626792",
    "rating": 0.9537784299339692,
    "categorias": [
      "Animation & Modeling",
      "Audio Production",
      "Design & Illustration",
      "Utilities",
      "Video Production",
      "Web Publishing"
    ]
  },
  {
    "nome": "Assetto Corsa Competizione",
    "preco": 13.59,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/805550/header.jpg?t=1657018123",
    "rating": 0.9098262707969482,
    "categorias": [
      "Racing",
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "A Dance of Fire and Ice",
    "preco": 5.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/977950/header.jpg?t=1656700566",
    "rating": 0.9373622250363491,
    "categorias": [
      "Indie"
    ]
  },
  {
    "nome": "Noita",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/881100/header.jpg?t=1627905909",
    "rating": 0.9542886151944555,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "RPG",
      "Simulation"
    ]
  },
  {
    "nome": "Two Point Hospital",
    "preco": 34.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/535930/header.jpg?t=1647356623",
    "rating": 0.914672622212769,
    "categorias": [
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "Age of History II",
    "preco": 4.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/603850/header.jpg?t=1604415298",
    "rating": 0.8724639987270268,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "XCOM\u00ae 2",
    "preco": 8.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/268500/header.jpg?t=1646157374",
    "rating": 0.8384616334036855,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "Farming Simulator 22",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1248130/header.jpg?t=1658741236",
    "rating": 0.8904332582018533,
    "categorias": [
      "Simulation"
    ]
  },
  {
    "nome": "Stacklands",
    "preco": 4.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1948280/header.jpg?t=1657626123",
    "rating": 0,
    "categorias": [
      "Casual",
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "Mount & Blade: Warband",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/48700/header.jpg?t=1589227310",
    "rating": 0.9775246391378396,
    "categorias": [
      "Action",
      "RPG"
    ]
  },
  {
    "nome": "The Elder Scrolls IV: Oblivion\u00ae Game of the Year Edition",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/22330/header.jpg?t=1585658214",
    "rating": 0.9555952187787333,
    "categorias": [
      "RPG"
    ]
  },
  {
    "nome": "Euro Truck Simulator 2",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/227300/header.jpg?t=1656428921",
    "rating": 0.9731708443131211,
    "categorias": [
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "The Guild 3",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/311260/header.jpg?t=1655299296",
    "rating": 0.6103302881236824,
    "categorias": [
      "RPG",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Stardew Valley",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg?t=1608624324",
    "rating": 0.9814694864347482,
    "categorias": [
      "Indie",
      "RPG",
      "Simulation"
    ]
  },
  {
    "nome": "God of War",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg?t=1650554420",
    "rating": 0.969610048743907,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Plants vs. Zombies GOTY Edition",
    "preco": 4.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/3590/header.jpg?t=1615390608",
    "rating": 0.9716722000621014,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "Fallout 76",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1151340/header.jpg?t=1655228843",
    "rating": 0.7240418215097898,
    "categorias": [
      "RPG"
    ]
  },
  {
    "nome": "DOOM Eternal",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/782330/header.jpg?t=1639072952",
    "rating": 0.9107606060804057,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Battlefield\u2122 2042",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1517290/header.jpg?t=1658753769",
    "rating": 0.2695044744039295,
    "categorias": [
      "Action",
      "Adventure",
      "Casual"
    ]
  },
  {
    "nome": "Gunfire Reborn",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1217060/header.jpg?t=1645777339",
    "rating": 0.945710950393817,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "RPG"
    ]
  },
  {
    "nome": "Crosshair X",
    "preco": 3.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1366800/header.jpg?t=1621981151",
    "rating": 0.9041353383458647,
    "categorias": [
      "Action",
      "Utilities"
    ]
  },
  {
    "nome": "Sapiens",
    "preco": 22.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1060230/header.jpg?t=1658958048",
    "rating": 0.8474114441416893,
    "categorias": [
      "Indie",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Richman 4",
    "preco": 5.09,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2059810/header.jpg?t=1658992525",
    "rating": 0.5377574370709383,
    "categorias": [
      "Casual"
    ]
  },
  {
    "nome": "Digimon Survive",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/871980/header.jpg?t=1659071487",
    "rating": 0.788135593220339,
    "categorias": [
      "RPG"
    ]
  },
  {
    "nome": "Ghost Watchers",
    "preco": 11.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1850740/header.jpg?t=1659041324",
    "rating": 0.7609756097560976,
    "categorias": [
      "Adventure",
      "Early Access"
    ]
  },
  {
    "nome": "Sweet Transit",
    "preco": 19.79,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1612770/header.jpg?t=1659090737",
    "rating": 0.7677419354838709,
    "categorias": [
      "Indie",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "The Mortuary Assistant",
    "preco": 22.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1295920/header.jpg?t=1659455084",
    "rating": 0.8646232439335888,
    "categorias": [
      "Adventure",
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "Hard West 2",
    "preco": 26.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1282410/header.jpg?t=1659728936",
    "rating": 0.7389380530973452,
    "categorias": [
      "Action",
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "PlateUp!",
    "preco": 14.39,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1599600/header.jpg?t=1659621691",
    "rating": 0.9502262443438914,
    "categorias": [
      "Action",
      "Casual",
      "Indie",
      "Strategy"
    ]
  },
  {
    "nome": "Love, Money, Rock'n'Roll",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/615530/header.jpg?t=1659615651",
    "rating": 0.8349814585908529,
    "categorias": [
      "Adventure",
      "Casual",
      "Indie"
    ]
  },
  {
    "nome": "Hooked on You: A Dead by Daylight Dating Sim\u2122",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1866180/header.jpg?t=1659559981",
    "rating": 0.9028985507246376,
    "categorias": [
      "Casual"
    ]
  },
  {
    "nome": "Cult of the Lamb",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1313140/header.jpg?t=1660316311",
    "rating": 0.8846604215456675,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "Strategy"
    ]
  },
  {
    "nome": "Farthest Frontier",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1044720/header.jpg?t=1660235278",
    "rating": 0.8352524357838795,
    "categorias": [
      "Indie",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Two Point Campus",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1649080/header.jpg?t=1660320831",
    "rating": 0.8586387434554974,
    "categorias": [
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "Marvel\u2019s Spider-Man Remastered",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1817070/header.jpg?t=1660316394",
    "rating": 0.9621382775948709,
    "categorias": [
      "Action",
      "Adventure",
      "Casual"
    ]
  },
  {
    "nome": "Way of the Hunter",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1288320/header.jpg?t=1660822538",
    "rating": 0.6941671045717288,
    "categorias": [
      "Adventure",
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "FreshWomen - Season 1",
    "preco": 12.59,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1350650/header.jpg?t=1660913080",
    "rating": 0,
    "categorias": [
      "Adventure",
      "Indie"
    ]
  },
  {
    "nome": "Backpack Hero",
    "preco": 15.29,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1970580/header.jpg?t=1660880777",
    "rating": 0.9249363867684478,
    "categorias": [
      "Early Access"
    ]
  },
  {
    "nome": "\u5927\u6c5f\u6e56\u4e4b\u82cd\u9f99\u4e0e\u767d\u9e1f",
    "preco": 17.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1407450/header.jpg?t=1660664251",
    "rating": 0.5323435843054083,
    "categorias": [
      "Indie",
      "RPG",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Thymesia",
    "preco": 22.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1343240/header.jpg?t=1660838507",
    "rating": 0.835421888053467,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Regiments",
    "preco": 25.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1109680/header.jpg?t=1660682492",
    "rating": 0.8962585034013606,
    "categorias": [
      "Indie",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Soul Hackers 2",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1777620/header.jpg?t=1661536918",
    "rating": 0.7910112359550562,
    "categorias": [
      "RPG"
    ]
  },
  {
    "nome": "Earthling's Undertaking",
    "preco": 14.39,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1729410/header.jpg?t=1661744400",
    "rating": 0.8240343347639485,
    "categorias": [
      "Casual",
      "Indie",
      "RPG",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "SD GUNDAM BATTLE ALLIANCE",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/824550/header.jpg?t=1661378489",
    "rating": 0.5895075931891395,
    "categorias": [
      "Action",
      "RPG"
    ]
  },
  {
    "nome": "Warriors of the Nile 2",
    "preco": 13.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1682060/header.jpg?t=1661324046",
    "rating": 0.7636363636363637,
    "categorias": [
      "Indie",
      "Strategy"
    ]
  },
  {
    "nome": "JoJo's Bizarre Adventure: All-Star Battle R",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1372110/header.jpg?t=1662126357",
    "rating": 0.8368560105680317,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Call of the Wild: The Angler\u2122",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1408610/header.jpg?t=1661950796",
    "rating": 0.4205723766072169,
    "categorias": [
      "Adventure",
      "Casual",
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "Destroy All Humans! 2 - Reprobed",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1266700/header.jpg?t=1661931293",
    "rating": 0.8431001890359168,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Made in Abyss: Binary Star Falling into Darkness",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1324340/header.jpg?t=1662134154",
    "rating": 0.550314465408805,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "F1\u00ae Manager 2022",
    "preco": 54.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1708520/header.jpg?t=1661935208",
    "rating": 0.7077727952167414,
    "categorias": [
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Train Sim World\u00ae 3",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1944790/header.jpg?t=1662736189",
    "rating": 0.8123324396782842,
    "categorias": [
      "Simulation"
    ]
  },
  {
    "nome": "NBA 2K23",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1919590/header.jpg?t=1662697363",
    "rating": 0.4062717770034843,
    "categorias": [
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "Steelrising",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1283400/header.jpg?t=1662652927",
    "rating": 0.7097560975609756,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Disney Dreamlight Valley",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1401590/header.jpg?t=1662669751",
    "rating": 0.9361888111888111,
    "categorias": [
      "Adventure",
      "Casual",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "Judgment",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2058180/header.jpg?t=1663257373",
    "rating": 0.9534534534534534,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Metal: Hellsinger",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1061910/header.jpg?t=1663363295",
    "rating": 0.9757194244604317,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Isonzo",
    "preco": 26.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1556790/header_alt_assets_0.jpg?t=1663233747",
    "rating": 0.8092202059833251,
    "categorias": [
      "Action",
      "Indie",
      "Massively Multiplayer",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "The Wandering Village",
    "preco": 22.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1121640/header.jpg?t=1663541717",
    "rating": 0.9039735099337748,
    "categorias": [
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Return to Monkey Island",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2060130/header.jpg?t=1663619384",
    "rating": 0.9354612416695897,
    "categorias": [
      "Adventure",
      "Casual"
    ]
  },
  {
    "nome": "SpiderHeck",
    "preco": 13.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1329500/header.jpg?t=1663938734",
    "rating": 0.901060070671378,
    "categorias": [
      "Action",
      "Indie"
    ]
  },
  {
    "nome": "Rogue : Genesia",
    "preco": 2.69,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2067920/header.jpg?t=1664074554",
    "rating": 0.9539078156312625,
    "categorias": [
      "Action",
      "Casual",
      "RPG",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Potion Permit",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1337760/header.jpg?t=1664044256",
    "rating": 0.7173524150268337,
    "categorias": [
      "Action",
      "Adventure",
      "Casual",
      "RPG"
    ]
  },
  {
    "nome": "The DioField Chronicle",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1399080/header.jpg?t=1663863272",
    "rating": 0.515748031496063,
    "categorias": [
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "Construction Simulator",
    "preco": 34.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1273400/header.jpg?t=1664014253",
    "rating": 0.7752675386444708,
    "categorias": [
      "Casual",
      "Simulation"
    ]
  },
  {
    "nome": "Slime Rancher 2",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1657630/header.jpg?t=1663866007",
    "rating": 0.9595705418553934,
    "categorias": [
      "Action",
      "Adventure",
      "Casual",
      "Indie",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "BONELAB",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1592190/header.jpg?t=1664473845",
    "rating": 0.7721203892283321,
    "categorias": [
      "Action",
      "Adventure",
      "Simulation"
    ]
  },
  {
    "nome": "Mystwood Manor",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1863670/header.jpg?t=1664729277",
    "rating": 0,
    "categorias": [
      "Adventure",
      "Casual",
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "EA SPORTS\u2122 FIFA 23",
    "preco": 69.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1811260/header.jpg?t=1664533258",
    "rating": 0.3367054459618951,
    "categorias": [
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "Kena: Bridge of Spirits",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1954200/header.jpg?t=1664298117",
    "rating": 0.9143576826196473,
    "categorias": [
      "Action",
      "Adventure",
      "Indie"
    ]
  },
  {
    "nome": "Brotato",
    "preco": 4.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1942280/header.jpg?t=1664315252",
    "rating": 0.9636135508155583,
    "categorias": [
      "Action",
      "Casual",
      "Indie",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "Dome Keeper",
    "preco": 16.19,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1637320/header.jpg?t=1664541745",
    "rating": 0.8677474402730375,
    "categorias": [
      "Action",
      "Indie"
    ]
  },
  {
    "nome": "Terra Invicta",
    "preco": 35.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1176470/header.jpg?t=1664772072",
    "rating": 0.8408862034239678,
    "categorias": [
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Marauders",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1789480/header.jpg?t=1664975721",
    "rating": 0.7972275074748573,
    "categorias": [
      "Action",
      "Early Access"
    ]
  },
  {
    "nome": "Stardeus",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1380910/header.jpg?t=1665593989",
    "rating": 0.9308510638297872,
    "categorias": [
      "Indie",
      "RPG",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "DRAGON BALL: THE BREAKERS",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1276760/header.jpg?t=1665745589",
    "rating": 0.6636455186304129,
    "categorias": [
      "Action",
      "Adventure",
      "Casual"
    ]
  },
  {
    "nome": "Scorn",
    "preco": 35.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/698670/header.jpg?t=1665763396",
    "rating": 0.7025238912031365,
    "categorias": [
      "Action",
      "Adventure",
      "Indie"
    ]
  },
  {
    "nome": "Coral Island",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1158160/header.jpg?t=1665556402",
    "rating": 0.8915094339622641,
    "categorias": [
      "Adventure",
      "Casual",
      "Indie",
      "RPG",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Stranded: Alien Dawn",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1324130/header.jpg?t=1665669392",
    "rating": 0.8404907975460123,
    "categorias": [
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Asterigos: Curse of the Stars",
    "preco": 31.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1731070/header.jpg?t=1665516879",
    "rating": 0.7978947368421052,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Lost Eidolons",
    "preco": 34.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1580520/header.jpg?t=1665761706",
    "rating": 0.7966101694915254,
    "categorias": [
      "Indie",
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "TRIANGLE STRATEGY",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1850510/header.jpg?t=1665775722",
    "rating": 0.856353591160221,
    "categorias": [
      "RPG",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "UNCHARTED\u2122: Legacy of Thieves Collection",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1659420/header.jpg?t=1666386909",
    "rating": 0.9013414106447425,
    "categorias": [
      "Adventure"
    ]
  },
  {
    "nome": "Potionomics",
    "preco": 22.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1874490/header.jpg?t=1666225081",
    "rating": 0.852962692026335,
    "categorias": [
      "Indie",
      "RPG",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Richman 11",
    "preco": 17.09,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2074800/header.jpg?t=1666326432",
    "rating": 0.4845814977973568,
    "categorias": [
      "Casual",
      "Strategy"
    ]
  },
  {
    "nome": "Persona 5 Royal",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1687950/header.jpg?t=1666326569",
    "rating": 0.9723577235772358,
    "categorias": [
      "RPG"
    ]
  },
  {
    "nome": "Gotham Knights",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1496790/header.jpg?t=1666371936",
    "rating": 0.6475491830610204,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "A Plague Tale: Requiem",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1182900/header.jpg?t=1666102992",
    "rating": 0.8813241723922548,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Monster Prom 3: Monster Roadtrip",
    "preco": 10.79,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1665190/header.jpg?t=1666372568",
    "rating": 0.9947643979057592,
    "categorias": [
      "Casual",
      "Indie",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "DAVE THE DIVER",
    "preco": 17.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1868140/header.jpg?t=1666954118",
    "rating": 0.9537671232876712,
    "categorias": [
      "Adventure",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "Call of Duty\u00ae: Modern Warfare\u00ae II",
    "preco": 69.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1938090/header.jpg?t=1666987393",
    "rating": 0.5569153744524025,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Ghost of Dragon",
    "preco": 17.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1300920/header.jpg?t=1667101795",
    "rating": 0.6098360655737705,
    "categorias": [
      "Adventure",
      "Indie",
      "RPG",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "Football Manager 2023",
    "preco": 47.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1904540/header.jpg?t=1666694694",
    "rating": 0.8668238067177372,
    "categorias": [
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "Cosmoteer: Starship Architect & Commander",
    "preco": 17.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/799600/header.jpg?t=1666813624",
    "rating": 0.96875,
    "categorias": [
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "STAR OCEAN THE DIVINE FORCE",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1776380/header.jpg?t=1666960897",
    "rating": 0.6907020872865275,
    "categorias": [
      "Action",
      "RPG"
    ]
  },
  {
    "nome": "Victoria 3",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/529340/header.jpg?t=1666716973",
    "rating": 0.6191536748329621,
    "categorias": [
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "\u9547\u90aa",
    "preco": 13.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1939560/header.jpg?t=1667798072",
    "rating": 0.8315789473684211,
    "categorias": [
      "Adventure",
      "Indie",
      "RPG"
    ]
  },
  {
    "nome": "Against the Storm",
    "preco": 16.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1336490/header.jpg?t=1667709883",
    "rating": 0.9765886287625418,
    "categorias": [
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "The Past Within",
    "preco": 3.59,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1515210/header.jpg?t=1667695142",
    "rating": 0.9246651785714286,
    "categorias": [
      "Adventure",
      "Indie"
    ]
  },
  {
    "nome": "HARVESTELLA",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1816300/header.jpg?t=1667577586",
    "rating": 0.6354166666666666,
    "categorias": [
      "Action",
      "RPG",
      "Simulation"
    ]
  },
  {
    "nome": "Tactics Ogre: Reborn",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1451090/header.jpg?t=1668201917",
    "rating": 0.827354260089686,
    "categorias": [
      "RPG",
      "Simulation"
    ]
  },
  {
    "nome": "Astro Colony",
    "preco": 17.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1614550/header.jpg?t=1667891310",
    "rating": 0.8191126279863481,
    "categorias": [
      "Action",
      "Adventure",
      "Casual",
      "Indie",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Sonic Frontiers",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1237320/header.jpg?t=1668134681",
    "rating": 0.9453073364177131,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Soulstone Survivors",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2066020/header.jpg?t=1667822729",
    "rating": 0.8822624086186995,
    "categorias": [
      "Action",
      "Indie",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "The Dark Pictures Anthology: The Devil in Me",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1567020/header.jpg?t=1668730558",
    "rating": 0.518783542039356,
    "categorias": [
      "Adventure"
    ]
  },
  {
    "nome": "Warhammer 40,000: Darktide",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1361210/header.jpg?t=1668773089",
    "rating": 0.6807283763277694,
    "categorias": [
      "Action",
      "Adventure",
      "Indie"
    ]
  },
  {
    "nome": "Frozen Flame",
    "preco": 25.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/715400/header.jpg?t=1668846086",
    "rating": 0.6120879120879121,
    "categorias": [
      "Action",
      "Adventure",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "Cardfight!! Vanguard Dear Days",
    "preco": 69.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1881420/header.jpg?t=1668614635",
    "rating": 0.903954802259887,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "Pentiment",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1205520/header.jpg?t=1668502777",
    "rating": 0.9573863636363636,
    "categorias": [
      "Adventure",
      "Casual"
    ]
  },
  {
    "nome": "ZERO Sievert",
    "preco": 17.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1782120/header.jpg?t=1668530265",
    "rating": 0.8860958366064414,
    "categorias": [
      "Action",
      "Adventure",
      "Early Access"
    ]
  },
  {
    "nome": "\u8700\u5c71\uff1a\u521d\u7ae0",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1461810/header.jpg?t=1668730694",
    "rating": 0.8136752136752137,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "Massively Multiplayer",
      "RPG"
    ]
  },
  {
    "nome": "Marvel\u2019s Spider-Man: Miles Morales",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1817190/header.jpg?t=1668787110",
    "rating": 0.9467168998923574,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "We Who Are About To Die",
    "preco": 19.79,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/973230/header.jpg?t=1668479824",
    "rating": 0.8822784810126583,
    "categorias": [
      "Action",
      "Indie",
      "RPG",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Sexy Mystic Survivors",
    "preco": 8.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1964360/header.jpg?t=1668824939",
    "rating": 0,
    "categorias": [
      "Action",
      "Casual",
      "Indie",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "Ship of Fools",
    "preco": 13.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1286580/header.jpg?t=1669137094",
    "rating": 0.8723021582733813,
    "categorias": [
      "Action",
      "Indie"
    ]
  },
  {
    "nome": "Evil West",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1065310/header.jpg?t=1669115972",
    "rating": 0.790808999521302,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Need for Speed\u2122 Unbound",
    "preco": 69.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1846380/header.jpg?t=1669984763",
    "rating": 0.7737665463297232,
    "categorias": [
      "Action",
      "Racing"
    ]
  },
  {
    "nome": "\u8f6e\u56de\u4fee\u4ed9\u8def",
    "preco": 11.89,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1993150/header.jpg?t=1669984059",
    "rating": 0.8602150537634409,
    "categorias": [
      "Adventure",
      "Indie",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "Marvel's Midnight Suns",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/368260/header.jpg?t=1670012534",
    "rating": 0.6904047976011994,
    "categorias": [
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "The Callisto Protocol\u2122",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1544020/header.jpg?t=1670018020",
    "rating": 0.5098446456758329,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Assassin's Creed Valhalla",
    "preco": 19.8,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2208920/header.jpg?t=1670350109",
    "rating": 0.6151560178306092,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Chained Echoes",
    "preco": 21.24,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1229240/header.jpg?t=1670516162",
    "rating": 0.8938356164383562,
    "categorias": [
      "Indie",
      "RPG"
    ]
  },
  {
    "nome": "Choo-Choo Charles",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1766740/header.jpg?t=1670596632",
    "rating": 0.9145183175033921,
    "categorias": [
      "Action",
      "Adventure",
      "Indie"
    ]
  },
  {
    "nome": "Knights of Honor II: Sovereign",
    "preco": 39.59,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/736820/header.jpg?t=1670408031",
    "rating": 0.7264231096006797,
    "categorias": [
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Dwarf Fortress",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/975370/header.jpg?t=1670338868",
    "rating": 0.9670152855993563,
    "categorias": [
      "RPG",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Yi Xian: The Cultivation Card Game",
    "preco": 7.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1948800/header.jpg?t=1670406344",
    "rating": 0.7898909811694748,
    "categorias": [
      "Casual",
      "Indie",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "IXION",
    "preco": 31.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1113120/header.jpg?t=1670435943",
    "rating": 0.6212164889017008,
    "categorias": [
      "Indie",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "High On Life",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1583230/header.jpg?t=1671088821",
    "rating": 0.8881846989588049,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "CRISIS CORE \u2013FINAL FANTASY VII\u2013 REUNION",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1608070/header.jpg?t=1671102010",
    "rating": 0.8961218836565097,
    "categorias": [
      "Action",
      "RPG"
    ]
  },
  {
    "nome": "Depersonalization",
    "preco": 17.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1477070/header.jpg?t=1671884497",
    "rating": 0.9049429657794676,
    "categorias": [
      "Adventure",
      "Casual",
      "Indie",
      "RPG",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "\u5929\u5916\u6b66\u6797 (Traveler of Wuxia)",
    "preco": 22.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2088160/header.jpg?t=1672963224",
    "rating": 0.8096885813148789,
    "categorias": [
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "ONE PIECE ODYSSEY",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/814000/header.jpg?t=1673626181",
    "rating": 0.8556566970091027,
    "categorias": [
      "Action",
      "Adventure",
      "Casual",
      "RPG"
    ]
  },
  {
    "nome": "SimRail - The Railway Simulator",
    "preco": 31.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1422130/header.jpg?t=1673731384",
    "rating": 0.8294573643410853,
    "categorias": [
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "\u6c5f\u6e56\u5341\u4e00",
    "preco": 17.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1816570/header.jpg?t=1673685841",
    "rating": 0.34333420297417167,
    "categorias": [
      "Indie",
      "RPG"
    ]
  },
  {
    "nome": "Sailing Era",
    "preco": 22.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2161440/header.jpg?t=1673506793",
    "rating": 0.7508650519031141,
    "categorias": [
      "Adventure",
      "RPG",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Tom Clancy\u2019s The Division\u00ae 2",
    "preco": 9.0,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2221490/header.jpg?t=1673546006",
    "rating": 0.5605095541401274,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Surviving the Abyss",
    "preco": 17.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1254320/header.jpg?t=1673971211",
    "rating": 0.7389380530973452,
    "categorias": [
      "Indie",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Persona 3 Portable",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1809700/header.jpg?t=1674110230",
    "rating": 0.7277913610431948,
    "categorias": [
      "Adventure",
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "Grand Theft Auto: San Andreas \u2013 The Definitive Edition",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1547000/header.jpg?t=1674170442",
    "rating": 0.698051948051948,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Dead Space",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1693980/header.jpg?t=1674869799",
    "rating": 0.8744385862136301,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Pizza Tower",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2231450/header.jpg?t=1674756021",
    "rating": 0.9949348769898697,
    "categorias": [
      "Action",
      "Indie"
    ]
  },
  {
    "nome": "Forspoken",
    "preco": 69.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1680880/header.jpg?t=1674579943",
    "rating": 0.535924617196702,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Watch Dogs\u00ae: Legion",
    "preco": 12.0,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2239550/header.jpg?t=1674755684",
    "rating": 0.5396825396825397,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Hi-Fi RUSH",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1817230/header.jpg?t=1674867532",
    "rating": 0.9851912793089264,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Tom Clancy's Ghost Recon\u00ae Breakpoint",
    "preco": 12.0,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2231380/header.jpg?t=1674496956",
    "rating": 0.5118483412322274,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "SpellForce: Conquest of Eo",
    "preco": 23.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1581770/header.jpg?t=1675436479",
    "rating": 0.7818696883852692,
    "categorias": [
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "Your Only Move Is HUSTLE",
    "preco": 4.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2212330/header.jpg?t=1675376516",
    "rating": 0.9719696969696969,
    "categorias": [
      "Action",
      "Indie",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Undisputed",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1451190/header.jpg?t=1675440598",
    "rating": 0.8168817579351239,
    "categorias": [
      "Action",
      "Indie",
      "Simulation",
      "Sports",
      "Early Access"
    ]
  },
  {
    "nome": "Don't Starve",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/219740/header.jpg?t=1675969205",
    "rating": 0.9678024819544143,
    "categorias": [
      "Adventure",
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "Hogwarts Legacy",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg?t=1676056674",
    "rating": 0.9436952788491315,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Returnal\u2122",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1649240/header.jpg?t=1676476643",
    "rating": 0.8081023454157783,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Pharaoh: A New Era",
    "preco": 19.54,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1351080/header.jpg?t=1676473513",
    "rating": 0.6883468834688347,
    "categorias": [
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "WILD HEARTS\u2122",
    "preco": 69.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1938010/header.jpg?t=1676571541",
    "rating": 0.41443435908789017,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Plan B: Terraform",
    "preco": 8.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1894430/header.jpg?t=1676474477",
    "rating": 0.9,
    "categorias": [
      "Indie",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Noobs Want to Live",
    "preco": 4.24,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1737340/header.jpg?t=1676542879",
    "rating": 0.9209270620313565,
    "categorias": [
      "Action",
      "Adventure",
      "Casual",
      "Indie"
    ]
  },
  {
    "nome": "OCTOPATH TRAVELER II",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1971650/header.jpg?t=1677258106",
    "rating": 0.9362637362637363,
    "categorias": [
      "RPG"
    ]
  },
  {
    "nome": "Like a Dragon: Ishin!",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1805480/header.jpg?t=1677020327",
    "rating": 0.8443067389620449,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Atomic Heart",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/668580/header.jpg?t=1676995676",
    "rating": 0.8741702459976571,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Sons Of The Forest",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1326470/header.jpg?t=1677179639",
    "rating": 0.8389069264069264,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "Blood Bowl 3",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1016950/header.jpg?t=1677172554",
    "rating": 0.2619626926196269,
    "categorias": [
      "Sports",
      "Strategy"
    ]
  },
  {
    "nome": "Kerbal Space Program 2",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/954850/header.jpg?t=1677247229",
    "rating": 0.49682587666263606,
    "categorias": [
      "Indie",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "Company of Heroes 3",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1677280/header.jpg?t=1677265328",
    "rating": 0.5957167011083975,
    "categorias": [
      "Action",
      "Strategy"
    ]
  },
  {
    "nome": "Phantom Brigade",
    "preco": 23.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/553540/header.jpg?t=1677820449",
    "rating": 0.8504016064257028,
    "categorias": [
      "Indie",
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "Wo Long: Fallen Dynasty",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1448440/header.jpg?t=1677836173",
    "rating": 0.3807987443320544,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Garten of Banban 2",
    "preco": 4.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2262770/header.jpg?t=1677853907",
    "rating": 0.5880503144654088,
    "categorias": [
      "Action",
      "Adventure",
      "Casual",
      "Indie"
    ]
  },
  {
    "nome": "Hero's Adventure",
    "preco": 15.83,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1948980/header.jpg?t=1678622243",
    "rating": 0.8166666666666667,
    "categorias": [
      "Adventure",
      "Indie",
      "RPG",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "Contraband Police",
    "preco": 17.59,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/756800/header.jpg?t=1678285862",
    "rating": 0.9407979407979408,
    "categorias": [
      "Action",
      "Adventure",
      "Simulation"
    ]
  },
  {
    "nome": "FATAL FRAME / PROJECT ZERO: Mask of the Lunar Eclipse",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2130460/header.jpg?t=1678323677",
    "rating": 0.8839907192575406,
    "categorias": [
      "Adventure"
    ]
  },
  {
    "nome": "Call of Duty\u00ae: Black Ops Cold War",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1985810/header.jpg?t=1678294756",
    "rating": 0.7476923076923077,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Big Ambitions",
    "preco": 20.69,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1331550/header.jpg?t=1678616727",
    "rating": 0.9576271186440678,
    "categorias": [
      "Indie",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "Hotel Renovator",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1214470/header.jpg?t=1678271809",
    "rating": 0.7803571428571429,
    "categorias": [
      "Adventure",
      "Casual",
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "WWE 2K23",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1942660/header.jpg?t=1679026333",
    "rating": 0.8401639344262295,
    "categorias": [
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "Resident Evil 4",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg?t=1679674814",
    "rating": 0.9670675047827275,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Atelier Ryza 3: Alchemist of the End & the Secret Key",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1999770/header.jpg?t=1679636270",
    "rating": 0.9532967032967034,
    "categorias": [
      "Adventure",
      "Casual",
      "RPG",
      "Simulation"
    ]
  },
  {
    "nome": "Terra Nil",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1593030/header.jpg?t=1680099315",
    "rating": 0.8408450704225352,
    "categorias": [
      "Casual",
      "Indie",
      "Strategy"
    ]
  },
  {
    "nome": "ZED ZONE",
    "preco": 10.19,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1211600/header.jpg?t=1680332004",
    "rating": 0.8974358974358975,
    "categorias": [
      "Action",
      "Indie",
      "RPG",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "The Great War: Western Front\u2122",
    "preco": 34.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2109370/header.jpg?t=1680202526",
    "rating": 0.78719723183391,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "Smalland: Survive the Wilds",
    "preco": 22.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/768200/header.jpg?t=1680097386",
    "rating": 0.8259649122807018,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "Sifu",
    "preco": 35.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2138710/header.jpg?t=1680512424",
    "rating": 0.936897458369851,
    "categorias": [
      "Action",
      "Indie"
    ]
  },
  {
    "nome": "Crab Champions",
    "preco": 8.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/774801/header.jpg?t=1680424665",
    "rating": 0.9845528455284552,
    "categorias": [
      "Action",
      "Adventure",
      "Casual",
      "Indie",
      "Racing",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "DREDGE",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1562430/header.jpg?t=1680256832",
    "rating": 0.9575757575757575,
    "categorias": [
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "The Last of Us\u2122 Part I",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1888930/header.jpg?t=1680282721",
    "rating": 0.4296749123305848,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Ravenswatch",
    "preco": 17.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2071280/header.jpg?t=1680796826",
    "rating": 0.670755326016785,
    "categorias": [
      "Action",
      "Adventure",
      "Early Access"
    ]
  },
  {
    "nome": "\u6211\u5728\u5730\u7403\u4fee\u4ed9\u6709\u7cfb\u7edf",
    "preco": 13.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2057550/header.jpg?t=1680918588",
    "rating": 0.753880266075388,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "Meet Your Maker",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1194810/header.jpg?t=1680625531",
    "rating": 0.8256285482562855,
    "categorias": [
      "Action",
      "Strategy"
    ]
  },
  {
    "nome": "Minecraft Legends",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1928870/header.jpg?t=1681938843",
    "rating": 0.6102564102564103,
    "categorias": [
      "Action",
      "Strategy"
    ]
  },
  {
    "nome": "Wildfrost",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1811990/header.jpg?t=1681402879",
    "rating": 0.7333903621328771,
    "categorias": [
      "Indie",
      "Strategy"
    ]
  },
  {
    "nome": "Neon Echo",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2321210/header.jpg?t=1682256472",
    "rating": 0.900523560209424,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "Havendock",
    "preco": 15.29,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2020710/header.jpg?t=1682320791",
    "rating": 0.956140350877193,
    "categorias": [
      "Casual",
      "Indie",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Volcano Princess",
    "preco": 9.34,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1669980/header.jpg?t=1682303720",
    "rating": 0.9857224443175329,
    "categorias": [
      "Indie",
      "RPG",
      "Simulation"
    ]
  },
  {
    "nome": "Mega Man Battle Network Legacy Collection Vol. 1",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1798010/header.jpg?t=1681862519",
    "rating": 0.9230769230769231,
    "categorias": [
      "Action",
      "RPG"
    ]
  },
  {
    "nome": "The Mageseeker: A League of Legends Story\u2122",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1457080/header.jpg?t=1682096927",
    "rating": 0.8335233751425314,
    "categorias": [
      "Action",
      "Indie",
      "RPG"
    ]
  },
  {
    "nome": "Boundary",
    "preco": 22.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1364020/header.jpg?t=1681980774",
    "rating": 0.740270380991397,
    "categorias": [
      "Action",
      "Early Access"
    ]
  },
  {
    "nome": "Cassette Beasts",
    "preco": 17.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1321440/header.jpg?t=1682687374",
    "rating": 0.960377358490566,
    "categorias": [
      "Indie",
      "RPG"
    ]
  },
  {
    "nome": "Shadows of Doubt",
    "preco": 17.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/986130/header.jpg?t=1682348079",
    "rating": 0.9041198501872659,
    "categorias": [
      "Action",
      "Indie",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "Amanda the Adventurer",
    "preco": 8.09,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2166060/header.jpg?t=1682610929",
    "rating": 0.9551282051282052,
    "categorias": [
      "Indie"
    ]
  },
  {
    "nome": "STAR WARS Jedi: Survivor\u2122",
    "preco": 69.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1774580/header.jpg?t=1682692236",
    "rating": 0.4936874183717893,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Afterimage",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1701520/header.jpg?t=1682470115",
    "rating": 0.7625272331154684,
    "categorias": [
      "Action",
      "Adventure",
      "Indie"
    ]
  },
  {
    "nome": "Roots of Pacha",
    "preco": 22.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1245560/header.jpg?t=1682457160",
    "rating": 0.9302721088435374,
    "categorias": [
      "Indie",
      "RPG",
      "Simulation"
    ]
  },
  {
    "nome": "KAKU: Ancient Seal",
    "preco": 22.24,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1179580/header.jpg?t=1683510693",
    "rating": 0.8789808917197452,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "Garten of Banban 3",
    "preco": 4.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2311190/header.jpg?t=1683295141",
    "rating": 0.6344086021505376,
    "categorias": [
      "Action",
      "Adventure",
      "Casual",
      "Indie"
    ]
  },
  {
    "nome": "Redfall",
    "preco": 69.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1294810/header.jpg?t=1683053084",
    "rating": 0.28328050713153724,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Tape to Tape",
    "preco": 17.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1566200/header.jpg?t=1683313599",
    "rating": 0.8713235294117647,
    "categorias": [
      "Action",
      "Sports",
      "Early Access"
    ]
  },
  {
    "nome": "Age of Wonders 4",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1669000/header.jpg?t=1683221366",
    "rating": 0.8383771929824562,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "Occupy Mars: The Game",
    "preco": 21.24,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/758690/header_alt_assets_5.jpg?t=1683832409",
    "rating": 0.7213438735177866,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "Darkest Dungeon\u00ae II",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1940340/header.jpg?t=1684008833",
    "rating": 0.7552625491556789,
    "categorias": [
      "Indie",
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "Mechabellum",
    "preco": 11.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/669330/header.jpg?t=1683956923",
    "rating": 0.9269406392694064,
    "categorias": [
      "Action",
      "Massively Multiplayer",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Far Cry\u00ae 6",
    "preco": 15.0,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2369390/header.jpg?t=1683827881",
    "rating": 0.7293291731669267,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Voidtrain",
    "preco": 26.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1159690/header.jpg?t=1684140440",
    "rating": 0.6677768526228143,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "RPG",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "Starship Troopers: Extermination",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1268750/header.jpg?t=1684348979",
    "rating": 0.927640872704442,
    "categorias": [
      "Action",
      "Indie",
      "Early Access"
    ]
  },
  {
    "nome": "The Outlast Trials",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1304930/header.jpg?t=1684452998",
    "rating": 0.9446478254502856,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "Early Access"
    ]
  },
  {
    "nome": "Warhammer 40,000: Boltgun",
    "preco": 19.79,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2005010/header.jpg?t=1685030541",
    "rating": 0.9457291175082586,
    "categorias": [
      "Action",
      "Indie"
    ]
  },
  {
    "nome": "Above Snakes",
    "preco": 22.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1589120/header.jpg?t=1685280984",
    "rating": 0.6992481203007519,
    "categorias": [
      "Adventure",
      "RPG",
      "Simulation"
    ]
  },
  {
    "nome": "Railway Empire 2",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1644320/header.jpg?t=1685100710",
    "rating": 0.624633431085044,
    "categorias": [
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Miasma Chronicles",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1649010/header.jpg?t=1685014988",
    "rating": 0.7111111111111111,
    "categorias": [
      "Action",
      "Strategy"
    ]
  },
  {
    "nome": "Inkbound",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1062810/header.jpg?t=1684773182",
    "rating": 0.8279158699808795,
    "categorias": [
      "RPG",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "System Shock",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/482400/header.jpg?t=1685635403",
    "rating": 0.9290375203915171,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Etrian Odyssey HD",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1868180/header.jpg?t=1685635527",
    "rating": 0.9693251533742331,
    "categorias": [
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Street Fighter\u2122 6",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1364780/header.jpg?t=1685680525",
    "rating": 0.9035323280313985,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Etrian Odyssey III HD",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1810820/header.jpg?t=1685635642",
    "rating": 0.9375,
    "categorias": [
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Friends vs Friends",
    "preco": 5.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1785150/header.jpg?t=1685547027",
    "rating": 0.8056455344747802,
    "categorias": [
      "Action",
      "Indie"
    ]
  },
  {
    "nome": "Amnesia: The Bunker",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1944430/header.jpg?t=1686140325",
    "rating": 0.9065606361829026,
    "categorias": [
      "Action",
      "Adventure",
      "Indie"
    ]
  },
  {
    "nome": "Riders Republic",
    "preco": 15.0,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2290180/header.jpg?t=1686243571",
    "rating": 0.6755793226381461,
    "categorias": [
      "Massively Multiplayer",
      "Sports"
    ]
  },
  {
    "nome": "F1\u00ae 23",
    "preco": 69.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2108330/header.jpg?t=1686898946",
    "rating": 0.8700564971751412,
    "categorias": [
      "Racing",
      "Sports"
    ]
  },
  {
    "nome": "BattleBit Remastered",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/671860/header.jpg?t=1686877598",
    "rating": 0.8981446893288507,
    "categorias": [
      "Action",
      "Massively Multiplayer",
      "Early Access"
    ]
  },
  {
    "nome": "Tom Clancy\u2019s Rainbow Six\u00ae Extraction",
    "preco": 10.0,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2379390/header.jpg?t=1686897053",
    "rating": 0.6286472148541115,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Aliens: Dark Descent",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1150440/header.jpg?t=1687277023",
    "rating": 0.8890328151986183,
    "categorias": [
      "Action",
      "Strategy"
    ]
  },
  {
    "nome": "Six Days in Fallujah",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1548850/header.jpg?t=1687576255",
    "rating": 0.8155680224403927,
    "categorias": [
      "Action",
      "Early Access"
    ]
  },
  {
    "nome": "Forever Skies",
    "preco": 23.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1641960/header.jpg?t=1687540159",
    "rating": 0.8895705521472392,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "Nova Lands",
    "preco": 17.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1501610/header.jpg?t=1687539578",
    "rating": 0.9301587301587302,
    "categorias": [
      "Adventure",
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "Trepang2",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1164940/header.jpg?t=1687429911",
    "rating": 0.9570909090909091,
    "categorias": [
      "Action",
      "Indie"
    ]
  },
  {
    "nome": "Take Me To The Dungeon!!",
    "preco": 9.89,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1793250/header.jpg?t=1688213134",
    "rating": 0,
    "categorias": [
      "Adventure",
      "Casual",
      "Indie",
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "Ghost Trick: Phantom Detective",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1967430/header.jpg?t=1688109659",
    "rating": 0.9487179487179487,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "STORY OF SEASONS: A Wonderful Life",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2111170/header.jpg?t=1687886413",
    "rating": 0.7515337423312883,
    "categorias": [
      "Casual",
      "RPG",
      "Simulation"
    ]
  },
  {
    "nome": "Jagged Alliance 3",
    "preco": 44.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1084160/header.jpg?t=1689427435",
    "rating": 0.8110552763819096,
    "categorias": [
      "Action",
      "Strategy"
    ]
  },
  {
    "nome": "Exoprimal",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1286320/header.jpg?t=1689330428",
    "rating": 0.6958041958041958,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Xenonauts 2",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/538030/header.jpg?t=1689991714",
    "rating": 0.7428087986463621,
    "categorias": [
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Techtonica",
    "preco": 25.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1457320/header.jpg?t=1689712389",
    "rating": 0.8033980582524272,
    "categorias": [
      "Adventure",
      "Casual",
      "Indie",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Lakeburg Legacies",
    "preco": 19.54,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1584940/header.jpg?t=1689942950",
    "rating": 0.5880281690140845,
    "categorias": [
      "RPG",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Punch Club 2: Fast Forward",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1161590/header.jpg?t=1690198186",
    "rating": 0.8352941176470589,
    "categorias": [
      "Adventure",
      "Indie",
      "RPG",
      "Simulation",
      "Sports",
      "Strategy"
    ]
  },
  {
    "nome": "Gunsmith Simulator",
    "preco": 17.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1101120/header.jpg?t=1689938033",
    "rating": 0.8293413173652695,
    "categorias": [
      "Action",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "Ratchet & Clank: Rift Apart",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1895880/header.jpg?t=1690464153",
    "rating": 0.8450238707308116,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Let's School",
    "preco": 17.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1937500/header.jpg?t=1690708452",
    "rating": 0.8989547038327527,
    "categorias": [
      "Casual",
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "Remnant II",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1282100/header.jpg?t=1690498964",
    "rating": 0.79669152309934,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Sanfu",
    "preco": 9.89,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1880330/header.jpg?t=1690688564",
    "rating": 0.8495082355729352,
    "categorias": [
      "Adventure",
      "Indie",
      "RPG"
    ]
  },
  {
    "nome": "Thronefall",
    "preco": 6.29,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2239150/header.jpg?t=1691060348",
    "rating": 0.968408262454435,
    "categorias": [
      "Action",
      "Indie",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "The Texas Chain Saw Massacre",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1433140/header.jpg?t=1692365618",
    "rating": 0.8267191038016923,
    "categorias": [
      "Action",
      "Indie"
    ]
  },
  {
    "nome": "Blasphemous 2",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2114740/header.jpg?t=1692957562",
    "rating": 0.936153544849197,
    "categorias": [
      "Action",
      "Adventure",
      "Indie"
    ]
  },
  {
    "nome": "ARMORED CORE\u2122 VI FIRES OF RUBICON\u2122",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1888160/header.jpg?t=1693376592",
    "rating": 0.8497312791114296,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Madden NFL 24",
    "preco": 69.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2140330/header.jpg?t=1692715381",
    "rating": 0.30154071900220103,
    "categorias": [
      "Simulation",
      "Sports",
      "Strategy"
    ]
  },
  {
    "nome": "Sengoku Dynasty",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1702010/header.jpg?t=1692007885",
    "rating": 0.7142857142857143,
    "categorias": [
      "Adventure",
      "RPG",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "Shadow Gambit: The Cursed Crew",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1545560/header.jpg?t=1693315951",
    "rating": 0.9516331658291457,
    "categorias": [
      "Adventure",
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "BOOK OF HOURS",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1028310/header.jpg?t=1693401751",
    "rating": 0.9410131852879945,
    "categorias": [
      "Indie",
      "RPG",
      "Simulation"
    ]
  },
  {
    "nome": "Sunkenland",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2080690/header.jpg?t=1693685975",
    "rating": 0.7279815189142362,
    "categorias": [
      "Action",
      "Indie",
      "Early Access"
    ]
  },
  {
    "nome": "The Matchless Kungfu",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1696440/header.jpg?t=1693535990",
    "rating": 0.8379254457050244,
    "categorias": [
      "Indie",
      "RPG",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Bomb Rush Cyberfunk",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1353230/header.jpg?t=1692475350",
    "rating": 0.9818438216111405,
    "categorias": [
      "Action",
      "Adventure",
      "Indie"
    ]
  },
  {
    "nome": "To The Core",
    "preco": 7.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1988550/header.jpg?t=1691658424",
    "rating": 0.9355495251017639,
    "categorias": [
      "Adventure",
      "Casual",
      "Indie"
    ]
  },
  {
    "nome": "Wayfinder",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1171690/header.jpg?t=1692291876",
    "rating": 0.45195296661711043,
    "categorias": [
      "Action",
      "Adventure",
      "Casual",
      "Massively Multiplayer",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "Sea of Stars",
    "preco": 31.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1244090/header.jpg?t=1693587041",
    "rating": 0.8799414348462665,
    "categorias": [
      "Adventure",
      "Indie",
      "RPG"
    ]
  },
  {
    "nome": "Trine 5: A Clockwork Conspiracy",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1436700/header.jpg?t=1693573830",
    "rating": 0.952054794520548,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "RPG"
    ]
  },
  {
    "nome": "EA SPORTS\u2122 WRC",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1849250/header.jpg?t=1701207985",
    "rating": 0.7295825771324864,
    "categorias": [
      "Racing",
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "ARK: Survival Ascended",
    "preco": 44.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2399830/header.jpg?t=1699643475",
    "rating": 0.5911189846949148,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "Massively Multiplayer",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "Lies of P",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1627720/header.jpg?t=1701080767",
    "rating": 0.9238999059940015,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "For The King II",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1676840/header.jpg?t=1699521848",
    "rating": 0.701274822260358,
    "categorias": [
      "Adventure",
      "Indie",
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "Lords of the Fallen",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1501750/header.jpg?t=1701192165",
    "rating": 0.6214724646757211,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "Starfield",
    "preco": 69.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1716740/header.jpg?t=1700075960",
    "rating": 0.6688907957944712,
    "categorias": [
      "RPG"
    ]
  },
  {
    "nome": "Party Animals",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1260320/header.jpg?t=1701419270",
    "rating": 0.7258703481392557,
    "categorias": [
      "Action",
      "Casual",
      "Indie"
    ]
  },
  {
    "nome": "Like a Dragon Gaiden: The Man Who Erased His Name",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2375550/header.jpg?t=1700648373",
    "rating": 0.9753041583439259,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "The Talos Principle 2",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/835960/header.jpg?t=1700476673",
    "rating": 0.9651856126178111,
    "categorias": [
      "Action",
      "Adventure"
    ]
  },
  {
    "nome": "Death Must Die",
    "preco": 6.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2334730/header.jpg?t=1700814971",
    "rating": 0.9199096158674366,
    "categorias": [
      "Action",
      "Casual",
      "Indie",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "Magicraft",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2103140/header.jpg?t=1701246498",
    "rating": 0.8957483983692487,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "RPG",
      "Early Access"
    ]
  },
  {
    "nome": "EA SPORTS FC\u2122 24",
    "preco": 69.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2195250/header.jpg?t=1701266064",
    "rating": 0.5781717534410533,
    "categorias": [
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "My Suika - Watermelon Game",
    "preco": 0.89,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2671970/header.jpg?t=1701305881",
    "rating": 0,
    "categorias": [
      "Casual",
      "Indie",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Last Train Home",
    "preco": 33.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1469610/header.jpg?t=1701359196",
    "rating": 0.8582089552238806,
    "categorias": [
      "Strategy"
    ]
  },
  {
    "nome": "Risk of Rain Returns",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1337520/header.jpg?t=1699995226",
    "rating": 0.9055352143010984,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Diablo\u00ae IV",
    "preco": 69.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2344520/header.jpg?t=1701194709",
    "rating": 0.5787965616045845,
    "categorias": [
      "Action",
      "RPG"
    ]
  },
  {
    "nome": "Love Is All Around",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2322560/header.jpg?t=1700039149",
    "rating": 0.9537791978845306,
    "categorias": [
      "Adventure",
      "Indie",
      "RPG",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Ratopia",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2244130/header.jpg?t=1700063341",
    "rating": 0.8881535407015222,
    "categorias": [
      "Adventure",
      "Casual",
      "Indie",
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Mortal Kombat 1",
    "preco": 69.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1971870/header.jpg?t=1699984086",
    "rating": 0.7383908548925231,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Lethal Company",
    "preco": 9.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1966720/header.jpg?t=1700231592",
    "rating": 0.9879661761672899,
    "categorias": [
      "Action",
      "Adventure",
      "Indie",
      "Early Access"
    ]
  },
  {
    "nome": "Wandering Sword",
    "preco": 24.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1876890/header.jpg?t=1700647231",
    "rating": 0.9221494102228047,
    "categorias": [
      "Adventure",
      "Indie",
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "NBA 2K24",
    "preco": 26.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2338770/header.jpg?t=1701446958",
    "rating": 0.156155691402925,
    "categorias": [
      "Simulation",
      "Sports"
    ]
  },
  {
    "nome": "Yog-Sothoth\u2019s Yard",
    "preco": 10.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2194530/header.jpg?t=1698320471",
    "rating": 0.9377057482907065,
    "categorias": [
      "Indie",
      "RPG",
      "Simulation"
    ]
  },
  {
    "nome": "Cities: Skylines II",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/949230/header.jpg?t=1700492572",
    "rating": 0.6075063613231552,
    "categorias": [
      "Simulation"
    ]
  },
  {
    "nome": "Football Manager 2024",
    "preco": 59.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2252570/header.jpg?t=1699889206",
    "rating": 0.8741088180112571,
    "categorias": [
      "Simulation",
      "Sports",
      "Strategy"
    ]
  },
  {
    "nome": "Stronghold: Definitive Edition",
    "preco": 14.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2140020/header.jpg?t=1700750260",
    "rating": 0.8751677852348994,
    "categorias": [
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "PAYDAY 3",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1272080/header.jpg?t=1699355443",
    "rating": 0.42447464397360196,
    "categorias": [
      "Action",
      "Adventure",
      "RPG"
    ]
  },
  {
    "nome": "The Front",
    "preco": 19.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2285150/header.jpg?t=1699155742",
    "rating": 0.721072226358898,
    "categorias": [
      "Action",
      "Indie",
      "Massively Multiplayer",
      "Simulation",
      "Early Access"
    ]
  },
  {
    "nome": "SteamWorld Build",
    "preco": 26.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2134770/header.jpg?t=1701599791",
    "rating": 0.8275862068965517,
    "categorias": [
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Warhammer 40,000: Rogue Trader",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2186680/header.jpg?t=1702000678",
    "rating": 0.8514238547255468,
    "categorias": [
      "Adventure",
      "Indie",
      "RPG",
      "Strategy"
    ]
  },
  {
    "nome": "The Day Before",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1372880/header.jpg?t=1701972022",
    "rating": 0.1993971449695729,
    "categorias": [
      "Action",
      "Adventure",
      "Massively Multiplayer",
      "Early Access"
    ]
  },
  {
    "nome": "Railroader",
    "preco": 29.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1683150/header.jpg?t=1701975622",
    "rating": 0,
    "categorias": [
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "House Flipper 2",
    "preco": 35.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1190970/header.jpg?t=1702674942",
    "rating": 0.8343982960596379,
    "categorias": [
      "Casual",
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "(the) Gnorp Apologue",
    "preco": 6.29,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/1473350/header.jpg?t=1702589491",
    "rating": 0.9816176470588235,
    "categorias": [
      "Casual",
      "Indie",
      "Simulation",
      "Strategy"
    ]
  },
  {
    "nome": "Pioneers of Pagonia",
    "preco": 25.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2155180/header.jpg?t=1702475179",
    "rating": 0.8896940418679549,
    "categorias": [
      "Simulation",
      "Strategy",
      "Early Access"
    ]
  },
  {
    "nome": "Granblue Fantasy Versus: Rising",
    "preco": 49.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2157560/header.jpg?t=1702882252",
    "rating": 0.8063555114200596,
    "categorias": [
      "Action"
    ]
  },
  {
    "nome": "Five Nights at Freddy's: Help Wanted 2",
    "preco": 39.99,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2287520/header.jpg?t=1702562392",
    "rating": 0.9112050739957717,
    "categorias": [
      "Indie",
      "Simulation"
    ]
  },
  {
    "nome": "The Arrogant Kaiju Princess and The Detective Servant",
    "preco": 13.49,
    "img": "https://cdn.akamai.steamstatic.com/steam/apps/2291680/header.jpg?t=1703258981",
    "rating": 0,
    "categorias": [
      "Casual",
      "Indie",
      "RPG"
    ]
  }
]