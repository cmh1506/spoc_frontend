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

  materialCO2Eq!: number;
  materialEnergie!: number;
  energieAufwandVerarbeitung!: number;
  verbrennungCo2Eq!: number;
  verbrennungENutzEnergie!: number;
  gutschriftVerbrennungCo2Eq!: number;
  transportCo2Eq!: number;
  transportEnergie!: number;
  indirectco2Biofuel!: number;
  co2AufwandVerarbeitung!: number;
}
