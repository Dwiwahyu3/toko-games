import { Layouts,Navbar } from "@/components"

export default function Profile (){
    return (
        <Layouts title={'My-Profile'}>
            <Navbar/>

            <div class="container">
                <div class="row mt-5 p-2">
                    <div class="col-md-4">
                        <div class="m-2 list-group bg-dark text-light">
                            <a href="#gemesid" class="list-group-item text-light list-group-item-action active bg-dark" aria-current="true">
                                Game ID
                            </a>
                            <a href="#password" class="list-group-item text-light list-group-item-action bg-dark">Password</a>
                            <a href="#avatar" class="list-group-item text-light list-group-item-action bg-dark">Avatar</a>
                            <a href="#personalinfo" class="list-group-item text-light list-group-item-action bg-dark">Personal Information</a>
                            <a href="#history" class="list-group-item text-light list-group-item-action bg-dark">History</a>
                            <a href="#connectedacc" class="list-group-item text-light list-group-item-action bg-dark">Connecting Account</a>
                            <a href="#loginmanage" class="list-group-item text-light list-group-item-action bg-dark">Management Login</a>
                            
                        </div>            
                    </div>

                    <div class="col-md-8">
                        <div class="Card m-2" id="gamesid">
                            <div class="d-flex text-light">
                                <div class="p-4 w-50 bg-dark">
                                        <h3>
                                            GAME STORE ID
                                        </h3>
                                        <p>
                                            Your ID is used by players to find you through the social panel in our games.
                                        </p>
                                </div>
                                <div class="p-2 w-50 flex-shrink-1 bg-secondary ">
                                    <div class="mb-3 row">
                                            <label class="col-sm-5 col-form-label">Game Store Name</label>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control-plaintext" id="stoername" value="PUBG Mobile-Gaming"/>
                                            </div>
                                    </div>
                                    <div class="mb-3 row">
                                            <label for="staticId" class="col-sm-5 col-form-label">Game Store ID</label>
                                            <div class="col-sm-6">
                                                <input type="text" readonly class="form-control-plaintext" id="storeid" value="12345678"/>
                                            </div>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <button class="btn btn-danger">Verify & Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="Card m-2" id="password">
                            <div class="d-flex text-light">
                                <div class="p-4 w-50 bg-dark">
                                        <h3>
                                            PASSWORD
                                        </h3>
                                        <p>
                                            Your password is used by players to find you through the social panel in our games.
                                        </p>
                                </div>
                                <div class="p-2 w-50 flex-shrink-1 bg-secondary ">
                                    <div class="mb-3 row">
                                            <label for="staticEmail" class="col-sm-5 col-form-label">You'r Password Now</label>
                                            <div class="col-sm-6">
                                            <input type="pasword" readonly class="form-control-plaintext" id="staticPassword" value="********"/>
                                            </div>
                                    </div>
                                    <div class="mb-3 row">
                                            <label for="inputPassword" class="col-sm-5 col-form-label">Change Password</label>
                                            <div class="col-sm-6">
                                                <input type="password" class="form-control" id="inputPassword"/>
                                            </div>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <button class="btn btn-danger">Verify & Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="Card m-2" id="avatar">
                            <div class="d-flex text-light">
                                <div class="p-4 w-50 bg-dark">
                                        <h3>
                                            AVATAR
                                        </h3>
                                        <p>
                                            Choose avatar image
                                        </p>
                                </div>
                                <div class="p-2 w-50 flex-shrink-1 bg-secondary ">
                                    <div class="mb-3 row">
                                            <label for="staticEmail" class="col-sm-5 col-form-label">Game Store Name</label>
                                            <div class="col-sm-6">
                                            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
                                            </div>
                                    </div>
                                    <div class="mb-3 row">
                                            <label for="inputPassword" class="col-sm-5 col-form-label">Password</label>
                                            <div class="col-sm-6">
                                            <input type="password" class="form-control" id="inputPassword"/>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="Card m-2" id="personalinfo">
                            <div class="d-flex text-light">
                                <div class="p-4 w-50 bg-dark">
                                        <h3>
                                            PERSONAL INFORMATION
                                        </h3>
                                        <p>
                                            This information is private and will not be shared with other players. Read the <a href="#">Store Privacy Notice</a> anytime!.
                                        </p>
                                </div>
                                <div class="p-2 w-50 flex-shrink-1 bg-secondary ">
                                    <div class="mb-3 row">
                                            <label for="staticEmail" class="col-sm-5 col-form-label">Email</label>
                                            <div class="col-sm-6">
                                            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
                                            </div>
                                    </div>
                                    <div class="mb-3 row">
                                            <label for="inputPassword" class="col-sm-5 col-form-label">Birthday</label>
                                            <div class="col-sm-6">
                                            <input type="text" readonly class="form-control-plaintext" id="birthday" value="01-Januari-2001"/>
                                            </div>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <button class="btn btn-danger">Verify & Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="Card m-2" id="history">
                            <div class="d-flex text-light">
                                <div class="p-4 w-50 bg-dark">
                                        <h3>
                                            HISTORY
                                        </h3>
                                        <p>
                                            This information is private and will not be shared with other players. Read the <a href="#">Store Privacy Notice</a> anytime!
                                        </p>
                                </div>
                                <div class="p-2 w-50 flex-shrink-1 bg-secondary ">
                                    <div class="mb-3 row">
                                            <label for="staticEmail" class="col-sm-5 col-form-label">Email</label>
                                            <div class="col-sm-6">
                                            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
                                            </div>
                                    </div>
                                    <div class="mb-3 row">
                                            <label for="inputPassword" class="col-sm-5 col-form-label">Birthday</label>
                                            <div class="col-sm-6">
                                            <input type="text" readonly class="form-control-plaintext" id="birthday" value="01-Januari-2001"/>
                                            </div>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <button class="btn btn-danger">Verify & Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="Card m-2" id="connectedacc">
                            <div class="d-flex text-light">
                                <div class="p-4 w-50 bg-dark">
                                        <h3>
                                            CONNECTED ACCOUNT
                                        </h3>
                                        <p>
                                            If connected, these accounts can access some of the data that you provide to Games Store.
                                        </p>
                                </div>
                                <div class="p-2 w-50 flex-shrink-1 bg-secondary ">
                                    <div class="mb-3 row">
                                            <label for="staticEmail" class="col-sm-5 col-form-label">Game Store Name</label>
                                            <div class="col-sm-6">
                                            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
                                            </div>
                                    </div>
                                    <div class="mb-3 row">
                                            <label for="inputPassword" class="col-sm-5 col-form-label">Password</label>
                                            <div class="col-sm-6">
                                            <input type="password" class="form-control" id="inputPassword"/>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="Card m-2" id="loginmanage">
                            <div class="d-flex text-light">
                                <div class="p-4 w-50 bg-dark">
                                        <h3>
                                            LOGIN MANAGEMENT
                                        </h3>
                                        <p>
                                            Worried that your account or password has been compromised? You can forcibly log out from all Riot apps, sites, and games.
                                        </p>
                                </div>
                                <div class="p-2 w-50 flex-shrink-1 bg-secondary ">
                                    <div class="d-flex justify-content-center">
                                        <button class="btn btn-danger">Verify & Save</button>
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