import { Fragment } from 'preact';

import packageJson from '@/../package.json';
import { Modal } from '@/components/common';
import { GitHubIcon, SettingsIcon } from '@/components/icons';
import { capitalizeFirstLetter, cx, useSignal, useToggle } from '@/utils';

import extensionManager from './extensions';
import { DEFAULT_APP_OPTIONS, options, THEMES } from './storage';

export function Settings() {
  const currentTheme = useSignal(options.get('theme'));
  const [showSettings, toggleSettings] = useToggle(false);

  const styles = {
    subtitle: 'mb-2 text-base-content ml-4 opacity-50 font-semibold text-xs',
    item: 'text-sm mb-2 w-full flex p-4 text-base-content bg-base-200 rounded-box justify-between',
  };

  return (
    <Fragment>
      {/* Settings button. */}
      <div
        onClick={toggleSettings}
        class="w-9 h-9 mr-2 cursor-pointer flex justify-center items-center transition-colors duration-200 rounded-full hover:bg-base-200"
      >
        <SettingsIcon />
      </div>
      {/* Settings modal. */}
      <Modal title="Settings" show={showSettings.value} onClose={toggleSettings} class="max-w-lg">
        {/* Change themes. */}
        <p class={styles.subtitle}>Appearance</p>
        <div class={cx(styles.item, 'py-0 h-14 items-center')}>
          <span class="label-text">Theme</span>
          <select
            class="select select-sm"
            onChange={(e) => {
              currentTheme.value =
                (e.target as HTMLSelectElement)?.value ?? DEFAULT_APP_OPTIONS.theme;
              options.set('theme', currentTheme.value);
            }}
          >
            {THEMES.map((theme) => (
              <option key={theme} value={theme} selected={currentTheme.value === theme}>
                {capitalizeFirstLetter(theme)}
              </option>
            ))}
          </select>
        </div>
        {/* Enable or disable modules. */}
        <p class={styles.subtitle}>Modules</p>
        <div class={cx(styles.item, 'flex-col')}>
          {extensionManager.getExtensions().map((extension) => (
            <label
              class="label cursor-pointer flex justify-between h-8 items-center"
              key={extension.name}
            >
              <span>{extension.name}</span>
              <input
                type="checkbox"
                class="toggle toggle-primary"
                checked={extension.enabled}
                onChange={() => {
                  extension.enabled
                    ? extensionManager.disable(extension.name)
                    : extensionManager.enable(extension.name);
                }}
              />
            </label>
          ))}
        </div>
        {/* Information about this script. */}
        <p class={styles.subtitle}>About</p>
        <div class={styles.item}>
          <span class="label-text">Version {packageJson.version}</span>
          <a class="btn btn-xs btn-ghost" target="_blank" href={packageJson.homepage}>
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </Modal>
    </Fragment>
  );
}
