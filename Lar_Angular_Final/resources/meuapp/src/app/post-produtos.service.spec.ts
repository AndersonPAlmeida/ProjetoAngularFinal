import { TestBed } from '@angular/core/testing';

import { PostProdutosService } from './post-produtos.service';

describe('PostProdutosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostProdutosService = TestBed.get(PostProdutosService);
    expect(service).toBeTruthy();
  });
});
