class Vector2 {
	constructor(x,y) {
		if (x==undefined)
			x=0;
		if (y==undefined)
			y=0;
		this.x = x;
		this.y = y;
	}
	sub(v) {
		return new Vector2(this.x - v.x,this.y-v.y);
	}
	add(v) {
		return new Vector2(this.x + v.x,this.y+v.y);
	}
	mult(f) {
		return new Vector2(this.x * f,this.y * f);
	}
	skalar(v) {
		return this.x * v.x + this.y * v.y;
	}
	norm() {
		var len = this.length();
		return new Vector2((this.x/len),(this.y/len));
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	
	toString() {
			return "Vector2("+this.x+"/"+this.y+")";
	}
}
