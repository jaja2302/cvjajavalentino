import React from 'react'
import './Button.css'
import { Button } from '@material-ui/core'

const CostumButton = ({text, icon}) =>{
    return(
        <Button className='costum_btn' 
        endIcon={
            icon ? <div className='btn_icon_container'>{icon}</div> : null
         }> <span className='btn_text'>
             {text}
         </span>
         </Button>
    )
}

export default CostumButton
