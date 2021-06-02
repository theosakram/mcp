const baseUrl = "http://localhost:4000";
const baseLocation = document.location.href;

const onChangePage = () => {
	const indexedBaseLocation = baseLocation.split("/");
	indexedBaseLocation.pop();

	const finalLocation = indexedBaseLocation.join("/") + `/profile.html`;

	document.location.replace(finalLocation);
};

Node.prototype.chainableAppendChild = function (newChild) {
	this.appendChild(newChild);
	return this;
};

d.get({
	url: baseUrl + "/user/8",
	success: (data) => {
		const nameEl = d("#name")[0];
		const balanceEl = d("#balance")[0];

		const { fullName, balance } = data;

		nameEl.innerHTML = fullName;
		balanceEl.innerHTML = `Rp ${balance.toLocaleString("id-ID")}`;
	},
	err: (error) => console.log(error),
	done: () => console.log("Done"),
});

d.get({
	url: baseUrl + "/income/last/8",
	success: (data) => {
		const sourceEl = d("#last-income-source")[0];
		const amountEl = d("#last-income-amount")[0];

		const { source, amount } = data;

		sourceEl.innerHTML = source;
		amountEl.innerHTML = `Rp ${amount.toLocaleString("id-ID")}`;
	},
	err: (error) => console.log(error),
	done: () => console.log("Done"),
});

d.get({
	url: baseUrl + "/expense/last/8",
	success: (data) => {
		const expenseEl = d("#last-expense-source")[0];
		const amountEl = d("#last-expense-amount")[0];

		const { title, amount } = data;

		expenseEl.innerHTML = title;
		amountEl.innerHTML = `Rp ${amount.toLocaleString("id-ID")}`;
	},
	err: (error) => console.log(error),
	done: () => console.log("Done"),
});
