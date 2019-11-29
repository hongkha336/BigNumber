var num1 = $("#num1");
var num2 = $("#num2");
var rs = $("#lbresuilt");
var submitbtn = $("#submit");
var progressbar = $("#prog");
var percentage = $("#lbPercent");
var quantity = $("#quantity");
var caculate = $("#caculate");
var sizeNum1 = $("#sizeNum1");
var sizeNum2 = $("#sizeNum2");

num1.on('change keydown paste keypress keyup mousedown click mouseup', function () {
    sizeNum1.html(num1.val().length);

});
num2.on('change keydown paste keypress keyup mousedown click mouseup', function () {
    sizeNum2.html(num2.val().length);
});

submitbtn.click(function () {
    sumBigNum();
});
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function sumBigNum() {
    let x = num1.val();
    let y = num2.val();
    let waitingTime = quantity.val();
    let _rs = "";
    let len;
    let lenx = x.length;
    let leny = y.length;
    let x1, y1, rem, div = 0;
    let _percent = 0;
    caculate.html("");
    rs.html("");
    quantity.prop("disabled", true);
    progressbar.removeClass("progress-bar-danger");
    progressbar.removeClass("progress-bar-success");
    submitbtn.addClass("red");
    submitbtn.prop("disabled", true);
    progressbar.attr("aria-valuenow", _percent);
    progressbar.css("width", _percent + "%");
    progressbar.html(Math.round(_percent) + "%");
    progressbar.addClass("progress-bar-danger");
    if (lenx > leny) len = lenx; else len = leny;
    for (var i = 0; i < len; i++) {
        if (i >= lenx) x1 = 0;
        else x1 = parseInt(x[lenx - i - 1]);
        if (i >= leny) y1 = 0;
        else y1 = parseInt(y[leny - i - 1]);
        rem = (x1 + y1 + div) % 10;
        div = Math.floor((x1 + y1 + div) / 10);
        _rs = rem + _rs;
        let sentence = "Calculation: " + x1 + " + " + y1 + " = " + rem;
        if (div > 0) {
            sentence = sentence + " remember " + div;
        }
        caculate.html(sentence);

        if (len > 1)
            _percent = i * 100 / (len - 1);
        else
            _percent = 100;
        percentage.html("Percentage: " + _percent + " %");
        progressbar.attr("aria-valuenow", _percent);
        progressbar.css("width", _percent + "%");
        progressbar.html(Math.round(_percent) + "%");
        rs.html(_rs);
        await sleep(waitingTime);

    }
    if (div > 0) {
        _rs = div + _rs;
        rs.html(_rs);
    }

    caculate.html("CACULATING FINISH");
    submitbtn.removeClass("red");
    submitbtn.prop("disabled", false);
    quantity.prop("disabled", false);
    progressbar.removeClass("progress-bar-danger");
    progressbar.addClass("progress-bar-success");
};


