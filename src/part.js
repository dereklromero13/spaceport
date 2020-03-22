class Part {
  constructor(object) {
    this.name = object.name;
    this.type =
    object.type === 'shell' ||
    object.type === 'hyperdrive' ||
    object.type === 'computer' ||
    object.type === 'life support' ||
    object.type === 'landing gear' ?
    object.type : undefined;
    this.value = object.value;
    this.broken = false;
 }

    isValid() {
      if (this.name === undefined || this.type === undefined || this.value === undefined){
        return false;
      } else {
        return true;
      }
      }
    }


module.exports = Part;
//does props.type equal flatware or drill? if so, set this.type to undefined
  //or else set to props.type//
  //does props.type equal drill? if so, set this.type to undefined//
  //or else set to props.type//
