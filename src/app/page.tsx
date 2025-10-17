import { MyPosts } from '@/app/_components/MyPosts'
import { PersonalIntroduction } from '@/app/_components/PersonalIntroduction'
import { Image } from '@/components/Image/Image'
import { AppLayout } from '@/layouts/AppLayout/AppLayout'
import { ContactDetails } from '@/layouts/AppLayout/components/ContactDetails'
import { Footer } from '@/layouts/AppLayout/components/Footer'

export default function Home() {
  return (
    <AppLayout>
      <div className='flex flex-col items-center full-height-with-header pb-8'>
        <PersonalIntroduction />
        <Image
          className='hidden sm:block m-auto h-auto'
          src='/layoutPatterns.svg'
          alt=''
          aria-label='hidden'
          width={686}
          height={28}
        />
      </div>
      <MyPosts />
      <Footer className='mt-28' prefixContent={<ContactDetails />} />
    </AppLayout>
  )
}
