# Sophonetica

[![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

Sophonetica is a TrueType font designed to write phonetics using [Luciano Canepari](https://en.wikipedia.org/wiki/Luciano_Canepari)'s system, [<sup>can</sup>IPA](http://www.canipa.net/doku.php). Note that this font does not contain all <sup>can</sup>IPA symbols, and it looks smeared at small sizes. More details (plus download) can be found at https://idegennyelvor.blog.hu/2011/04/10/betukeszlet_canipa_hoz.

## Usage

This font is served via jsDelivr's CDN:
```html
<head>
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/antonuccig/Sophonetica@main/font.css">
  <style>
    canipa {
      font-family: Sophonetica, serif;
    }
  </style>
</head>
```

Because Sophonetica uses many Private Use Area (PUA) code points, `font.js` defines shortcuts that, when inside `<canipa></canipa>`, will print the desired characters. Add the following at the end of the HTML document to use it:
```html
<footer>
  <script type='text/javascript' src='https://cdn.jsdelivr.net/gh/antonuccig/Sophonetica@main/font.js'></script>
</footer>
```
A full list of escape characters will be provided.

## License

I am not the creator of this font. This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg
