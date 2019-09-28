(function ( $ ) {
 
    $.fn.loadHeader = function() {
        this.html(
      `<div class="container-fluid">
        <nav class="navbar navbar-light" style="background-color: #ffff99">
          <a class="navbar-brand" href="#">
            <img src="/img/ducky_logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
            Dally the Duck Duck Farm
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="./index.html">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="./MeetSomeDucks.html">Meet Some Ducks</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Shop</a>
              </li>
              <li>
                  <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>`);
        return this;
    };
 
}( jQuery ));



