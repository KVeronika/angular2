import { Observable } from "rxjs";

export class CalcService {
  sum(a: number, b: number): number {
    return a + b;
  }

  symAsync(a: number, b: number): Promise<number> {
    return new Promise(resolve => {
      setTimeout(_ => {
        resolve(a + b);
      }, 3000);
    });
  }
}
