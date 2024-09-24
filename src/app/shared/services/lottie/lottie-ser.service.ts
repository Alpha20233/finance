import { Injectable } from '@angular/core';
import { AnimationItem } from 'lottie-web';

@Injectable({
  providedIn: 'root'
})

export class LottieSerService {

  private animationItem: AnimationItem | null = null;

  constructor() { }
  private animationItems = new Map<string, AnimationItem>();

  animationCreated(id: string, animationItem: AnimationItem): void {
    this.animationItems.set(id, animationItem);
  }

  playAnimation(id: string): void {
    const animation = this.animationItems.get(id);
    if (animation) {
      animation.play();
    }
  }

  stopAnimation(id: string): void {
    const animation = this.animationItems.get(id);
    if (animation) {
      animation.stop();
    }
  }
}
