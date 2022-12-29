import Spline from '@splinetool/react-spline';
import { withRouter } from 'next/router'

function App(props) {
    return (
        <div className='relative h-screen'>
            <div className='fixed inset-x-0 m-auto'>
                <p className='text-center mt-3 text-3xl font-bold'>Congratulation {props.router.query.name}, you are winnner 🎉🙌</p>
            </div>

            <iframe src='https://my.spline.design/untitled-c049311873de080f0a7295e9efa903db/' frameborder='0' width='100%' height='100%'></iframe>
            {/* <Spline scene="https://prod.spline.design/sXZKD8IQge6u9cbi/scene.splinecode" /> */}
            {/* <Spline scene="https://prod.spline.design/3keTeBuI-1H9BNLz/scene.splinecode" /> */}
            {/* <Spline scene="https://prod.spline.design/N-agreiP6ZKxtjrE/scene.splinecode" /> */}
        </div>
    )
}

export default withRouter(App)