import React from 'react';
import { Tabs, Box } from '@radix-ui/themes';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

export default function App() {
  return (
    <Theme>
      <div className="flex justify-center items-center h-screen">
        <Tabs.Root defaultValue="account">
          <Tabs.List>
            <Tabs.Trigger value="account">Account</Tabs.Trigger>
            <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
            <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
          </Tabs.List>
        
          <Box px="4" pt="3" pb="2">
            <Tabs.Content value="account">
              <p>Make changes to your account.</p>
            </Tabs.Content>
        
            <Tabs.Content value="documents">
              <p>Access and update your documents.</p>
            </Tabs.Content>
        
            <Tabs.Content value="settings">
              <p>Edit your profile or update contact information.</p>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </div>
    </Theme>
  );
}