import React from 'react';
import { Button, Flex, AlertDialog } from '@radix-ui/themes';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

export default function App() {
  return (
    <Theme>
      <div className="m-5">
        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <Button color="red">Delete users</Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content style={{ maxWidth: 500 }}>
            <AlertDialog.Title>Delete Users</AlertDialog.Title>
            <AlertDialog.Description size="2">
              Are you sure you want to delete these users? This action is permanent and cannot be undone.
            </AlertDialog.Description>

            <Flex gap="3" justify="end">
              <AlertDialog.Cancel>
                <Button variant="soft" color="gray">Cancel</Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button color="red">Delete users</Button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </div>
    </Theme>
  );
}