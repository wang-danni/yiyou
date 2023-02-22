
window.onload = function () {
	let sz = [...document.querySelectorAll('#banner>li')];
	let szdiv = [...document.querySelectorAll('#banner>div')];
	let left = document.querySelector('.left')
	let right = document.querySelector('.right')
	for (let i = 0; i < szdiv.length; i++) {
		szdiv[i].name = i + 1;
		szdiv[i].style.left = 190 * (i + 1) + "px";
		if ((i + 1) != 5) {
			sz[i].id = 5 - (i + 1);
		} else {
			sz[i].id = 5;
		}
	}

	//切换效果公共代码
	function effect() {
		for (let i = 0; i < sz.length; i++) {
			sz[i].style.zIndex = i;
			sz[i].style.transform = "scale(1)"
		}
		sz[len - 2].style.left = "0px";
		sz[len - 1].style.zIndex = 100
		sz[len - 1].style.left = "300px";
		sz[len - 1].style.transform = "scale(1.3)"
		sz[len - 1].style.opacity = 1;
		sz[len].style.left = "600px";
		sync_szdiv()
	}

	//切换上一张方法
	function get_pre() {
		let give_up = sz[0];
		sz.shift()
		sz.push(give_up)
		effect();
	}

	//切换上下张方法
	function get_next() {
		let give_up = sz[len];
		sz.pop()
		sz.unshift(give_up)
		effect();
	}

	//开始3秒为一周期切换下一张（自动轮播）
	let timer = setInterval(get_next, 3000)

	//为左切换图片赋值点击操作
	left.onclick = function () {
		clearInterval(timer);
		get_pre();
		timer = setInterval(get_next, 3000)
	}

	//为右切换图片赋值点击操作
	right.onclick = function () {
		clearInterval(timer);
		get_next();
		timer = setInterval(get_next, 3000)
	}


	let len = sz.length - 1;
	effect();
	//小按钮悬停切换方法开始
	szdiv[0].style.background = "black"
	for (let i = 0; i < szdiv.length; i++) {
		szdiv[i].onmouseenter = function () {
			clearInterval(timer);
			let len1 = sz[len - 1].id;
			let len2 = szdiv[i].name;
			let dis = Math.max(len1, len2) - Math.min(len1, len2)
			if (len1 > len2) {
				while (dis--)
					get_pre()
			} else {
				while (dis--)
					get_next()
			}
			timer = setInterval(get_next, 3000)
		}
	}

	//小按钮换颜色代码
	function sync_szdiv() {
		for (let i = 0; i < szdiv.length; i++) {
			if (szdiv[i].name == sz[len - 1].id)
				szdiv[i].style.background = "black"
			else
				szdiv[i].style.background = "white"
		}
	}
}
function handle() {

}