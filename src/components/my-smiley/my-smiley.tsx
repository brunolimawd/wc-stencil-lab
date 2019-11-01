import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-smiley',
  styleUrl: 'my-smiley.css',
  shadow: true
})
export class mySmiley {
  render() {
    return <button class="button">;)</button>;
  }
}
