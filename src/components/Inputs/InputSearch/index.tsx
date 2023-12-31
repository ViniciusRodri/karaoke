import { Box, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { CiSearch } from 'react-icons/ci';

interface IInputProps {
  onchange: any;
  value?: any;
}

const InputSearch = ({ onchange, value }: IInputProps): ReactElement => {
  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Box color="black.500">
            <CiSearch size="20" />
          </Box>
        </InputLeftElement>
        <Input
          type="search"
          placeholder="Pesquise seu video-karaokê"
          onChange={onchange}
          value={value}
          borderColor="gold.500"
          focusBorderColor="gold.500"
        />
      </InputGroup>
    </Stack>
  );
};

export default InputSearch;
