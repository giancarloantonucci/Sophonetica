# Sophonetica

[![CC BY-SA 4.0][license-shield]][license]

A web version of the _Sophonetica_ font from [IdegenNyelvŐr](https://idegennyelvor.blog.hu/2011/04/10/betukeszlet_canipa_hoz), designed to write phonetics using Luciano Canepari's [<sup>can</sup>IPA](http://www.canipa.net/doku.php). This repo makes it possible to use _Sophonetica_ on the web via a CDN (see below). _Sophonetica_ is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License][license].

[license]: http://creativecommons.org/licenses/by-sa/4.0/
[license-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg

## Usage on the web

Host it yourself or add `https://cdn.jsdelivr.net/gh/giancarloantonucci/Sophonetica/font.css` into the header of an HTML document.

### Character shortcuts

Because _Sophonetica_ uses many Private Use Area (PUA) code points, `render.js` defines some character shortcuts that when put inside `<canipa></canipa>` will be replaced with the desired code points. Add

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/giancarloantonucci/Sophonetica/font.css">
<style>
  canipa {
    font-family: Sophonetica, serif;
  }
</style>

...

<script type='text/javascript' src='https://cdn.jsdelivr.net/gh/giancarloantonucci/Sophonetica/render.js'></script>
```

to an HTML document to use it. Then, for example,

|     |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|**A**|  i  |  ᴉ  |  ɨ  |  ɯ  |  ш  |  ү  |  y  |  ʉ  |  μ  |  u  |
|**B**|  ɪ  |  ι  |  ᵻ  |  [⍵](){/𐐶}  |  [௰]()  |  ч  |  ʏ  |  ᵿ  |  ɷ  |  ʊ  |
|**C**|  e  |  ɘ  |  ə  |  ɤ(/ჾ)  |  [ⴴ](){/⅋}  |  [ⵚ]()  |  ø  |  ɵ  |  [ෆ]()  |  o  |
|**D**|  ᴇ  | ⱻ(/Ǝ) |  ᴈ  |  ჲ  |  [ⴳ](){/&}  |  [ⵕ]()  |  ᴓ  |  ɞ  |  [ᓄ](){/9}  |  σ  |
|**E**|  ɛ  | 𐐺(/ꓭ) |  ɐ  |  ᴧ  |  [⊼](){/⌆}  |  [ᴂ]()  |  œ  |  ᴔ  |  ʚ  |  ɔ  |
|**F**|  æ  |  ᴀ  |  a  |  ɑ  |  ⍺(/α)  |  [Œ]()  |  ɶ  |  [ϭ](){/6}{/𐑆}  |  [@](){/∞}  |  ɒ  |

will map to the full list of 52 + 8 vocoids. Note that the coloured characters might be changed in future updates.

<details><summary><b>Full list of Unicode points for the above vocoids</b></summary>
  
- Basic Latin: a (0061), e (0065), i (0069), o (006F), u (0075), y (0079)
- Latin-1 Supplement: æ (00E6), ø (00F8)
- Latin Extended-A: œ (0153)
- IPA Extensions: ɐ (0250), ɑ (0251), ɒ (0252), ɔ (0254), ɘ (0258), ə (0259), ɛ (025B), ɞ (025E), ɤ (0264), ɨ (0268), ɪ (026A), ɯ (026F), ɵ (0275), ɶ (0276), ɷ (0277), ʉ (0289), ʊ (028A), ʏ (028F), ʚ (029A)
- Greek and Coptic: α (03B1), ι (03B9), μ (03BC), σ (03C3)
- Cyrillic: ч (0447), ш (0448), ү (04AF)
- Georgian: ო (10DD), ჲ (10F2), ჾ (10FE)
- Phonetic Extensions: ᴀ (1D00), ᴇ (1D07), ᴈ (1D08), ᴉ (1D09), ᴓ (1D13), ᴔ (1D14), ᴧ (1D27), ᵻ (1D7B), ᵿ (1D7F)
- Latin Extended-C: ⱻ (2C7B)
- Deseret: 𐐶 (10436), 𐐺 (1043A), 𐑆 (10446)
  
</details>
