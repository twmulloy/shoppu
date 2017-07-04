import { Injectable, Inject } from '@angular/core'

@Injectable()
export class AlchemyService {
  constructor(@Inject(Window) private window) {}

  getAlchemy(): object {
    return this.window.Alchemy
  }
}
