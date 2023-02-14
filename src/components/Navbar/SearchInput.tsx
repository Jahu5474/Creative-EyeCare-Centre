import React from 'react';
import {
Flex, 
Input, 
InputGroup, 
InputLeftElement, 
InputRightElement} from '@chakra-ui/react';
import {CheckIcon, PhoneIcon, Search2Icon} from '@chakra-ui/icons'

type SearchInputProps = {
    //user:
};

const SearchInput:React.FC<SearchInputProps> = () =>{
    return(
        <Flex flexGrow={1} mr={2} align="center">
            <InputGroup>
    <InputLeftElement
      pointerEvents="none"
      children={<Search2Icon color='gray.300' mb={1}/>}
    />
    <Input 
        placeholder='Search Products...' 
        fontSize="10pt"
         height="34px"
    />
  </InputGroup>
        </Flex>

    
    )
}

export default SearchInput;