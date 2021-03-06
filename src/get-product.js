$('.get-sku').click(function(event) {
    var store = $('input[name=store]:checked', '#formy').val();
    getAproduct(store, $(this).attr("data-id"));
});

function getAproduct(store,sku){
    
    $( "#siteHTML" ).empty();
    var currentProduct = sku;
    var currentSku = $('#product-sku-' + currentProduct).val();
    var siteUrl;
    
    if (store == "xvm-uk" || store == "xvm-ie"){
        siteUrl = 'http://www.xvmarketplace.co.uk/movies-games/pd/';
    } else {
        siteUrl = 'http://www.hmv.ie/movies-games-entertainment/pd/';
    }
    
    var jqxhr = $.get(siteUrl + currentSku, function() {
    })
        .done(function(data) {
            
          // $("#siteHTML").remove();
           $("#siteHTML").html(data);
           $("#siteHTML").find('#product');
          // console.log(data);
            getFromHtml(siteUrl,currentProduct);
        })
        .fail(function() {
            $('#product-sku').val('Error getting product - Check SKU? / CORS?');
        })
        .always(function() {
            
        });
};

function getFromHtml(siteUrl,currentProduct){
    $('#product-title-' + currentProduct).val($('#siteHTML .title h1').html());
    $('#product-title-' + currentProduct).change();

    var newStr = $.trim($('#siteHTML .informations .content div').html().substr(0, 300) + "...");
    $('#product-synopsis-' + currentProduct).val(newStr);
    $('#product-synopsis-' + currentProduct).change();
 
    $('#image-url-' + currentProduct).val("http:" + $('#siteHTML .largeImage img').attr('src'));
    $('#image-url-' + currentProduct).change();

    $('#product-url-' + currentProduct).val(siteUrl + $('#product-sku-' + currentProduct).val());
    $('#product-url-' + currentProduct).change();

    var trimmedprice = $('#siteHTML .priceAndButton .price').html().substring(1);
    $('#product-price-' + currentProduct + '-1').val(trimmedprice);
    $('#product-price-' + currentProduct + '-1').change();
}

$('.clear-sku').click(function(event) {
    $( "#siteHTML" ).remove();
    $( ".output-wrapper" ).append("<div id='siteHTML' class='hide'></div>");
});