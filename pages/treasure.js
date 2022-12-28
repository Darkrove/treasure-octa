import Spline from '@splinetool/react-spline';

export default function App() {
    return (
        <div className='relative h-screen'>
            <div className='fixed inset-x-0 m-auto'>
                <p className='text-center mt-3 text-3xl font-bold'>Congratulation, you are winnner 🎉🙌</p>
            </div>

            {/* <Spline scene="https://prod.spline.design/sXZKD8IQge6u9cbi/scene.splinecode" /> */}
            <Spline scene="https://prod.spline.design/3keTeBuI-1H9BNLz/scene.splinecode" />
        </div>
    )
}