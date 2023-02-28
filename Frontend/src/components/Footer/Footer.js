import { Layouts } from "../Layouts/Layouts"

export const Footer = () =>{
    return (
      <div class="container">
        <div class="footer d-flex justify-content-center">

          <div class="card text-center  m-2">
              <div class="card-header">1 Month</div>
              <div class="card-body m-2">
                <h2 class="card-title">Rp. 40.000,-</h2>
                <p class="card-text">Rp. 59.000,-</p>
                <a href="#" class="btn btn-primary">Subscribe</a>
              </div>
              <div class="card-footer text-muted">2 days ago</div>
          </div>

          <div class="card text-center m-2">
              <div class="card-header">6 Month</div>
              <div class="card-body">
                <h2 class="card-title">Rp. 240.000,-</h2>
                <p class="card-text">Rp. 299.000,-</p>
                <a href="#" class="btn btn-primary">Subscribe</a>
              </div>
              <div class="card-footer text-muted">2 days ago</div>
          </div>

          <div class="card text-center m-2">
              <div class="card-header">1 Years</div>
              <div class="card-body">
                <h2 class="card-title">Rp. 480.000,-</h2>
                <p class="card-text">Rp. 649.000,-</p>
                <a href="#" class="btn btn-primary">Subscribe</a>
              </div>
              <div class="card-footer text-muted">2 days ago</div>
          </div>

        </div>

            <div  class="card w-100">
              <div class="d-flex justify-content-center">
                <h6>Contact Us : </h6>
                <a href="www.facebook.com"><i class="bi bi-facebook"></i></a>
                <a href="www.gmail.com"><i class="bi bi-envelope-at-fill"></i></a>
              </div>
            </div>
      </div>
    )
} 