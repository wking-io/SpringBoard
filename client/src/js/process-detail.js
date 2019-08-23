/* global context */
import '../css/process-detail.css';
import { Elm } from '../elm/DetailPage.elm';

Elm.DetailPage.init({
  node: document.getElementById('elm'),
  flags: context,
});
