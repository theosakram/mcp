const baseUrl = "http://localhost:4000";

d.get({
	url: baseUrl + "/user/8",
	success: (data) => {
		const nameEl = d("#name")[0];
		const balanceEl = d("#balance")[0];
		const expenseEl = d("#expense-list")[0];
		const incomeEl = d("#income-list")[0];

		const { fullName, balance, incomes, expenses } = data;

		nameEl.innerHTML = fullName;
		balanceEl.innerHTML = balance;

		incomes.forEach((income) => {
			const node = document.createElement("li");
			const texNode = document.createTextNode(JSON.stringify(income));

			node.appendChild(texNode);
			incomeEl.appendChild(node);
		});

		expenses.forEach((expense) => {
			const node = document.createElement("li");
			const texNode = document.createTextNode(JSON.stringify(expense));

			node.appendChild(texNode);
			expenseEl.appendChild(node);
		});
	},
	err: (error) => console.log(error),
	done: () => console.log("Done"),
});
