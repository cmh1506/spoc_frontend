export class Materialverwendung{
  id!: number;
  materialId!: number;
  verarbeitungId!: number;
  recyclingmethodeId!: number;
  co2menge: number = 1000.00;
  material: string = "Aluminium";
  verarbeitung: string = "Walzen";
  recyclingmethode: string = "Einschmelzen";

}
