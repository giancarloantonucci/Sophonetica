# Sophonetica

[![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

Sophonetica is a TrueType font designed to write phonetics using [Luciano Canepari](https://en.wikipedia.org/wiki/Luciano_Canepari)'s [canIPA](http://www.canipa.net/doku.php) symbols. More details (plus download) at https://idegennyelvor.blog.hu/2011/04/10/betukeszlet_canipa_hoz.

## Usage

This font is served via jsDelivr's CDN:
```html
<head>
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/antonuccig/Sophonetica/font.css">
  <style> canipa { font-family: Sophonetica, serif; } </style>
</head>
```

Because Sophonetica uses many Private Use Area (PUA) code points, `render.js` defines shortcuts that, when inside `<canipa></canipa>`, will be rendered into the desired characters. For example, add

```html
<footer>
  <script type='text/javascript' src='https://cdn.jsdelivr.net/gh/antonuccig/Sophonetica@latest/render.js'></script>
</footer>
```

at the end of the HTML document; then

|     |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|**A**|  i  |  ᴉ  |  ɨ  |  ɯ  |  ш  |  ү  |  y  |  ʉ  |  μ  |  u  |
|**B**|  ɪ  |  ι  |  ᵻ  |  ⍵  |  щ  |  ч  |  ʏ  |  ᵿ  |  ɷ  |  ʊ  |
|**C**|  e  |  ɘ  |  ə  |  ɤ  |  ⋉  |  Ø  |  ø  |  ɵ  |  ⱷ  |  o  |
|**D**|  ᴇ  |  ⱻ  |  ᴈ  |  &  |  ⋊  |  ⍬  |  ᴓ  |  ɞ  |  ᴑ  |  σ  |
|**E**|  ɛ  |  𐐺  |  ɐ  |  ᴧ  |  ⌆  |  %  |  œ  |  ᴔ  |  ʚ  |  ɔ  |
|**F**|  æ  |  ᴀ  |  a  |  ɑ  |  ⍺  |  Œ  |  ɶ  |  @  |  ⍶  |  ɒ  |

<!-- |     |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|**A**|  i  |  ᴉ  |  ɨ  |  ɯ  |  ш  |  ү  |  y  |  ʉ  |  μ  |  u  |
|**B**|  ɪ  |  ι  |  ᵻ  |  ⍵  |  ѡ  |  ч  |  ʏ  |  ᵿ  |  ɷ  |  ʊ  |
|**C**|  e  |  ɘ  |  ə  |  ɤ  |  ⋉  |  Ø  |  ø  |  ɵ  |  ⱷ  |  o  |
|**D**|  ᴇ  |  ⱻ  |  ᴈ  |  &  |  ⋊  |  ⍬  |  ᴓ  |  ɞ  |  ᴑ  |  σ  |
|**E**|  ɛ  |  𝕖  |  ɐ  |  ᴧ  |  ⌆  |  %  |  œ  |  ᴔ  |  ʚ  |  ɔ  |
|**F**|  æ  |  ᴀ  |  a  |  ɑ  |  ⍺  |  Œ  |  ɶ  |  @  |  ⍶  |  ɒ  | -->

will map to the full list of 52 + 8 vocoids.


## License

I am not the creator of this font. This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg
