import React from 'react'
import Popover from '@material-ui/core/Popover';
import Zoom from '@material-ui/core/Zoom';

import {
   Wrapper,
   SelectButton,
   OptionButton,
   PopoverContainer
} from './select.styles'

interface SelectProps {
   anchorEl: any
   popoverClose: () => void
   showSelect: (event: any) => void
   user: number
   changeUser: (user: number) => void
}

const Transition = React.forwardRef(function Transition(props, ref) {
   return <Zoom ref={ref} />;//{...props}
});

const Select: React.FC<SelectProps> = ({
   anchorEl,
   popoverClose,
   showSelect,
   user,
   changeUser
}) => {
   const open = Boolean(anchorEl);
   const id = open ? 'simple-popover' : undefined;

   return (
      <Wrapper>
         <SelectButton onClick={(e) => showSelect(e)}>
            Пользователь {user}
         </SelectButton>
         <Popover
            id={id}
            open={open}
            elevation={8}
            anchorEl={anchorEl}
            onClose={popoverClose}
            anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'center',
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'center',
            }}
         // TransitionComponent={Transition}
         >
            <PopoverContainer>
               <OptionButton onClick={() => changeUser(1)}>Пользователь 1</OptionButton>
               <OptionButton onClick={() => changeUser(2)}>Пользователь 2</OptionButton>
            </PopoverContainer>
         </Popover>
      </Wrapper>
   )
}

export default Select