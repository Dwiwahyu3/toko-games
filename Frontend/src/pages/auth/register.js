import { Layouts } from "@/components"

export default function Register (){
    return (
        <Layouts
            title={'Register'}
        >
            <div class="container d-flex justify-content-center">
                <div class="card text-light bg-dark m-4 p-3">
                    <h4>Registration</h4>
                    <hr width="100%"></hr>
                    {/* <Link href="#">
                        <img src="/google.webp" alt="" height="30" width="30"/> Sign In With Account Google
                    </Link> */}
                </div>
            </div>
        </Layouts>
    )
}