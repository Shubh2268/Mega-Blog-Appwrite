import React, { useId } from 'react';

const Input = React.forwardRef(({ label, type='text', className='', ...props }, ref) => {

    const id = useId();

  return (
    <div className="w-full">
        
    </div>
  )
})

export default Input;
