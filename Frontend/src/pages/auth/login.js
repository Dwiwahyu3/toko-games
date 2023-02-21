import { Layouts } from "@/components"
import {Link} from "react-bootstrap"

export default function Login (){
    return (
        <Layouts
            title={'Login'}
        >
            <div class="container d-flex justify-content-center">
                <div class="card text-light bg-dark m-4 p-3">
                    <h4>Sign Up</h4>
                    <hr width="100%"></hr>
                    <p>
                    {/* <Link href="#">
                        <img src="/google.webp" alt="" height="30" width="30" class=""/> <p>Sign In With Account Google</p>
                    </Link> */}
                    </p>
                </div>
            </div>
        </Layouts>
    )
}