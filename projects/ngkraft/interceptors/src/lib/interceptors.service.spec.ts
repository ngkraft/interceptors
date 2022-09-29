import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { InterceptorsService } from './interceptors.service';

describe('InterceptorsService', () => {
  let spectator: SpectatorService<InterceptorsService>;
  const createService = createServiceFactory(InterceptorsService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});