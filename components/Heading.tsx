import { FC } from 'react'

type headingTypeProps = {
  tag?: keyof JSX.IntrinsicElements,
  text: string
}

const Heading: FC<headingTypeProps> = ({tag = 'h1', text}) => {
  const Tag = tag
  
  return (
    <Tag>{text}</Tag>
  )
}

export default Heading