import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import {retrieveHelloWorldPathVariable} from './api/HelloWorldApiService'
import { useAuth } from './security/AuthContext'

function WelcomeComponent() {

    const {username} = useParams()

    const [message, setMessage] = useState(null)

    const authContext = useAuth()

    function callHelloWorldApi() {
        console.log('called')

        // retrieveHelloWorld()
        //     .then ((response) => successfulResponse(response))
        //     .catch((error) => errorResponse(error))
        //     .finally(() => console.log('clean up'))

        // retrieveHelloWorldBean()
        //     .then ((response) => successfulResponse(response))
        //     .catch((error) => errorResponse(error))
        //     .finally(() => console.log('clean up'))

        retrieveHelloWorldPathVariable('thanh')
            .then ((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('clean up'))
    }

    function successfulResponse(response) {
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
    }

    return (
        <div className="welcome">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldApi}>Call Hello World</button>
            </div>
            <div className='text-info'>{message}</div>
        </div>
    )
}

export default WelcomeComponent