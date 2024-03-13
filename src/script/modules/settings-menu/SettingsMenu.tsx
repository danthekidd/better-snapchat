import React from 'react';
import { ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import styles from './SettingsMenu.module.css';
import ThemeProvider from '../../providers/ThemeProvider';
import SettingsModal from './components/Modal';
import Logo from './components/icons/Logo';

const portalTargetId = 'settings-menu-portal';

export default function SettingsMenu() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <ThemeProvider>
      <ActionIcon size="xl" color="indigo" className={styles.iconButton} variant="filled" onClick={open}>
        <Logo size={18} />
      </ActionIcon>
      <SettingsModal isOpen={opened} onClose={close} portalTargetId={portalTargetId} />
      <div id={portalTargetId} />
    </ThemeProvider>
  );
}
