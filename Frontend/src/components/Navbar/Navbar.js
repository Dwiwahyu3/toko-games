export const Navbar = () =>{
    return(
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-2">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="/logo.png" alt="" width="145" height="40"/>
          </a>

          <div class="text-light nav" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home/homepage">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/library/library">Library</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/payment/payment">Pro</a>
              </li>
            </ul>
          </div>

          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>

      {/* account */}
        
      </nav>
    )
} 