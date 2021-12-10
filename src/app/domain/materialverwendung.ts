export class Materialverwendung{
  id!: number;

  materialId!: number;
  verarbeitungId!: number;
  recyclingverfahrenId!: number;
  energierueckgewinnungId!: number;
  transportmittelId!: number;


  energierueckgewinnung!: string;
  material!: string;
  verarbeitung!: string;
  recyclingverfahren!: string;
  transportmittel!: string;

  menge!: number;
  flaeche!: number;
  dicke!: number;
  recyclingQuote!: number;
  transportstrecke!: number;

  fossileMasse!: number;
  materialCO2Eq!: number;
  materialEnergie!: number;
  energieAufwandVerarbeitung!: number;
  verbrennungENutzCo2Eq!: number;
  verbrennungENutzEnergie!: number;
  gutschriftVerbrennungCo2Eq!: number;
  gutschriftBioCo2Eq!: number;
  transportCo2Eq!: number;
  transportEnergie!: number;

}
