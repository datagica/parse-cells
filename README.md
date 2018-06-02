# Parse Cells

If a cell, license or copyright is missing you can create a pull request

## Installation

    $ npm i @datagica/parse-cells

## Usage

Example:

```javascript
await parse('I am studying the gastric delomorphous cell')
```

Output:

```json
[
  {
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
  }
]
```

## TODO

https://en.wikipedia.org/wiki/List_of_distinct_cell_types_in_the_adult_human_body

- endoderm: DONE
- ectoderm: TODO
- mesoderm: TODO
