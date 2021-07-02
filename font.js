function nativeSelector() {
    var elements = document.querySelectorAll("canipa, canipa *");
    var results = [];
    var child;
    for(var i = 0; i < elements.length; i++) {
        child = elements[i].childNodes[0];
        if(elements[i].hasChildNodes() && child.nodeType == 3) {
            results.push(child);
        }
    }
    return results;
}

var textnodes = nativeSelector(),
    _nv;
for (var i = 0, len = textnodes.length; i<len; i++){
    _nv = textnodes[i].nodeValue;
    textnodes[i].nodeValue = _nv.replace(/e</g,'\uE014');
}

var textnodes = nativeSelector(),
    _nv;
for (var i = 0, len = textnodes.length; i<len; i++){
    _nv = textnodes[i].nodeValue;
    textnodes[i].nodeValue = _nv.replace(/E/g,'\uE00F');
}

var textnodes = nativeSelector(),
    _nv;
for (var i = 0, len = textnodes.length; i<len; i++){
    _nv = textnodes[i].nodeValue;
    textnodes[i].nodeValue = _nv.replace(/o</g,'\uE036');
}
