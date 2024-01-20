import React from 'react';
import { Button, Flex } from '@radix-ui/themes';
import { BookmarkIcon } from '@radix-ui/react-icons';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

export default function App() {
  return (
    <Theme>
      <div className="flex justify-center items-center h-screen">
        <Flex gap="3">
          <Button color="indigo" variant="soft">
            Edit profile
          </Button>
          <Button color="cyan" variant="soft">
            Edit profile
          </Button>
          <Button color="orange" variant="soft">
            Edit profile
          </Button>
          <Button color="crimson" variant="soft">
            Edit profile
          </Button>
        </Flex>
      </div>
    </Theme>
  );
}
