let menu = document.getElementById("menu");
let menuSub = document.getElementById("menuSub");
if (menu) {
menu.innerHTML = `<nav id="site-navigation" class="site-navigation" aria-label="Clickable Menu Demonstration">
    <ul  class="main-menu clicky-menu no-js">
        <li >
            <a href="index.html" >Inicio
                
            </a>
        </li>
        <li>
            <a href="sub-paginas/games.html">Juegos</a> 
        </li>
        <li>
            <a href="sub-paginas/specs.html">Especificaciones Tecnicas
                <svg aria-hidden="true" width="16" height="16" >
                    <use xlink:href="#arrow" />
                </svg>
            </a>
        </li>
        <li>
            <a href="sub-paginas/cotizacion.html">Cotización
                <svg aria-hidden="true" width="16" height="16">
                    <use xlink:href="#arrow" />
                </svg>
            </a>
            <ul>
                <li><a href="#">x</a></li>
                <li><a href="#">x</a></li>
                <li><a href="#">x</a></li>
                <li><a href="#">x</a></li>
                <li><a href="#">x</a></li>
            </ul>
        </li>
        <li>
            <a href="#">Comparación
                <svg aria-hidden="true" width="16" height="16">
                    <use xlink:href="#arrow" />
                </svg>
            </a>
        </li>
    </ul>
</nav>`;
}

if(menuSub) {
menuSub.innerHTML = `<nav id="site-navigation" class="site-navigation" aria-label="Clickable Menu Demonstration">
<ul  class="main-menu clicky-menu no-js">
    <li >
        <a href="/index.html" >Inicio
            
        </a>
    </li>
    <li>
        <a href="games.html">Juegos</a> 
    </li>
    <li>
        <a href="../sub-paginas/specs.html">Especificaciones Tecnicas
            <svg aria-hidden="true" width="16" height="16" >
                <use xlink:href="#arrow" />
            </svg>
        </a>
    </li>
    <li>
        <a href="../sub-paginas/cotizacion.html">Cotización
            <svg aria-hidden="true" width="16" height="16">
                <use xlink:href="#arrow" />
            </svg>
        </a>
        <ul>
            <li><a href="#">x</a></li>
            <li><a href="#">x</a></li>
            <li><a href="#">x</a></li>
            <li><a href="#">x</a></li>
            <li><a href="#">x</a></li>
        </ul>
    </li>
    <li>
        <a href="#">Comparación
            <svg aria-hidden="true" width="16" height="16">
                <use xlink:href="#arrow" />
            </svg>
        </a>
    </li>
</ul>
</nav>`;
}