/**
 * Created by administrator on 16/5/20.
 */
/**
 * Created by administrator on 16/5/20.
 */
function encrypt(source, cookiename) {
    var i, userid = "26874105",
        key1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
        len1 = key1.length,
        key2 = userid.split(""),
        key3 = parseInt(userid),
        key4 = key1.slice(key3 % len1).concat(key1.slice(0, key3 % len1).reverse()), result = new Array;
    return key4;

     for (i = 0; i < key2.length; i++)result.push(key4[(i * i + parseInt(key2[i])) % key4.length]);
     for (cookiename && LT.Cookie.set(cookiename, result.join("")), key4.reverse(), result.sort(), i = 0; i < key2.length; i++)result.push(key4[(i * i + parseInt(key2[i])) % key4.length]);
     return window.location.hostname.split(".").reverse().slice(0, 2).reverse().join(".") === LT.Env.domain ? LT.String.md5(result.join("") + source + userid).split("").reverse().join("") : LT.String.md5(userid + result.join("") + source).split("").reverse().join("")

}

encrypt("4772273650y2680387946","jsencrypt")