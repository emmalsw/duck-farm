(function ( $ ) {
 
    $.fn.loadshopItemInfo = function(picture,words,quantity_of_ducks_left) {
        this.html(
            `<div class="row" style= "padding-bottom: 10px">
                <div class="col-sm-2">
                    <img class="shop_ducks" src="${picture}" style="width: 250px;height: 250px">
                </div>
                <div class="col-sm">
                    <p>${words}</p>
                </div>
                <div class="col-sm-3">
                    <button type="button" class="btn btn-primary">Buy this duck</button>
                    <p>Ducks Left: ${quantity_of_ducks_left}</p>
                </div>
            </div>
             `
        );
        return this;
    };
 
}( jQuery ));
