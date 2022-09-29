import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { InterceptorsComponent } from './interceptors.component';

describe('InterceptorsComponent', () => {
  let spectator: Spectator<InterceptorsComponent>;
  const createComponent = createComponentFactory(InterceptorsComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
