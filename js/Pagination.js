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
        return this;
    };
 
}( jQuery ));
