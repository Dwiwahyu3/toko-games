export const Navadmin = () =>{
  return(
    <div class="shadow-sm position-fixed top-0 bottom-0 col" style={{"width": "250px;", "background-color": "white;"}}>
    <ul class="nav flex-column">
        <li class="nav-item py-3">
        <a class="p-3" aria-current="page" href="#"> <img src="2.png" style={{"height": "24px;"}} alt=""/> </a>
        </li>
        <li class="nav-item">
        <a class="nav-link p-3" style={{"background-color": "#ffffff;", "border-bottom": "1px solid #F2F2F2;"}} href="dashboard.html">
            <div class="row row-cols-auto align-items-center px-3" style={{"color": "#999999;"}}> 
                <div class="p-0">
                    <img src="image/Category-dark.png" style={{"height": "24px;"}} alt=""/> 
                </div>
                <div class="px-2 pt-1" style={{"color": "black;"}}>
                    Dashboard 
                </div>
            </div> 
        </a>
        </li>
        <li class="nav-item">
            <a class="nav-link p-3" style={{"background-color": "#ffffff;", "border-bottom": "1px solid #F2F2F2;"}} href="game.html">
                
            <div class="row row-cols-auto align-items-center px-3" style={{"color": "#999999;"}}> 
                <div class="p-0">
                    <img src="image/Game-light.png" style={{"height": "24px;"}} alt=""/> 
                </div>
                <div class="px-2 pt-1">
                    Game 
                </div>
            </div> 
        </a>
        </li>
        <li class="nav-item">
            <a class="nav-link p-3" style={{"background-color": "#ffffff;", "border-bottom": "1px solid #F2F2F2;"}} href="berita.html">
                
            <div class="row row-cols-auto align-items-center px-3" style={{"color": "#999999;"}}> 
                <div class="p-0">
                    <img src="image/Paper-light.png" style={{"height": "24px;"}} alt=""/> 
                </div>
                <div class="px-2 pt-1">
                    Berita 
                </div>
            </div> 
        </a>
        </li>
        <li class="nav-item">
            <a class="nav-link p-3" style={{"background-color": "#ffffff;", "border-bottom": "1px solid #F2F2F2;"}} href="user.html">
                
            <div class="row row-cols-auto align-items-center px-3" style={{"color": "#999999;"}}> 
                <div class="p-0">
                    <img src="image/Profile-light.png" style={{"height": "24px;"}} alt=""/> 
                </div>
                <div class="px-2 pt-1">
                    User 
                </div>
            </div> 
        </a>
        </li>
        <li class="nav-item">
            <a class="nav-link p-3" style={{ "background-color": "#ffffff;", "border-bottom": "1px solid #F2F2F2;" }} href="transaksi.html">
                
            <div class="row row-cols-auto align-items-center px-3" style={{"color": "#999999;"}}> 
                <div class="p-0">
                    <img src="image/Swap-light.png" style={{"height": "24px;"}} alt=""/> 
                </div>
                <div class="px-2 pt-1">
                    Transaksi 
                </div>
            </div> 
        </a>
        </li>
        <li class="nav-item">
            <a class="nav-link p-3" style={{"background-color": "#ffffff;", "border-bottom": "1px solid #F2F2F2;"}} href="layanan.html">
                
            <div class="row row-cols-auto align-items-center px-3" style={{"color": "#999999;"}}> 
                <div class="p-0">
                    <img src="image/Bag-light.png" style={{"color": "black;"}} alt=""/> 
                </div>
                <div class="px-2 pt-1">
                    Layanan 
                </div>
            </div> 
        </a>
        </li>
    </ul>
</div>
  )
} 