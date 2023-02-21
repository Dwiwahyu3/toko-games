import { Layouts,Navbar } from "@/components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DetailProduct (){
    return (
        <Layouts title={'Detail-Product'}>
            <Navbar/>

            <div class="container">
                <div class="row mt-5 p-2">
                    <div class="col-md-8">
                        <div id="carouselExampleCaptions" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="/carousel1.jpg" class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                                </div>
                                <div class="carousel-item">
                                <img src="/carousel2.jpg" class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                                </div>
                                <div class="carousel-item">
                                <img src="/carousel3.jpg" class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card bg-dark text-light">
                            <div class="p-2"><h3> Title Of Game</h3></div>
                            <div>
                                <i class="bi bi-star-fill">4,5</i>
                            </div>
                            <div class="d-flex">
                                <div class="p-2 w-100">Developer</div>
                                <div class="p-2 flex-shrink-1">Organizing</div>
                            </div>
                            <div class="d-flex">
                                <div class="p-2 w-100">Developer</div>
                                <div class="p-2 flex-shrink-1">Organizing</div>
                            </div>
                            <div class="d-flex">
                                <div class="p-2 w-100">Developer</div>
                                <div class="p-2 flex-shrink-1">Organizing</div>
                            </div>
                            <div class="d-flex">
                                <div class="p-2 w-100">Developer</div>
                                <div class="p-2 flex-shrink-1">Organizing</div>
                            </div>
                            <div class="d-flex">
                                <div class="p-2 w-100">Developer</div>
                                <div class="p-2 flex-shrink-1">Organizing</div>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-5">
                    <div class="col-md-8 text-light">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        <div class="card bg-dark" style={{ "width":"18rem;" }}>
                        <th>
                            <tr>
                                <td>
                                    <div>
                                        <h4>Genre</h4>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <h4>Genre</h4>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <p>Genre</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <h4>Genre</h4>
                                    </div>
                                </td>
                            </tr>
                        </th>
                        </div>

                        <h4 class="mt-4">Rating & Review</h4>
                        <div class="card" style={{"width": "18rem;"}}>
                            <div class="card-body bg-dark">
                                <h5 class="card-title">user1</h5>
                                <i class="bi bi-star-fill">4,5</i>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card" style={{"width": "18rem;"}}>
                            <div class="card-body bg-dark">
                                <h5 class="card-title">user2</h5>
                                <i class="bi bi-star-fill">4,5</i>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>

                        <h5 class="mt-4">Spesifikasi</h5>
                        <div class="card bg-dark text-light" style={{"width": "18rem;"}}>
                        <h5 class="m-2">Windows</h5>
                        <div class="row">
                        <div class="col-md-4">
                            <h5 class="p-2">Minimum</h5>
                            <div class="p-2">
                                <h6>OS Version</h6>
                                <p>Lorem ipsum dolor sit ame</p>
                            </div>
                            <div class="p-2">
                                <h6>OS Version</h6>
                                <p>Lorem ipsum dolor sit ame</p>
                            </div>
                            <div class="p-2">
                                <h6>OS Version</h6>
                                <p>Lorem ipsum dolor sit ame</p>
                            </div>
                            <div class="p-2">
                                <h6>OS Version</h6>
                                <p>Lorem ipsum dolor sit ame</p>
                            </div>
                        </div>

                        <div class="col-md-4 ">
                        <h5 class="p-2">Requirement</h5>
                            <div class="p-2">
                                <h6>OS Version</h6>
                                <p>Lorem ipsum dolor sit ame</p>
                            </div>
                            <div class="p-2">
                                <h6>OS Version</h6>
                                <p>Lorem ipsum dolor sit ame</p>
                            </div>
                            <div class="p-2">
                                <h6>OS Version</h6>
                                <p>Lorem ipsum dolor sit ame</p>
                            </div>
                            <div class="p-2">
                                <h6>OS Version</h6>
                                <p>Lorem ipsum dolor sit ame</p>
                            </div>
                        </div>
                        </div>
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}