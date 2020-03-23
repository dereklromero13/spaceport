class Ship {
 constructor(object) {
   this.name = object.name;
   this.type =
   object.type === 'wooden' ||
   object.type === 'tin' ||
   object.type === 'plastic' ? undefined : object.type;


   
 }
}
//


module.exports = Ship;
