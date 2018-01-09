import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should correctly render expenses summary with 1 expense', () => {
	const wrapper = shallow(
		<ExpenseListItem expenseCount={1} expensesTotal={235} />
	);
	expect(wrapper).toMatchSnapshot();
});

test('should correctly render expenses summary with multiple expense', () => {
	const wrapper = shallow(
		<ExpenseListItem expenseCount={23} expensesTotal={48625487} />
	);
	expect(wrapper).toMatchSnapshot();
});
