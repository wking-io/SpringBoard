/* global context */
import '../css/index.css';
import { Elm } from '../elm/Index.elm';

Elm.Index.init({
  node: document.getElementById('elm'),
  flags: context,
});
