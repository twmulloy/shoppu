import { Injectable, Inject } from '@angular/core'

import { Env } from './env'

@Injectable()
export class EnvService {
  constructor(@Inject(Window) private window) {}

  public getEnv(): Env {
    return this.window.env
  }
}
