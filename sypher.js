function hash(c) {
  var ascii = (c.charCodeAt() + 10)%95 + 32;
  console.log(ascii);
  return String.fromCharCode(ascii);
}
function hotkey(e) {
  if (e.ctrlKey && e.keyCode == 69) {
    var passkey = document.activeElement.value;
    console.log(passkey);
    var password = "";
    for (var i = 0; i < passkey.length; i++) {
      password = password.concat(hash(passkey[i]));
    }
    document.activeElement.value = password;
    console.log(password);
  }
}
document.addEventListener('keyup', hotkey, false);