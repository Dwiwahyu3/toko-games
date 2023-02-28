import { Layouts } from "@/components"

export default function Register (){
    return (
        <Layouts
            title={'Register'}>
                <div class="d-flex justify-content-center mt-5">
                    <div class="card">
                        <div class="card-body py-5 px-md-5">
                                <form>
                                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                    <div class="row">
                                    <div class="col-md-6 mb-4">
                                        <div class="form-outline">
                                        <input type="text" id="form3Example1" class="form-control" />
                                        <label class="form-label" for="form3Example1">First name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <div class="form-outline">
                                        <input type="text" id="form3Example2" class="form-control" />
                                        <label class="form-label" for="form3Example2">Last name</label>
                                        </div>
                                    </div>
                                    </div>

                                    {/* <!-- Email input --> */}
                                    <div class="form-outline mb-4">
                                    <input type="email" id="form3Example3" class="form-control" />
                                    <label class="form-label" for="form3Example3">Email address</label>
                                    </div>

                                    {/* <!-- Password input --> */}
                                    <div class="form-outline mb-4">
                                    <input type="password" id="form3Example4" class="form-control" />
                                    <label class="form-label" for="form3Example4">Password</label>
                                    </div>

                                    {/* <!-- Checkbox --> */}
                                    <div class="form-check d-flex justify-content-center mb-4">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                                    <label class="form-check-label" for="form2Example33">
                                        Subscribe to our newsletter
                                    </label>
                                    </div>

                                    {/* <!-- Submit button --> */}
                                    <div class="d-flex justify-content-center">
                                        <button type="submit" class="btn btn-primary btn-block mb-4">
                                        Sign up
                                        </button>
                                    </div>

                                    {/* <!-- Register buttons --> */}
                                    <div class="text-center">
                                    <p>or sign up with:</p>
                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                        <i class="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                        <i class="fab fa-google"></i>
                                    </button>

                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                        <i class="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                        <i class="fab fa-github"></i>
                                    </button>
                                    </div>
                                </form>
                                </div>
               </div>
            </div>
        </Layouts>
    )
}