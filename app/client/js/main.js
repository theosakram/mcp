class El extends Array {
	ready(cb) {
		const isReady = this.some((e) => {
			return e.readyState !== null && e.readyState !== "loading";
		});

		if (isReady) {
			cb();
		} else {
			this.listen("DOMContentLoaded", cb);
		}

		return this;
	}

	listen(event, cbOrSelector, cb) {
		if (typeof cbOrSelector === "function") {
			this.forEach((e) => e.addEventListener(event, cbOrSelector));
		} else {
			this.forEach((element) => {
				element.addEventListener(event, (e) => {
					if (e.target.match(cbOrSelector)) {
						cb(e);
					}
				});
			});
		}

		return this;
	}
}

function d(params) {
	if (typeof params === "string" || params instanceof String) {
		return new El(...document.querySelectorAll(params));
	} else {
		return new El(params);
	}
}

d.get = async function ({
	url,
	data = {},
	success = () => {},
	err = () => {},
	done = () => {},
}) {
	const queryString = Object.entries(data)
		.map(([key, value]) => {
			return `${key}=${value}`;
		})
		.join("&");

	try {
		const res = await (
			await fetch(`${url}?${queryString}`, {
				method: "GET",
			})
		).json();

		success(res);
	} catch (error) {
		err(error);
	} finally {
		done();
	}
};
