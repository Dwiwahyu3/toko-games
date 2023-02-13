import { Layouts, Footer, Navbar } from "@/components"

export default function HomePage(props){
    const {dataPost} = props;
    console.log(dataPost);

    return  (
        <Layouts title="HomePage">
            <Navbar/>
            <div class="container">

                {/* carousel */}
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner m-2">
                        <div class="carousel-item active">
                            <img src="/carousel1.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="/carousel2.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="/carousel3.jpg" class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                {/* end carousel */}

                <div class="Row text-light p-3 d-flex">
                    {dataPost.map((item)=>{
                        return(
                        <div class="col md-3 m-1">
                        <div class="card bg-dark" style={{"width": "18rem;"}}>
                        <img src={item.thumbnailUrl} class="card-img-top p-4" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <a href={item.url} class="btn btn-danger d-flex justify-content-center">Buy</a>
                        </div>
                        </div>
                    </div>
                    );
                    })}
                </div>


                {/* advertised */}
                <div class="text-light">
                    <div class="row m-2">
                        <div class="col-4 p-2">
                            <div class="card bg-dark p-4">
                            <img src="/favicon.ico" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            </div>
                        </div>
                        <div class="col-4 p-2">
                        <div class="card bg-dark p-4">
                            <img src="/favicon.ico" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            </div>
                        </div>
                        <div class="col-4 p-2">
                        <div class="card bg-dark p-4">
                            <img src="/favicon.ico" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end advertised */}

                {/* category game */}
                <div class="text-light">
                    <div class="row m-3">
                        <div class="col-4 p-2">
                            <div class="d-flex justify-content-center">
                                <h3>Top Seller</h3>
                            </div>
                            <div class="card bg-dark">
                                <div class="row">
                                    <div class="col md-3 m-2">
                                        <img src="/carousel3.jpg" class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="col md-2 m-1 d-flex align-items-center">
                                        <h5 class="card-title ">Card title</h5>
                                    </div>
                                </div>
                            </div> 
                            <div class="card bg-dark">
                                <div class="row">
                                    <div class="col md-3 m-2">
                                        <img src="/carousel3.jpg" class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="col md-2 m-1 d-flex align-items-center">
                                        <h5 class="card-title ">Card title</h5>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div class="col-4 p-2">
                            <div class="d-flex justify-content-center">
                                <h3>Top Seller</h3>
                            </div>
                            <div class="card bg-dark">
                                <div class="row">
                                    <div class="col md-3 m-2">
                                        <img src="/carousel3.jpg" class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="col md-2 m-1 d-flex align-items-center">
                                        <h5 class="card-title ">Card title</h5>
                                    </div>
                                </div>
                            </div>   
                            <div class="card bg-dark">
                                <div class="row">
                                    <div class="col md-3 m-2">
                                        <img src="/carousel3.jpg" class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="col md-2 m-1 d-flex align-items-center">
                                        <h5 class="card-title ">Card title</h5>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <div class="col-4 p-2">
                            <div class="d-flex justify-content-center">
                                <h3>Top Seller</h3>
                            </div>
                            <div class="card bg-dark">
                                <div class="row">
                                    <div class="col md-3 m-2">
                                        <img src="/carousel3.jpg" class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="col md-2 m-1 d-flex align-items-center">
                                        <h5 class="card-title ">Card title</h5>
                                    </div>
                                </div>
                            </div> 
                            <div class="card bg-dark">
                                <div class="row">
                                    <div class="col md-3 m-2">
                                        <img src="/carousel3.jpg" class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="col md-2 m-1 d-flex align-items-center">
                                        <h5 class="card-title ">Card title</h5>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
                {/* end category */}
                
            </div>
        </Layouts>
    )
}

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?limit=5');
    const dataPost = await res.json();
    return{
        props:{
            dataPost,
        },
    };
}