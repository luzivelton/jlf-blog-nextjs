import { Typography } from '@/components/Typography/Typography'
import clsx from 'clsx'
import { Github, Linkedin, Mail } from 'lucide-react'
import { JSX } from 'react'

export function Contact() {
  return (
    <ul className='flex flex-col gap-2'>
      <ContactItem
        icon={<Mail width={20} />}
        label='joaolfern@proton.me'
        href='mailto:joaolfern@proton.me'
      />
      <ContactItem
        className='underline'
        icon={<Linkedin width={20} />}
        label='/João Luiz Fernandes'
        href='https://www.linkedin.com/in/joaolfern'
      />
      <ContactItem
        className='underline'
        icon={<Github width={20} />}
        label='/joaolfern'
        href='http://github.com/joaolfern'
      />
    </ul>
  )
}

type ContactItemProps = JSX.IntrinsicElements['a'] & {
  icon: React.ReactNode
  label: string
}

function ContactItem({ icon, label, href, className }: ContactItemProps) {
  return (
    <li>
      <a
        className={`flex items-center gap-2 ${clsx(className)}`}
        href={href}
        target='_blank'
        rel='noreferrer'
      >
        <Typography primary={true} variant='body'>
          {icon}
        </Typography>
        {label}
      </a>
    </li>
  )
}
