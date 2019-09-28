(function ( $ ) {
 
    $.fn.loadShopTop = function() {
        this.html(
            `<div class="container">
                <h1>Shop</h1>
                <h6 class="card-subtitle mb-2 text-muted">
                    Duck Guide<br/>
                    Normal: plain and common ducks<br/>
                    Color: Any multiclor ducks<br/>
                    Rare: multicolor + something different
                </h6>
            </div>`
        );
        return this;
    };
 
}( jQuery ));
