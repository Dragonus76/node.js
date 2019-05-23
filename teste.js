var monmodule = require ('./module');

monmodule.direBonjour();
monmodule.direByeBye();

var markdown =  require('markdown').markdown;
console.log(markdown.toHTML('UN paragraphe en **markdown**!'));