$(document).ready(function () {
    $( ".payel").keyup(function() {
        var a = (($('#info #blocksilandrinfo').text()).replace(/,/g, '')) * ($('#blocksilandr').val());
        var b = (($('#info #silandrinfo').text()).replace(/,/g, '')) * ($('#silandr').val());
        var c = (($('#info #sarsilandrinfo').text()).replace(/,/g, '')) * ($('#sarsilandr').val());
        var d = (($('#info #millanginfo').text()).replace(/,/g, '')) * ($('#millang').val());
        var e = (($('#info #milsupapinfo').text()).replace(/,/g, '')) * ($('#milsupap').val());
        var f = (($('#info #bushinfo').text()).replace(/,/g, '')) * ($('#bush').val());
        var g = (($('#info #ringinfo').text()).replace(/,/g, '')) * ($('#ring').val());
        var h = (($('#info #yataghaninfo').text()).replace(/,/g, '')) * ($('#yataghan').val());
        var i = (($('#info #supapinfo').text()).replace(/,/g, '')) * ($('#supap').val());
        var j = (($('#info #seatinfo').text()).replace(/,/g, '')) * ($('#seat').val());
        var k = (($('#info #gateinfo').text()).replace(/,/g, '')) * ($('#gate').val());
        var l = (($('#info #waterpompinfo').text()).replace(/,/g, '')) * ($('#waterpomp').val());
        var m = (($('#info #oilpompinfo').text()).replace(/,/g, '')) * ($('#oilpomp').val());
        var n = (($('#info #washerkamelinfo').text()).replace(/,/g, '')) * ($('#washerkamel').val());
        var o = (($('#info #washersarsilandrinfo').text()).replace(/,/g, '')) * ($('#washersarsilandr').val());
        var p = (($('#info #washerkartelinfo').text()).replace(/,/g, '')) * ($('#washerkartel').val());
        var q = (($('#info #asbakdudohavainfo').text()).replace(/,/g, '')) * ($('#asbakdudohava').val());
        var r = parseFloat(a) + parseFloat(b) + parseFloat(c) +
        parseFloat(d) + parseFloat(e) + parseFloat(f) +
        parseFloat(g) + parseFloat(h) + parseFloat(i) +
        parseFloat(j) + parseFloat(k) + parseFloat(l) +
        parseFloat(m) + parseFloat(n) + parseFloat(o) +
        parseFloat(p) + parseFloat(q);
        $('#summary').text(r.toLocaleString());
        $('#totalprice').val(r.toLocaleString());
    });

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
    $('#random').val(makeid(10));

    let today = new Date().toLocaleDateString('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',formatMatcher:'basic'});
    $('#time').val(today);

})