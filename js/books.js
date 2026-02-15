const title_name = document.querySelector(".title-name");

const book_name = document.querySelector(".book-name");

const vowels = [
    'a', 'e', 'i', 'o', 'u',
    'A', 'E', 'I', 'O', 'U'
];

const nouns = {
  mouse: 'mice',
  child: 'children',
  cactus: 'cacti',
};

// usage
//const p = nouns[word] ?? word + 's';

const adjectives = [
    "Dark",
    "Heavy",
    "Gilded",
    "Iron",
    "Steel",
    "Golden",
    "Gleaming",
    "Fraught",
    "Cursed",
    "Silent",
    "Jade",
    "Emerald",
    "Diamond",
    "Wooden",
    "Burning",
    "Flaming",
    "Vengeful",
    "Careful",
    "Cautious",
    "Hasty",
    "Dead",
    "Living",
    "Last",
    "Final",
    "First",
    "Late",
    "Crystal",
    "Shining",
    "Tarnished",
    "Greedy",
    "Sputtering",
]
const nouns1 = [
    "Tower",
    "Hall",
    "City",
    "Citadel",
    "Crown",
    "King",
    "Prince",
    "Princess",
    "Hero",
    "Queen",
    "Throne",
    "Cliff",
    "River",
    "Quill",
    "Sword",
    "Staff",
    "Wizard",
    "Wolf",
    "Flame",
    "Torch",
    "Legend",
    "Thief",
    "Tree",
    "Rock",
    "Stone",
    "Knight",
    "Emperor",
    "Samurai",
    "Wall",
    "Key",
    "Keyhole",
    "Lock",
    "Door",
    "Hand",
    "Power",
]
const nouns2 = [
    "Dance",
    "Battle",
    "Feast",
    "Prince",
    "Sword",
    "Crown",
    "Game",
    "Life",
    "Scepter",
    "Castle",
    "Fortress",
    "Field",
    "Pit",
    "Forest",
    "Cavern",
    "Mountain",
    "Waterfall",
    "Tome",
    "War",
    "Night",
    "Way",
    "Deception",
    "Sea",
    "River",
    //"Age",
    //"Era",
    "Name",
    "Child",
    "World",
    "Story",
    "Tale",
    "Poem",
    "Fable",
    "Color",
    "Sound",
    "Smell",
    "Glint",
    "Glimpse",
    "King",
    "Queen",
    "Legend",
    "Master",
    "Fist",
    "Rhythm",
]
const nouns3 = [
    "Dragons",
    "Kings",
    "Thorns",
    "Gold",
    "Ashes",
    "Ash",
    "Steel",
    "Stone",
    "Stones",
    "Pain",
    "Power",
    "Life",
    "Fire",
    "Water",
    "Air",
    "Earth",
    "Snakes",
    "Wolves",
    "Horses",
    "Love",
    "Death",
    "Hatred",
    "Wind",
    "Truth",
    "Deception",
    "Blood",
    "Gods",
    "Heroes",
    "Men",
    "Warriors",
    "Time",
    "Empires",
    "Rage",
    "Vengance",
    "the Sky",
    "Darkness",
    "the Deep",
    "the Heavens",
    "Embers",
    "Knights",
    "Revenge",
]
const noun_new = [ //single: [0] plural: [1]
    ["Age", "Ages"],
    ["Era", "Eras"],
    ["Air", "Air"],
    ["Ash", "Ashes"],
    ["Battle", "Battles"],
    ["Blood", "Blood"],
    ["Castle", "Castles"],
    ["Cavern", "Caverns"],
    ["Child", "Children"],
    ["Citadel", "Citadels"],
    ["City", "Cities"],
    ["Cliff", "Cliffs"],
    ["Color", "Colors"],
    ["Crown", "Crowns"],
    ["Dance", "Dances"],
    ["Darkness", "Darkness"],
    ["Death", "Deaths"],
    ["Deception", "Deceptions"],
    ["Door", "Doors"],
    ["Dragon", "Dragons"],
    ["Earth", "Earth"],
    ["Ember", "Embers"],
    ["Emperor", "Emperors"],
    ["Empire", "Empires"],
    ["Fable", "Fables"],
    ["Feast", "Feasts"],
    ["Field", "Fields"],
    ["Fire", "Fires"],
    ["Fist", "Fists"],
    ["Flame", "Flames"],
    ["Forest", "Forests"],
    ["Fortress", "Fortresses"],
    ["Game", "Games"],
    ["Glimpse", "Glimpses"],
    ["Glint", "Glints"],
    ["God", "Gods"],
    ["Gold", "Gold"],
    ["Hall", "Halls"],
    ["Hand", "Hands"],
    ["Hatred", "Hatred"],
    ["Hero", "Heroes"],
    ["Horse", "Horses"],
    ["Key", "Keys"],
    ["Keyhole", "Keyholes"],
    ["King", "Kings"],
    ["Knight", "Knights"],
    ["Legend", "Legends"],
    ["Life", "Lives"],
    ["Lock", "Locks"],
    ["Love", "Loves"],
    ["Master", "Masters"],
    ["Man", "Men"],
    ["Mountain", "Mountains"],
    ["Name", "Names"],
    ["Night", "Nights"],
    ["Pain", "Pains"],
    ["Pit", "Pits"],
    ["Poem", "Poems"],
    ["Power", "Powers"],
    ["Prince", "Princes"],
    ["Princess", "Princesses"],
    ["Queen", "Queens"],
    ["Quill", "Quills"],
    ["Rage", "Rage"],
    ["Revenge", "Revenge"],
    ["Rhythm", "Rhythms"],
    ["River", "Rivers"],
    ["Rock", "Rocks"],
    ["Samurai", "Samurai"],
    ["Scepter", "Scepters"],
    ["Sea", "Seas"],
    ["Smell", "Smells"],
    ["Snake", "Snakes"],
    ["Sound", "Sounds"],
    ["Staff", "Staves"],
    ["Steel", "Steels"],
    ["Stone", "Stones"],
    ["Story", "Stories"],
    ["Sword", "Swords"],
    ["Tale", "Tales"],
    ["Thief", "Theives"],
    ["Thorn", "Thorns"],
    ["Throne", "Thrones"],
    ["Time", "Times"],
    ["Tome", "Tomes"],
    ["Torch", "Torches"],
    ["Tower", "Towers"],
    ["Tree", "Trees"],
    ["Truth", "Truths"],
    ["Vengance", "Vengances"],
    ["Wall", "Walls"],
    ["War", "Wars"],
    ["Warrior", "Warriors"],
    ["Water", "Water"],
    ["Waterfall", "Waterfalls"],
    ["Way", "Ways"],
    ["Wind", "Winds"],
    ["Wizard", "Wizards"],
    ["Wolf", "Wolves"],
    ["World", "Worlds"]
]

function select_from_list(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function get_the_or_a(word) {
    if (Math.random() > 0.5) {
        return 'The'
    }
    
    if (vowels.includes(word[0])) {
        return 'An'
    } else {
        return 'A'
    }
}

function title_format1() {
    // The/A ___ ___
    const adj = select_from_list(adjectives);
    const noun1 = select_from_list(noun_new)[0];
    const the_a_1 = get_the_or_a(adj);
    return `${the_a_1} ${adj} ${noun1}`
}

function title_format2() {
    // The/A ___ of ___ and ___
    const noun1 = select_from_list(noun_new)[0];
    const noun2 = select_from_list(noun_new)[1];
    const noun3 = select_from_list(noun_new)[1];
    const the_a_1 = get_the_or_a(noun1);
    return `${the_a_1} ${noun1} of ${noun2} and ${noun3}`
}

function title_format3() {
    // The/A ___ of ____
    const noun1 = select_from_list(noun_new)[0];
    const noun2 = select_from_list(noun_new)[1];
    const the_a_1 = get_the_or_a(noun1);
    return `${the_a_1} ${noun1} of ${noun2}`
}

function generate_book() {
    const title = select_from_list([
        title_format1(),
        title_format2(),
        title_format3()
    ]) + ":";
    const book = select_from_list([
        title_format1(),
        title_format2(),
        title_format3()
    ]); 
    
    title_name.innerHTML = title;
    book_name.innerHTML = book;
}