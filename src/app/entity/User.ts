

export class User{
  private _id:number;
  private _nom;
  private _prenom;
  private _nombre_enfants;

  get nom() {
    return this._nom;
  }

  get id(){
    return this.id;
  }
  set id(value){
    this.id=value

  }

  set nom(value) {
    this._nom = value;
  }

  get prenom() {
    return this._prenom;
  }

  set prenom(value) {
    this._prenom = value;
  }

  get nombre_enfants() {
    return this._nombre_enfants;
  }

  set nombre_enfants(value) {
    this._nombre_enfants = value;
  }
}
