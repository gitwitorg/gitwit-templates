import React from 'react';
import { Text, Flex, Switch } from '@radix-ui/themes';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

export default function App() {
  return (
    <Theme>
      <div className="flex justify-center items-center h-screen">
        <Text as="label" size="2">
          <Flex gap="2">
            <Switch defaultChecked /> Sync Photos
          </Flex>
        </Text>
      </div>
    </Theme>
  );
}