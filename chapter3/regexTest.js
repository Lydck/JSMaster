
var text = "testing: 1, 2, 3";
var pattern = /\d+/g;
document.write(pattern.test(text));
document.write(text.search(pattern) + "\n");
document.write(text.match(pattern));
document.write(text.replace(pattern, "#"));
document.write(text.split(/\D+/));
