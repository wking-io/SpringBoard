/* global context */
import '../css/common.css';
import '../css/process-index.css';
import { Elm } from '../elm/IndexPage.elm';

Elm.IndexPage.init({
  node: document.getElementById('elm'),
  flags: context,
});
