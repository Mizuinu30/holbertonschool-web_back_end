/* eslint import/extensions: ['error', 'ignorePackages', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }] */ // eslint-disable-line
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
const budget = getBudgetObject(income, gdp, capita);
const fullBudget = {
  ...budget,
  getIncomeInDollars(income) {
    return `$${income}`;
  },
  getIncomeInEuros(income) {
    return `${income} euros`;
  },
};

return fullBudget;
}
