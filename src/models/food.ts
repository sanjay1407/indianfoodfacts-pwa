
export class Food {
  public _id: string;
  public name: string;
  public quantity: number;
  public unit: string;
  public fatInGm: number;
  public carbInGm: number;
  public fiberInGm: number;
  public netCarbsInGm: number;
  public proteinInGm: number;
  public alcoholInGm: number;
  public type: string;
  public category: string;
  public calories: number;
  public author: string;
  public restaurant: string;

  constructor() {
    this.quantity = 0;
    this.fatInGm = 0;
    this.carbInGm = 0;
    this.fiberInGm = 0;
    this.netCarbsInGm = 0;
    this.proteinInGm = 0;
    this.alcoholInGm = 0;
    this.calories = 0;
  }

  isValid() {
    return this.name && this.name.length &&
      this.unit && this.unit.length &&
      this.type && this.type.length &&
      this.category && this.category.length &&
      this.author && this.author.length;
  }
}
