export class IntPos {
	/**
	 * 创建一个 IntPos 对象
	 * @param position {Position} 坐标对象
	 */
	constructor (position) {
		this.position = position;
	}

	/**
	 * @returns {number} x
	 */
	get x() {
		return parseInt(this.position.x);
	}

	/**
	 * @returns {number} y
	 */
	get y() {
		return parseInt(this.position.y);
	}

	/**
	 * @returns {number} z
	 */
	get z() {
		return parseInt(this.position.z);
	}

	/**
	 * @returns {number} 世界名
	 */
	get dim() {
		return this.position.getLevel().getName();
	}

	/**
	 * @returns {number} 世界的维度ID
	 */
	get dimid() {
		return this.position.getLevel().getDimension();
	}
	toString() {
		return JSON.stringify({x: this.x, y: this.y, z: this.z, dim: this.dim, dimid: this.dimid});
	}
}
