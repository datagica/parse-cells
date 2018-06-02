const parse = require('./index')
const testData = [{
  input: "This new virus inhibits the thyrotropes",
  expected: [{
    "ngram": "thyrotropes",
    "value": {
      "id": "thyrotropic-cell",
      "label": {
        "en": "Thyrotropic cell"
      },
      "description": {
        "en": "Thyrotropic cells produce thyrotropin (thyroid-stimulating hormone)."
      },
      "roles": {
        "en": [
          "thyrotropin production"
        ]
      },
      "keywords": [
        "thyrotropin"
      ],
      "locations": [
        "anterior pituitary",
        "lobus anterior hypophysis"
      ],
      "germlayer": "endoderm",
      "category": "hormone-secreting cell",
      "aliases": {
        "en": [
          "thyrotropic cell",
          "thyrotropic cells",
          "thyrotrope",
          "thyrotropes",
          "thyrotroph",
          "thyrotrophs"
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 5,
      "begin": 28,
      "end": 39
    }
  }]
}, {
  input: "I am studying the gastric delomorphous cell, I will publish the paper soon",
  expected: [{
    "ngram": "gastric delomorphous cell",
    "value": {
      "id": "gastric-gland-oxyntic-cell",
      "label": {
        "en": "Gastric gland oxyntic cell"
      },
      "description": {
        "en": "Gastric gland oxyntic cells are epithelial cells that secrete hydrochloric acid."
      },
      "roles": {
        "en": [
          "gastric factor secretion",
          "intrinsic factor secretion",
          "hydrochloric acid secretion"
        ]
      },
      "keywords": [
        "hydrochloric acid",
        "gastric factor",
        "intrinsic factor"
      ],
      "locations": [
        "glandulae gastricae",
        "stomach",
        "ventriculus"
      ],
      "latine-name": "exocrinocytus parietalis",
      "germlayer": "endoderm",
      "category": "exocrine secretory epithelial cell",
      "aliases": {
        "en": [
          "parietal cell",
          "parietal cells",
          "delomorphous cell",
          "delomorphous cells",
          "oxyntic cell",
          "oxyntic cells",
          "gastric delomorphous cell",
          "gastric delomorphous cells",
          "gastric oxyntic cell",
          "gastric oxyntic cells",
          "gastric glands oxyntic cell",
          "gastric glands oxyntic cells",
          "gastric gland oxyntic cell",
          "gastric gland oxyntic cells"
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 4,
      "begin": 18,
      "end": 43
    }
  }]
}]

test('extract cells', () => Promise.all(
  testData.map(async ({
    input,
    expected
  }) => expect(await parse(input)).toEqual(expected))
))