
export class Recipe {
  public _id: string;
  public name: string;
  public Duration: number;
  public Ingredients: string;
  public Procedure: string;
  public fatInGm: number;
  public carbInGm: number;
  public proteinInGm: number;
  public Category: string;
  public Quantity: number;

  constructor() {
    this.Quantity = 0;
    this.fatInGm = 0;
    this.carbInGm = 0;
    this.proteinInGm = 0;
  }

  isValid() {
    return this.name && this.name.length &&
      this.Category && this.Category.length;
  }
}
