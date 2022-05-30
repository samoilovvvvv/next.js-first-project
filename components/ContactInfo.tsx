import { FC } from 'react'

import Heading from './Heading'
import { contactType } from '../types'

type contactInfoProps = {
    contact: contactType
}

const ContactInfo: FC<contactInfoProps> = ({ contact }) => {
  const { name, email, address: { street, suite, city, zipcode}} = contact || {}
  
  if (!contact) {
    return <Heading tag={'h3'} text={'Empty contact'} />
  }
  
  return (
    <>
      <Heading tag={'h3'} text={name} />
      <div>
        <strong>Email </strong>
        {email}
      </div>
      <div>
        <strong>Address</strong>
        {` ${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </>
  )
}

export default ContactInfo