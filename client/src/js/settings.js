/* global context */
import '../css/settings.css';
import { Elm } from '../elm/SettingsPage.elm';

Elm.SettingsPage.init({
  node: document.getElementById('elm'),
  flags: context,
});
