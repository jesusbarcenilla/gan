import { Controller, Get, Header, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('all-cities')
export class AllCitiesController {
  @Get()
  @Header('Content-Type', 'application/json')
  @Header('Content-Disposition', 'attachment; filename="cities.json"')
  getFileUsingStaticValues(): StreamableFile {
    const file = createReadStream(
      join(process.cwd(), './src/data/addresses.json'),
    );
    return new StreamableFile(file);
  }
}
