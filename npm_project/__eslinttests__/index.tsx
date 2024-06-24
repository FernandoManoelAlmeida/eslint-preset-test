import React, { FunctionComponent } from 'react'

type Props = {
  name: string,
}

const MyTestComponent: FunctionComponent<Props> = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  )
}

export default MyTestComponent
