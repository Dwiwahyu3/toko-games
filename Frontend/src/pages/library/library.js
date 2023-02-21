import { Layouts,Navbar } from "@/components"

export default function MyLibrary (){
    return (
        <Layouts title={'My-Library'}>
            <Navbar/>

            <div class="container">
                <div class="row mt-5 p-2">
                    <div class="col-md-8">
                    <div class="d-flex justify-content-start m-2 p-2 text-light">
                        <div class="card bg-dark m-2 p-2" style={{"width": "18rem;"}}>
                            <img src="..." class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div class="card bg-dark m-2 p-2" style={{"width": "18rem;"}}>
                            <img src="..." class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div class="card bg-dark m-2 p-2" style={{"width": "18rem;"}}>
                            <img src="..." class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div class="col-md-4">
                        <div class="list-group bg-dark">
                            <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                                The current link item
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">A second link item</a>
                            <a href="#" class="list-group-item list-group-item-action">A third link item</a>
                            <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
                            <a class="list-group-item list-group-item-action disabled">A disabled link item</a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8">


                    </div>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}