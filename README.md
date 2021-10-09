# Sophonetica

[![CC BY-SA 4.0][license-shield]][license]

A web version of the _Sophonetica_ font from https://idegennyelvor.blog.hu/2011/04/10/betukeszlet_canipa_hoz, designed to write phonetics using Luciano Canepari's canIPA. More details about canIPA can be found at http://www.canipa.net/doku.php.

_Sophonetica_ is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License][license].

[license]: http://creativecommons.org/licenses/by-sa/4.0/
[license-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg

## Usage

Add `https://cdn.jsdelivr.net/gh/giancarloantonucci/sophonetica/font.css` into the header of an HTML document to use it.

### Shortcuts

Because _Sophonetica_ uses many Private Use Area (PUA) code points, we have defined some character shortcuts, through `render.js`, that when put inside `<canipa></canipa>` will be replaced with the desired code points. Add

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/giancarloantonucci/sophonetica/font.css">
<style>
  canipa {
    font-family: Sophonetica, serif;
  }
</style>

...

<script type='text/javascript' src='https://cdn.jsdelivr.net/gh/giancarloantonucci/sophonetica/render.js'></script>
```

to an HTML document so that

|     |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|**A**|  i  |  ᴉ  |  ɨ  |  ɯ  |  ш  |  ү  |  y  |  ʉ  |  μ  |  u  |
|**B**|  ɪ  |  ι  |  ᵻ  |  ⍵  |  ௰  |  ч  |  ʏ  |  ᵿ  |  ɷ  |  ʊ  |
|**C**|  e  |  ɘ  |  ə  |  ɤ  |  ⴴ  |  ⵚ  |  ø  |  ɵ  |  ෆ  |  o  |
|**D**|  ᴇ  | ⱻ/Ǝ |  ᴈ  |  ჲ  |  ⴳ  |  ⵕ  |  ᴓ  |  ɞ  |  ᓄ  |  σ  |
|**E**|  ɛ  | 𐐺/ꓭ |  ɐ  |  ᴧ  |  ⊼  |  ᴂ  |  œ  |  ᴔ  |  ʚ  |  ɔ  |
|**F**|  æ  |  ᴀ  |  a  |  ɑ  |  ⍺  |  Œ  |  ɶ  |  ϭ  |  @  |  ɒ  |

maps to the full list of 52 + 8 vocoids.
