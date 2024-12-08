import { UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  it('should be defined', () => {
    expect(new AuthGuard()).toBeDefined();
  });

  it('should return 401 if the bearer is not defined', () => {
    const guard = new AuthGuard();
    const context = {
      switchToHttp: () => ({ getRequest: () => ({ headers: {} }) }),
    } as any;
    expect(() => guard.canActivate(context)).toThrow(
      new UnauthorizedException(),
    );
  });

  it('should return false if the bearer wrong', () => {
    const guard = new AuthGuard();
    const context = {
      switchToHttp: () => ({
        getRequest: () => ({ headers: { authorization: 'bearer wrong' } }),
      }),
    } as any;
    expect(guard.canActivate(context)).toBe(false);
  });

  it('should return true if the bearer right', () => {
    const guard = new AuthGuard();
    const context = {
      switchToHttp: () => ({
        getRequest: () => ({
          headers: { authorization: 'bearer dGhlc2VjcmV0dG9rZW4=' },
        }),
      }),
    } as any;
    expect(guard.canActivate(context)).toBe(true);
  });
});
