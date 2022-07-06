import { TestBed } from '@angular/core/testing';

import { GKContentsService } from './gkcontents.service';

describe('GKContentsService', () => {
  let service: GKContentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GKContentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
