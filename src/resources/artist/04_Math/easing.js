//#CodeStart
// 참고: https://easings.net/ko

export function easeInQuad(value) {
	return value * value;
}

export function easeOutQuad(value) {
	return -value * (value - 2);
}

export function easeInOutQuad(value) {
	let t = value * 2;

	if (t < 1) {
		return 0.5 * t * t;
	}

	t -= 1;
	return -0.5 * (t * (t - 2) - 1);
}

export function easeInCubic(value) {
	return value * value * value;
}

export function easeOutCubic(value) {
	let t = value - 1;
	return t * t * t + 1;
}

export function easeInOutCubic(value) {
	let t = value * 2;

	if (t < 1) {
		return 0.5 * t * t * t;
	}

	t -= 2;
	return 0.5 * (t * t * t + 2);
}

export function easeInQuartic(value) {
	return value * value * value * value;
}

export function easeOutQuartic(value) {
	let t = value - 1;
	return -(t * t * t * t - 1);
}

export function easeInOutQuartic(value) {
	let t = value * 2;

	if (t < 1) {
		return 0.5 * t * t * t * t;
	}

	t -= 2;
	return -0.5 * (t * t * t * t - 2);
}

export function easeInQuintic(value) {
	return value * value * value * value * value;
}

export function easeOutQuintic(value) {
	let t = value - 1;
	return t * t * t * t * t + 1;
}

export function easeInOutQuintic(value) {
	let t = value * 2;

	if (t < 1) {
		return 0.5 * t * t * t * t * t;
	}

	t -= 2;
	return 0.5 * (t * t * t * t * t + 2);
}

export function easeInSine(value) {
	return -Math.cos(value * Math.PI / 2) + 1;
}

export function easeOutSine(value) {
	return Math.sin(value * Math.PI / 2);
}

export function easeInOutSine(value) {
	return -0.5 * (Math.cos(value * Math.PI) - 1);
}

export function easeInExpo(value) {
	if (value === 0) {
		return 0;
	}
	return Math.pow(2, 10 * (value - 1));
}

export function easeOutExpo(value) {
	if (value === 1) {
		return 1;
	}
	return -Math.pow(2, -10 * value) + 1;
}

export function easeInOutExpo(value) {
	if (value === 0) {
		return 0;
	} else if (value === 1) {
		return 1;
	}

	let t = value * 2;

	if (t < 1) {
		return 0.5 * Math.pow(2, 10 * (t - 1));
	}

	return 0.5 * (-Math.pow(2, -10 * (t - 1)) + 2);
}

export function easeInCirc(value) {
	if (value <= 0) {
		return 0;
	} else if (value >= 1) {
		return 1;
	}
	return -(Math.sqrt(1 - value * value) - 1);
}

export function easeOutCirc(value) {
	if (value <= 0) {
		return 0;
	} else if (value >= 1) {
		return 1;
	}

	let t = value - 1;
	return Math.sqrt(1 - t * t);
}

export function easeInOutCirc(value) {
	if (value <= 0) {
		return 0;
	} else if (value >= 1) {
		return 1;
	}

	let t = value * 2;

	if (t < 1) {
		return -0.5 * (Math.sqrt(1 - t * t) - 1);
	}

	t -= 2;
	return 0.5 * (Math.sqrt(1 - t * t) + 1);
}

export function easeInElastic(value) {
	if (value === 0) {
		return 0;
	} else if (value === 1) {
		return 1;
	}
	let p = 0.3;
	let s = p / 4;
	let t = value - 1;
	return -(Math.pow(2, 10 * t)) * Math.sin((t - s) * (2 * Math.PI) / p);
}

export function easeOutElastic(value) {
	if (value === 0) {
		return 0;
	} else if (value === 1) {
		return 1;
	}

	let p = 0.3;
	let s = p / 4; s
	return Math.pow(2, -10 * value) * Math.sin((value - s) * (2 * Math.PI) / p) + 1;
}

export function easeInOutElastic(value) {
	if (value === 0) {
		return 0;
	} else if (value === 1) {
		return 1;
	}

	let p = 0.3;
	let s = p / 4;
	let t = value * 2 - 1;

	if (t < 0) {
		return -0.5 * (Math.pow(2, 10 * t) * Math.sin((t - s) * (2 * Math.PI) / p));
	}

	return Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1;
}

export function easeInBack(value) {
	let s = 1.70158;
	return value * value * ((s + 1) * value - s);
}

export function easeOutBack(value) {
	let s = 1.70158;
	let t = value - 1;
	return t * t * ((s + 1) * t + s) + 1;
}

export function easeInOutBack(value) {
	let s = 1.70158;
	let t = value * 2;
	s *= 1.525;
	if (t < 1) {
		return 0.5 * (t * t * ((s + 1) * t - s));
	}

	t -= 2;
	return 0.5 * (t * t * ((s + 1) * t + s) + 2);
}

export function easeInBounce(value) {
	return 1 - easeOutBounce(1 - value);
}

export function easeOutBounce(value) {
	let t = value;
	if (t < 1 / 2.75) {
		return 7.5625 * t * t;
	} else if (t < 2 / 2.75) {
		t -= 1.5 / 2.75;
		return 7.5625 * t * t + 0.75;
	} else if (t < 2.5 / 2.75) {
		t -= 2.25 / 2.75;
		return 7.5625 * t * t + 0.9375;
	} else {
		t -= 2.625 / 2.75;
		return 7.5625 * t * t + 0.984375;
	}
}

export function easeInOutBounce(value) {
	if (value < 0.5) {
		return 0.5 - easeOutBounce(1 - value * 2) * 0.5;
	} else {
		return 0.5 + easeOutBounce(value * 2 - 1) * 0.5;
	}
}