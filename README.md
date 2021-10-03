# Sophonetica

[![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

_Sophonetica_ is a TrueType font designed to write phonetics using [Luciano Canepari](https://en.wikipedia.org/wiki/Luciano_Canepari)'s canIPA (http://www.canipa.net/doku.php). More details about this font and its creators can be found at https://idegennyelvor.blog.hu/2011/04/10/betukeszlet_canipa_hoz.

## Usage

We serve _Sophonetica_ via jsDelivr's CDN. Add

```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/antonuccig/Sophonetica/font.css">
<style> canipa { font-family: Sophonetica, serif; } </style>
```

to the header of an HTML document to use it.

### Shortcuts

Because _Sophonetica_ uses many Private Use Area (PUA) code points, we have defined some character shortcuts, through `render.js`, that when put inside `<canipa></canipa>` will be replaced with the desired code points. Add

```html
<script type='text/javascript' src='https://cdn.jsdelivr.net/gh/antonuccig/Sophonetica/render.js'></script>
```

to the footer of an HTML document and then

|     |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|**A**|  i  |  ᴉ  |  ɨ  |  ɯ  |  ш  |  ү  |  y  |  ʉ  |  μ  |  u  |
|**B**|  ɪ  |  ι  |  ᵻ  |  ⍵  |  ௰  |  ч  |  ʏ  |  ᵿ  |  ɷ  |  ʊ  |
|**C**|  e  |  ɘ  |  ə  |  ɤ  |  ⴴ  |  ⵚ  |  ø  |  ɵ  |  ෆ  |  o  |
|**D**|  ᴇ  | ⱻ/Ǝ |  ᴈ  |  ჲ  |  ⴳ  |  ⵕ  |  ᴓ  |  ɞ  |  ᓄ  |  σ  |
|**E**|  ɛ  | 𐐺/ꓭ |  ɐ  |  ᴧ  |  ⊼  |  ᴂ  |  œ  |  ᴔ  |  ʚ  |  ɔ  |
|**F**|  æ  |  ᴀ  |  a  |  ɑ  |  ⍺  |  Œ  |  ɶ  |  ϭ  |  @  |  ɒ  |

will map to the full list of 52 + 8 vocoids.

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg

## License

_Sophonetica_ is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].
