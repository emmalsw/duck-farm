(function ( $ ) {
 
    $.fn.loadPagination = function() {
        this.html(
            `<div class="center">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Ducks</a></li>
                        <li class="page-item"><a class="page-link" href="#">Duck Kits</a></li>
                        <li class="page-item"><a class="page-link" href="#">Duck Ponds</a></li>
                        <li class="page-item"><a class="page-link" href="#">Eggs</a></li>
                        <li class="page-item"><a class="page-link" href="#">Incubators</a></li>
                        <li class="page-item"><a class="page-link" href="#">Meat</a></li>
                        <li class="page-item"><a class="page-link" href="#">Feed</a></li>
                        <li class="page-item"><a class="page-link" href="#">Medication</a></li>
                    </ul>
                </nav>
            </div>`
        );
        $(this).find('li').click(function() {
            switch ($(this).text()) {
                case 'Ducks':
                    $('.shopItem').hide();
                    $('.shopItem.duck').show();
                    break;
                case 'Duck Kits':
                    $('.shopItem').hide();
                    $('.shopItem.duck_kit').show();
                    break;
                 case 'Duck Ponds':
                    $('.shopItem').hide();
                    $('.shopItem.duck_pond').show();
                    break;
                 case 'Eggs':
                    $('.shopItem').hide();
                    $('.shopItem.duck_eggs').show();
                    break;
                 case 'Incubators':
                    $('.shopItem').hide();
                    $('.shopItem.duck_incubator').show();
                    break;
                 case 'Meat':
                    $('.shopItem').hide();
                    $('.shopItem.duck_meat').show();
                    break;
                default:
                    console.log('do nothing');
                    break;
            }
        });
        return this;
    };
 
}( jQuery ));