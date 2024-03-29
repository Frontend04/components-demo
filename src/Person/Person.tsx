import React, { PropsWithChildren } from 'react'

interface IPersonProps extends React.PropsWithChildren {
  name: string;
  age: number; 
}

const Person: React.FC<IPersonProps> = props => {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Age:{props.age}</p>
      <p>{props.children}</p>
    </div>
  )
};

export default Person
