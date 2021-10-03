# Sophonetica

[![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

Sophonetica is a TrueType font designed to write phonetics using [Luciano Canepari](https://en.wikipedia.org/wiki/Luciano_Canepari)'s canIPA (http://www.canipa.net/doku.php). More details about Sophonetica and its creators can be found at https://idegennyelvor.blog.hu/2011/04/10/betukeszlet_canipa_hoz.

## License

Sophonetica is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

## Usage

This font is served via jsDelivr's CDN. It can be added to the header of an HTML document with
```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/antonuccig/Sophonetica/font.css">
<style> canipa { font-family: Sophonetica, serif; } </style>
```

### Shortcuts

Sophonetica uses many Private Use Area (PUA) code points. Hence, `render.js` defines character shortcuts that, when put inside `<canipa></canipa>`, will be replaced with the desired code points:

Add

```html
<script type='text/javascript' src='https://cdn.jsdelivr.net/gh/antonuccig/Sophonetica/render.js'></script>
```

to the footer of the HTML document and then

|     |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|**A**|  i  |  ᴉ  |  ɨ  |  ɯ  |  ш  |  ү  |  y  |  ʉ  |  μ  |  u  |
|**B**|  ɪ  |  ι  |  ᵻ  |  ⍵  |  ᙎ  |  ч  |  ʏ  |  ᵿ  |  ɷ  |  ʊ  |
|**C**|  e  |  ɘ  |  ə  |  ɤ  |  ⴴ  |  ⵚ  |  ø  |  ɵ  |  ෆ  |  o  |
|**D**|  ᴇ  | ⱻ/Ǝ |  ᴈ  |  🜶  |  ⴳ  |  ⵕ  |  ᴓ  |  ɞ  |  ᓄ  |  σ  |
|**E**|  ɛ  | 𐐺/ꓭ |  ɐ  |  ᴧ  |  ⊼  |  ԙ  |  œ  |  ᴔ  |  ʚ  |  ɔ  |
|**F**|  æ  |  ᴀ  |  a  |  ɑ  |  ⍺  |  Ԙ  |  ɶ  |  ᵷ  |  @  |  ɒ  |

will map to the full list of 52 + 8 vocoids.

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg
