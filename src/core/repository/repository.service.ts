import { Injectable } from '@nestjs/common';
import { UserRepo } from './repo/user.repo';

@Injectable()
export class RepoService {
  constructor(readonly user: UserRepo) {}
}
