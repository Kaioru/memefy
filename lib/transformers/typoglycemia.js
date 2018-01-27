module.exports = text => {
    return text.replace(/\b(\w)(\w{2,})(\w)\b/g, function (all, a, b, c) {
        return a
            + b.split('').sort(function () { return Math.random() - .5 }).join('')
            + c;
    });
}
