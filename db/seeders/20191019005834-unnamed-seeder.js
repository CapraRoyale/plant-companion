'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('plants', [{
      name: 'Apple',
      desc: 'the round fruit of a tree of the rose family, which typically has thin red or green skin and crisp flesh',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Banana',
      desc: 'a long curved fruit which grows in clusters and has soft pulpy flesh and yellow skin when ripe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Carrot',
      desc: 'a tapering orange-colored root eaten as a vegetable',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Dragonfruit',
      desc: 'A night-blooming climbing cactus (Hylocereus undatus) native to Mexico and Central America, cultivated in tropical regions for its edible fruit',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Eggplant',
      desc: 'the purple egg-shaped fruit of the nightshade family, which is eaten as a vegetable.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Fig',
      desc: 'a soft pear-shaped fruit with sweet dark flesh and many small seeds, eaten fresh or dried',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Amaranth",
      desc: "Love-lies-bleeding",
      misc: "Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 64°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Angelica",
      desc: "",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Brussels sprouts",
      desc: "",
      misc: "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 45°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Burdock",
      desc: "Gobo (Japanese Burdock)",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 68°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Cabbage",
      desc: "",
      misc: "Easy to grow. Grow in seed trays, and plant out in 4 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 41°F and 64°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Cape Gooseberry",
      desc: "Golden Berry, Inca Berry",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Capsicum",
      desc: "Bell peppers, Sweet peppers",
      misc: "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 64°F and 95°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Cardoon",
      desc: "",
      misc: "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 55°F and 77°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Carrot",
      desc: "",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 46°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Cauliflower",
      desc: "",
      misc: "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Celeriac",
      desc: "",
      misc: "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 46°F and 70°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Celery",
      desc: "",
      misc: "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 54°F and 70°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Artichokes (Globe)",
      desc: "",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 59°F and 64°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Chicory",
      desc: "Witloof, Belgian endive",
      misc: "Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 68°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Chilli peppers",
      desc: "Hot peppers",
      misc: "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 64°F and 95°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Chinese cabbage",
      desc: "Wong bok, wong nga pak",
      misc: "Easy to grow. Sow direct in the garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 68°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Chives",
      desc: "Garden chives",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Choko/Chayote",
      desc: "Chayote squash, christophene, chouchou, mirliton",
      misc: "Easy to grow. Plant whole mature fruit when one produces a shoot at one end.. Best planted at soil temperatures between 59°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Climbing beans",
      desc: "Pole beans, Runner beans, Scarlet Runners",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 61°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Collards",
      desc: "Collard greens, Borekale",
      misc: "Easy to grow. Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 46°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Coriander",
      desc: "Cilantro, Chinese parsley",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Corn Salad",
      desc: "Lamb's lettuce or Mache",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 68°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Cowpeas",
      desc: "Black eye peas, Southern peas",
      misc: "Easy to grow. When soil begins to warm up. After frosts finish.. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 59°F and 95°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Asparagus",
      desc: "",
      misc: "Easy to grow. Plant as crowns. Best planted at soil temperatures between 61°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Cucumber",
      desc: "",
      misc: "Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 61°F and 95°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Daikon",
      desc: "Japanese radish, Lo Bok",
      misc: "Easy to grow. Direct in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 68°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Dill",
      desc: "",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 68°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Dwarf beans",
      desc: "French beans, Bush beans",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 61°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Eggplant",
      desc: "Aubergine",
      misc: "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 75°F and 90°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Endive",
      desc: "",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 59°F and 77°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Fennel",
      desc: "Bronze fennel",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "French tarragon",
      desc: "",
      misc: "Plant cuttings or root division. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Garlic",
      desc: "",
      misc: "Easy to grow. Plant cloves. Best planted at soil temperatures between 50°F and 95°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Ginger",
      desc: "",
      misc: "Plant pieces of fresh root showing signs of shoots. Best planted at soil temperatures between 20°C and 30°C. (Show °F/in)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Asparagus Pea",
      desc: "Winged bean",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 59°F and 68°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Horseradish",
      desc: "",
      misc: "Easy to grow. Plant root pieces. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Jerusalem Artichokes",
      desc: "Sunchoke",
      misc: "Easy to grow. Plant tubers about 5cm (1.5\") deep.. Best planted at soil temperatures between 46°F and 59°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Kale",
      desc: "Borecole",
      misc: "Easy to grow. Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 46°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Kohlrabi",
      desc: "",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 46°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Leeks",
      desc: "",
      misc: "Easy to grow. Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 46°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Lemon Balm",
      desc: "Sweet balm",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Lettuce",
      desc: "",
      misc: "Easy to grow. Sow in garden, or start in seed trays and plant out in 4-6 weeks.. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 8°C and 27°C. (Show °F/in)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Luffa",
      desc: "Loofah, plant sponge",
      misc: "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 68°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Marrow",
      desc: "",
      misc: "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 68°F and 95°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Mint",
      desc: "Garden mint",
      misc: "Easy to grow. Grow in trays and plant out or start from cuttings. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 70°F and 75°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Basil",
      desc: "",
      misc: "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 64°F and 95°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Mizuna",
      desc: "Japanese Greens, Mitzuna, Mibuna",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Mustard greens",
      desc: "Gai choy",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 95°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Okra",
      desc: "Ladyfinger, gumbo",
      misc: "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 68°F and 95°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Onion",
      desc: "",
      misc: "Easy to grow. Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 46°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Oregano",
      desc: "Pot Marjoram",
      misc: "Sow in garden, or start in seed trays. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 64°F and 77°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pak Choy",
      desc: "Pak choi",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 70°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Parsley",
      desc: "Curly leaf parsley or flat leaf (Italian) parsley",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Parsnip",
      desc: "",
      misc: "Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 43°F and 70°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Peas",
      desc: "",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 8°C and 24°C. (Show °F/in)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Potato",
      desc: "",
      misc: "Plant tuber. Best planted at soil temperatures between 50°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Beetroot",
      desc: "Beets",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 45°F and 77°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pumpkin",
      desc: "",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 68°F and 90°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Radish",
      desc: "",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 46°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Rhubarb",
      desc: "",
      misc: "Easy to grow. Plant pieces of rhizome or roots 8 - 10 cm (3 - 4 in.) deep. Best planted at soil temperatures between 41°F and 68°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Rocket",
      desc: "Arugula/Rucola",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Rockmelon",
      desc: "Canteloupe",
      misc: "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 68°F and 90°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Rosella",
      desc: "Queensland Jam Plant, Roselle",
      misc: "Sow in garden, or start in seed trays. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 20°C and 35°C. (Show °F/in)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Rosemary",
      desc: "",
      misc: "Easy to grow. Plant cuttings . Best planted at soil temperatures between 59°F and 68°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Rutabaga",
      desc: "Swedes",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 45°F and 77°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Sage",
      desc: "Common Sage",
      misc: "Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Salsify",
      desc: "Vegetable oyster",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Borage",
      desc: "Burrage, Bugloss",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Savory - summer savory",
      desc: "Bean Herb",
      misc: "Easy to grow. Sow in Garden. Lightly cover.. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 64°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Savory - winter savory",
      desc: "Savory",
      misc: "Easy to grow. Start in trays. Cover seed lightly.. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 64°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Shallots",
      desc: "Eschalots",
      misc: "Easy to grow. Plant small bulblets, with stem just showing above ground. Best planted at soil temperatures between 46°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Silverbeet",
      desc: "Swiss Chard or Mangold",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Snow Peas",
      desc: "Sugar Peas, Mangetout, Chinese Peas",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 46°F and 68°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Spinach",
      desc: "English spinach",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Spring onions",
      desc: "Scallions, Bunching onions, Welsh onion",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 68°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Squash",
      desc: "Crookneck, Pattypan, Summer squash",
      misc: "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 70°F and 95°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Strawberries (from seeds)",
      desc: "",
      misc: "Start inside in pots or trays after chilling seeds.. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 68°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Strawberry Plants",
      desc: "",
      misc: "Easy to grow. Plant with crown (of roots) just covered.. Best planted at soil temperatures between 50°F and 68°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Broad beans",
      desc: "Fava bean",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 43°F and 75°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Sunflower",
      desc: "",
      misc: "Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Sweet corn",
      desc: "Maize",
      misc: "Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 61°F and 95°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Sweet Marjoram",
      desc: "Knotted marjoram",
      misc: "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Sweet Potato",
      desc: "Kumara",
      misc: "Plant shoots or cuttings (Slips). Best planted at soil temperatures between 63°F and 95°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Taro",
      desc: "Dasheen, cocoyam",
      misc: "Plant small pieces of tuber or suckers, 5-8cm deep. Best planted at soil temperatures between 68°F and 95°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Thyme",
      desc: "Common thyme",
      misc: "Grow in seed trays and plant out 6-8 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 59°F and 77°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Tomatillo",
      desc: "",
      misc: "Easy to grow. Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 70°F and 81°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Tomato",
      desc: "",
      misc: "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 61°F and 95°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Turnip",
      desc: "",
      misc: "Easy to grow. Sow in garden. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 12°C and 30°C. (Show °F/in)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Watermelon",
      desc: "",
      misc: "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 70°F and 95°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Broccoli",
      desc: "",
      misc: "Easy to grow. Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 45°F and 86°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Yacon",
      desc: "Sunroot",
      misc: "Easy to grow. Plant sprouting root/tuber to a depth of about 4cm and mulch to cover. Best planted at soil temperatures between 50°F and 77°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Zucchini",
      desc: "Courgette/Marrow, Summer squash",
      misc: "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 70°F and 95°F. (Show °C/cm)",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('plants', [{}]);
  }
}
