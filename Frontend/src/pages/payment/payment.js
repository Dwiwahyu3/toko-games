import { Layouts,Navbar } from "@/components"

export default function Payment (){
    return (
        <Layouts
            title={'Payment'}
        >
            <Navbar/>

            <div class="container">
                <div class="payment mt-5">
                    <div class="d-flex justify-content-center text-white">
                        <h2>
                            Unlock Game Pass Benefits with Our Subscribe Plan
                        </h2>
                    </div>
                    <div class="d-flex justify-content-center text-white">
                        <p>
                            Our Game Pass Subscribe Plan offers the ultimate gaming experience for enthusiasts. By subscribing, you'll have unlimited access to all the games in our Game Pass library. 
                        </p>
                    </div>

                    <div class="d-flex justify-content-center m-5">
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

                </div>
            </div>
        </Layouts>
    )
}