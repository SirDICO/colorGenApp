import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'
import { HexColor } from '../node_modules/css-tree/lib/syntax/node';

const SingleColor = ({rgb, weight, hex, index}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',')

//  const hex2 = rgbToHex(...rgb)

const hexValue = `#${hex}`

useEffect(()=>{
  const timeout = setTimeout(()=>{
    setAlert(false)

  }, 3000)
  return () => clearTimeout(timeout)
}, [alert])
  return (
  <article
             className={`color ${index > 10 && 'color-light'}`} 
            style={{backgroundColor:`rgb(${bcg})`}} 
            onClick={()=>{setAlert(true) 
                navigator.clipboard.writeText(hexValue)}}> 
  <p className='percent-value'>{weight}%</p>
  <p className='color-value'>{hexValue}</p>

  {alert && <p className='alert'>Copied to clipboard</p>}
</article>
);
}

export default SingleColor
