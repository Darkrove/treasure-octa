import Spline from '@splinetool/react-spline';
import { withRouter } from 'next/router'

function App(props) {
    return (
        <div className='relative h-screen'>
            <div className='fixed inset-x-0 m-auto'>
                <p className='text-center mt-3 text-3xl font-bold '>Congratulation {props.router.query.name}, you are winnner 🎉🙌</p>
            </div>
            <iframe src='https://my.spline.design/untitled-49cb183185f951c4f4bd1a2c08656754/' frameborder='0' width='100%' height='100%'></iframe>
        </div>
    )
}

export default withRouter(App)