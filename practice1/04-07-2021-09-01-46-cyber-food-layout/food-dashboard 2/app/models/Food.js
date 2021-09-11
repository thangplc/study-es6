export default class Food {
  constructor(_id, _name, _type, _price, _promotion, _status, _pic, _desc) {
    this.id = _id;
    this.name = _name;
    this.type = _type;
    this.price = _price;
    this.promotion = _promotion;
    this.status = _status;
    this.pic = _pic;
    this.desc = _desc;
  }
  calcPricePromotion() {
    this.pricePromotion = (this.price * (100 - this.promotion)) / 100;
  }
}
