/*
 * fetch dictonaries for Typo.js
 */
const Typo = require('typo-js');
const fetchEnUSAff = fetch('/dict/en_US.aff').then(res => res.text());
const fetchEnUSDic = fetch('/dict/en_US.dic').then(res => res.text());
const fetchDictionaries = () => 
  Promise.all([fetchEnUSAff, fetchEnUSDic])
    .then(([affText, dicText]) => new Typo('en_US', affText, dicText));

export default fetchDictionaries;
