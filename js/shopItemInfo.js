(function ( $ ) {
 
    $.fn.loadshopItemInfo = function(array) {
        var content = "";
        for (var obj of array) {
            content = content +
            `<div class="row" style= "padding-bottom: 10px">
                <div class="col-sm-2">
                    <img class="shop_ducks" src="${obj.pic}" style="width: 100%;height: 100%">
                </div>
                <div class="col-sm">
                    <p>${obj.words}</p>
                </div>
                <div class="col-sm-3">
                    <a class="btn btn-primary" target="_blank" href="https://forms.gle/Mz5AH2WuxovuYpC76">${obj.btnName}</a>
                    <p>Ducks Left: ${obj.quantity}</p>
                </div>
            </div>`
        }
        this.html(content);
        return this;
    };
 
}( jQuery ));
