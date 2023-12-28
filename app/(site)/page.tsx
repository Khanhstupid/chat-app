import Image from 'next/image'
import AuthForm from './components/AuthForm'

export default function Home() {
    return (
        <div className='
         flex
         min-h-full
         flex-col
         justify-center
         py-12
         sm:px-6
         lg:px-8
         bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300
        '>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <Image
                  alt='Logo'
                  height="70"
                  width="70"
                  className='mx-auto w-auto'
                  src='/images/logo.png'
                />
                <h2
                  className='
                    mt-6
                    text-center
                    text-3xl
                    font-bold
                    tracking-tight
                    text-grey-700
                  '>Sign in to your account</h2>
            </div>
            <AuthForm/>
        </div>
    )
}
